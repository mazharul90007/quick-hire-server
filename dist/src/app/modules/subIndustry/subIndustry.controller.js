import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { SubIndustryService } from "./subIndustry.service";
//==================Create subIndustries===================
const createSubIndustry = catchAsync(async (req, res) => {
    const result = await SubIndustryService.createSubIndustry(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Sub-industry created successfully!",
        data: result,
    });
});
//==================Get all subIndustries===================
const getAllSubIndustries = catchAsync(async (req, res) => {
    const result = await SubIndustryService.getAllSubIndustries();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Sub-industries fetched successfully!",
        data: result,
    });
});
//==================Update subIndustry===================
const updateSubIndustry = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SubIndustryService.updateSubIndustry(id, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Sub-industry updated successfully!",
        data: result,
    });
});
export const SubIndustryController = {
    createSubIndustry,
    getAllSubIndustries,
    updateSubIndustry,
};
//# sourceMappingURL=subIndustry.controller.js.map