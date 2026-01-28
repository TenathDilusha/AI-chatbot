import fetch from "node-fetch";
import dotenv from "dotenv";

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
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API error:", response.status, errorText);
      return "Sorry, the AI service is temporarily unavailable. Please try again later.";
    }

    const data = await response.json();
    
    // OpenRouter returns: data.choices[0].message.content (string)
    const reply = data.choices?.[0]?.message?.content || "No response received.";
    return reply;
  } catch (err) {
    console.error("Error calling AI API:", err);
    return "Sorry, there was an error processing your request.";
  }
}
