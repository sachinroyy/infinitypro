import React, { useState } from 'react';

const FullScreenFrame = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900`}>
      {/* Full-Screen Frame with Black Border */}
      <div className="w-full h-full  border-black flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 bg-black dark:bg-gray-700">
          {/* Company Name */}
          <div className="text-9xl font-bold text-gray-900 dark:text-gray-100 mb-3 sm:mb-0">infinity</div>
          
          {/* Logout Button and Dark Mode Toggle */}
          <div className="flex space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
            <button 
              onClick={toggleDarkMode}
              className="bg-white text-black px-4 py-2 rounded">
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
        
        {/* Content Area: Two Equal Halves */}
        <div className="flex flex-col sm:flex-row flex-1">
          {/* Left Half */}
          <div className="w-full sm:w-1/2 bg-gray-100 dark:bg-gray-700 p-4 sm:p-8 flex flex-col items-center justify-center space-y-6">
            <h1 className="text-3xl sm:text-3x1 font-bold text-gray-900 dark:text-gray-100">Auth Code Generator</h1>
            <input
              type="text"
              placeholder="app id"
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="URL"
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Generator</button>
            </div>
          </div>
          {/* Right Half */}
          <div className="w-full sm:w-1/2 bg-gray-200 dark:bg-gray-800 p-4 sm:p-8 flex flex-col items-center justify-center space-y-6">
            <h1 className="text-3xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">Access Token Genarator</h1>
            <input
              type="text"
              placeholder="Auth Code "
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            />
            <input
              type="text"
              placeholder="SECRET KEY"
              className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
            />
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded">Generator</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenFrame;
