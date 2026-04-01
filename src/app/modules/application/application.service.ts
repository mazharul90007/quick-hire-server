/**
 * Application module — business logic for job applications.
 *
 * Create flow: only a logged-in user with an Applicant profile can apply.
 * List flow: who sees what depends on role (admin sees all, recruiter sees
 * applications to their jobs, applicant sees only their own).
 */

import { Prisma } from "../../../../generated/prisma/client";
import { UserRole } from "../../../../generated/prisma/enums";
import { prisma } from "../../../lib/prisma";
import calculatePagination from "../../helpers/paginationHelpers";
import { applicationSearchableFields } from "./application.constant";
import ApiError from "../../errors/ApiErrors";
import status from "http-status";
import type { CreateApplicationPayload } from "./application.validation";

/** Who is calling the API — we use this to filter lists and single reads by role. */
type ApplicationViewer = {
  userId: string;
  role: UserRole;
};

/**
 * Job + applicant nesting for create response (same shape as list nested fields).
 * Full `Application` scalars come from the parent `include` (no root `select`).
 */
const applicationJobApplicantInclude = {
  job: {
    select: {
      id: true,
      title: true,
      salary: true,
      jobType: true,
      recruiter: {
        select: {
          id: true,
          recruiterName: true,
          companyName: true,
          companyLogo: true,
        },
      },
    },
  },
  applicant: {
    select: {
      id: true,
      user: {
        select: {
          id: true,
          email: true,
          name: true,
          image: true,
        },
      },
    },
  },
} as const;

/**
 * GET single only: explicit `select` so we don’t load whole Job/Applicant graphs.
 * `recruiterId` is required for the recruiter access check.
 */
const jobSelectForApplicationDetail = {
  id: true,
  recruiterId: true,
  title: true,
  salary: true,
  jobType: true,
  employmentType: true,
  location: true,
  district: true,
  status: true,
  industry: { select: { id: true, name: true } },
  subIndustry: { select: { id: true, name: true } },
  recruiter: {
    select: {
      id: true,
      recruiterName: true,
      companyName: true,
      companyLogo: true,
    },
  },
} as const;

/** GET single only: applicant + user fields for detail (CV / contact for recruiters). */
const applicantSelectForApplicationDetail = {
  id: true,
  name: true,
  phone: true,
  profilePhoto: true,
  cv: true,
  user: {
    select: {
      id: true,
      email: true,
      name: true,
      image: true,
    },
  },
} as const;

/** GET single only: which Application columns to return with nested job/applicant. */
const applicationScalarSelectForDetail = {
  id: true,
  applicantId: true,
  jobId: true,
  cover_note: true,
  expectedSalary: true,
  createdAt: true,
  updatedAt: true,
} as const;

// ---------------------------------------------------------------------------
// CREATE APPLICATION
// ---------------------------------------------------------------------------
// Called after the route proves the user is an applicant. We still load the
// Applicant row here because the session only gives us userId — applications
// are stored against applicantId, not userId.

const createApplication = async (
  userId: string,
  payload: CreateApplicationPayload,
) => {
  // Step 1 — Make sure this login actually has an applicant profile in the DB.
  const applicant = await prisma.applicant.findUnique({
    where: { userId },
  });

  if (!applicant) {
    throw new ApiError(status.NOT_FOUND, "Applicant profile not found");
  }

  // Step 2 — Load the job they want to apply to (must exist).
  const job = await prisma.job.findUnique({
    where: { id: payload.jobId },
  });

  if (!job) {
    throw new ApiError(status.NOT_FOUND, "Job not found");
  }

  // Step 3 — Only live jobs accept new applications (paused/deleted jobs do not).
  if (job.status !== "ACTIVE") {
    throw new ApiError(
      status.BAD_REQUEST,
      "This job is not accepting applications",
    );
  }

  // Step 4 — One application per applicant per job (no duplicate rows).
  const existing = await prisma.application.findFirst({
    where: {
      applicantId: applicant.id,
      jobId: payload.jobId,
    },
  });

  if (existing) {
    throw new ApiError(
      status.CONFLICT,
      "You have already applied for this job",
    );
  }

  // Step 5 — Save the application and return a useful payload for the client
  // (job summary + who applied, without exposing more than needed).
  const result = await prisma.application.create({
    data: {
      applicantId: applicant.id,
      jobId: payload.jobId,
      cover_note: payload.cover_note ?? null,
      expectedSalary: payload.expectedSalary ?? null,
    },
    include: applicationJobApplicantInclude,
  });

  return result;
};

// ---------------------------------------------------------------------------
// GET ALL APPLICATIONS (paginated list)
// ---------------------------------------------------------------------------
// Everyone allowed on the route gets a list, but the rows are restricted:
//   • Admin / super admin → every application in the system
//   • Recruiter → only applications for jobs they posted
//   • Applicant → only rows where they are the applicant
// On top of that, query params can narrow further (search text, jobId, etc.).

