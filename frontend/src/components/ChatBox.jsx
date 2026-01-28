import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../services/api";

function ChatBox() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm your Student Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, loading]);

const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = { sender: "user", text: input };

  setMessages((prev) => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {
    const botReply = await sendMessage(input);

    setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
  } catch (error) {
    console.log("Error:", error);
    setMessages((prev) => [
      ...prev,
      { sender: "bot", text: "⚠️ Error connecting to server." }
    ]);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot">Typing...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="input-area">
        <input
          type="text"
          placeholder="Ask something..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatBox;
