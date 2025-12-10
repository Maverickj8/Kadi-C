"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TargetMarket = () => {
  const router = useRouter();  // ✅ Correct location + correct import
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle navigation
  const handleNavigateToSegment = (segmentKey) => {
    router.push(`/segment/${segmentKey}`); // ✅ Works now
  };

  // Market segment data
  const homeMarketSegments = [
    {
      key: 'global-organic',
      title: 'Global Organic Consumer',
      subtitle: 'Health-conscious individuals seeking high-quality organic food products worldwide.',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&h=600&fit=crop',
      imagePosition: 'left'
    },
    {
      key: 'retail-chains',
      title: 'Retail Chains',
      subtitle: 'This segment includes both large supermarket chains expanding their organic offerings and boutique organic stores',
      image: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&h=600&fit=crop',
      imagePosition: 'right'
    },
    {
      key: 'export-markets',
      title: 'Export Markets',
      subtitle: 'Regions with high demand for organic produce such as Europe, North America, and Asia',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
      imagePosition: 'left'
    },
    {
      key: 'b2b-distributors',
      title: 'B2B Distributors',
      subtitle: 'Wholesalers and distributors specializing in organic and premium food products.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      imagePosition: 'right'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-15 px-10">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-700 mb-4">
            Target Market
          </h1>
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl mx-auto">
            Our market segmentation strategy focuses on five distinct yet interconnected customer groups.
          </p>
        </div>

        <div className="space-y-8">
          {homeMarketSegments.map((segment) => (
            <div key={segment.key} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 justify-center">
                
                {segment.imagePosition === 'left' ? (
                  <>
                    <div data-aos="fade-down-right" className="order-2 lg:order-1">
                      <div className="rounded-b-full overflow-hidden h-50">
                        <img 
                          src={segment.image}
                          alt={segment.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                    </div>

                    <div className="order-1 lg:order-2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-3">
                        {segment.title}
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base mb-6">
                        {segment.subtitle}
                      </p>
                      <button 
                        onClick={() => handleNavigateToSegment(segment.key)}
                        className="bg-white text-emerald-700 border-2 border-emerald-700 hover:bg-emerald-50 px-6 py-2 rounded-full font-semibold transition-colors inline-flex items-center self-start"
                      >
                        Discover More
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-3">
                        {segment.title}
                      </h2>
                      <p className="text-gray-600 text-sm sm:text-base mb-6">
                        {segment.subtitle}
                      </p>
                      <button 
                        onClick={() => handleNavigateToSegment(segment.key)}
                        className="bg-white text-emerald-700 border-2 border-emerald-700 hover:bg-emerald-50 px-6 py-2 rounded-full font-semibold transition-colors inline-flex items-center self-start"
                      >
                        Discover More
                      </button>
                    </div>

                    <div>
                      <div data-aos="fade-down-left" className="rounded-b-full overflow-hidden h-50">
                        <img 
                          src={segment.image}
                          alt={segment.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                      </div>
                    </div>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TargetMarket;
