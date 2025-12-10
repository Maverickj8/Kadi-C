'use client' 

import React from "react";
import { useRouter } from "next/navigation"; // 1. Import the router hook
import Hero from "../component/Hero";
import ValuesSection from "../component/ValuesSection";
import AboutSection from "../component/AboutSection";
import WhatWeDoSection from "../component/WhatWeDoSection";
import TargetMarket from "../component/TargetMarket";
import WhyChooseUs from "../component/WhyChooseUs";
import EnquiriesSection from "../component/EnquiriesSection";
import Footer from "../component/Footer";
import OrderForm from "../component/OrderForm";

export default function Home() {
  // 2. Initialize the router
  const router = useRouter();

  const handleProductClick = (product) => {
    // 3. Navigate to a dynamic route using the product ID
    // This assumes you have a folder structure like: app/product/[id]/page.js
    router.push(`/products`);
  };

  return (
    <>
      <main className="overflow-hidden">
        <Hero />
        <ValuesSection/>
        <AboutSection/>
        
        {/* Pass the navigation handler */}
        <WhatWeDoSection onProductClick={handleProductClick} />
        
        <TargetMarket/>
        <WhyChooseUs/>
        <EnquiriesSection/>
        <Footer/>
        {/* <OrderForm/> */}
      </main>
    </>
  );
}