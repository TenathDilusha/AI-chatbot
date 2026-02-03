AI Chatbot
=========

This project is a full-stack AI chatbot that allows users to interact with an AI assistant through a modern web interface. The backend uses Node.js and Express to connect to an Ollama-powered large language model (LLM), while the frontend is built with React and Vite for a fast, responsive user experience.

Features
--------
- Real AI-powered chat using Ollama (Llama 3.2 model)
- Modern React frontend (Vite)
- Node.js + Express backend
- Easy to extend and customize
- Clean, student-friendly UI

How it works
------------
1. The user types a message in the chat UI.
2. The frontend sends the message to the backend API.
3. The backend forwards the message to Ollama and returns the AI's response.
4. The frontend displays the AI's reply in the chat window.

Project Structure
-----------------
```bash
project-root/
│
├── backend/
│   ├── server.js           # Express server
│   ├── routes/
│   │   └── chat.js         # Chat API route
│   ├── services/
│   │   └── ollama.js       # Ollama AI integration
│   └── package.json
│   
│
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── src/                # React source code
│   ├── styles/             # CSS for UI
│   ├── services/
│   │   └── api.js          # API call to backend
│   ├── package.json
│   └── vite.config.js      # Vite config
│
└── README.md
```

Setup
-----
1. Start Ollama locally and ensure the Llama 3.2 model is available.
2. In `backend/`, run `npm install` and then `npm start`.
3. In `frontend/`, run `npm install` and then `npm run dev`.
4. Open the frontend in your browser and start chatting!

---
This project is for educational and demonstration purposes. You can easily adapt it to use other models or APIs as needed.

Setup Instructions
1. Backend

Navigate to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

2. Frontend

Open frontend/index.html in your browser, or run a local server (e.g., VS Code Live Server)

Type a message in the chat box to interact with the bot


Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

AI: llama 3.2


