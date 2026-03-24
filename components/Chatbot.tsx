'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, RotateCcw, Send, Bot, User } from 'lucide-react';
import { marked } from 'marked';

/**
 * AI Chatbot cao cấp (Glassmorphism + OpenRouter + Markdown)
 * Tích hợp cho chuyên gia Nguyễn Văn Ninh.
 */

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Chào bạn! Tôi là trợ lý AI của **Nguyễn Văn Ninh**. Tôi có thể giúp gì cho bạn về giải pháp **Điện Năng Lượng Mặt Trời** tại Đà Nẵng không? 🌞',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll khi có tin nhắn mới
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Logic nút Refresh
  const handleRefresh = () => {
    setIsRefreshing(true);
    // Xóa lịch sử chat và trả về tin nhắn chào mặc định
    setMessages([
      {
        role: 'assistant',
        content: 'Chào bạn! Tôi là trợ lý AI của **Nguyễn Văn Ninh**. Tôi có thể giúp gì cho bạn về giải pháp **Điện Năng Lượng Mặt Trời** tại Đà Nẵng không? 🌞',
      },
    ]);
    
    // Sau 500ms dừng animation xoay
    setTimeout(() => {
      setIsRefreshing(false);
    }, 500);
  };

  // Logic gửi tin nhắn
  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input.trim() };
    const currentMessages = [...messages, userMsg];
    
    setMessages(currentMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: currentMessages.map(m => ({ role: m.role, content: m.content })) 
        }),
      });

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.reply || 'Dạ, tôi chưa nhận được phản hồi. Hãy thử lại ạ.' },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Dạ, đã có lỗi kết nối. Bạn liên hệ trực tiếp Zalo: **0123456789** nhé!' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSendMessage();
  };

  return (
    <>
      {/* Nút Floating Chatbot */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-[999] w-16 h-16 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-indigo-500/40 text-white ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500 border-2 border-white"></span>
        </span>
      </motion.button>

      {/* Cửa sổ Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.8 }}
            className="fixed bottom-6 right-6 z-[1000] w-[400px] h-[600px] max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)] flex flex-col rounded-[2.5rem] border border-white/20 bg-white/80 backdrop-blur-2xl shadow-2xl shadow-slate-900/10 overflow-hidden border-slate-200/50"
          >
            {/* Header */}
            <div className="px-6 py-5 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-between text-white shadow-lg shadow-indigo-500/20">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-indigo-700 rounded-full animate-pulse shadow-sm"></span>
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight">AI Trợ lý Nguyễn Văn Ninh</h4>
                  <p className="text-[10px] text-white/70 uppercase font-black tracking-widest mt-0.5 flex items-center gap-1.5">
                    Trực tuyến
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.button
                  onClick={handleRefresh}
                  animate={{ rotate: isRefreshing ? 360 : 0 }}
                  transition={{ duration: 0.5, ease: "linear" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 scroll-smooth bg-slate-50/10">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <Bot className="w-4 h-4 text-indigo-600" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] px-5 py-3 rounded-[1.5rem] shadow-sm text-sm border ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-tr-none border-indigo-400/20'
                        : 'bg-white text-slate-700 rounded-tl-none border-slate-200 shadow-slate-200/50'
                    }`}
                  >
                    <div 
                      className="chat-markdown prose prose-sm max-w-none" 
                      dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) }}
                    />
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 shadow-sm mt-1">
                      <User className="w-4 h-4 text-indigo-700" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 justify-start items-center"
                >
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                    <Bot className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div className="bg-white px-5 py-4 rounded-[1.5rem] rounded-tl-none border border-slate-200 shadow-sm shadow-slate-200/50 flex gap-1.5 items-center">
                    <span className="text-[10px] uppercase font-black text-slate-400 tracking-widest mr-2">Đang nhập</span>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-6 bg-white border-t border-slate-100/50">
              <div className="flex gap-2 p-2 bg-slate-50 border border-slate-200 rounded-[1.5rem] focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500/50 transition-all duration-300">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Hỏi bất cứ điều gì..."
                  className="flex-1 px-4 py-2 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-indigo-600/20 active:shadow-none"
                >
                  <Send className="w-5 h-5 pointer-events-none" />
                </motion.button>
              </div>
              <p className="text-[9px] text-center text-slate-400 mt-3 uppercase tracking-widest font-bold">
                Mạnh mẽ bởi Agentic AI Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
