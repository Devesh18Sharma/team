"use client";
import React from 'react';

interface MentorAvatarProps {
  name: string;
  university: string;
}

const MentorAvatar: React.FC<MentorAvatarProps> = ({ name, university }) => {
  return (
    <div className="flex items-center space-x-4">
      <img
        src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 100)}.jpg`}
        alt={`${name}'s avatar`}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-gray-600">{university}</p>
      </div>
      <button className="ml-auto bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition-colors">
        Message
      </button>
    </div>
  );
};

export default MentorAvatar;
