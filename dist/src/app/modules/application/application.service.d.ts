/**
 * Application module — business logic for job applications.
 *
 * Create flow: only a logged-in user with an Applicant profile can apply.
 * List flow: who sees what depends on role (admin sees all, recruiter sees
 * applications to their jobs, applicant sees only their own).
 */
import { UserRole } from "../../../../generated/prisma/enums";
import type { CreateApplicationPayload } from "./application.validation";
/** Who is calling the API — we use this to filter lists and single reads by role. */
type ApplicationViewer = {
    userId: string;
    role: UserRole;
};
export declare const applicationServices: {
    createApplication: (userId: string, payload: CreateApplicationPayload) => Promise<{
        job: {
            id: string;
            jobType: import("../../../../generated/prisma/enums").JobTypes;
            title: string | null;
            salary: string | null;
            recruiter: {
                id: string;
                recruiterName: string | null;
                companyName: string | null;
                companyLogo: string | null;
            };
        };
        applicant: {
            user: {
                name: string | null;
                id: string;
                email: string;
                image: string | null;
            };
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        jobId: string;
        applicantId: string;
        cover_note: string | null;
        expectedSalary: string | null;
        cv: string | null;
    }>;
    getAllApplications: (filters: any, options: any, viewer: ApplicationViewer) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: ({
            job: {
                id: string;
                jobType: import("../../../../generated/prisma/enums").JobTypes;
                title: string | null;
                salary: string | null;
                recruiter: {
                    id: string;
                    recruiterName: string | null;
                    companyName: string | null;
                    companyLogo: string | null;
                };
            };
            applicant: {
                user: {
                    name: string | null;
                    id: string;
                    email: string;
                    image: string | null;
                };
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            jobId: string;
            applicantId: string;
            cover_note: string | null;
            expectedSalary: string | null;
            cv: string | null;
        })[];
    }>;
    getSingleApplication: (id: string, viewer: ApplicationViewer) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        job: {
            id: string;
            status: import("../../../../generated/prisma/enums").JobStatus;
            recruiterId: string;
            jobType: import("../../../../generated/prisma/enums").JobTypes;
            employmentType: import("../../../../generated/prisma/enums").EmploymentType;
            location: string | null;
            district: string | null;
            title: string | null;
            salary: string | null;
            recruiter: {
                id: string;
                recruiterName: string | null;
                companyName: string | null;
                companyLogo: string | null;
            };
            industry: {
                name: string;
                id: string;
            };
            subIndustry: {
                name: string;
                id: string;
            };
        };
        jobId: string;
        applicantId: string;
        cover_note: string | null;
        expectedSalary: string | null;
        cv: string | null;
        applicant: {
            user: {
                name: string | null;
                id: string;
                email: string;
                image: string | null;
            };
            name: string | null;
            id: string;
            cv: string | null;
            phone: string | null;
        };
    }>;
};
export {};
//# sourceMappingURL=application.service.d.ts.map