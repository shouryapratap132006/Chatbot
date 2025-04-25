"use client";
import React, { useEffect, useState } from 'react';

import './Explore.css';
import { getAllChatBots } from '@/services/chatbot';

const Explore = () => {
  const [chatbots, setChatbots] = useState([]);

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
    <div className="explore-container">
      <h1 className="explore-title">Explore Chatbots</h1>
      {chatbots.length === 0 ? (
        <p className="no-chatbots">No chatbots available to explore.</p>
      ) : (
        <ul className="chatbot-list">
          {chatbots.map((bot) => (
            <li key={bot.name} className="chatbot-item">
              <h3 className="chatbot-name">{bot.name}</h3>
              <p className="chatbot-context">{bot.context}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Explore;