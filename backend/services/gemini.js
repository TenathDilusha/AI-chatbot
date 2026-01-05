import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function sendToGemini(userMessage) {
  try {
    const prompt = `You are a helpful Student Assistant AI. Answer politely and clearly.\n\nUser: ${userMessage}\n\nAssistant:`;
    const response = await ai.models.generateContent({
      model: "models/gemini-2.5-pro",
      contents: prompt,
    });
    console.log("Gemini API response:", response.text);
    return response.text;
  } catch (e) {
    console.error("Gemini error:", e);
    throw e;
  }
}

