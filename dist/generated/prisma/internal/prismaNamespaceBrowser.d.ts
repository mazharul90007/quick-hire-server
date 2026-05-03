import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Admin: "Admin";
    readonly Applicant: "Applicant";
    readonly Application: "Application";
    readonly User: "User";
    readonly Session: "Session";
    readonly Account: "Account";
    readonly Verification: "Verification";
    readonly Course: "Course";
    readonly CoursePurchase: "CoursePurchase";
    readonly Job: "Job";
    readonly DocumentEmbedding: "DocumentEmbedding";
    readonly Recruiter: "Recruiter";
    readonly Industry: "Industry";
    readonly SubIndustry: "SubIndustry";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly address: "address";
    readonly phone: "phone";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const ApplicantScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly name: "name";
    readonly address: "address";
    readonly phone: "phone";
    readonly cv: "cv";
    readonly userType: "userType";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum];
export declare const ApplicationScalarFieldEnum: {
    readonly id: "id";
    readonly applicantId: "applicantId";
    readonly jobId: "jobId";
    readonly cv: "cv";
    readonly cover_note: "cover_note";
    readonly expectedSalary: "expectedSalary";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly name: "name";
    readonly image: "image";
    readonly emailVerified: "emailVerified";
    readonly address: "address";
    readonly role: "role";
    readonly status: "status";
    readonly needPasswordChange: "needPasswordChange";
    readonly isDeleted: "isDeleted";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly expiresAt: "expiresAt";
    readonly token: "token";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly userId: "userId";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly accountId: "accountId";
    readonly providerId: "providerId";
    readonly userId: "userId";
    readonly accessToken: "accessToken";
    readonly refreshToken: "refreshToken";
    readonly idToken: "idToken";
    readonly accessTokenExpiresAt: "accessTokenExpiresAt";
    readonly refreshTokenExpiresAt: "refreshTokenExpiresAt";
    readonly scope: "scope";
    readonly password: "password";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const VerificationScalarFieldEnum: {
    readonly id: "id";
    readonly identifier: "identifier";
    readonly value: "value";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum];
export declare const CourseScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly slug: "slug";
    readonly description: "description";
    readonly priceAmount: "priceAmount";
    readonly currency: "currency";
    readonly accessDuration: "accessDuration";
    readonly stripeProductId: "stripeProductId";
    readonly stripePriceId: "stripePriceId";
    readonly thumbnailUrl: "thumbnailUrl";
    readonly isPublished: "isPublished";
    readonly createdByAdminId: "createdByAdminId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];
export declare const CoursePurchaseScalarFieldEnum: {
    readonly id: "id";
    readonly applicantId: "applicantId";
    readonly courseId: "courseId";
    readonly status: "status";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly stripeCheckoutSessionId: "stripeCheckoutSessionId";
    readonly stripePaymentIntentId: "stripePaymentIntentId";
    readonly paidAt: "paidAt";
    readonly accessExpiresAt: "accessExpiresAt";
    readonly receiptNumber: "receiptNumber";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CoursePurchaseScalarFieldEnum = (typeof CoursePurchaseScalarFieldEnum)[keyof typeof CoursePurchaseScalarFieldEnum];
export declare const JobScalarFieldEnum: {
    readonly id: "id";
    readonly recruiterId: "recruiterId";
    readonly industryId: "industryId";
    readonly subIndustryId: "subIndustryId";
    readonly title: "title";
    readonly location: "location";
    readonly district: "district";
    readonly vacancy: "vacancy";
    readonly age: "age";
    readonly salary: "salary";
    readonly experience: "experience";
    readonly education: "education";
    readonly additionalRequirements: "additionalRequirements";
    readonly responsibilities: "responsibilities";
    readonly requiredSkills: "requiredSkills";
    readonly description: "description";
    readonly benefits: "benefits";
    readonly jobType: "jobType";
    readonly employmentType: "employmentType";
    readonly featured: "featured";
    readonly isVerified: "isVerified";
    readonly tags: "tags";
    readonly deadline: "deadline";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum];
export declare const DocumentEmbeddingScalarFieldEnum: {
    readonly id: "id";
    readonly chunkKey: "chunkKey";
    readonly sourceType: "sourceType";
    readonly sourceId: "sourceId";
    readonly sourceLabel: "sourceLabel";
    readonly content: "content";
    readonly metadata: "metadata";
    readonly isDeleted: "isDeleted";
    readonly deletedAt: "deletedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DocumentEmbeddingScalarFieldEnum = (typeof DocumentEmbeddingScalarFieldEnum)[keyof typeof DocumentEmbeddingScalarFieldEnum];
export declare const RecruiterScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly recruiterName: "recruiterName";
    readonly recruiterPhone: "recruiterPhone";
    readonly recruiterWorkEmail: "recruiterWorkEmail";
    readonly companyName: "companyName";
    readonly companyLogo: "companyLogo";
    readonly companyWebsite: "companyWebsite";
    readonly companyFacebookId: "companyFacebookId";
    readonly companyLinkedInId: "companyLinkedInId";
    readonly companySize: "companySize";
    readonly companyAddress: "companyAddress";
    readonly industryId: "industryId";
    readonly subIndustryId: "subIndustryId";
    readonly isVerified: "isVerified";
    readonly subscriptionPlan: "subscriptionPlan";
    readonly isDeleted: "isDeleted";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RecruiterScalarFieldEnum = (typeof RecruiterScalarFieldEnum)[keyof typeof RecruiterScalarFieldEnum];
export declare const IndustryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly logo: "logo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IndustryScalarFieldEnum = (typeof IndustryScalarFieldEnum)[keyof typeof IndustryScalarFieldEnum];
export declare const SubIndustryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly industryId: "industryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubIndustryScalarFieldEnum = (typeof SubIndustryScalarFieldEnum)[keyof typeof SubIndustryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map