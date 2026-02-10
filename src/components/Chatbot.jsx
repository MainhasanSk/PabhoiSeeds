import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Namaste! I am Krishi Mitra. How can I help you with your farming today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            let botResponse = "I can help with that! Could you please provide more details?";
            const lowerInput = input.toLowerCase();

            if (lowerInput.includes('rain') || lowerInput.includes('water')) {
                botResponse = "For heavy rainfall areas, I recommend our Hybrid Paddy seeds. They have excellent water resistance.";
            } else if (lowerInput.includes('assam')) {
                botResponse = "In Assam, rice and tea are major crops. Our Paddy seeds are optimized for the local climate.";
            } else if (lowerInput.includes('price') || lowerInput.includes('cost')) {
                botResponse = "For pricing details, please select a specific seed product or contact us on WhatsApp.";
            } else if (lowerInput.includes('guide')) {
                botResponse = "We provide detailed growing guides with each packet. Generally, soil preparation is key.";
            }

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: botResponse,
                sender: 'bot',
                footer: "Based on Pabhoi Organic Seeds data"
            }]);
        }, 1000);
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                onClick={toggleChat}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    backgroundColor: 'var(--color-primary)',
                    color: 'white',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: 'var(--shadow-lg)',
                    zIndex: 900,
                    border: '4px solid white',
                    cursor: 'pointer'
                }}
                className="animate-fade-in"
            >
                {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
            </button>

            {/* Blinking Text Label */}
            {!isOpen && (
                <>
                    <div style={{
                        position: 'fixed',
                        bottom: '35px',
                        right: '95px',
                        backgroundColor: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        zIndex: 900,
                        animation: 'pulse-fade 2s infinite',
                        pointerEvents: 'none'
                    }}>
                        <span style={{
                            color: 'var(--color-primary)',
                            fontWeight: 'bold',
                            fontSize: '14px',
                            whiteSpace: 'nowrap'
                        }}>
                            Pabhoi AI Krishi Mitra
                        </span>
                    </div>
                    <style>{`
                        @keyframes pulse-fade {
                            0% { opacity: 1; transform: scale(1); }
                            50% { opacity: 0.8; transform: scale(0.98); }
                            100% { opacity: 1; transform: scale(1); }
                        }
                    `}</style>
                </>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '24px',
                    width: '350px',
                    maxHeight: '500px',
                    height: '80vh',
                    backgroundColor: 'white',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                    zIndex: 900,
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    animation: 'fadeIn 0.2s ease-out'
                }}>
                    {/* Header */}
                    <div style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                    }}>
                        <div style={{ background: 'white', padding: '6px', borderRadius: '50%' }}>
                            <Bot color="var(--color-primary)" size={18} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '16px', margin: 0, color: 'white' }}>Pabhoi AI Krishi Mitra</h3>
                            <p style={{ fontSize: '11px', margin: 0, opacity: 0.9 }}>Online</p>
                        </div>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flexGrow: 1,
                        padding: '16px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        backgroundColor: '#f5f5f5'
                    }}>
                        {messages.map(msg => (
                            <div key={msg.id} style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%'
                            }}>
                                <div style={{
                                    backgroundColor: msg.sender === 'user' ? 'var(--color-secondary)' : 'white',
                                    color: msg.sender === 'user' ? 'white' : 'var(--color-text)',
                                    padding: '10px 14px',
                                    borderRadius: '12px',
                                    borderBottomRightRadius: msg.sender === 'user' ? '2px' : '12px',
                                    borderBottomLeftRadius: msg.sender === 'bot' ? '2px' : '12px',
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                    fontSize: '14px'
                                }}>
                                    {msg.text}
                                </div>
                                {msg.footer && (
                                    <div style={{ fontSize: '10px', color: '#999', marginTop: '4px', fontStyle: 'italic' }}>
                                        {msg.footer}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <form onSubmit={handleSend} style={{
                        padding: '12px',
                        backgroundColor: 'white',
                        borderTop: '1px solid #eee',
                        display: 'flex',
                        gap: '8px'
                    }}>
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            placeholder="Ask about seeds, weather..."
                            style={{
                                flexGrow: 1,
                                padding: '10px 14px',
                                borderRadius: 'var(--radius-full)',
                                border: '1px solid #ddd',
                                outline: 'none',
                                fontSize: '14px'
                            }}
                        />
                        <button type="submit" style={{
                            backgroundColor: 'var(--color-primary)',
                            color: 'white',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}
        </>
    );
};

export default Chatbot;