const getAllApplications = async (
  filters: any,
  options: any,
  viewer: ApplicationViewer,
) => {
  // Pull out free-text search from the rest of the filters (handled differently).
  const { searchTerm, ...filterData } = filters;
  let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);

  // Accept "ASC" or "asc" from the query string — Prisma only wants lowercase.
  sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";

  // This array holds the "who am I allowed to see?" rule. Admins leave it empty.
  const roleScope: Prisma.ApplicationWhereInput[] = [];

  if (viewer.role === UserRole.ADMIN || viewer.role === UserRole.SUPER_ADMIN) {
    // Staff: no extra filter — they see the full table (plus any query filters below).
  } else if (viewer.role === UserRole.RECRUITER) {
    // Recruiter: resolve their company profile, then only applications whose job belongs to them.
    const recruiter = await prisma.recruiter.findFirst({
      where: { userId: viewer.userId, isDeleted: false },
    });
    if (!recruiter) {
      throw new ApiError(status.NOT_FOUND, "Recruiter profile not found");
    }
    roleScope.push({ job: { recruiterId: recruiter.id } });
  } else if (viewer.role === UserRole.APPLICANT) {
    // Applicant: only rows tied to their applicant id.
    const applicant = await prisma.applicant.findUnique({
      where: { userId: viewer.userId },
    });
    if (!applicant) {
      throw new ApiError(status.NOT_FOUND, "Applicant profile not found");
    }
    roleScope.push({ applicantId: applicant.id });
  } else {
    // Any other role should not hit this endpoint (route should block), but we guard anyway.
    throw new ApiError(status.FORBIDDEN, "You cannot list applications");
  }

  // Optional query refinements: search box + exact filters from application.constant.
  const andConditions: Prisma.ApplicationWhereInput[] = [];

  if (searchTerm) {
    // Match if the text appears in cover note or expected salary (see constant file).
    andConditions.push({
      OR: applicationSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    // e.g. ?jobId=... or ?applicantId=... — combined with AND alongside role scope.
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as Record<string, unknown>)[key],
        },
      })),
    });
  }

  // Stack role rule + search + filters: all must pass.
  const parts: Prisma.ApplicationWhereInput[] = [
    ...roleScope,
    ...andConditions,
  ];
  const whereConditions: Prisma.ApplicationWhereInput =
    parts.length > 0 ? { AND: parts } : {};

  // Page of rows for the UI + related job and applicant info for each row.
  const result = await prisma.application.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy: {
      [sortBy]: sortOrder,
    },
    include: {
      // `select` for job: scalars (id, title, …) are not valid under `include` — only relations are.
      job: {
        select: {
          id: true,
          title: true,
          salary: true,
          jobType: true,
          recruiter: {
            select: {
              id: true,
              recruiterName: true,
              companyName: true,
              companyLogo: true,
            },
          },
        },
      },
      applicant: {
        select: {
          id: true,
          user: {
            select: {
              id: true,
              email: true,
              name: true,
              image: true,
            },
          },
        },
      },
    },
  });

  // Total matching rows (for "page X of Y" — same filters as findMany).
  const total = await prisma.application.count({ where: whereConditions });

  return {
    meta: { page, limit, total },
    data: result,
  };
};

// ---------------------------------------------------------------------------
// GET SINGLE APPLICATION  (GET /applications/:id)
// ---------------------------------------------------------------------------
// Who may see this row:
//   • Admin / super admin     → any application
//   • Applicant ("client")    → only if they submitted it (same applicantId)
//   • Recruiter               → only if the job was posted by them (job.recruiterId)
// If the id does not exist, findUniqueOrThrow gives 404 before these checks.

const getSingleApplication = async (id: string, viewer: ApplicationViewer) => {
  const result = await prisma.application.findUniqueOrThrow({
    where: { id },
    select: {
      ...applicationScalarSelectForDetail,
      job: { select: jobSelectForApplicationDetail },
      applicant: { select: applicantSelectForApplicationDetail },
    },
  });

  // Staff: full access to any application id.
  if (viewer.role === UserRole.ADMIN || viewer.role === UserRole.SUPER_ADMIN) {
    return result;
  }

  // Recruiter: allowed only when this application is for one of their jobs.
  if (viewer.role === UserRole.RECRUITER) {
    const recruiter = await prisma.recruiter.findFirst({
      where: { userId: viewer.userId, isDeleted: false },
    });
    if (!recruiter) {
      throw new ApiError(status.NOT_FOUND, "Recruiter profile not found");
    }
    if (result.job.recruiterId !== recruiter.id) {
      throw new ApiError(
        status.FORBIDDEN,
        "You can only view applications for jobs you have posted",
      );
    }
    return result;
  }

  // Applicant: allowed only when they are the one who applied (their applicant row).
  if (viewer.role === UserRole.APPLICANT) {
    const applicant = await prisma.applicant.findUnique({
      where: { userId: viewer.userId },
    });
    if (!applicant) {
      throw new ApiError(status.NOT_FOUND, "Applicant profile not found");
    }
    if (result.applicantId !== applicant.id) {
      throw new ApiError(
        status.FORBIDDEN,
        "You can only view applications you created",
      );
    }
    return result;
  }

  throw new ApiError(status.FORBIDDEN, "You cannot view this application");
};

export const applicationServices = {
  createApplication,
  getAllApplications,
  getSingleApplication,
};
