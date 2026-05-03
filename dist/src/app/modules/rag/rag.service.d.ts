export declare class RAGService {
    private embeddingService;
    private llmService;
    private indexingService;
    constructor();
    ingestJobsData(): Promise<{
        success: boolean;
        message: string;
        indexedCount: number;
    }>;
    retrieveRelevantDocuments(query: string, limit?: number, sourceType?: string): Promise<any[]>;
    generateAnswer(query: string, limit?: number, sourceType?: string, asJson?: boolean): Promise<{
        answer: any;
        sources: {
            id: any;
            sourceId: any;
            sourceType: any;
            sourceLabel: any;
            similarity: any;
        }[];
        contextUsed: boolean;
    }>;
    getStats(): Promise<{
        totalActiveDocuments: number;
        sourceTypeBreakdown: any;
        timestamp: Date;
    }>;
}
//# sourceMappingURL=rag.service.d.ts.map