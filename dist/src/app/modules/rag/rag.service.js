/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { EmbeddingService } from "./embedding.service";
import { IndexingService } from "./indexing.service";
import { LLMService } from "./llm.service";
export class RAGService {
    embeddingService;
    llmService;
    indexingService;
    constructor() {
        this.embeddingService = new EmbeddingService();
        this.indexingService = new IndexingService();
        this.llmService = new LLMService();
    }
    async ingestJobsData() {
        return this.indexingService.indexJobsData();
    }
    async retrieveRelevantDocuments(query, limit = 5, sourceType) {
        try {
            const queryEmbedding = await this.embeddingService.generateEmbedding(query);
            const vectorLiteral = `[${queryEmbedding.join(",")}]`;
            const results = await prisma.$queryRaw(Prisma.sql `
        SELECT 
          id, 
          "chunkKey", 
          "sourceType", 
          "sourceId", 
          "sourceLabel", 
          content, 
          metadata, 
          1 - (embedding <=> CAST(${vectorLiteral} AS vector)) as similarity
        FROM "document_embeddings"
        WHERE "isDeleted" = false
        ${sourceType ? Prisma.sql `AND "sourceType" = ${sourceType}` : Prisma.empty}
        ORDER BY embedding <=> CAST(${vectorLiteral} AS vector)
        LIMIT ${limit}
      `);
            return results;
        }
        catch (error) {
            console.error("Document retrieval failed:", error);
            throw error;
        }
    }
    async generateAnswer(query, limit = 5, sourceType, asJson = false) {
        try {
            const relevantDocs = await this.retrieveRelevantDocuments(query, limit, sourceType);
            // Extract content from documents for context
            const context = relevantDocs
                .filter((doc) => doc.content)
                .map((doc) => doc.content);
            let answer = await this.llmService.generateResponse(query, context, asJson);
            let parsedAnswer = answer;
            if (asJson) {
                try {
                    // If the model wrapped the JSON in markdown blocks, clean it up
                    if (answer.startsWith("```json")) {
                        answer = answer
                            .replace(/```json\n?/, "")
                            .replace(/```$/, "")
                            .trim();
                    }
                    else if (answer.startsWith("```")) {
                        answer = answer
                            .replace(/```\n?/, "")
                            .replace(/```$/, "")
                            .trim();
                    }
                    parsedAnswer = JSON.parse(answer);
                }
                catch (e) {
                    console.error("Failed to parse LLM JSON response:", e);
                    // Fallback to raw answer if JSON parsing fails
                }
            }
            return {
                answer: parsedAnswer,
                sources: relevantDocs.map((doc) => ({
                    id: doc.id,
                    sourceId: doc.sourceId,
                    sourceType: doc.sourceType,
                    sourceLabel: doc.sourceLabel,
                    similarity: doc.similarity,
                })),
                contextUsed: context.length > 0,
            };
        }
        catch (error) {
            console.error("RAG answer generation failed:", error);
            throw error;
        }
    }
    async getStats() {
        try {
            const totalDocuments = await prisma.$queryRaw(Prisma.sql `
        SELECT COUNT(*) as count FROM "document_embeddings" WHERE "isDeleted" = false;
      `);
            const sourceTypeCounts = await prisma.$queryRaw(Prisma.sql `
        SELECT "sourceType", COUNT(*) as count FROM "document_embeddings" WHERE "isDeleted" = false GROUP BY "sourceType"
      `);
            return {
                totalActiveDocuments: Number(totalDocuments[0]?.count ?? 0),
                sourceTypeBreakdown: sourceTypeCounts.reduce((acc, curr) => {
                    acc[curr.sourceType] = Number(curr.count);
                    return acc;
                }, {}),
                timestamp: new Date(),
            };
        }
        catch (error) {
            console.error("Failed to get RAG stats:", error);
            throw error;
        }
    }
}
//# sourceMappingURL=rag.service.js.map