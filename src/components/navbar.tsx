import React from "react";

const navbar = () => {
  return (
    <nav className="p-4 h-full">
      <div className="flex items-center justify-between">
        <div id="logo">
          <h1 className="font-bold text-2xl text-slate-950">Quick.</h1>
        </div>

        <div>
          <div className="flex gap-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
