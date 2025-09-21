import React from 'react';
import { Search, Bell, MoreHorizontal, Share2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="relative flex-1 max-w-lg mr-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search size={20} className="text-gray-400" />
        </span>
        <input
          type="search"
          placeholder="Search for anything..."
          className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
          <Share2 size={20} />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
          <Bell size={20} />
        </button>
        <button className="w-10 h-10 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
          <MoreHorizontal size={20} />
        </button>
        <div className="flex items-center pl-4 border-l border-gray-200">
          <div className="text-right mr-3">
            <h4 className="font-semibold text-sm">Palak Jain</h4>
            <p className="text-xs text-gray-500">Rajasthan, India</p>
          </div>
          <img
            src="https://i.pravatar.cc/40?u=palakjain"
            alt="Palak Jain"
            className="w-10 h-10 rounded-full border-2 border-gray-200"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;