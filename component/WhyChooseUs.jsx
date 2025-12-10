"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFlask, FaLeaf, FaShoppingCart } from "react-icons/fa";

export default function WhyChooseUs() {
  const [active, setActive] = useState(null);

  const items = [
    {
      id: 1,
      title: "Quality Control",
      description:
        "Our comprehensive quality control system includes regular soil testing, crop monitoring, post-harvest inspections, and detailed documentation at every stage of production.",
      icon: <FaFlask size={28} className="text-green-700" />,
    },
    {
      id: 2,
      title: "Food Safety",
      description:
        "We adhere to the strictest food safety standards, ensuring that our products are safe for consumption and free from harmful contaminants.",
      icon: <FaLeaf size={28} className="text-green-700" />,
    },
    {
      id: 3,
      title: "Customer Satisfaction",
      description:
        "Our goal is to build a loyal customer base who trusts our brand and values our commitment to excellence.",
      icon: <FaShoppingCart size={28} className="text-green-700" />,
    },
  ];

  return (
    <section className="w-full py-20 bg-[#A7CBBF] flex justify-center items-center px-6 md:px-12">
      <div className="w-full max-w-6xl bg-green-800 text-white rounded-lg shadow-lg p-10 md:p-14 border-4 text-center">
        {/* HEADER */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Why Choose Us</h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-sm md:text-base leading-relaxed mb-12">
          At KADI C FARMS, excellence isn't just a goal — it's the foundation of
          everything we do. Our unwavering commitment to quality, safety, and
          customer satisfaction drives every decision we make, from seed
          selection to final delivery.
        </p>

        {/* CARDS */}
        <div data-aos="flip-left" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setActive(item.id)}
              onMouseLeave={() => setActive(null)}
              className={`relative bg-gray-100 text-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 pt-12 flex flex-col items-center ${
                active === item.id ? "scale-105" : "scale-100"
              }`}
            >
              {/* ICON CIRCLE */}
              <div className="absolute -top-8 bg-white shadow-md w-16 h-16 rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-green-800 mt-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
