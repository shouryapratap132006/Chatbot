"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Footer from "@/components/Footer/Footer";
import "./About.css";

const team = [
  {
    name: "Shourya Pratap",
    role: "CEO & Co-Founder",
    image: "/emp1.png",
    bio: "Driving innovation in conversational AI with passion and vision.",
    linkedin: "https://linkedin.com/in/alexjohnson",
    twitter: "https://twitter.com/alexjohnson",
    github: "https://github.com/alexjohnson",
  },
  {
    name: "Anshuman Mehta",
    role: "Lead Developer",
    image: "/emp2.png",
    bio: "Building seamless chatbot experiences with cutting-edge tech.",
    linkedin: "https://linkedin.com/in/mayapatel",
    twitter: "https://twitter.com/mayapatel",
    github: "https://github.com/mayapatel",
  },
  {
    name: "Kriti Agarwal",
    role: "Product Designer",
    image: "/emp3.png",
    bio: "Designing intuitive interfaces that make chatbot building easy.",
    linkedin: "https://linkedin.com/in/carlosramirez",
    twitter: "https://twitter.com/carlosramirez",
    github: "https://github.com/carlosramirez",
  },
];

const About = () => {
  return (
    <>
    <div className="about-container">
      <section className="intro-section">
        <motion.h1
          className="title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Chatbot Maker
        </motion.h1>
        <p className="intro-text">
          Empowering businesses to build smart, scalable chatbots — no coding required.
          Create personalized, engaging conversational experiences that connect and convert.
        </p>
        <div className="feature-images">
          {[
            "/bot-avatar.png",
            "/image2.png",
            "/image1.png",
          ].map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`feature-${i}`}
              width={280}
              height={180}
              className="feature-img"
            />
          ))}
        </div>
      </section>

      <section className="process-section">
        <div className="process-text">
          <h2>How We Help You Build Smarter Bots</h2>
          <p>
            Our platform simplifies chatbot creation with intuitive drag-and-drop tools,
            AI-powered responses, and seamless integration with your favorite channels.
          </p>
          <p>
            Whether you're a beginner or a developer, our dedicated support and robust features
            ensure your bot is reliable, engaging, and grows your business.
          </p>
        </div>
        <div className="process-image">
          <Image
            src="/chatbot-process.jpg"
            alt="Chatbot Process"
            width={480}
            height={320}
          />
          <div className="caption">Your bot, smarter and faster than ever.</div>
        </div>
      </section>

      <section className="team-section">
        <motion.h2
          className="team-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team Behind the Bots
        </motion.h2>
        <p className="team-subtitle">
          The passionate minds building tools that power smarter conversations.
        </p>
        <div className="team-cards">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="team-card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="avatar-wrapper">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="avatar"
                />
              </div>
              <h4>{member.name}</h4>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
              <div className="social-links">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      
    </div>
    <Footer />
    </>
  );
};

export default About;
