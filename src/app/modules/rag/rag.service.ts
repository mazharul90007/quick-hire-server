/* eslint-disable @typescript-eslint/no-explicit-any */
import { Prisma } from "../../../../generated/prisma/client";
import { prisma } from "../../../lib/prisma";
import { EmbeddingService } from "./embedding.service";
import { IndexingService } from "./indexing.service";
import { LLMService } from "./llm.service";

export class RAGService {
  private embeddingService: EmbeddingService;
  private llmService: LLMService;
  private indexingService: IndexingService;

  constructor() {
    this.embeddingService = new EmbeddingService();
    this.indexingService = new IndexingService();
    this.llmService = new LLMService();
  }

  async ingestJobsData() {
    return this.indexingService.indexJobsData();
  }

  async retrieveRelevantDocuments(
    query: string,
    limit: number = 5,
    sourceType?: string,
  ) {
    try {
      const queryEmbedding = await this.embeddingService.generateEmbedding(query);
      const vectorLiteral = `[${queryEmbedding.join(",")}]`;

      const results = await prisma.$queryRaw(Prisma.sql`
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
        ${sourceType ? Prisma.sql`AND "sourceType" = ${sourceType}` : Prisma.empty}
        ORDER BY embedding <=> CAST(${vectorLiteral} AS vector)
        LIMIT ${limit}
      `);

      return results as any[];
    } catch (error) {
      console.error("Document retrieval failed:", error);
      throw error;
    }
  }

  async generateAnswer(
    query: string,
    limit: number = 5,
    sourceType?: string,
    asJson: boolean = false,
  ) {
    try {
      const relevantDocs = await this.retrieveRelevantDocuments(
        query,
        limit,
        sourceType,
      );

      // Extract content from documents for context
      const context = relevantDocs
        .filter((doc: any) => doc.content)
        .map((doc: any) => doc.content);

      let answer = await this.llmService.generateResponse(
        query,
        context,
        asJson,
      );

      let parsedAnswer: any = answer;
      if (asJson) {
        try {
          // If the model wrapped the JSON in markdown blocks, clean it up
          if (answer.startsWith("```json")) {
            answer = answer
              .replace(/```json\n?/, "")
              .replace(/```$/, "")
              .trim();
          } else if (answer.startsWith("```")) {
            answer = answer
              .replace(/```\n?/, "")
              .replace(/```$/, "")
              .trim();
          }
          parsedAnswer = JSON.parse(answer);
        } catch (e) {
          console.error("Failed to parse LLM JSON response:", e);
          // Fallback to raw answer if JSON parsing fails
        }
      }

      return {
        answer: parsedAnswer,
        sources: relevantDocs.map((doc: any) => ({
          id: doc.id,
          sourceId: doc.sourceId,
          sourceType: doc.sourceType,
          sourceLabel: doc.sourceLabel,
          similarity: doc.similarity,
        })),
        contextUsed: context.length > 0,
      };
    } catch (error) {
      console.error("RAG answer generation failed:", error);
      throw error;
    }
  }

  async getStats() {
    try {
      const totalDocuments: any[] = await prisma.$queryRaw(Prisma.sql`
        SELECT COUNT(*) as count FROM "document_embeddings" WHERE "isDeleted" = false;
      `);

      const sourceTypeCounts: any[] = await prisma.$queryRaw(Prisma.sql`
        SELECT "sourceType", COUNT(*) as count FROM "document_embeddings" WHERE "isDeleted" = false GROUP BY "sourceType"
      `);

      return {
        totalActiveDocuments: Number(totalDocuments[0]?.count ?? 0),
        sourceTypeBreakdown: sourceTypeCounts.reduce(
          (acc: any, curr: any) => {
            acc[curr.sourceType] = Number(curr.count);
            return acc;
          },
          {},
        ),
        timestamp: new Date(),
      };
    } catch (error) {
      console.error("Failed to get RAG stats:", error);
      throw error;
    }
  }
}
