import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { RAGService } from "./rag.service";

const ragService = new RAGService();

const getStats = catchAsync(async (req: Request, res: Response) => {
  const result = await ragService.getStats();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "RAG stats retrieved successfully",
    data: result,
  });
});

const ingestJobs = catchAsync(async (req: Request, res: Response) => {
  const result = await ragService.ingestJobsData();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Jobs indexed successfully",
    data: result,
  });
});

const queryRag = catchAsync(async (req: Request, res: Response) => {
  const { query, limit, sourceType, asJson } = req.body;

  const result = await ragService.generateAnswer(
    query,
    limit,
    sourceType,
    asJson,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "RAG query processed successfully",
    data: result,
  });
});

export const RagController = {
  getStats,
  ingestJobs,
  queryRag,
};
