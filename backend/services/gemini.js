import dotenv from 'dotenv';
import fetch from 'node-fetch';
dotenv.config();

export async function sendToGemini(message) {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GEMINI_API}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          { role: "user", content: [{ type: "text", text: message }] }
        ]
      })
    });

    const text = await response.text();

    const data = JSON.parse(text);
    const choice = data.choices?.[0]?.message;

    if (!choice) return "No response from Gemini.";

    if (Array.isArray(choice.content)) {
      return choice.content.map(c => c.text).join("\n") || "No text in content.";
    } else if (typeof choice.content === "string") {
      return choice.content;
    } else {
      return "Unexpected response format.";
    }
  } catch (err) {
    return "Failed to get response from Gemini.";
  }
}
