import express from "express";
import { RagController } from "./rag.controller";

const router = express.Router();

router.get("/stats", RagController.getStats);
router.post("/ingest-jobs", RagController.ingestJobs);
router.post("/query", RagController.queryRag);

export const RagRoutes = router;
