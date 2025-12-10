'use client'

import { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter your email address.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-16">
      <div  className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* === Left Section === */}
        <div>
          <div data-aos="zoom-in-right" className="flex items-center gap-2 mb-3">
            <img src="/images/logod.png" alt="Kadi-C Farm Logo" className="w-28 h-10" />
            
          </div>
          <p className="text-gray-300 mb-5">Welcome to Kadi-C Farm</p>

          {/* Social Icons */}
          <div data-aos="zoom-in-right" className="flex gap-4">
            <a href="https://wa.me/message/PPHNKUOGDB55H1" className="bg-white text-green-600 p-2 rounded-full hover:bg-green-600 hover:text-white transition">
              <FaWhatsapp size={18} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61580422739746" className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
              <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/kadi_c_farms?igsh=bTk5emJ5bWF3dnk1" className="bg-white text-pink-600 p-2 rounded-full hover:bg-pink-600 hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="https://youtube.com/@kadi-cfarms?si=U5vzKlSwoTFFGKoE" className="bg-white text-red-600 p-2 rounded-full hover:bg-red-600 hover:text-white transition">
              <FaYoutube size={18} />
            </a>
            <a href="https://www.linkedin.com/company/kadi-c-farms-ltd/about/?viewAsMember=true" className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-700 hover:text-white transition">
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* === Middle Section === */}
        <div data-aos="zoom-in-right" className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-green-500 transition">Home</a></li>
            <li><a href="/about" className="hover:text-green-500 transition">About</a></li>
            <li><a href="/products" className="hover:text-green-500 transition">Products</a></li>
            <li><a href="/ourTeam" className="hover:text-green-500 transition">Team</a></li>
            <li><a href="/contact" className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* === Right Section === */}
        <div data-aos="zoom-in-left">
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-gray-300 mb-4">Subscribe to newsletter</p>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 bg-blue-50 ">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-auto flex-1 rounded-full px-5 py-2 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-full transition"
            >
              Subscribe
            </button>
          </form>

          {message && (
            <p className="text-sm text-green-400 mt-2">{message}</p>
          )}
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Kadi-C Farm. All Rights Reserved.
      </div>
    </footer>
  );
}
