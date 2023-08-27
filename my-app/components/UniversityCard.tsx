"use client";
import React from 'react';

interface UniversityCardProps {
  name: string;
}

const UniversityCard: React.FC<UniversityCardProps> = ({ name }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
        Learn More
      </button>
    </div>
  );
};

export default UniversityCard;
