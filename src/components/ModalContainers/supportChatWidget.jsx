import React, { useState } from "react";

const initialMessages = [
  {
    id: 1,
    from: "support",
    text: "Hi driver, this is TSTS support. How can we help you today?",
    time: "Now",
  },
  {
    id: 2,
    from: "support",
    text: "For urgent issues you can also call +233 20 000 0000.",
    time: "Now",
  },
];

const SupportChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      id: Date.now(),
      from: "driver",
      text: input.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Simple auto-reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          from: "support",
          text: "Thanks, we have received your message and will respond shortly.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 800);
  };

  return (
    <div className="support-chat-root">
      {!isOpen && (
        <button
          className="support-chat-button"
          onClick={() => setIsOpen(true)}
        >
          💬 Contact Support
        </button>
      )}

      {isOpen && (
        <div className="support-chat-window">
          <div className="support-chat-header">
            <div>
              <h4>TSTS Support</h4>
              <span>Online • +233 20 000 0000</span>
            </div>
            <button
              className="support-chat-close"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
          <div className="support-chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`support-chat-message support-chat-message-${msg.from}`}
              >
                <div className="support-chat-bubble">{msg.text}</div>
                <span className="support-chat-time">{msg.time}</span>
              </div>
            ))}
          </div>
          <form className="support-chat-input-row" onSubmit={handleSend}>
            <input
              type="text"
              className="support-chat-input"
              placeholder="Type a message to support..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="support-chat-send">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SupportChatWidget;

