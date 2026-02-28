import catchAsync from "../../../shared/catchAsync";
import { jobServices } from "./job.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
//===============Create Job=================
const createJob = catchAsync(async (req, res) => {
    const userId = req.user?.id;
    const payload = req.body;
    const result = await jobServices.createJob(userId, payload);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Job has been Created",
        data: result,
    });
});
export const jobController = {
    createJob,
};
//# sourceMappingURL=job.controller.js.map