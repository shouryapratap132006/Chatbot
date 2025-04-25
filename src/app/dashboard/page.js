"use client";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/auth";
import "./Dashboard.css";
import { ChatbotContext } from "@/Context/chatbot";
import Link from "next/link";
import { getToken } from "@/helpers/auth";
import { createChatbot, getChatbots } from "@/services/chatbot";

const Dashboard = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { chatbots, setChatbots } = useContext(ChatbotContext);
  const [botName, setBotName] = useState("");
  const [botContext, setBotContext] = useState("");
  const router = useRouter();

  useEffect(() => {
    getChatbots({ token: getToken() })
      .then((res) => {
        setChatbots(res);
      })
      .catch((err) => {
        console.error("Error fetching chatbots:", err);
      });
  }, []);

 



  const handleAddBot = async () => {
    if (botName.trim() === "" || botContext.trim() === "") return;

    const newBot = {
      name: botName,
      context: botContext,
    };

    try {
      await createChatbot({ name: botName, context: botContext, token: getToken() });
      setChatbots((prev) => [...prev, newBot]);
      setBotName("");
      setBotContext("");
    } catch (error) {
      console.error("Error creating chatbot:", error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-error">You are not logged in</p>
        <p>
          Click here to <Link href="/auth/login">Login</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Chatbot Dashboard</h1>
      {/* Add New Chatbot Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter chatbot name"
          value={botName}
          onChange={(e) => setBotName(e.target.value)}
          className="input-field"
        />
        <textarea
          placeholder="Enter chatbot context"
          value={botContext}
          onChange={(e) => setBotContext(e.target.value)}
          className="textarea-field"
        ></textarea>
        <button onClick={handleAddBot} className="add-button">
          Add Chatbot
        </button>
      </div>
      {/* List of Chatbots */}
      <div className="chatbot-list">
        <h2 className="chatbot-list-title">Your Chatbots</h2>
        {chatbots.length === 0 ? (
          <p className="no-chatbots">No chatbots added yet.</p>
        ) : (
          <ul className="chatbot-items">
            {chatbots.map((bot, idx) => (
              <li key={bot.name} className="chatbot-item">
                <div className="chatbot-info">
                  <h3 className="chatbot-name">{bot.name}</h3>
                  <p className="chatbot-context">{bot.context}</p>
                </div>
                <button
                  onClick={() => router.push(`/chatbot/${bot.name}`)}
                  className="chat-button"
                >
                  Open Chat
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;