"use client";
import React, { useState, useEffect } from "react";
import { FaRobot, FaCode, FaCogs, FaUserFriends } from "react-icons/fa";
import CountUp from 'react-countup';
import "./home.css";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

const HomePage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [showSpeech, setShowSpeech] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSpeech(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 600);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className="homepage">
      <section className="hero updated-layout">
        <img src="/bot-avatar.png" alt="Chatbot Avatar" className="bot-avatar-large" />
        <div className="hero-text">
          {showSpeech && (
            <div className="robot-speech-box animated">
              <p>&quot;Hello there! I&apos;m here to help you craft chatbots that truly understand your world.&quot;</p>
            </div>
          )}
          <h1>Create Smarter Conversations</h1>
          <h2>Personalized Chatbots Built Just for You</h2>
          <p>Design, Deploy & Customize chatbots that respond only based on your provided context.</p>
          <div className="cta-buttons">
            <Link href="/auth/login" className="cta-button">Get Started</Link>
            <Link href="/explore" className="cta-button secondary">Explore Chatbots</Link>
          </div>
        </div>
      </section>

      <div className="features-section">
        {/* Left: Feature Cards */}
        <section className="features">
          <div className="feature-card">
            <FaRobot className="feature-icon" />
            <h3>Prebuilt Chatbots</h3>
            <p>Access a variety of ready-to-use bots in our Explore section tailored for multiple use-cases.</p>
          </div>
          <div className="feature-card">
            <FaCode className="feature-icon" />
            <h3>Bot Creator Dashboard</h3>
            <p>Easily design your own chatbot interface, define context, and set unique behavior rules.</p>
          </div>
          <div className="feature-card">
            <FaCogs className="feature-icon" />
            <h3>Context-Driven Logic</h3>
            <p>Your bots only interpret and respond to what&apos;s within your defined scope. No hallucinations.</p>
          </div>
          <div className="feature-card">
            <FaUserFriends className="feature-icon" />
            <h3>User Management</h3>
            <p>Invite collaborators and manage bot permissions within your workspace.</p>
          </div>
        </section>

        {/* Right: Image */}
        <div className="features-image">
          <img src="/image1.png" alt="Features Visual" />
        </div>
      </div>


      <section className="stats">
        <div>
          <strong><CountUp end={12000} duration={4} separator=',' />+</strong>
          <br />Chatbots Deployed
        </div>
        <div>
          <strong><CountUp end={8500} duration={4} separator=',' />+</strong>
          <br />Active Users
        </div>
        <div>
          <strong><CountUp end={4.9} duration={4} decimals={1} /> ⭐</strong>
          <br />Average Rating
        </div>
        <div>
          <strong><CountUp end={99.9} duration={4} decimals={1} suffix="%" /></strong>
          <br />Uptime
        </div>
      </section>

      <section className="plans">
        <h2>Pay ONCE use FOREVER....</h2>
        <div className="toggle-switch">
          <button className={billingCycle === "monthly" ? "active" : ""} onClick={() => setBillingCycle("monthly")}>Monthly</button>
          <button className={billingCycle === "yearly" ? "active" : ""} onClick={() => setBillingCycle("yearly")}>Yearly</button>
        </div>
        <div className="plan-cards">
          <div className="plan-card">
            <h3>Starter Plan</h3>
            <p>{billingCycle === "monthly" ? "$20/mo" : "$200/yr"}</p>
            <ul>
              <li>Up to 3 bots</li>
              <li>Basic Analytics</li>
              <li>Email Support</li>
            </ul>
            <button>Select Plan</button>
          </div>
          <div className="plan-card highlight">
            <h3>Pro Plan</h3>
            <p>{billingCycle === "monthly" ? "$49/mo" : "$490/yr"}</p>
            <ul>
              <li>Unlimited Bots</li>
              <li>Advanced Bot Editor</li>
              <li>Priority Support</li>
            </ul>
            <button>Select Plan</button>
          </div>
          <div className="plan-card">
            <h3>Enterprise</h3>
            <p>Custom</p>
            <ul>
              <li>All Pro Features</li>
              <li>Team Collaboration</li>
              <li>Dedicated Manager</li>
            </ul>
            <button>Contact Sales</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default HomePage;
