import config from "../../config";
export class EmbeddingService {
    apikey;
    apiUrl = "https://openrouter.ai/api/v1";
    embeddingModel;
    constructor() {
        this.apikey = config.rag.openrouter_api_key || "";
        this.embeddingModel = config.rag.openrouter_embedding_model || "nvidia/llama-nemotron-embed-vl-1b-v2:free";
        if (!this.apikey) {
            throw new Error("OPENROUTER_API_KEY is not set in .env");
        }
    }
    async generateEmbedding(text) {
        try {
            const response = await fetch(`${this.apiUrl}/embeddings`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.apikey}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    input: text,
                    model: this.embeddingModel,
                }),
            });
            if (!response.ok) {
                throw new Error(`OpenRouter API Error: ${response.status}`);
            }
            const data = await response.json();
            if (!data.data || data.data.length == 0) {
                throw new Error("No embedding data returned");
            }
            return data.data[0].embedding;
        }
        catch (error) {
            console.error("Embedding generation failed:", error);
            throw error;
        }
    }
}
//# sourceMappingURL=embedding.service.js.map