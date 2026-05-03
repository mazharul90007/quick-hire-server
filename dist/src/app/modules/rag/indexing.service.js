import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { EmbeddingService } from "./embedding.service";
const toVectorLiteral = (vector) => `[${vector.join(",")}]`;
export class IndexingService {
    embeddingService;
    constructor() {
        this.embeddingService = new EmbeddingService();
    }
    async indexDocument(chunkKey, sourceType, sourceId, content, sourceLabel, metadata) {
        try {
            const embedding = await this.embeddingService.generateEmbedding(content);
            const vectorLiteral = toVectorLiteral(embedding);
            // Using raw query because Prisma doesn't natively support pgvector types in standard CRUD yet
            await prisma.$executeRaw(Prisma.sql `
        INSERT INTO "document_embeddings"
        (
          "id",
          "chunkKey",
          "sourceType",
          "sourceId",
          "sourceLabel",
          "content",
          "metadata",
          "embedding",
          "updatedAt"
        )
        VALUES
        (
          gen_random_uuid(),
          ${chunkKey},
          ${sourceType},
          ${sourceId},
          ${sourceLabel || null},
          ${content},
          ${JSON.stringify(metadata || {})}::jsonb,
          CAST(${vectorLiteral} AS vector),
          NOW()
        )
        ON CONFLICT ("chunkKey")
        DO UPDATE SET
          "sourceType" = EXCLUDED."sourceType",
          "sourceId" = EXCLUDED."sourceId",
          "sourceLabel" = EXCLUDED."sourceLabel",
          "content" = EXCLUDED."content",
          "metadata" = EXCLUDED."metadata",
          "embedding" = EXCLUDED."embedding",
          "isDeleted" = false,
          "deletedAt" = null,
          "updatedAt" = NOW()
      `);
        }
        catch (error) {
            console.error(`Failed to index document ${chunkKey}:`, error);
            throw error;
        }
    }
    async indexJobsData() {
        try {
            const jobs = await prisma.job.findMany({
                where: { status: "ACTIVE" },
                include: {
                    industry: true,
                    subIndustry: true,
                    recruiter: true,
                },
            });
            let indexedCount = 0;
            for (const job of jobs) {
                const content = `Job Title: ${job.title}
Company: ${job.recruiterId} (Recruiter)
Location: ${job.location}, ${job.district}
Salary: ${job.salary}
Experience: ${job.experience}
Required Skills: ${(job.requiredSkills || []).join(", ")}
Industry: ${job.industry?.name}
Sub-Industry: ${job.subIndustry?.name}
Description: ${job.description}
Additional Requirements: ${(job.additionalRequirements || []).join(". ")}`;
                const metadata = {
                    jobId: job.id,
                    title: job.title,
                    industry: job.industry?.name,
                    location: job.location,
                    jobType: job.jobType,
                    employmentType: job.employmentType,
                };
                const chunkKey = `job-${job.id}`;
                await this.indexDocument(chunkKey, "JOB", job.id, content, job.title || undefined, metadata);
                indexedCount++;
            }
            return {
                success: true,
                message: `Successfully indexed ${indexedCount} jobs.`,
                indexedCount,
            };
        }
        catch (error) {
            console.error("Bulk indexing jobs failed:", error);
            throw error;
        }
    }
    async deleteDocument(chunkKey) {
        await prisma.documentEmbedding.update({
            where: { chunkKey },
            data: {
                isDeleted: true,
                deletedAt: new Date(),
            },
        });
    }
}
//# sourceMappingURL=indexing.service.js.map