import OpenAI from "openai";

const openAIKey = process.env.OPENAI_API_KEY;
const openAIBaseUrl = process.env.OPENAI_BASE_URL;
export const openAIModel = "llama-3.1-sonar-small-128k-online";

if (!openAIKey) {
  throw new Error("OpenAI API key is required");
}

export const openai = new OpenAI({ apiKey: openAIKey, baseURL: openAIBaseUrl });
