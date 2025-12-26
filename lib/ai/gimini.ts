import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "../config/config";
import { PLATFORMS } from "./platforms";
import { Platform } from "@/types/platform";

type GeneratePostsParams = {
  prompt: string;
  platform: Platform;
};

const genAi = new GoogleGenerativeAI(API_KEY);

export async function generatePosts({
  prompt,
  platform,
}: GeneratePostsParams): Promise<string> {
  try {
    const config = PLATFORMS[platform];

    if (!config) throw new Error("invalid platform");

    const model = genAi.getGenerativeModel({
      model: config.model,
      systemInstruction: config.systemInstruction,
    });

    const res = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: config.temperature,
        topP: 0.9,
        maxOutputTokens: 1042,
      },
    });

    return res.response.text();
  } catch (error: any) {
    if (error?.status === 403) {
      throw new Error("AI service is not available from this region");
    }

    throw new Error(error.message ?? "Generation failed");
  }
}
