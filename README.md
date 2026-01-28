Student Assistant AI
Overview

Student Assistant AI is a web-based chatbot designed to help students with queries about their studies, schedule, and general information. The project demonstrates how AI chatbots work with a frontend UI and a backend server.

⚠️ For demo purposes, the chatbot can use mock responses or a limited free API (like Google Gemini free tier).

Features

Chat interface to type questions and receive answers

Frontend built with HTML, CSS, JavaScript (React optional)

Backend built with Node.js + Express

Demo AI responses using mock data or free AI API

Easy to extend with paid APIs for full AI functionality

Project Structure
```bash
project-root/
│
├── backend/
│   ├── server.js           # Express server
│   ├── routes/
│   │   └── chat.js         # Chat API route
│   ├── services/
│   │   └── gemini.js       # AI integration (Gemini or mock)
│   ├── package.json
│   └── .env                # API keys and config
│
├── frontend/
│   ├── index.html          # Main HTML page
│   ├── styles.css          # Styles for UI
│   ├── app.js              # Frontend JS for chat
│   └── services/
│       └── api.js          # API call to backend
│
└── README.md
```
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

Add .env file with your API key (optional for demo):

GEMINI_API_KEY=YOUR_KEY
PORT=5000


Start the server:

```bash
npm run dev
```

2. Frontend

Open frontend/index.html in your browser, or run a local server (e.g., VS Code Live Server)

Type a message in the chat box to interact with the bot

Notes

Free API usage is limited. For unlimited AI responses, a paid plan or local AI model is required.

For demo purposes, you can use mock responses in services/gemini.js by returning predefined answers.

Tech Stack

Frontend: HTML, CSS, JavaScript

Backend: Node.js, Express

AI: Google Gemini (optional), Mock responses for demo

Future Improvements

Integrate full AI with Gemini or OpenAI paid API

Add authentication for users

Add persistent chat history using a database

Extend bot to answer subject-specific queries
