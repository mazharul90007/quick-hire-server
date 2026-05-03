import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
    port: process.env.PORT,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    rag: {
        openrouter_api_key: process.env.OPENROUTER_API_KEY,
        openrouter_embedding_model: process.env.OPENROUTER_EMBEDDING_MODEL || "nvidia/llama-nemotron-embed-vl-1b-v2:free",
        openrouter_llm_model: process.env.OPENROUTER_LLM_MODEL || "nvidia/nemotron-3-super-120b-a12b:free",
    },
};
//# sourceMappingURL=index.js.map