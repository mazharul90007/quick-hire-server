import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { applicationServices } from "./application.service";
import pick from "../../../shared/pick";
import { applicationFilterableFields } from "./application.constant";
//==============Create Application==============
const createApplication = catchAsync(async (req, res) => {
    const { userId, ...payload } = req.body;
    const result = await applicationServices.createApplication(userId, payload);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Application submitted successfully",
        data: result,
    });
});
//==============Get All Applications==============
const getAllApplications = catchAsync(async (req, res) => {
    const filters = pick(req.query, applicationFilterableFields);
    const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
    const result = await applicationServices.getAllApplications(filters, options);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Applications fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});
//==============Get Single Application==============
const getSingleApplication = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await applicationServices.getSingleApplication(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Application data fetched successfully",
        data: result,
    });
});
export const applicationController = {
    createApplication,
    getAllApplications,
    getSingleApplication,
};
//# sourceMappingURL=application.controller.js.map