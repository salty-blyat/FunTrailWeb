'use client';
import React from 'react';

const BottomSlide: React.FC = () => {
  return (
    <div className="flex flex-col bg-teal-700 mt-5 md:flex-row items-center justify-center p-6 shadow-lg md:space-y-0 md:space-x-6 max-w-6xl mx-auto rounded-lg">
      {/* Search Input */}
      <div className="flex items-center bg-teal-700 rounded-full overflow-hidden w-full max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow px-6 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full"
        />
        <button className="px-6 py-3 bg-teal-700 hover:bg-gray-300 focus:bg-gray-400 transition-colors rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M16.65 10a6.65 6.65 0 1 1-13.3 0 6.65 6.65 0 0 1 13.3 0z"
            />
          </svg>
        </button>
      </div>
      {/* Dropdowns */}
      <div className="flex items-center space-x-4 w-full md:w-auto justify-between">
        <select className="w-full md:w-auto px-20 py-3 text-lg bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Hotels</option>
        </select>
        <select className="w-full md:w-auto px-20 py-3 text-lg bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>Restaurant</option>
        </select>
      </div>
    </div>
  );
};

export default BottomSlide;
