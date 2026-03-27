export const jobFilterableFields = [
  "searchTerm",
  "industryId",
  "subIndustryId",
  "recruiterId",
  "jobType",
  "employmentType",
  "status",
  "featured",
  "isVerified",
  "location",
  "district",
];

export const jobSearchableFields = [
  "title",
  "location",
  "district",
  "description",
];

export const jobEnumFilterFields = ["jobType", "employmentType", "status"];

export const jobAllowedSortFields = [
  "createdAt",
  "updatedAt",
  "deadline",
  "title",
  "featured",
  "vacancy",
] as const;
