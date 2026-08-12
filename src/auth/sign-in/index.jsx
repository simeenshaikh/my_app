import React from "react";
import { LeftSection } from "../sign-up/left-section";
import { RightSection } from "./right-section";

export const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 flex items-center justify-center p-8">
      <div className="w-full max-w-7xl rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl bg-white/10 border border-white/20 grid md:grid-cols-2">
        <LeftSection />

        <RightSection />
      </div>
    </div>
  );
};
