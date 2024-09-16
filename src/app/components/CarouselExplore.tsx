'use client';
import { useRef } from 'react';
import './styles/CarouselExplore.css'
import { LeftOutlined, RightOutlined} from '@ant-design/icons';
import Image from 'next/image';

const CarouselExplore = () => {
const destinations = [
{ name: 'Phnom Penh', properties: 602, image: '/province/penh.jpg' },
{ name: 'Siem Reap', properties: 879, image: '/province/sreab.jpg' },
{ name: 'Kampot', properties: 162, image: '/province/kompot.webp' },
{ name: 'Koh Rong Island', properties: 83, image: '/province/rongsonlem.jpg' },
{ name: 'Sihanoukville', properties: 141, image: '/province/sihanok.jpg' },
{ name: 'Koh Rong Sanloem', properties: 87, image: '/province/korong.jpg' },
];

const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
  if (scrollRef.current) {
  scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  }
  };

  const scrollRight = () => {
  if (scrollRef.current) {
  scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  }
  };

  return ( 
    <div>
      <h2 className="text-2xl font-bold text-gray-900">Explore Cambodia</h2>
      <p className="text-lg text-gray-600 mt-2">
        These popular destinations have a lot to offer
      </p>

      {/* Scrollable Container */}
      <div className="relative">
        <div className="flex items-center space-x-6 overflow-x-auto mb-6 no-scrollbar" // Add no-scrollbar class here
          ref={scrollRef}>
          {destinations.map((destination, index) => (
          <div key={index} className="min-w-[200px] group bg-white shadow-lg rounded-lg overflow-hidden">
            <Image src={destination.image} alt={destination.name} width={1000} height={1000}
              className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 ">
                {destination.name}
              </h3>
              <p className="text-gray-600 mb">{destination.properties}</p>
            </div>
          </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg flex items-center justify-center">
          <LeftOutlined className="text-gray-800" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg flex items-center justify-center">
          <RightOutlined className="text-gray-800" />
        </button>
      </div>
    </div> 
  );
  };



  export default CarouselExplore;