"use client";

import { useState } from "react";
import Image from "next/image";

export default function EnquiriesSection() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] flex sm:flex-col items-center justify-center overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/enquire.png" // replace with your own image path
        alt="Kadi-C Farm"
        fill
        priority
        className="object-cover"
      />

      {/* DARK GREEN OVERLAY */}
      <div className="absolute inset-0 bg-green-900/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl px-6 md:px-16 h-auto">
        {/* TEXT */}
        <h2 className="text-white text-3xl md:text-4xl font-semibold font-[Georgia] mb-6 md:mb-0 text-center md:text-left">
          For Enquiries
        </h2>

        {/* BUTTON */}
        <div className="hidden md:block">
        <a
          href="/contact"
          className="bg-green-700 hover:bg-green-600 px-6 py-2 rounded-full text-white font-semibold"
        >
          Contact Us
        </a>
      </div>
      </div>
    </section>
  );
}
