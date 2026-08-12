import React from "react";

export const LeftSection = () => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-indigo-800 to-purple-800 p-12 text-white relative overflow-hidden">
      <div className="absolute w-72 h-72 rounded-full bg-pink-400 opacity-20 blur-3xl top-0 left-0"></div>

      <div className="absolute w-96 h-96 rounded-full bg-indigo-300 opacity-20 blur-3xl bottom-0 right-0"></div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJZtgAKLiIH-bgV_zlxEEnuDeT07CH0OGq7rieLziGfUGc0Eifi83PZzF&s=10"
        alt="Login"
        className="w-full h-full object-cover"
      />

      <h1 className="text-5xl font-bold mt-10 z-10">Welcome</h1>

      <p className="text-center text-lg text-gray-200 mt-4 z-10 max-w-md">
        Create your account and start managing your CRUD application with an
        elegant dashboard.
      </p>
    </div>
  );
};
