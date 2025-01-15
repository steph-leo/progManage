// frontend/src/components/Map/index.jsx
import React from 'react';

export const DemoMap = () => (
  <div className="relative w-full h-64 bg-blue-50 rounded-lg overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="w-full h-full bg-blue-100">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-16 h-1 bg-blue-400 rotate-45" />
      </div>
    </div>
  </div>
);