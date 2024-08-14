"use client";
import React, { useState } from 'react';
import { FaApple } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-md'>
      <div className='container mx-auto py-4 flex justify-between items-center'>

        {/* Left Section: Logo */}
        <div className='flex items-center'>
          <FaApple className='text-2xl' />
          <span className='ml-2 text-lg font-semibold'>MyLogo</span>
        </div>

        {/* Center Section: Navigation Links (hidden on small screens) */}
        <div className='hidden lg:flex space-x-8'>
          <a href='#' className='text-gray-500 hover:text-gray-900'>Discover</a>
          <a href='#' className='text-gray-500 hover:text-gray-900'>About</a>
          <a href='#' className='text-gray-500 hover:text-gray-900'>Services</a>
        </div>

        {/* Right Section: Sign In, Sign Up, and Mobile Menu Button */}
        <div className='flex space-x-4 items-center'>
          <div className='hidden lg:flex space-x-4'>
            <a href='#' className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700'>Sign In</a>
            <a href='#' className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>Sign Up</a>
          </div>
          <div className='lg:hidden'>
            <button onClick={toggleMenu}>
              {isOpen ? <AiOutlineClose className='text-2xl' /> : <AiOutlineMenu className='text-2xl' />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-white shadow-lg`}>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>Discover</a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>About</a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>Services</a>
        <a href='#' className='block py-2 px-4 text-sm hover:bg-gray-200'>Sign In</a>
        <a href='#' className='block py-2 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700'>Sign Up</a>
      </div>
    </nav>
  );
}

export default Navbar;
