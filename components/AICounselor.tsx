import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';

export const LiveChatCounselor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Namaste! Welcome to Students Helpline Nepal. Ask me about MBBS fees, top colleges in Bangladesh, or documentation requirements." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  
  // Ref to store the chat session instance
  const chatSessionRef = useRef<any>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Simulate chat response for demo purposes
      // In production, connect to your backend API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const response = getAutomatedResponse(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later or call us at +977 98510-12345.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const getAutomatedResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('fee') || lowerQuery.includes('cost') || lowerQuery.includes('price')) {
      return "MBBS fees in Bangladesh range from NPR 35-50 lakhs for the complete course. This includes tuition for 5 years. For exact fees and payment plans, please contact our office at +977 98510-12345.";
    }
    
    if (lowerQuery.includes('admission') || lowerQuery.includes('eligibility') || lowerQuery.includes('qualify')) {
      return "For MBBS admission, you need 50% in PCB (Physics, Chemistry, Biology) for general category. We handle the complete admission process. Visit our office for a free counseling session!";
    }
    
    if (lowerQuery.includes('document') || lowerQuery.includes('paper')) {
      return "Required documents: SEE & +2 marksheets, passport, medical fitness certificate, and police clearance. Our team assists with all documentation and attestation. Call us for the complete checklist.";
    }
    
    if (lowerQuery.includes('university') || lowerQuery.includes('college')) {
      return "We partner with NMC & BMDC recognized universities like Dhaka National Medical College, Enam Medical College, and more. All are WHO-listed. Check our Universities page for details!";
    }
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('namaste')) {
      return "Namaste! How can I help you today? Ask me about MBBS programs, fees, admission process, or documentation.";
    }
    
    return "Thank you for your question! For detailed information, please call us at +977 98510-12345 or visit our office in Thapathali. Our counselors are available 9 AM - 6 PM, Sunday to Friday.";
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-transform hover:scale-105 ${isOpen ? 'hidden' : 'flex'} bg-[#F2672E] text-white items-center gap-2`}
      >
        <MessageSquare className="w-6 h-6" />
        <span className="font-semibold hidden sm:inline">Live Chat Support</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[350px] h-[500px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 font-sans">
          {/* Header */}
          <div className="bg-[#0A2647] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <h3 className="font-bold">Students Helpline Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-lg text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#146C94] text-white rounded-br-none' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-2 items-center">
                  <Loader2 className="w-4 h-4 animate-spin text-[#146C94]" />
                  <span className="text-xs text-slate-500">Typing...</span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about MBBS, fees, etc..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-[#146C94] text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#0A2647] text-white p-2 rounded-lg hover:bg-[#146C94] transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};