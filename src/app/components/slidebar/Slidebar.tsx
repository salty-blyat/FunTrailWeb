'use client';
import React, { useState } from 'react';

function Slidebar() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imgSrc: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2560&q=80',
      text: 'The Beauty of Nature',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80',
      text: 'Explore the Wilderness',
    },
    {
      imgSrc: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80',
      text: 'Discover New Horizons',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[1000px] w-full">
        <img
          src={slides[currentSlide].imgSrc}
          alt={`Slide ${currentSlide + 1}`}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">{slides[currentSlide].text}</h1>
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 bg-white p-2 rounded-full shadow-lg"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 bg-white p-2 rounded-full shadow-lg"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slidebar;
