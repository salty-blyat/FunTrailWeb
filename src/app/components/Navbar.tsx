"use client";

import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaApple className="text-2xl" />
          <span className="ml-2 text-lg font-semibold">MyLogo</span>
        </div>

        <div className="hidden lg:flex space-x-8">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Discover
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            About
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Services
          </Link>
        </div>

        <div className="flex space-x-4 items-center">
          <div className="hidden lg:flex space-x-4">
            <Link
              href="/signin"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              href="/signup" // Assuming you will create a signup page later
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Sign Up
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-lg`}
      >
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Discover
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          About
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Services
        </Link>
        <Link
          href="/signin"
          className="block py-2 px-4 text-sm hover:bg-gray-200 cursor-pointer"
        >
          Sign In
        </Link>
        <Link
          href="/signup" // Assuming you will create a signup page later
          className="block py-2 px-4 text-sm bg-blue-600 text-white hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
