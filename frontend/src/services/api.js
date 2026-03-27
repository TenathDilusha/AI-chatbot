const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function sendMessage(message) {
  try {
    const res = await fetch(`${API_BASE}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    if (!res.ok) throw new Error(`Server error: ${res.status}`);

    const data = await res.json();
    return data.reply;
  } catch (err) {
    console.error("Error sending message:", err);
    return "⚠️ Error connecting to server.";
  }
}
