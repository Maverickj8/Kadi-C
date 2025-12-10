"use client";

import { useParams, useRouter } from "next/navigation";
import React from "react";

const detailMarketSegments = {
  "global-organic": {
    title: "Global Organic Consumer",
    subtitle:
      "Health-conscious individuals seeking high-quality organic food products worldwide.",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop",
    content: `KADI C FARMS is dedicated to restoring the integrity of the 
global food supply. We believe in the power of natural, 
organic methods to produce food that nourishes both the 
body and the planet. Our commitment to organic farming 
goes beyond certification 3 it's about rebuilding soil health, 
protecting biodiversity, and ensuring sustainable water 
management.
Through careful crop rotation, natural pest control, and 
traditional farming wisdom, we maintain the delicate balance 
of nature while producing exceptional quality produce. Our 
farmers work in harmony with the environment, avoiding 
harmful chemicals and embracing methods that have 
sustained communities for generations`,
  },
  "retail-chains": {
    title: "Retail Chains",
    subtitle: "Large supermarket chains and boutique organic stores.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop",
    content: `Our phased approach to market expansion focuses first 
on establishing strong partnerships in key European 
markets, followed by entry into North American and Asian 
markets. We will leverage trade shows, industry networks, 
and digital marketing to build our brand presence and 
create lasting relationships with international buyers.
Through these strategic initiatives, KADI C FARMS is positioning itself as 
a leading provider of organic agricultural products in the global market, 
while maintaining our commitment to sustainable practices and 
community development`,
  },
  "export-markets": {
    title: "Export Markets",
    subtitle: "Regions with high demand for organic produce.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
    content: `KADI C FARMS has already obtained the necessary export 
certificates from reputable agents in Nigeria, ensuring compliance 
with international standards and regulations. This includes organic 
certification, phytosanitary certificates, and quality assurance 
documentation. Our compliance with both local and international 
standards positions us as a trusted supplier in the global market`,
  },
  "b2b-distributors": {
    title: "B2B Distributors",
    subtitle: "Wholesalers and distributors specializing in organic products.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    content: `We are currently seeking funding to establish a B2B platform, 
allowing global customers to access our products and place 
orders. This platform will be essential for connecting KADI C 
FARMS with the international market. Features will include real
time inventory management, automated order processing, and 
transparent pricing mechanisms to facilitate seamless trade 
relationships`,
  },
};

export default function SegmentDetailPage() {
  const params = useParams();
  const router = useRouter();

  const segmentKey = params.segmentKey;
  const segment = detailMarketSegments[segmentKey];

  if (!segment) {
    return <div className="p-10 text-red-500 text-xl">Segment not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      {/* Back Button */}
      <button
        onClick={() => router.push("/target")}
        className="m-6 flex items-center text-emerald-700 hover:text-emerald-800"
      >
        ← Back
      </button>

      <main className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-emerald-700 text-center mb-10">
          {segment.title}
        </h1>

        <div className="bg-white rounded-lg shadow-md p-8">
          <img
            src={segment.image}
            className="w-full rounded-2xl h-80 object-cover mb-6"
            alt={segment.title}
          />

          <p className="text-gray-700 leading-relaxed text-lg mb-6">
            {segment.content}
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="bg-emerald-700 text-white px-8 py-3 rounded-lg hover:bg-emerald-800 transition"
          >
            Place Your Order
          </button>
        </div>
      </main>
    </div>
  );
}
