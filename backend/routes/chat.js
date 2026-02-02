import express from "express";
import { getOllamaResponse } from "../services/ollama.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;
  if (!message)
    return res.status(400).json({ error: "Message is required" });

  try {
    const reply = await getOllamaResponse(message);
    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error talking to Ollama" });
  }
});

export default router;
