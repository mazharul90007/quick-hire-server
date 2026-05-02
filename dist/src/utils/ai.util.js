import dotenv from 'dotenv';
dotenv.config();
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const EMBEDDING_MODEL = process.env.OPENROUTER_EMBEDDING_MODEL || 'nvidia/llama-nemotron-embed-vl-1b-v2:free';
const LLM_MODEL = process.env.OPENROUTER_LLM_MODEL || 'nvidia/nemotron-3-super-120b-a12b:free';
/**
 * Generate a vector embedding for a given text
 */
export const generateEmbedding = async (text) => {
    if (!OPENROUTER_API_KEY) {
        throw new Error('OPENROUTER_API_KEY is not defined');
    }
    const response = await fetch('https://openrouter.ai/api/v1/embeddings', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: EMBEDDING_MODEL,
            input: text,
        }),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter Embedding API error: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    return data.data[0].embedding;
};
/**
 * Generate a conversational response based on user query and retrieved job context
 */
export const generateRAGResponse = async (query, jobsContext) => {
    if (!OPENROUTER_API_KEY) {
        throw new Error('OPENROUTER_API_KEY is not defined');
    }
    // Format the job context nicely for the LLM
    const formattedJobs = jobsContext.map((job, index) => `Job ${index + 1}:
    Title: ${job.title}
    Company: ${job.companyName || 'Unknown'}
    Location: ${job.location || 'Unknown'}
    Salary: ${job.salary || 'Not specified'}
    Description: ${job.description ? job.description.slice(0, 500) + '...' : 'No description'}
    Required Skills: ${(job.requiredSkills || []).join(', ')}`).join('\n\n');
    const systemPrompt = `You are a helpful AI recruiting assistant for Quick Hire. 
Your task is to help candidates find jobs based on the provided list of matching jobs from our database.
Always base your recommendations ONLY on the provided job context. Be enthusiastic and concise. 
Format your response nicely in Markdown.

Here are the jobs retrieved from the database that match the user's query:
${formattedJobs}`;
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: LLM_MODEL,
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: query }
            ],
        }),
    });
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter Chat API error: ${response.status} - ${errorText}`);
    }
    const data = await response.json();
    return data.choices[0].message.content;
};
//# sourceMappingURL=ai.util.js.map