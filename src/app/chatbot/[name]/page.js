"use client";
import React, { useEffect, useState } from "react";
import { getChatbotByName, getChatbots } from "@/services/chatbot";
import { getToken } from "@/helpers/auth";
import { useParams, useRouter } from "next/navigation";
import { askGemini } from "@/services/ai";
import "./style.css";
import { FaRobot } from "react-icons/fa";

export default function Page() {
  const { name: chatbotName } = useParams();
  const router = useRouter();
  const [botDetails, setBotDetails] = useState({ name: "", context: "" });
  const [chatbots, setChatbots] = useState([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = getToken();
    getChatbots({ token })
      .then((data) => setChatbots(data))
      .catch((err) => console.error("Error fetching chatbots:", err));
  }, []);

  useEffect(() => {
    if (!chatbotName) return;
    const token = getToken();
    getChatbotByName({ name: chatbotName, token })
      .then((data) => setBotDetails({ ...data }))
      .catch((err) => console.error("Error fetching chatbot details:", err));
  }, [chatbotName]);

  const handleSend = async () => {
    if (!message.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: message }]);
    setMessage("");

    try {
      const response = await askGemini({ text: message, context: botDetails.context });
      const {response:data} = await response.json();
      // debugger;
      const botMessage = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";

      setMessages((prev) => [...prev, { sender: "bot", text: botMessage }]);
    } catch (err) {
      console.error("Error communicating with Gemini API:", err);
      setMessages((prev) => [...prev, { sender: "bot", text: "Sorry, I couldn't process your request." }]);
    }
  };

  return (
    <div className="chat-app">
      <div className="sidebar">
        <h2 className="sidebar-title">Your Chatbots</h2>
        <ul className="chatbot-list">
          {chatbots.map((bot) => (
            <li
              key={bot.name}
              className={`chatbot-list-item ${bot.name === chatbotName ? "active" : ""}`}
              onClick={() => router.push(`/chatbot/${bot.name}`)}
            >
              <FaRobot className="chatbot-icon" />
              {bot.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="chat-window">
        <div className="chatbot-details-container">
          <h1 className="chatbot-title">{botDetails.name}</h1>
          <p className="chatbot-context">{botDetails.context}</p>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "user-message" : "bot-message"}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="user-message-input">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}