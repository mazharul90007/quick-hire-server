import ApiError from "../errors/ApiErrors";
export const validateRequest = (zodSchema) => {
    return (req, res, next) => {
        if (req.body?.data) {
            try {
                req.body = JSON.parse(req.body.data);
            }
            catch {
                return next(new ApiError(400, "Invalid JSON in field data."));
            }
        }
        const parsedResult = zodSchema.safeParse(req.body);
        if (!parsedResult.success) {
            return next(parsedResult.error);
        }
        req.body = parsedResult.data;
        next();
    };
};
//# sourceMappingURL=validateRequest.js.map