"use client";
import React from 'react';

const MyTeamMenu = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <ul className="flex space-x-4">
        <li className="cursor-pointer hover:text-blue-300 transition-colors">Home</li>
        <li className="cursor-pointer hover:text-blue-300 transition-colors">About Us</li>
        <li className="cursor-pointer hover:text-blue-300 transition-colors">Services</li>
        <li className="cursor-pointer hover:text-blue-300 transition-colors">Contact</li>
      </ul>
    </div>
  );
};

export default MyTeamMenu;
