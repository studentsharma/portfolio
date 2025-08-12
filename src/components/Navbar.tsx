"use client";
import Link from "next/link";
import { useState } from "react";
import { LuSigma } from "react-icons/lu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-md border-b border-gray-800 shadow-xl z-50 h-[90px] text-white">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center h-full">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          <LuSigma className=" text-2xl md:text-3xl text-blue-400 " size={50} />
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            href="#home" 
            className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="#about" 
            className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="#projects" 
            className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          >
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link 
            href="#contact" 
            className="relative group px-3 py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 p-1 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 mt-1.5 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 mt-1.5 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-gray-900/98 backdrop-blur-md border-t border-gray-800 transition-all duration-500 ease-in-out transform ${
          isMobileMenuOpen 
            ? "max-h-80 opacity-100 translate-y-0" 
            : "max-h-0 opacity-0 -translate-y-4"
        } overflow-hidden`}
      >
        <div className="px-6 py-6 space-y-6">
          <Link
            href="#home"
            className="block text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block text-lg text-gray-300 hover:text-white hover:bg-gray-800/50 px-4 py-3 rounded-lg transition-all duration-300 transform hover:translate-x-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}