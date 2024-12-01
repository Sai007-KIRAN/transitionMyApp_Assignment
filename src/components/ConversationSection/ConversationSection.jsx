import React, { useState } from "react";
import "./ConversationSection.css";

const ConversationSection = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Rachel Adams",
      time: "9:08 PM",
      channel: "Received By WhatsApp",
      content:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.",
      isUser: false,
    },
    {
      id: 2,
      sender: "Anonymous",
      time: "9:08 PM",
      channel: "",
      content:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.",
      isUser: false,
    },
    {
      id: 3,
      sender: "You",
      time: "9:08 PM",
      channel: "Sent By WhatsApp",
      content:
        "Lorem ipsum dolor sit amet consectetur. Et tincidunt odio vivamus ac aliquam.",
      isUser: true,
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "You",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        channel: "Sent By WhatsApp",
        content: input,
        isUser: true,
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3 className="selected">Conversation</h3>
        <h3>Attachment</h3>
      </div>

      <div className="chat-body">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.isUser ? "user-message" : "other-message"}`}
          >
            <div className="message-info">
              {!msg.isUser && <div className="avatar">{msg.sender[0]}</div>}
              <div>
                <h4>{msg.sender}</h4>
                <p className="timestamp">
                  {msg.time} {msg.channel && `• ${msg.channel}`}
                </p>
              </div>
            </div>
            <p className="message-content">{msg.content}</p>
          </div>
        ))}
      </div>

      <div className="chat-footer">
        <div className="footer-options">
          <label>
            <input type="checkbox" /> SMS
          </label>
          <label>
            <input type="checkbox" /> WhatsApp
          </label>
          <label>
            <input type="checkbox" /> Email
          </label>
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
          />
          <button onClick={handleSend} className="send-button">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationSection;