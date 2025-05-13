import React, { useState, useRef, useEffect } from 'react';
import AboutUs from "./AboutUs";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Welcome to Vintage Gem Old Money Fits! Ask me anything about our timeless, premium fashion pieces.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const reply = getBotResponse(input);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: reply }]);
      setIsTyping(false);
    }, 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  const getBotResponse = (message) => {
    const text = message.toLowerCase();

    if (/hello|hi|hey|greetings|howdy|morning|afternoon|evening/.test(text)) {
      return "🎩 Greetings, dapper soul! Welcome to Vintage Gem Old Money Fits. How may I assist you in finding your next iconic look today?";
    }

    if (/do you have|in stock|available|sell.*clothes|which.*outfits/.test(text)) {
      return "🛍️ Absolutely! We carry a curated collection of vintage and luxury fits for those with a keen eye for sophistication. Explore our selection of timeless pieces today!";
    }

    if (/price|cost|how much|rate|charges|expensive/.test(text)) {
      return "💎 Our collection features pieces ranging from Ksh 5,000 to Ksh 25,000. Invest in pieces that transcend trends and will last you a lifetime.";
    }

    if (/payment|pay|methods|m-pesa|stk|checkout|paying/.test(text)) {
      return "💳 We offer smooth and secure payments via M-Pesa, including STK push for seamless transactions. Complete your purchase with ease.";
    }

    if (/delivery|ship|shipping|how long|when.*receive|send/.test(text)) {
      return "🚚 Delivery is swift and secure! We offer nationwide shipping across Kenya, and you'll receive your order in 1-3 business days. Luxury fits delivered to your door.";
    }

    if (/return|refund|exchange|doesn.*fit|wrong size|policy/.test(text)) {
      return "🔄 Should you need to exchange or return your items, we offer a 7-day window for unworn, undamaged items. We ensure a hassle-free experience, just like the elegance of our fits.";
    }

    if (/vintage|classic|old money|luxury|high-end|timeless/.test(text)) {
      return "💼 Our pieces are hand-selected from the finest vintage and luxury collections. With each item, you're not just wearing clothes—you're wearing history and luxury.";
    }

    if (/size|fit|available sizes|do you have size/.test(text)) {
      return "📏 Our vintage pieces come in various sizes, ranging from XS to XL. For the perfect fit, feel free to reach out if you need guidance.";
    }
    if (/where|location|place|how can i find you/.test(text)) {
      return "📏 Our company is located in Nairobi near afia center,you can also reach us on social media@vintage gem old money fits, feel free to reach out if you need guidance.";
    }

    return "🤖 I’m afraid I don’t have a response for that. Ask me about our timeless vintage pieces, delivery, payment, or return policies!";
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 z-50">
      {isOpen && (
        <div className="shadow-lg border rounded-b-lg bg-white flex flex-col h-[400px]">
          <div className="bg-emerald-600 text-dark p-3 font-bold"><h1>🤖 Vintage Gem Bot</h1></div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-xs whitespace-pre-line ${
                  msg.sender === 'user' ? 'bg-blue-100 self-end ml-auto' : 'bg-gray-200 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="text-sm text-gray-400 italic">⌛ Vintage Gem Bot is curating your response...</div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex p-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded px-2 py-1"
              placeholder="Ask about vintage fits or luxury pieces..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-emerald-600 text-dark px-3 py-1 rounded"
            >
              🚀 Send
            </button>
          </div>
        </div>
      )}
      <AboutUs/>

    </div>
  
  );
};

export default Chatbot;
