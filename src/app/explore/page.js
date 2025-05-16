"use client";
import React, { useEffect, useState } from 'react';
import { FaRobot } from 'react-icons/fa';

import './Explore.css';
import { getAllChatBots } from '@/services/chatbot';
import { useRouter } from "next/navigation";
import Footer from '@/components/Footer/Footer';

const Explore = () => {
  const [chatbots, setChatbots] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAllChatBots()
      .then((res) => {
        setChatbots(res);
      })
      .catch((err) => {
        console.error('Error fetching chatbots:', err);
      });
  }, []);

  return (
    <>
    <div className="explore-container">
      <h1 className="explore-title">Explore Chatbots</h1>
      {chatbots.length === 0 ? (
        <p className="no-chatbots">No chatbots available to explore.</p>
      ) : (
        <ul className="chatbot-list">
          {chatbots.map((bot) => (
            <li key={bot.name} className="chatbot-item">

              <FaRobot className="chatbot-icon" />
              <h3 className="chatbot-name">{bot.name}</h3>
              <p className="chatbot-context">{bot.context}</p>
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
    <Footer /> 
    </>
  );
};

export default Explore;