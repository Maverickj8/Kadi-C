"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon package

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 lg:px-20 py-4 bg-green-900/40 backdrop-blur-sm z-50">
      {/* Logo */}

      <img className="text-2xl font-bold flex items-center gap-2 w-28 h-10" src="/images/logod.png" alt="Kadi-C Farm Logo" />

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg text-green-100">
        <li><a href="/" className="hover:text-green-300">Home</a></li>
        <li><a href="about" className="hover:text-green-300">About</a></li>
        <li><a href="products" className="hover:text-green-300">Products</a></li>
        <li><a href="projects" className="hover:text-green-300">Projects</a></li>
        <li><a href="team" className="hover:text-green-300">Team</a></li>
        
      </ul>

      {/* Contact Button */}
      <div className="hidden md:block">
        <a
          href="/contact"
          className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold"
        >
          Contact Us
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-green-100"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-900/95 p-6 flex flex-col space-y-4 md:hidden">
          <a href="#" className="hover:text-green-300">About</a>
          <a href="#" className="hover:text-green-300">Services</a>
          <a href="#" className="hover:text-green-300">Projects</a>
          <a href="#" className="hover:text-green-300">Team</a>
          <a
            href="#"
            className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
