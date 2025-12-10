"use client";
import { useState } from "react";

export default function ValuesSection() {
  const [active, setActive] = useState(null);

  const values = [
    {
      id: 1,
      title: "Organic Integrity",
      text: "KADI C FARMS restores global food integrity with organic, sustainable farming that protects nature and delivers quality produce.",
    },
    {
      id: 2,
      title: "Global Impact",
      text: "We deliver organic, sustainable food worldwide, improving health, supporting farmers, and protecting the planet for future generations.",
    },
    {
      id: 3,
      title: "Traceability",
      text: "We use blockchain to ensure full product traceability, letting customers track their food from seed to shelf.",
    },
  ];

  return (
    <section className="bg-[#111] text-white py-16 px-6 md:px-20">
      <div data-aos="flip-up" className="grid md:grid-cols-3 gap-8 border-t border-gray-700 pt-10">
        {values.map((item, index) => (
          <div
            key={item.id}
            className={`relative border-r border-gray-700 pr-6 last:border-none cursor-pointer transition-all ${
              active === index ? "text-green-400" : "text-gray-200"
            }`}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
          >
            <h2 className="text-2xl font-bold mb-2">{`0${item.id}`}</h2>
            <h3 className="font-semibold text-lg mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
