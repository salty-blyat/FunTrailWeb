'use client';
import React from 'react';

function SlideBar() {
  const slide = {
    imgSrc: '/image_login/ang.jpg', // Update with the actual image path
    title: 'Angkor Wat .A magnificent temple complex in Cambodia ....',
    description: 'Angkor Wat, a magnificent temple complex in Cambodia, is renowned for its intricate architecture and historical significance. Stunning and iconic.',
  };

  return (
    <div className="relative w-full h-[600px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src={slide.imgSrc}
        alt="Slide"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center px-8 lg:px-20">
        {/* Title */}
        <h1 className="text-white text-3xl lg:text-5xl font-bold max-w-lg">
          {slide.title}
        </h1>
        
        {/* Description */}
        <p className="text-white text-lg lg:text-xl mt-4 max-w-xl">
          {slide.description}
        </p>
        
        {/* Button */}
        <button className="mt-6 w-40 py-3 bg-black text-white text-lg font-semibold flex items-center justify-center hover:bg-gray-800">
          Explore <span className="ml-2">&#10142;</span>
        </button>
      </div>
    </div>
  );
}

export default SlideBar;
