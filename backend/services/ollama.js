import fetch from "node-fetch";

export async function getOllamaResponse(userInput) {
  const response = await fetch("http://localhost:11434/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "llama3.2",
      messages: [
        { role: "system", content: "You are a helpful CS tutor" },
        { role: "user", content: userInput }
      ],
      stream: false
    })
  });

  const data = await response.json();
  return data.message.content;
}
