import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

export default function SritHelperAI() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Chat Content Workspace */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-6 flex flex-col justify-center">
        <div className="text-center max-w-lg mx-auto space-y-2">
          <span className="bg-[#FFBF00] text-[#002b5c] font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider inline-block">
            GEMINI 2.5 FLASH AI ASSISTANT
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002b5c]">
            SRIT Helper AI Workspace
          </h1>
          <p className="text-xs text-slate-500">
            Ask any questions regarding B.Tech admissions, department curricula, examination schedules, or placement records.
          </p>
        </div>

        {/* Embedded Chat Component */}
        <Chat initialMessage="Hello! I am SRIT Helper AI powered by Gemini 2.5 Flash. Ask me anything about admissions, courses, placements, or campus facilities at SRIT Anantapur!" />
      </main>
    </div>
  );
}
