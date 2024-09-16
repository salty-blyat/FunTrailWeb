"use client"; // Add this to ensure it's a client component

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 flex items-center bg-slate-50 justify-between px-4 md:px-6 z-50">
      {/* Logo */}
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <span className="text-lg font-semibold">Acme Inc</span>
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden items-center gap-6 md:flex">
        <Link href="/discover" className="text-sm font-medium transition-colors hover:text-primary" prefetch={true}>
          Discover
        </Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
          Services
        </Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="flex items-center gap-4 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="block text-3xl focus:outline-none"
          aria-label="Toggle mobile menu">
          &#9776;
        </button>
      </div>

      {/* Sign In and Sign Up Buttons (Desktop only) */}
      <div className="hidden md:flex items-center gap-4">
        <Link
          href="signin"
          className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:inline-flex"
          prefetch={false}>
          Sign In
        </Link>
        <Link
          href="signup"
          className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          prefetch={false}>
          Sign Up
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-16 left-0 w-full bg-slate-50 shadow-lg md:hidden transition-transform transform ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-100%] opacity-0"}`}
        style={{ transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out' }}>
        <nav className="flex flex-col items-center gap-4 p-4">
          <Link href="/discover" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
            Discover
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium transition-colors hover:text-primary" prefetch={false}>
            Services
          </Link>
          <Link
            href="signin"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Sign In
          </Link>
          <Link
            href="signup"
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
