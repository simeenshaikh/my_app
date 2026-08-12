import React from "react";

export const RightSection = () => {
  const inputClass =
    "w-full mt-2 rounded-xl border border-gray-300 bg-white/80 p-3 outline-none focus:border-indigo-600 focus:ring-4 focus:ring-indigo-200 duration-300";

  return (
    <div className="bg-white p-12">
      <h2 className="text-blue-600 mt-2 text-center text-4xl ">
        Forgot your password
      </h2>

      <div className="gap-5 mt-10 flex flex-col">
        <div className="mt-5">
          <label className="font-semibold">Email</label>
          
          <input
            type="email"
            className={inputClass}
            placeholder="john@gmail.com"
          />
        </div>
      </div>

      <button className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
        OTP
      </button>

      <p className="mt-8 text-center text-sm text-gray-500">
        <button className="ml-2 font-bold text-indigo-600 hover:text-pink-600">
          Sign In
        </button>
      </p>
    </div>
  );
};
