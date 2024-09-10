'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Footer Branding */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Thank you for your traveling</h2>
            <p className="mt-1 text-gray-400">Discover your perfect destination with us</p>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-8 mb-4 md:mb-0">
            <a href="/" className="hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
            <a href="/contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.89 3.54 8.94 8.2 9.8v-6.93h-2.47V12.1h2.47v-1.92c0-2.4 1.43-3.72 3.63-3.72 1.05 0 2.15.19 2.15.19v2.36h-1.22c-1.2 0-1.57.75-1.57 1.52v1.77h2.67l-.43 2.84h-2.24v6.93C18.46 21.01 22 16.96 22 12.07z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569a10.08 10.08 0 0 1-2.825.775 4.9 4.9 0 0 0 2.163-2.724c-.93.555-1.95.957-3.042 1.184A4.914 4.914 0 0 0 16.615 3c-2.828 0-5.118 2.288-5.118 5.109 0 .4.046.79.132 1.165-4.25-.214-8.017-2.248-10.537-5.332a5.08 5.08 0 0 0-.691 2.572c0 1.773.894 3.333 2.256 4.248a4.898 4.898 0 0 1-2.314-.638v.064c0 2.476 1.77 4.545 4.12 5.01a4.938 4.938 0 0 1-1.299.173c-.317 0-.626-.03-.928-.089a4.93 4.93 0 0 0 4.604 3.417A9.86 9.86 0 0 1 2 19.54a13.978 13.978 0 0 0 7.548 2.204c9.056 0 14-7.496 14-13.986 0-.214 0-.428-.016-.64a9.76 9.76 0 0 0 2.422-2.515l-.047-.02z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.063 2.633.345 3.608 1.32.975.976 1.257 2.243 1.32 3.609.058 1.266.069 1.646.069 4.85 0 3.204-.011 3.584-.07 4.85-.063 1.366-.345 2.633-1.32 3.608-.976.975-2.243 1.257-3.609 1.32-1.266.058-1.646.069-4.85.069-3.204 0-3.584-.011-4.85-.07-1.366-.063-2.633-.345-3.608-1.32-.976-.976-1.257-2.243-1.32-3.609-.058-1.266-.069-1.646-.069-4.85 0-3.204.011-3.584.07-4.85.063-1.366.345-2.633 1.32-3.608.975-.976 2.243-1.257 3.609-1.32 1.266-.058 1.646-.069 4.85-.069M12 0C8.741 0 8.332.013 7.053.072 5.773.131 4.53.402 3.44 1.492 2.35 2.582 2.079 3.825 2.02 5.105.963 5.835.951 6.245.951 12c0 5.755.012 6.165.07 7.444.059 1.28.33 2.523 1.42 3.613 1.09 1.09 2.333 1.361 3.613 1.42C8.332 23.987 8.741 24 12 24s3.668-.013 4.947-.072c1.28-.059 2.523-.33 3.613-1.42 1.09-1.09 1.361-2.333 1.42-3.613.059-1.279.07-1.689.07-7.444 0-5.755-.011-6.165-.07-7.444-.059-1.28-.33-2.523-1.42-3.613-1.09-1.09-2.333-1.361-3.613-1.42C15.668.013 15.259 0 12 0z" />
                <circle cx="12" cy="12" r="3.6" />
                <path d="M18.406 5.594a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
              </svg>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 FunTrail. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
