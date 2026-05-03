/* eslint-disable @typescript-eslint/no-explicit-any */
import config from "../../config";
export class LLMService {
    apiKey;
    apiUrl = "https://openrouter.ai/api/v1";
    model;
    constructor() {
        this.apiKey = config.rag.openrouter_api_key || "";
        this.model = config.rag.openrouter_llm_model || "nvidia/nemotron-3-super-120b-a12b:free";
        if (!this.apiKey) {
            throw new Error("OpenRouter api key is missing in .env");
        }
    }
    async generateResponse(prompt, context = [], asJson = false) {
        try {
            // Combine context with prompt for RAG
            let fullPrompt = context.length > 0
                ? `Context information from Quick Hire database:\n${context.join("\n\n")}\n\nUser Question: ${prompt}\n\nAnswer based ONLY on the context above. Be concise and professional.`
                : prompt;
            if (asJson) {
                fullPrompt += `\n\nReturn ONLY a valid JSON object. Do not include any markdown formatting like \`\`\`json.`;
            }
            const systemMessage = asJson
                ? "You are a helpful AI recruiting assistant for Quick Hire. Answer questions based on the provided context. You MUST respond with ONLY valid JSON format. Do not include markdown tags."
                : "You are a helpful AI recruiting assistant for Quick Hire. Answer questions based on the provided context. If the context does not contain the answer, say you don't have enough information.";
            const bodyPayload = {
                model: this.model,
                messages: [
                    {
                        role: "system",
                        content: systemMessage,
                    },
                    {
                        role: "user",
                        content: fullPrompt,
                    },
                ],
                temperature: 0.1,
                max_tokens: 1500,
            };
            if (asJson &&
                (this.model.includes("gpt") || this.model.includes("openai"))) {
                bodyPayload.response_format = { type: "json_object" };
            }
            const response = await fetch(`${this.apiUrl}/chat/completions`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "https://quick-hire.local",
                    "X-Title": "Quick Hire Recruiting AI",
                },
                body: JSON.stringify(bodyPayload),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`OpenRouter API error: ${response.status} - ${errorData.error?.message || "unknown error"}`);
            }
            const data = await response.json();
            return data.choices[0].message.content;
        }
        catch (error) {
            console.error("Error generating LLM response:", error);
            throw error;
        }
    }
}
//# sourceMappingURL=llm.service.js.map