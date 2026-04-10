import { Subscription, UserRole, UserStatus, UserType, } from "../../../../generated/prisma/enums";
import { prisma } from "../../../lib/prisma";
import ApiError from "../../errors/ApiErrors";
import calculatePagination from "../../helpers/paginationHelpers";
import { adminAllowedSortFields, applicantAllowedSortFields, recruiterAllowedSortFields, } from "./admin.constant";
const userPublicSelect = {
    id: true,
    email: true,
    name: true,
    image: true,
    role: true,
    status: true,
    emailVerified: true,
    address: true,
    isDeleted: true,
    deletedAt: true,
    createdAt: true,
    updatedAt: true,
};
function parseBool(v) {
    return v === true || v === "true";
}
function pickSort(sortBy, allowed, fallback) {
    return allowed.includes(sortBy) ? sortBy : fallback;
}
// ---------------------------------------------------------------------------
// APPLICANTS
// ---------------------------------------------------------------------------
const getAllApplicants = async (filters, options) => {
    const { searchTerm, userType, includeDeleted, ...rest } = filters;
    void rest;
    const includeDel = parseBool(includeDeleted);
    let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
    sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";
    const sortField = pickSort(String(sortBy), applicantAllowedSortFields, "createdAt");
    const userWhere = {};
    if (!includeDel) {
        userWhere.isDeleted = false;
    }
    const where = {
        user: userWhere,
    };
    if (searchTerm && typeof searchTerm === "string" && searchTerm.trim()) {
        const q = searchTerm.trim();
        where.OR = [
            { name: { contains: q, mode: "insensitive" } },
            { user: { email: { contains: q, mode: "insensitive" } } },
            { user: { name: { contains: q, mode: "insensitive" } } },
        ];
    }
    if (userType &&
        typeof userType === "string" &&
        Object.values(UserType).includes(userType)) {
        where.userType = userType;
    }
    const [data, total] = await Promise.all([
        prisma.applicant.findMany({
            where,
            skip,
            take: limit,
            orderBy: { [sortField]: sortOrder },
            include: { user: { select: userPublicSelect } },
        }),
        prisma.applicant.count({ where }),
    ]);
    return {
        meta: { page, limit, total },
        data,
    };
};
const getSingleApplicant = async (id, includeDeleted = false) => {
    const row = await prisma.applicant.findUnique({
        where: { id },
        include: { user: { select: userPublicSelect } },
    });
    if (!row) {
        throw new ApiError(404, "Applicant not found");
    }
    if (!includeDeleted && row.user?.isDeleted) {
        throw new ApiError(404, "Applicant not found");
    }
    return row;
};
const updateApplicant = async (id, payload) => {
    await getSingleApplicant(id, false);
    const { image, ...applicantData } = payload;
    const row = await prisma.applicant.findUnique({
        where: { id },
        select: { userId: true },
    });
    if (!row) {
        throw new ApiError(404, "Applicant not found");
    }
    const hasApplicantFields = Object.keys(applicantData).length > 0;
    await prisma.$transaction(async (tx) => {
        if (image !== undefined) {
            await tx.user.update({
                where: { id: row.userId },
                data: { image },
            });
        }
        if (hasApplicantFields) {
            await tx.applicant.update({
                where: { id },
                data: applicantData,
            });
        }
    });
    return prisma.applicant.findUniqueOrThrow({
        where: { id },
        include: { user: { select: userPublicSelect } },
    });
};
// ---------------------------------------------------------------------------
// RECRUITERS
// ---------------------------------------------------------------------------
const getAllRecruiters = async (filters, options) => {
    const { searchTerm, isVerified, includeDeleted, subscriptionPlan, ...rest } = filters;
    void rest;
    const includeDel = parseBool(includeDeleted);
    let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
    sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";
    const sortField = pickSort(String(sortBy), recruiterAllowedSortFields, "createdAt");
    const userWhere = {};
    if (!includeDel) {
        userWhere.isDeleted = false;
    }
    const where = {
        user: userWhere,
    };
    if (!includeDel) {
        where.isDeleted = false;
    }
    if (searchTerm && typeof searchTerm === "string" && searchTerm.trim()) {
        const q = searchTerm.trim();
        where.OR = [
            { companyName: { contains: q, mode: "insensitive" } },
            { recruiterName: { contains: q, mode: "insensitive" } },
            { user: { email: { contains: q, mode: "insensitive" } } },
            { user: { name: { contains: q, mode: "insensitive" } } },
        ];
    }
    if (isVerified !== undefined && isVerified !== "") {
        where.isVerified = parseBool(isVerified);
    }
    if (subscriptionPlan &&
        typeof subscriptionPlan === "string" &&
        Object.values(Subscription).includes(subscriptionPlan)) {
        where.subscriptionPlan = subscriptionPlan;
    }
    const [data, total] = await Promise.all([
        prisma.recruiter.findMany({
            where,
            skip,
            take: limit,
            orderBy: { [sortField]: sortOrder },
            include: {
                user: { select: userPublicSelect },
                industry: { select: { id: true, name: true } },
                subIndustry: { select: { id: true, name: true } },
            },
        }),
        prisma.recruiter.count({ where }),
    ]);
    return {
        meta: { page, limit, total },
        data,
    };
};
const getSingleRecruiter = async (id, includeDeleted = false) => {
    const row = await prisma.recruiter.findUnique({
        where: { id },
        include: {
            user: { select: userPublicSelect },
            industry: { select: { id: true, name: true } },
            subIndustry: { select: { id: true, name: true } },
        },
    });
    if (!row) {
        throw new ApiError(404, "Recruiter not found");
    }
    if (!includeDeleted && (row.user?.isDeleted || row.isDeleted)) {
        throw new ApiError(404, "Recruiter not found");
    }
    return row;
};
const updateRecruiter = async (id, payload) => {
    await getSingleRecruiter(id, false);
    const { image, ...recruiterData } = payload;
    if (recruiterData.industryId || recruiterData.subIndustryId) {
        const industryId = recruiterData.industryId;
        const subIndustryId = recruiterData.subIndustryId;
        if (subIndustryId && industryId) {
            const sub = await prisma.subIndustry.findUnique({
                where: { id: subIndustryId },
                select: { industryId: true },
            });
            if (!sub) {
                throw new ApiError(404, "Sub-industry not found");
            }
            if (sub.industryId !== industryId) {
                throw new ApiError(400, "Sub-industry does not belong to the given industry");
            }
        }
    }
    const recRow = await prisma.recruiter.findUnique({
        where: { id },
        select: { userId: true },
    });
    if (!recRow) {
        throw new ApiError(404, "Recruiter not found");
    }
    const hasRecruiterFields = Object.keys(recruiterData).length > 0;
    await prisma.$transaction(async (tx) => {
        if (image !== undefined) {
            await tx.user.update({
                where: { id: recRow.userId },
                data: { image },
            });
        }
        if (hasRecruiterFields) {
            await tx.recruiter.update({
                where: { id },
                data: recruiterData,
            });
        }
    });
    return prisma.recruiter.findUniqueOrThrow({
        where: { id },
        include: {
            user: { select: userPublicSelect },
            industry: { select: { id: true, name: true } },
            subIndustry: { select: { id: true, name: true } },
        },
    });
};
// ---------------------------------------------------------------------------
// ADMINS (Admin profile + user with staff role)
// ---------------------------------------------------------------------------
const getAllAdmins = async (filters, options) => {
    const { searchTerm, includeDeleted, ...rest } = filters;
    void rest;
    const includeDel = parseBool(includeDeleted);
    let { page, limit, skip, sortBy, sortOrder } = calculatePagination(options);
    sortOrder = String(sortOrder).toLowerCase() === "asc" ? "asc" : "desc";
    const sortField = pickSort(String(sortBy), adminAllowedSortFields, "createdAt");
    const userWhere = {
        role: { in: [UserRole.ADMIN, UserRole.SUPER_ADMIN] },
    };
    if (!includeDel) {
        userWhere.isDeleted = false;
    }
    const where = {
        user: userWhere,
    };
    if (searchTerm && typeof searchTerm === "string" && searchTerm.trim()) {
        const q = searchTerm.trim();
        where.OR = [
            { name: { contains: q, mode: "insensitive" } },
            { user: { email: { contains: q, mode: "insensitive" } } },
            { user: { name: { contains: q, mode: "insensitive" } } },
        ];
    }
    const [data, total] = await Promise.all([
        prisma.admin.findMany({
            where,
            skip,
            take: limit,
            orderBy: { [sortField]: sortOrder },
            include: { user: { select: userPublicSelect } },
        }),
        prisma.admin.count({ where }),
    ]);
    return {
        meta: { page, limit, total },
        data,
    };
};
const getSingleAdmin = async (id, includeDeleted = false) => {
    const row = await prisma.admin.findUnique({
        where: { id },
        include: { user: { select: userPublicSelect } },
    });
    if (!row) {
        throw new ApiError(404, "Admin profile not found");
    }
    if (row.user &&
        row.user.role !== UserRole.ADMIN &&
        row.user.role !== UserRole.SUPER_ADMIN) {
        throw new ApiError(404, "Admin profile not found");
    }
    if (!includeDeleted && row.user?.isDeleted) {
        throw new ApiError(404, "Admin profile not found");
    }
    return row;
};
const updateAdminProfile = async (id, payload) => {
    await getSingleAdmin(id, false);
    const { image, ...adminData } = payload;
    const row = await prisma.admin.findUnique({
        where: { id },
        select: { userId: true },
    });
    if (!row) {
        throw new ApiError(404, "Admin profile not found");
    }
    const hasAdminFields = Object.keys(adminData).length > 0;
    await prisma.$transaction(async (tx) => {
        if (image !== undefined) {
            await tx.user.update({
                where: { id: row.userId },
                data: { image },
            });
        }
        if (hasAdminFields) {
            await tx.admin.update({
                where: { id },
                data: adminData,
            });
        }
    });
    return prisma.admin.findUniqueOrThrow({
        where: { id },
        include: { user: { select: userPublicSelect } },
    });
};
//==========Get Admin Profile (self)=========
const getMyProfile = async (userId) => {
    const admin = await prisma.admin.findUnique({
        where: { userId },
        include: { user: { select: userPublicSelect } },
    });
    if (!admin) {
        throw new ApiError(404, "Admin profile not found");
    }
    const u = admin.user;
    if (!u || (u.role !== UserRole.ADMIN && u.role !== UserRole.SUPER_ADMIN)) {
        throw new ApiError(403, "Not an admin account");
    }
    if (u.isDeleted) {
        throw new ApiError(404, "Admin profile not found");
    }
    return admin;
};
//==========Update Admin Profile (self)=========
const updateMyProfile = async (userId, data, files) => {
    const admin = await prisma.admin.findUnique({ where: { userId } });
    if (!admin) {
        throw new ApiError(404, "Admin profile not found");
    }
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user ||
        (user.role !== UserRole.ADMIN && user.role !== UserRole.SUPER_ADMIN)) {
        throw new ApiError(403, "Not an admin account");
    }
    const userData = {};
    if (data.name !== undefined)
        userData.name = data.name;
    if (data.address !== undefined)
        userData.address = data.address;
    if (files.image)
        userData.image = files.image;
    const adminData = {};
    if (data.name !== undefined)
        adminData.name = data.name;
    if (data.address !== undefined)
        adminData.address = data.address;
    if (data.phone !== undefined)
        adminData.phone = data.phone;
    if (!Object.keys(userData).length && !Object.keys(adminData).length) {
        return prisma.admin.findUniqueOrThrow({
            where: { id: admin.id },
            include: { user: { select: userPublicSelect } },
        });
    }
    await prisma.$transaction(async (tx) => {
        if (Object.keys(userData).length) {
            await tx.user.update({ where: { id: userId }, data: userData });
        }
        if (Object.keys(adminData).length) {
            await tx.admin.update({ where: { id: admin.id }, data: adminData });
        }
    });
    return prisma.admin.findUniqueOrThrow({
        where: { id: admin.id },
        include: { user: { select: userPublicSelect } },
    });
};
const applicantProfileSelect = {
    id: true,
    name: true,
    address: true,
    phone: true,
    cv: true,
    userType: true,
    createdAt: true,
    updatedAt: true,
};
const recruiterProfileSelect = {
    id: true,
    recruiterName: true,
    recruiterPhone: true,
    recruiterWorkEmail: true,
    companyName: true,
    companyLogo: true,
    companyWebsite: true,
    companyFacebookId: true,
    companyLinkedInId: true,
    companySize: true,
    companyAddress: true,
    industryId: true,
    subIndustryId: true,
    isVerified: true,
    subscriptionPlan: true,
    isDeleted: true,
    createdAt: true,
    updatedAt: true,
    industry: { select: { id: true, name: true } },
    subIndustry: { select: { id: true, name: true } },
};
const adminProfileSelect = {
    id: true,
    name: true,
    address: true,
    phone: true,
    createdAt: true,
    updatedAt: true,
};
//==========Get User By Id=========
const getUserById = async (userId, includeDeleted = false) => {
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
            ...userPublicSelect,
            needPasswordChange: true,
            applicant: { select: applicantProfileSelect },
            recruiter: { select: recruiterProfileSelect },
            admin: { select: adminProfileSelect },
        },
    });
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    if (!includeDeleted && user.isDeleted) {
        throw new ApiError(404, "User not found");
    }
    return user;
};
// ---------------------------------------------------------------------------
// USER (soft delete + status)
// ---------------------------------------------------------------------------
const softDeleteUser = async (actorUserId, actorRole, targetUserId) => {
    if (actorUserId === targetUserId) {
        throw new ApiError(400, "You cannot delete your own account");
    }
    const target = await prisma.user.findUnique({ where: { id: targetUserId } });
    if (!target) {
        throw new ApiError(404, "User not found");
    }
    if (target.isDeleted) {
        throw new ApiError(400, "User is already deleted");
    }
    if (target.role === UserRole.SUPER_ADMIN &&
        actorRole !== UserRole.SUPER_ADMIN) {
        throw new ApiError(403, "Only super admin can delete a super admin user");
    }
    await prisma.$transaction(async (tx) => {
        await tx.session.deleteMany({ where: { userId: targetUserId } });
        await tx.user.update({
            where: { id: targetUserId },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
                status: UserStatus.DELETED,
            },
        });
        await tx.recruiter.updateMany({
            where: { userId: targetUserId },
            data: { isDeleted: true },
        });
    });
    return prisma.user.findUnique({
        where: { id: targetUserId },
        select: userPublicSelect,
    });
};
const updateUserStatus = async (actorUserId, actorRole, targetUserId, newStatus) => {
    if (actorUserId === targetUserId) {
        throw new ApiError(400, "Use another admin to change your own status");
    }
    const target = await prisma.user.findUnique({ where: { id: targetUserId } });
    if (!target) {
        throw new ApiError(404, "User not found");
    }
    if (target.isDeleted) {
        throw new ApiError(400, "User is deleted");
    }
    if (target.role === UserRole.SUPER_ADMIN &&
        actorRole !== UserRole.SUPER_ADMIN) {
        throw new ApiError(403, "Only super admin can modify super admin users");
    }
    await prisma.user.update({
        where: { id: targetUserId },
        data: { status: newStatus },
    });
    return prisma.user.findUnique({
        where: { id: targetUserId },
        select: userPublicSelect,
    });
};
export const adminServices = {
    getAllApplicants,
    getSingleApplicant,
    updateApplicant,
    getAllRecruiters,
    getSingleRecruiter,
    updateRecruiter,
    getAllAdmins,
    getSingleAdmin,
    updateAdminProfile,
    getMyProfile,
    updateMyProfile,
    getUserById,
    softDeleteUser,
    updateUserStatus,
};
//# sourceMappingURL=admin.service.js.map