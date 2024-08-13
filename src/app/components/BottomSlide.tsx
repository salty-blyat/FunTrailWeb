import React from 'react';
import { FaFantasyFlightGames } from "react-icons/fa6";
import { MdAirlineStops } from "react-icons/md";
import { MdOutlineSupport } from "react-icons/md";



const BottomSlide: React.FC = () => {
  return (
    <div className="bg-yellow-400 p-6 rounded-lg flex flex-col md:flex-row items-center">
      {/* Left Text Section */}
      <div className="md:w-1/3 text-black font-bold text-lg mb-4 md:mb-0">
        <h2>When you book flights with us, you have an edge</h2>
      </div>

      {/* Right Box Section */}
      <div className="md:w-2/3 flex flex-col md:flex-row gap-4">
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-2">
          <FaFantasyFlightGames className="text-2xl text-black size-12" />
          <div className="text-sm">
            <p>Add Price Drop Protection. Get an automatic refund if the flight price drops.</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-2">
          <MdAirlineStops className="text-2xl text-black size-12" />
          <div className="text-sm">
            <p>Earn both airline miles and OneKeyCash™</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center gap-2">
          <MdOutlineSupport className="text-2xl text-black size-12" />
          <div className="text-sm">
            <p>Get support in about a minute</p>
          </div>
        </div>
      </div>
      <div/>
      </div>
      

); 
};
export default BottomSlide;
