import React from 'react';
import Sidebar from '../components/Sidebar';
import { SignIn } from '@clerk/react';

export default function SignInPage() {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      <Sidebar />

      <main className="flex-1 p-6 sm:p-10 flex flex-col items-center justify-center space-y-6">
        <div className="text-center space-y-2 max-w-md">
          <span className="bg-[#FFBF00] text-[#002b5c] font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider inline-block">
            SRIT AUTHENTICATION
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002b5c]">
            Sign In to Your Account
          </h1>
          <p className="text-xs text-slate-500">
            Access your student portal, academic records, and institutional tools using Clerk authentication.
          </p>
        </div>

        <div className="w-full max-w-md flex justify-center py-4">
          <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            fallbackRedirectUrl="/student-portal"
            appearance={{
              elements: {
                rootBox: "w-full shadow-lg rounded-3xl",
                card: "rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 bg-white",
                headerTitle: "text-lg font-extrabold text-[#002b5c]",
                headerSubtitle: "text-xs text-slate-500",
                formButtonPrimary: "bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold text-xs py-3 rounded-xl",
                footerActionLink: "text-[#002b5c] font-bold hover:underline"
              }
            }}
          />
        </div>
      </main>
    </div>
  );
}
