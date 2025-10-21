import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatbotDemo.module.css';
import { FaPaperPlane } from 'react-icons/fa';

const ChatbotDemo = ({ onBack }) => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am a real AI assistant powered by Google Gemini. How can I help you today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isTyping]);

  const getBotResponse = async (userInput) => {
    setIsTyping(true);
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
    
    const conversationHistory = messages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));

    const payload = {
        contents: [
            ...conversationHistory,
            {
                role: 'user',
                parts: [{ text: userInput }]
            }
        ]
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        const botResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't process that. Please try again.";
        
        const botMessage = { sender: 'bot', text: botResponseText };
        setMessages(prev => [...prev, botMessage]);

    } catch (error) {
        console.error("Gemini API error:", error);
        const errorMessage = { sender: 'bot', text: "Sorry, I'm having trouble connecting to the AI. Please try again later." };
        setMessages(prev => [...prev, errorMessage]);
    } finally {
        setIsTyping(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '' || isTyping) return;

    const userMessage = { sender: 'user', text: inputValue };
    setMessages(prev => [...prev, userMessage]);
    
    getBotResponse(inputValue);

    setInputValue('');
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.chatWindow}>
        <div className={styles.chatHeader}>
          <h2>Live AI Assistant</h2>
          <button onClick={onBack} className={styles.backButton}>Back</button>
        </div>
        <div className={styles.chatBody}>
          {messages.map((msg, index) => (
            <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
              <p>{msg.text}</p>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.message} ${styles.bot}`}>
              <div className={styles.typingIndicator}>
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form className={styles.chatFooter} onSubmit={handleSendMessage}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
          />
          <button type="submit" disabled={isTyping}><FaPaperPlane /></button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotDemo;