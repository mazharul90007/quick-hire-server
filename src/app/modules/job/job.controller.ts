import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { jobServices } from "./job.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";
import { jobFilterableFields } from "./job.constant";
import pick from "../../../shared/pick";
import { UserRole } from "../../../../generated/prisma/enums";

//===============Create Job=================
const createJob = catchAsync(async (req: Request, res: Response) => {
  const userId = req.user?.id as string;
  const payload = req.body;

  const result = await jobServices.createJob(userId, payload);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Job has been Created",
    data: result,
  });
});

//===============Get all Jobs=================
const getAllJobs = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, jobFilterableFields);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);
  const result = await jobServices.getAllJobs(filters, options);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Jobs has been fetched",
    data: result,
  });
});

//===============Get single Job===============
const getSingleJob = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  // console.log("GET SINGLE JOB ROUTE HIT! ID:", id);
  const result = await jobServices.getSingleJob(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Job data has been fetched",
    data: result,
  });
});

//===============Update Job===============
const updateJob = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id as string;
  const payload = req.body;
  const result = await jobServices.updateJob(id, payload, {
    userId: req.user!.id,
    role: req.user!.role as UserRole,
  });

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Job updated successfully",
    data: result,
  });
});

//===============Smart Search=================
const smartSearch = catchAsync(async (req: Request, res: Response) => {
  // console.log("SMART SEARCH ROUTE HIT! Query:", req.query.q);
  const query = req.query.q as string;
  const result = await jobServices.smartSearch(query);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Smart search completed",
    data: result,
  });
});

export const jobController = {
  createJob,
  updateJob,
  getAllJobs,
  getSingleJob,
  smartSearch,
};
