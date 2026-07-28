import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Send, Sparkles, RefreshCw, AlertCircle, Trash2, Zap, Award } from 'lucide-react';
import { Skeleton } from './Skeleton';

const SUGGESTED_PROMPTS = [
  "What is the highest placement package in 2026?",
  "Tell me about B.Tech CSE & AIDS fee structure",
  "What are the AP EAPCET cutoff ranks for SRIT?",
  "Give me an overview of NAAC A+ accreditation"
];

// Simple markdown formatter helper for clean bolding and lists
function FormattedMessage({ text }) {
  if (!text) return null;

  const lines = text.split('\n');
  return (
    <div className="space-y-1.5 leading-relaxed">
      {lines.map((line, index) => {
        let trimmed = line.trim();
        if (!trimmed) return <div key={index} className="h-1" />;

        // Bolding parser (**bold**)
        const parts = line.split(/(\*\*.*?\*\*)/g);
        const renderedLine = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-extrabold text-slate-900">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        // Bullet point lines
        if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
          return (
            <div key={index} className="flex items-start gap-2 pl-1">
              <span className="text-[#002b5c] font-bold">•</span>
              <span>{renderedLine}</span>
            </div>
          );
        }

        return <p key={index}>{renderedLine}</p>;
      })}
    </div>
  );
}

export default function Chat({
  initialMessage = "Hello! I am SRIT AI Genius Pro, powered by Gemini 2.5 Flash & Supabase Database. Ask me anything about admissions, placements, branch details, or campus life at SRIT Anantapur!",
  compact = false
}) {
  const [messages, setMessages] = useState([
    { role: 'model', text: initialMessage }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (e, textOverride) => {
    if (e) e.preventDefault();
    const userMessageText = textOverride || input;
    if (!userMessageText.trim() || isLoading) return;

    if (!textOverride) setInput('');
    setError(null);

    const newMessages = [...messages, { role: 'user', text: userMessageText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const chatHistory = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessageText,
          chatHistory
        })
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || 'Failed to receive response from Gemini Pro Engine.');
      }

      const botReply = data.reply || data.answer || 'Thank you for contacting SRIT AI Genius Pro!';
      setMessages(prev => [...prev, { role: 'model', text: botReply }]);
    } catch (err) {
      console.error('Chat error:', err);
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          text: '**SRIT AI Genius Pro Connection Notice**:\n\nPlease start the backend server by running `npm run dev` from the project root folder. The AI assistant will automatically connect and serve responses.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([{ role: 'model', text: initialMessage }]);
    setError(null);
  };

  return (
    <div className={`bg-white border border-slate-200 shadow-xl rounded-3xl overflow-hidden flex flex-col ${compact ? 'h-[490px]' : 'h-[630px] max-w-4xl mx-auto w-full'}`} aria-live="polite">
      
      {/* Header */}
      <div className="bg-[#002b5c] text-white p-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/10 text-[#FFBF00] flex items-center justify-center font-bold shadow-inner border border-white/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm text-white flex items-center gap-2">
              <span>SRIT AI Genius</span>
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-[#002b5c] text-[10px] font-mono font-black px-2.5 py-0.5 rounded-full uppercase shadow-xs flex items-center gap-1">
                <Zap className="w-3 h-3 fill-current" /> PRO VERSION
              </span>
            </h3>
            <p className="text-[10px] text-slate-200 font-medium">Gemini 2.5 Flash + Supabase Database Augmented</p>
          </div>
        </div>

        <button
          onClick={handleClear}
          title="Clear Chat History"
          className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors text-xs flex items-center gap-1 font-semibold"
        >
          <Trash2 className="w-4 h-4" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="bg-red-50 border-b border-red-200 p-3 px-6 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Feed */}
      <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 text-xs bg-[#f8fafc]">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'model' && (
              <div className="w-8 h-8 rounded-2xl bg-[#002b5c] text-[#FFBF00] flex items-center justify-center shrink-0 shadow-xs font-bold mt-0.5 border border-[#002b5c]/20">
                <Bot className="w-4 h-4" />
              </div>
            )}

            <div
              className={`p-4 rounded-3xl max-w-[85%] text-xs leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-[#002b5c] text-white rounded-br-xs shadow-md font-medium'
                  : 'bg-white text-slate-800 rounded-bl-xs border border-slate-200 shadow-sm'
              }`}
            >
              {msg.role === 'model' ? (
                <FormattedMessage text={msg.text} />
              ) : (
                msg.text
              )}
            </div>

            {msg.role === 'user' && (
              <div className="w-8 h-8 rounded-2xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 shadow-xs font-bold mt-0.5">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-2xl bg-[#002b5c] text-[#FFBF00] flex items-center justify-center shrink-0 shadow-xs font-bold mt-0.5">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white p-4 rounded-3xl rounded-bl-xs border border-slate-200 shadow-sm space-y-2 w-72">
              <div className="flex items-center gap-2 text-slate-600 font-mono text-[10px]">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#002b5c]" />
                <span>SRIT AI Genius Pro reasoning...</span>
              </div>
              <Skeleton width="w-full" height="h-3" />
              <Skeleton width="w-4/5" height="h-3" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Pills */}
      <div className="bg-slate-50 border-t border-slate-200/80 px-4 py-2 flex items-center gap-2 overflow-x-auto text-[10px] scrollbar-none">
        <span className="font-bold text-[#002b5c] uppercase text-[9px] shrink-0 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#FFBF00]" /> Prompts:
        </span>
        {SUGGESTED_PROMPTS.map((prompt, i) => (
          <button
            key={i}
            onClick={() => handleSend(null, prompt)}
            disabled={isLoading}
            className="shrink-0 bg-white hover:bg-[#002b5c] hover:text-white border border-slate-200 text-slate-700 font-medium px-3 py-1 rounded-full transition-all text-[11px] shadow-2xs"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={(e) => handleSend(e, null)} className="p-3 sm:p-4 bg-white border-t border-slate-200 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask SRIT AI Pro anything about admissions, placements, CSE, fees..."
          disabled={isLoading}
          className="flex-1 bg-slate-50 border border-slate-200 text-slate-900 text-xs px-4 py-3 rounded-2xl focus:outline-none focus:border-[#002b5c] focus:bg-white disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-[#002b5c] hover:bg-[#001e40] disabled:opacity-50 text-white font-extrabold px-5 py-3 rounded-2xl transition-all shadow-md flex items-center gap-1.5"
        >
          <Sparkles className="w-4 h-4 text-[#FFBF00]" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>

    </div>
  );
}
