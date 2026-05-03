export declare class IndexingService {
    private embeddingService;
    constructor();
    indexDocument(chunkKey: string, sourceType: string, sourceId: string, content: string, sourceLabel?: string, metadata?: Record<string, unknown>): Promise<void>;
    indexJobsData(): Promise<{
        success: boolean;
        message: string;
        indexedCount: number;
    }>;
    deleteDocument(chunkKey: string): Promise<void>;
}
//# sourceMappingURL=indexing.service.d.ts.map