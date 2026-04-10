import ApiError from "../../errors/ApiErrors";
/**
 * After multer: multipart has `cv` (file) and `data` (text = JSON string).
 * Replaces `req.body` with the parsed object for Zod validation.
 */
export const parseApplicationDataField = (req, _res, next) => {
    const raw = req.body?.data;
    if (raw === undefined || raw === null || String(raw).trim() === "") {
        return next(new ApiError(400, 'Multipart field "data" is required: a JSON string with jobId and optional cover_note, expectedSalary.'));
    }
    const str = typeof raw === "string" ? raw : String(raw);
    let parsed;
    try {
        parsed = JSON.parse(str);
    }
    catch {
        return next(new ApiError(400, 'Field "data" must be valid JSON.'));
    }
    if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
        return next(new ApiError(400, 'Field "data" must be a JSON object.'));
    }
    req.body = parsed;
    next();
};
//# sourceMappingURL=application.middleware.js.map