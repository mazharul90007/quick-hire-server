import { z } from "zod";
//==========Update Applicant Profile (body schema)=========
/** Multipart `data` JSON; files are separate fields. */
export const updateMyProfileSchema = z
    .object({
    name: z.string().max(200).optional(),
    address: z.string().max(500).optional(),
    phone: z.string().max(50).optional(),
})
    .strict();
export const applicantValidation = { updateMyProfileSchema };
//# sourceMappingURL=applicant.validation.js.map