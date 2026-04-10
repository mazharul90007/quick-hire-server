import ApiError from "../errors/ApiErrors";
/**
 * If multipart field `data` is present, replace `req.body` with parsed JSON.
 * Otherwise leave `req.body` unchanged (so `application/json` PATCH still works).
 */
export function parseOptionalMultipartJson(req, _res, next) {
    const raw = req.body?.data;
    if (raw === undefined || raw === null || String(raw).trim() === "") {
        if (req.body && typeof req.body === "object" && "data" in req.body) {
            const { data: _d, ...rest } = req.body;
            req.body = rest;
        }
        next();
        return;
    }
    const str = typeof raw === "string" ? raw : String(raw);
    try {
        const parsed = JSON.parse(str);
        if (parsed === null || typeof parsed !== "object" || Array.isArray(parsed)) {
            next(new ApiError(400, 'Field "data" must be a JSON object.'));
            return;
        }
        req.body = parsed;
        next();
    }
    catch {
        next(new ApiError(400, 'Field "data" must be valid JSON.'));
    }
}
//# sourceMappingURL=parseOptionalMultipartJson.js.map