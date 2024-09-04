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
    <nav className="bg-teal-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="bg-gray-200 p-2 rounded-lg">
            <FaApple className="text-2xl text-gray-600" />
          </div>
          <span className="ml-2 text-lg font-semibold text-white">Logo</span>
        </div>

        {/* Links */}
        <div className="hidden lg:flex space-x-8 text-white">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Discover
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Hotel
          </Link>
          <Link href="/" className="hover:text-gray-300">
            Restaurant
          </Link>
          <Link href="/" className="hover:text-gray-300">
            About Us
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4 mb-3 mt-3">
          <Link href="/signin" className="text-white hover:text-gray-300 mt-2 mr-4">
            Signin
          </Link>
          <Link
            href="/signup"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <AiOutlineClose className="text-2xl text-white" />
            ) : (
              <AiOutlineMenu className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-teal-800 text-white shadow-lg`}
      >
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-teal-700">
          Home
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-teal-700">
          Discover
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-teal-700">
          Hotel
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-teal-700">
          Restaurant
        </Link>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-teal-700">
          About Us
        </Link>
        <Link
          href="/login"
          className="block py-2 px-4 text-sm hover:bg-teal-700"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="block py-2 px-4 text-sm bg-black text-white hover:bg-gray-800"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
