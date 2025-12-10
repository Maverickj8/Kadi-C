"use client";
import React, { useState, useEffect } from 'react';


export default function OurTeamPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isClient, setIsClient] = useState(false);

  const features = [
    { id: 1, text: "Global Support" },
    { id: 2, text: "Solutions Development" },
    { id: 3, text: "Account Management" },
    { id: 4, text: "Strong Relationship" },
  ];

  // Board members data - easily add more members here
  const boardMembers = [
    {
      id: 1,
      name: "Ugwuanyi Gerald Chika",
      position: "CEO",
      image: "/images/geralds.png",
      bio: "Experienced leader with BSc in Pure and Industrial Chemistry and Masters in Analytical chemistry.",
      email: "geraldugwuanyi7@gmail.com",
    },
    {
      id: 2,
      name: "Odoh Nnabuike Alexander",
      position: "CFO",
      image: "/images/blessings.jpg",
      bio: "Financial expert with extensive background in corporate finance and investment strategy.",
      email: "ugwublessing2005@gmail.com",
    },
    {
      id: 3,
      name: "Eze Chisom Juliet",
      position: "CTO",
      image: "/images/chisom.png",
      bio: "Software Engineering expert with extensive background in Web development an maintenance.",
      email: "chisomalbert30@gmail,com",
    },
  ];

  const getCardsToShow = () => {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  useEffect(() => {
    setIsClient(true);
    setCardsToShow(getCardsToShow());

    const handleResize = () => {
      setCardsToShow(getCardsToShow());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, boardMembers.length - cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="min-h-screen relative overflow-hidden pt-5 sm:pt-20">
        {/* Background with split design */}
        <div className="absolute inset-0">
          {/* Top green section */}
          <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-br from-emerald-300 via-green-400 to-emerald-400"></div>
          {/* Bottom white section */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-white"></div>
        </div>

        {/* Main Container */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16">
          {/* Header Label */}
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-800 text-xs sm:text-sm font-semibold tracking-wider uppercase">
              OUR TEAM
            </p>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
            {/* Left Column - Heading and Image */}
            <div data-aos="fade-right" className="space-y-6 sm:space-y-8">
              {/* Heading */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6">
                  Alone We can Do So Little,
                  <br />
                  Together We Can Do So Much.
                </h1>
                <div className="w-16 h-1 bg-black"></div>
              </div>

              {/* Team Image */}
              <div
                className="relative overflow-hidden rounded-lg shadow-2xl group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className={`w-full h-64 sm:h-80 lg:h-96 bg-gray-800 transition-transform duration-500 ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                >
                  {/* Placeholder for team image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <img src="/images/team.png" alt="Kadi-C Farm Logo" />
                  </div>
                </div>
                {/* Overlay effect */}
                <div
                  className={`absolute inset-0 bg-green-900 transition-opacity duration-500 ${
                    isHovered ? "opacity-10" : "opacity-0"
                  }`}
                ></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div data-aos="fade-left" className="space-y-6 sm:space-y-8 lg:pt-0">
              {/* Description Paragraphs */}
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-base leading-relaxed">
                <p className="text-gray-900">
                  Our experienced leadership team brings together over 50 years
                  of combined experience in agriculture, international trade,
                  and business management. The team includes industry experts in
                  organic farming, quality control specialists, and
                  international trade professionals,
                </p>
                <p className="text-gray-900">
                  ensuring comprehensive oversight of all operations. Our
                  leadership team brings extensive expertise in sustainable
                  agriculture, international trade, and organic food production
                  to deliver premium products with uncompromising standards.
                  Together, this team drives our position as a global leader in
                  sustainable organic agriculture while upholding our core
                  values.
                </p>
              </div>

              {/* Founder Section */}
              <div className="inline-block">
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-1"
                  style={{ fontFamily: "cursive" }}
                >
                  Gerald Chika
                </h2>
                <p className="text-black font-semibold text-sm sm:text-base">
                  Gerald Chika
                </p>
                <p className="text-gray-700 text-xs sm:text-sm uppercase tracking-wide">
                  FOUNDER/CEO
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3 sm:space-y-4">
                {features.map((feature) => (
                  <div
                    key={feature.id}
                    className={`flex items-center space-x-3 sm:space-x-4 transition-all duration-300 ${
                      hoveredFeature === feature.id
                        ? "transform translate-x-2"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredFeature(feature.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div
                      className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-green-600 flex items-center justify-center transition-all duration-300 ${
                        hoveredFeature === feature.id
                          ? "scale-110 bg-green-700"
                          : ""
                      }`}
                    >
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-900 font-medium text-sm sm:text-base lg:text-base">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Button */}
              <div className="pt-4 sm:pt-6">
                <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-sm sm:text-base">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className="min-h-screen bg-white">
        {/* Main Content */}
        <div className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 text-green-600/40">
              Board Of Directors
            </h1>

            {/* Carousel Container */}
            <div className="relative">
              {/* Cards Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: isClient
                      ? `translateX(-${currentIndex * (100 / cardsToShow)}%)`
                      : "translateX(0)",
                  }}
                >
                  {boardMembers.map((member) => (
                    <div
                      key={member.id}
                      className="flex-shrink-0 px-2 sm:px-3 "
                      style={{ width: `${100 / cardsToShow}%` }}
                    >
                      <div
                        className="relative group perspective-1000"
                        style={{ perspective: "1000px" }}
                      >
                        {/* Flip Card Container */}
                        <div
                          className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-180 h-80 sm:h-96 lg:h-[450px]"
                          style={{ transformStyle: "preserve-3d" }}
                        >
                          {/* FRONT OF CARD */}
                          <div
                            className="absolute inset-0 backface-hidden rounded-3xl shadow-lg overflow-hidden"
                            style={{ backfaceVisibility: "hidden" }}
                          >
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/10 to-green-600/80"></div>

                            {/* "directors" watermark */}
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                              <div
                                className="text-green-400/30 font-bold text-5xl sm:text-6xl lg:text-7xl"
                                style={{
                                  writingMode: "vertical-rl",
                                  textOrientation: "mixed",
                                  letterSpacing: "0.1em",
                                }}
                              >
                                directors
                              </div>
                            </div>

                            {/* Name and Position */}
                            <div className="absolute bottom-6 left-6 text-white z-10">
                              <h3 className="text-xl sm:text-2xl font-bold mb-1">
                                {member.name}
                              </h3>
                              <p className="text-sm sm:text-base text-white/90">
                                {member.position}
                              </p>
                            </div>
                          </div>

                          {/* BACK OF CARD */}
                          <div
                            className="absolute inset-0 backface-hidden rounded-3xl shadow-lg overflow-hidden bg-gradient-to-br from-green-600 to-green-800 rotate-y-180"
                            style={{
                              backfaceVisibility: "hidden",
                              transform: "rotateY(180deg)",
                            }}
                          >
                            <div className="h-full flex flex-col justify-center items-center p-6 sm:p-8 text-white">
                              <div className="text-center space-y-4">
                                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                  {member.name}
                                </h3>
                                <p className="text-base sm:text-lg font-semibold text-red-100 mb-4">
                                  {member.position}
                                </p>

                                <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>

                                <p className="text-sm sm:text-base leading-relaxed text-white/90 mb-6">
                                  {member.bio}
                                </p>

                                <div className="space-y-3 text-sm sm:text-base">
                                  <div className="flex items-center justify-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span className="text-white/90">
                                      {member.email}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-center gap-2">
                                    <svg
                                      className="w-5 h-5"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span className="text-white/90">
                                      {member.phone}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              {isClient && boardMembers.length > cardsToShow && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Dot Indicators */}
            {isClient && boardMembers.length > cardsToShow && (
              <div className="flex justify-center mt-8 gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-green-600 w-6 sm:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Description Text */}
            <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
              <p className="text-center text-gray-600 text-sm sm:text-base leading-relaxed px-4">
                "Our Executive Team is responsible for guiding Kadi-C’s strategy, financial growth, and talent development, all while upholding our commitment to nourishing the world responsibly. Bringing together diverse expertise from within and outside the industry, these leaders have a proven history of delivering results. Their collective goal is to establish Kadi-C as the most trusted partner in food and agriculture."
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .group:hover .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
          }
        `}</style>
      </div>
    </>
  );
}
