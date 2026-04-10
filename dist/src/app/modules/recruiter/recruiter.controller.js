import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { uploadProfileImage } from "../../../lib/cloudinary";
import { COMPANY_LOGO_FOLDER, PROFILE_IMAGE_FOLDER, profileMultipartFiles, } from "../../helpers/profileMultipart";
import * as recruiterServices from "./recruiter.service";
//==========Get Recruiter Profile=========
const getMyProfile = catchAsync(async (req, res) => {
    const result = await recruiterServices.getMyProfile(req.user.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Profile fetched successfully",
        data: result,
    });
});
//==========Update Recruiter Profile=========
const updateMyProfile = catchAsync(async (req, res) => {
    const body = req.body;
    const f = profileMultipartFiles(req);
    const urls = {};
    if (f.image?.buffer?.length) {
        urls.image = await uploadProfileImage(f.image.buffer, PROFILE_IMAGE_FOLDER);
    }
    if (f.companyLogo?.buffer?.length) {
        urls.companyLogo = await uploadProfileImage(f.companyLogo.buffer, COMPANY_LOGO_FOLDER);
    }
    const result = await recruiterServices.updateMyProfile(req.user.id, body, urls);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Profile updated",
        data: result,
    });
});
export const recruiterController = { getMyProfile, updateMyProfile };
//# sourceMappingURL=recruiter.controller.js.map