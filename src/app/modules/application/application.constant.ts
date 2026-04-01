/** Query keys allowed on GET /applications (controller picks these from req.query). */
export const applicationFilterableFields = [
  "searchTerm",
  "jobId",
  "applicantId",
];

/** When the client sends ?searchTerm=..., we search these columns (partial match). */
export const applicationSearchableFields = ["cover_note", "expectedSalary"];
