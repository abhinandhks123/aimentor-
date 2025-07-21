import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm your AI assistant. Ask me anything." }
  ]);
  const [input, setInput] = useState('');

  const API_KEY = "AIzaSyAH86nL3Db-Tksph2gyJuKgVifqmXTWLII";

  const MOTIVATION_QUOTES = [
    "🌞 Rise and shine! Today is full of opportunities.",
    "🚀 Keep pushing forward — your goals are within reach.",
    "💡 Each morning is a fresh start to greatness.",
    "🔥 Believe in yourself and make it happen!",
    "🌈 Make today so awesome that yesterday gets jealous."
  ];

  const WAKE_UP_HOUR = 16;
  const WAKE_UP_MINUTE = 25;

  const sendMotivation = () => {
    const randomQuote = MOTIVATION_QUOTES[Math.floor(Math.random() * MOTIVATION_QUOTES.length)];
    setMessages(prev => [...prev, { from: 'bot', text: randomQuote }]);
    localStorage.setItem("motivationSentToday", new Date().toDateString());
  };

  useEffect(() => {
    const today = new Date().toDateString();
    const sentToday = localStorage.getItem("motivationSentToday");

    if (sentToday === today) return;

    const now = new Date();
    const target = new Date();
    target.setHours(WAKE_UP_HOUR);
    target.setMinutes(WAKE_UP_MINUTE);
    target.setSeconds(0);

    if (now > target) {
      sendMotivation();
    } else {
      const delay = target.getTime() - now.getTime();
      const timeout = setTimeout(sendMotivation, delay);
      return () => clearTimeout(timeout);
    }
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const updatedMessages = [...messages, { from: 'user', text: input }];
    setMessages(updatedMessages);

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              role: "user",
              parts: [{ text: input }]
            }
          ]
        }
      );

      const reply = response.data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, no reply.';
      setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    } catch (err) {
      console.error('API error:', err);
      setMessages(prev => [...prev, { from: 'bot', text: '⚠️ Gemini API error occurred. Please check API key and format.' }]);
    }

    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Ai Mentor</h2>
      <div style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.from === 'bot' ? 'left' : 'right', margin: '10px 0' }}>
            <span style={{
              background: msg.from === 'bot' ? '#f0f0f0' : '#c8e6c9',
              padding: '10px 14px',
              borderRadius: '12px',
              display: 'inline-block'
            }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type a message..."
        style={{ width: '80%', padding: '10px' }}
      />
      <button onClick={sendMessage} style={{ padding: '10px', marginLeft: '10px' }}>Send</button>
    </div>
  );
};

export default Chatbot;
