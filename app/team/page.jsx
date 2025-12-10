"use client";

import React, { useState, useEffect } from "react";

const BoardOfDirectorsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [isClient, setIsClient] = useState(false);

  // Board members data - easily add more members here
  const boardMembers = [
    {
      id: 1,
      name: "Ugwuanyi Gerald Chika",
      position: "CEO",
      image: "/images/geralds.png",
      bio: "Experienced leader with BSc in Pure and Industrial Chemistry",
      email: "geraldugwuanyi7@gmail.com",
      phone: "+2349034307853",
    },
    {
      id: 2,
      name: "Odoh Nnabuike Alexander",
      position: "CFO",
      image: "/images/blessings.jpg",
      bio: "Financial expert with extensive background in corporate finance and investment strategy.",
      email: "ugwublessing2005@gmail.com",
      phone: "+234907894313",
    },
    {
      id: 3,
      name: "Eze Chisom Juliet",
      position: "CTO",
      image: "/images/chisom.png",
      bio: "Software Engineering expert with extensive background in Web development an maintainance",
      email: "chisomalbert30@gmail,com",
      phone: "+2348138931168",
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
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <svg
                  className="w-6 h-6 mr-2 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="font-semibold">Back</span>
              </button>
            </div>
            <div className="text-xl font-bold text-green-800">
              Board of Directors
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div data-aos="zoom-in" className="py-12 px-4 sm:px-6 lg:px-8">
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
                    className="flex-shrink-0 px-2 sm:px-3"
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
                      ? "bg-red-600 w-6 sm:w-8"
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
              KADI C FARMS will assemble a team of experienced agricultural
              experts who are passionate about organic farming and sustainable
              practices. They will play a vital role in developing and
              implementing our farming strategy. Our agricultural team will
              include specialists in bee farming, crop management, and organic
              certification, ensuring we maintain the highest standards of
              organic production. These experts will also provide training and
              guidance to local farmers in our network
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
  );
};

export default BoardOfDirectorsPage;
