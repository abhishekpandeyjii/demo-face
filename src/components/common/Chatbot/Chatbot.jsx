import { useState, useEffect, useRef } from 'react';
import { siteData } from '../../../data/siteData';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋 Welcome to ChoreDigital. What are you looking to build today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue.trim();
    const newMessages = [...messages, { sender: 'user', text: userMsg }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      // Prepare messages for OpenRouter API
      const apiMessages = [
        {
          role: 'system',
          content: `You are ChoreBot, the official customer support AI for ChoreDigital. 
You must strictly answer questions based ONLY on the provided website data. 
If a user asks something outside this data, politely decline and tell them you can only assist with ChoreDigital services. 
Be friendly, concise, and helpful. Always encourage users to leave their email or send an email if they want to build something or need a quote. 
Here is the official website data you must use as your only source of truth: 
${JSON.stringify(siteData)}`
        },
        ...newMessages.map(msg => ({
          role: msg.sender === 'bot' ? 'assistant' : 'user',
          content: msg.text
        }))
      ];

      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'http://localhost:5174',
          'X-Title': 'ChoreDigital Local Dev'
        },
        body: JSON.stringify({
          model: 'google/gemini-2.5-flash',
          messages: apiMessages,
          max_tokens: 1000,
        })
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || 'API Error');
      }

      const botResponse = data.choices[0].message.content;

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: "I'm sorry, I'm having trouble connecting right now. Please email us directly at support@chorevirtual.com." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const sendToEmail = () => {
    const transcript = messages.map(m => `${m.sender.toUpperCase()}: ${m.text}`).join('\n\n');
    const subject = encodeURIComponent("New Inquiry from ChoreDigital Chatbot");
    const body = encodeURIComponent(`Hello ChoreDigital Team,\n\nHere is a new inquiry from the website chatbot:\n\n${transcript}\n\nPlease get back to me.\n\nThanks!`);
    
    window.location.href = `mailto:support@chorevirtual.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="chatbot-container">
      {/* Floating Action Button */}
      <button 
        className={`chatbot-fab ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Chat"
      >
        <i className={isOpen ? "fas fa-times" : "fas fa-comment-dots"}></i>
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'active' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <i className="fas fa-robot"></i>
            </div>
            <div>
              <h4>ChoreBot</h4>
              <p>Online - Ready to help</p>
            </div>
          </div>
          <button className="chatbot-close" onClick={() => setIsOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-bubble-wrapper ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="chat-bubble-avatar">
                  <i className="fas fa-robot"></i>
                </div>
              )}
              <div className={`chat-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="chat-bubble-wrapper bot">
              <div className="chat-bubble-avatar">
                <i className="fas fa-robot"></i>
              </div>
              <div className="chat-bubble bot">
                <div className="typing-indicator">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          
          {messages.length > 2 && !isLoading && (
            <div className="chat-bubble-wrapper bot" style={{ marginTop: '10px' }}>
               <div className="chat-bubble-avatar" style={{ background: '#10B981' }}>
                  <i className="fas fa-envelope"></i>
                </div>
               <div className="chat-bubble bot action-bubble">
                 <button onClick={sendToEmail} className="btn-chat-email">
                   Send this chat to Email <i className="fas fa-paper-plane" style={{ marginLeft: '5px' }}></i>
                 </button>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chatbot-input-area" onSubmit={handleSend}>
          <input 
            type="text" 
            placeholder="Type your message..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" disabled={!inputValue.trim() || isLoading}>
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
