/**
 * Generate a vector embedding for a given text
 */
export declare const generateEmbedding: (text: string) => Promise<number[]>;
/**
 * Generate a conversational response based on user query and retrieved job context
 */
export declare const generateRAGResponse: (query: string, jobsContext: any[]) => Promise<string>;
//# sourceMappingURL=ai.util.d.ts.map