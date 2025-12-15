"use client";
import React from "react";
import ProductsApp from "./ProductsApp";

// Product data
export const products = [
  {
    id: "Premium Organic Honey",
    title: "Premium Organic Honey",
    subtitle: "Premium Organic Honey",
    detailTitle: "Premium Organic Honey Supply & Export From Nigeria",
    detailSubtitle: "We are Premium Organic Honey exporters in Nigeria",
    description:
      "We are Premium Organic Honey Exporters in Nigeria and can supply and export Premium Organic Honey to buyers in Japan, China, India, Turkey, and much more places around the world.",
    additionalInfo: `KADI C FARMS' bee farm, already producing some of 
Nigeria's best honey, is poised for export within three 
years. Our goal is to produce 5,000 tonnes of honey 
annually, meeting global demand with a commitment to 
quality. Our honey is sourced from carefully maintained 
apiaries across Nigeria's diverse ecological zones, 
ensuring unique flavor profiles and consistent quality. We 
implement rigorous quality control measures and 
maintain international organic certifications to meet the 
highest standards of global markets`,
    exportInfo:
      "We are Premium Organic Honey exporters in Nigeria and can supply and export Premium Organic Honey to buyers in many countries like Japan, India, China, Turkey, Vietnam and much more around the world.",
    specifications: {
      origin: "Nigeria",
      type: "Premium Organic Honey",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 98%",
    },
  },
  {
    id: "ginger",
    title: "Ginger",
    subtitle: "Ginger Export",
    detailTitle: "Dry Ginger Supply & Export From Nigeria",
    detailSubtitle: "We are premium ginger exporters in Nigeria",
    description:
      "We supply high-quality Dried  ginger to international markets. Ginger is a fragrant, spicy root (technically a rhizome) from the plant Zingiber officinale. It has been used for thousands of years across Asia, Africa, and the Middle East for cooking, healing, and wellness rituals. Its distinct warm, zesty aroma and sharp flavor make it a powerful ingredient in both food and natural medicine.",
    specifications: {
      origin: "Nigeria",
      type: "Dry Ginger (Sun-Dried / Split / Whole)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 99%",
      packaging:
        "Packed in 25kg or 50kg polypropylene (PP) woven bags or jute bags, neatly sealed and palletized for export",
    },
  },
  {
    id: "shea-butter",
    title: "Shea Butter & Oil",
    subtitle: "Shea Butter & Oil Export",
    detailTitle: "Premium Shea Butter & Oil Supply & Export From Nigeria",
    detailSubtitle: "We are quality shea butter and oil exporters in Nigeria",
    description:
      "We supply premium quality shea butter and oil to global markets. Shea butter is a rich, creamy natural fat extracted from the nuts of the shea tree (Vitellaria paradoxa), which grows mainly in West and Central Africa. It has been treasured for centuries as a skin-healing, moisturizing, and protective ingredient—often called “women’s gold” because many rural women rely on shea processing for their livelihood.",
    specifications: {
      origin: "Nigeria",
      type: "Pure Natural Shea Butter & Shea Oil (Cosmetic / Food / Pharmaceutical Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 99% (Unrefined / Chemical-Free)",
      packaging:
        "Packed in 25kg cartons or plastic kegs for shea butter, and 20–25L food-grade plastic jerry cans or drums for shea oil, well sealed and palletized for export",
    },
  },
  {
    id: "cashew-nuts",
    title: "Cashew Nuts",
    subtitle: "Cashew Nuts Export",
    detailTitle: "Premium Cashew Nuts Supply & Export From Nigeria",
    detailSubtitle: "We are quality cashew nuts exporters in Nigeria",
    description:
      "We supply premium cashew nuts to international buyers. Cashew nuts are creamy, kidney-shaped seeds that come from the cashew tree (Anacardium occidentale), a tropical evergreen native to Brazil but now widely grown in West Africa, India, and Southeast Asia. They are loved worldwide for their rich, buttery taste and their versatility in both snacks and cooking.",
    specifications: {
      origin: "Nigeria",
      type: "Raw Cashew Nuts (RCN – Export Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 98% (Well-dried, free from foreign matter)",
      packaging:
        "Packed in 80kg jute bags or polypropylene woven bags, double-stitched and palletized for export",
    },
  },
  {
    id: "tiger-nuts",
    title: "Tiger Nuts",
    subtitle: "Tiger Nuts Export",
    detailTitle: "Tiger Nuts Supply & Export From Nigeria",
    detailSubtitle: "We are tiger nuts exporters in Nigeria",
    description: "We supply quality tiger nuts to global markets.",
    specifications: {
      origin: "Nigeria",
      type: "Tiger Nuts (Whole / Cleaned / Premium Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 98% (Free from stones, dust, and foreign matter)",
      packaging:
        "Packed in 25kg or 50kg polypropylene (PP) woven bags, sealed and palletized for export",
    },
  },
  {
    id: "soybeans",
    title: "Soybeans",
    subtitle: "Soybeans Export",
    detailTitle: "Soybeans Supply & Export From Nigeria",
    detailSubtitle: "We are soybeans exporters in Nigeria",
    description: "We supply quality soybeans for various industrial uses.",
    specifications: {
      origin: "Nigeria",
      type: "Soybeans (Whole / Non-GMO / Premium Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity:
        "Minimum of 98% (Well-cleaned, free from stones, dust, and foreign matter)",
      packaging:
        "Packed in 50kg polypropylene (PP) woven bags, double-stitched and palletized for export",
    },
  },
  {
    id: "palm oil",
    title: "Red Palm Oil",
    subtitle: "Red Palm Oil Export",
    detailTitle: "Red Palm Oil Supply & Export From Nigeria",
    detailSubtitle: "We are Red Palm Oil exporters in Nigeria",
    description: `Red palm oil, a staple in many African cuisines, is known 
for its rich nutritional profile. KADI C FARMS will source 
high-quality red palm oil from sustainable farms, 
adhering to strict organic standards. Our red palm oil is 
particularly valued for its high concentration of beta
carotene and vitamin E, making it a premium choice for 
health-conscious consumers worldwide. We work 
directly with small-scale farmers, ensuring fair trade 
practices while maintaining complete traceability from 
farm to bottle.`,
    specifications: {
      origin: "Nigeria",
      type: "Red Palm Oil (Refined / Premium Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 99% (Fresh, unadulterated, and free from impurities)",
      packaging:
        "Packed in 25–30L food-grade plastic jerry cans or drums, tightly sealed and palletized for export",
    },
  },
  {
    id: "sesame-seeds",
    title: "Sesame Seeds",
    subtitle: "Sesame Seeds Export",
    detailTitle:
      "Hulled & Unhulled White & Black Sesame Seeds Supply & Export From Nigeria",
    detailSubtitle:
      "We are hulled and unhulled white & black sesame seeds exporters in Nigeria",
    description:
      "We are White & Black Sesame Seeds Exporters in Nigeria and can supply and export Sesame Seeds to Sesame Seeds buyers in Japan, China, India, Turkey, and much more places around the world.",
    additionalInfo:
      "Whether you want to purchase White and/or Black Sesame Seeds and have it shipped to any port around the world, our world-class team is built to help you close fast, safe, and profitable transactions on time, every time!",
    exportInfo:
      "We are Sesame Seeds exporters in Nigeria and can supply and export Sesame Seeds to Sesame Seeds buyers in many countries like Japan, India, China, Turkey, Vietnam and much more around the world.",
    specifications: {
      origin: "Nigeria",
      type: "Sesame Seeds (White / Hulled / Premium Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity:
        "Minimum of 99% (Cleaned, free from stones, dust, and foreign matter)",
      packaging:
        "Packed in 25kg or 50kg polypropylene (PP) woven bags, sealed and palletized for export",
    },
  },
  {
    id: "cocoa-beans",
    title: "Cocoa Beans",
    subtitle: "Cocoa Beans Export",
    detailTitle: "Premium Cocoa Beans Supply & Export From Nigeria",
    detailSubtitle: "We are quality cocoa beans exporters in Nigeria",
    description:
      "We supply premium cocoa beans to chocolate manufacturers worldwide. Cocoa beans are the dried, fermented seeds of the cacao tree (Theobroma cacao), the tropical plant that gives the world chocolate. They are one of the most valuable agricultural commodities globally and are grown mainly in West Africa, Latin America, and Southeast Asia.",
    specifications: {
      origin: "Nigeria",
      type: "Cocoa Beans (Well-Fermented, Sun-Dried, Export Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity:
        "Minimum of 99% (Properly fermented, mold-free, low moisture content)",
      packaging:
        "Packed in 64kg jute bags or food-grade sacks, well stitched and palletized for export",
    },
  },
  {
    id: "peanuts",
    title: "Peanuts (Kampala, Java)",
    subtitle: "Peanuts Export",
    detailTitle: "Peanuts Supply & Export From Nigeria",
    detailSubtitle: "We are peanuts exporters in Nigeria",
    description:
      "We supply quality peanuts to international markets.Peanuts—also known as groundnuts—are one of the world’s most popular and versatile legumes. They grow underground (unlike most nuts), yet they have the rich, creamy taste people associate with tree nuts. They’re loved as snacks, cooking ingredients, and a major source of plant-based protein across Africa and the world.",
    specifications: {
      origin: "Nigeria",
      type: "Peanuts / Groundnuts (Raw, Shelled, Export Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity:
        "Minimum of 98% (Cleaned, aflatoxin-controlled, free from foreign matter)",
      packaging:
        "Packed in 25kg or 50kg polypropylene (PP) woven bags, sealed and palletized for export",
    },
  },
  {
    id: "Dry hibiscus-flower",
    title: "dry Hibiscus Flower",
    subtitle: "Dry Hibiscus Flower Export",
    detailTitle: "Hibiscus Flower Supply & Export From Nigeria",
    detailSubtitle: "We are dried hibiscus flower exporters in Nigeria",
    description:
      "We supply premium dried hibiscus flowers for tea and other uses.Hibiscus is a vibrant flowering plant treasured for its beauty, flavor, and powerful health benefits. In many parts of the world—including West Africa—it’s best known for its dried petals, which are used to make a refreshing, ruby-red drink commonly called zobo, bissap, or hibiscus tea.",
    specifications: {
      origin: "Nigeria",
      type: "Dry Hibiscus Flower (Zobo – Whole / Cut, Premium Grade)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity:
        "Minimum of 99% (Clean, vibrant color, free from mold and foreign matter)",
      packaging:
        "Packed in 25kg or 50kg polypropylene (PP) woven bags or food-grade cartons, well sealed and palletized for export",
    },
  },
  {
    id: "Hardwood Charcoal",
    title: "Hardwood Charcoal",
    subtitle: "Hardwood Charcoal Export",
    detailTitle: "Hardwood Charcoal Supply & Export From Nigeria",
    detailSubtitle: "We are Hardwood Charcoal exporters in Nigeria",
    description: `Wood charcoal offers a sustainable and high-revenue 
source for KADI C FARMS, with low input capital. We will 
partner with local communities, promoting sustainable 
forestry practices. Our charcoal production follows 
environmentally responsible methods, using only 
sustainable wood sources and efficient production 
techniques. We implement a comprehensive reforestation 
program to ensure long-term sustainability, while 
providing employment opportunities for local 
communities. Each batch is tested for quality, ensuring 
consistent heat output and minimal ash content.`,
    specifications: {
      origin: "Nigeria",
      type: "Hardwood Charcoal (Export Grade / Low Ash)",
      price: "Negotiable per kg/Ton",
      trialOrder: "10 Metric Tonnes (One 20 ft Container Load)",
      tradeProcess: "FOB/CFR",
      paymentMethod: "100% irrevocable L/C at Sight",
      shippingTime: "15 to 25 days after confirmation of L/C",
      purity: "Minimum of 98% (Low moisture, low ash, high fixed carbon)",
      packaging:
        "Packed in 10kg, 25kg, or 50kg moisture-proof PP woven bags or kraft paper bags, securely sealed and palletized for export",
    },
  },
];

function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 cursor-pointer transform hover:-translate-y-1"
    >
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center">
        {product.title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 text-center">
        {product.subtitle}
      </p>
    </div>
  );
}

export default function WhatWeDoSection({ onProductClick }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-24 px-4">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div data-aos="zoom-in-down" className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Agricultural Products
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            We facilitate the supply of a broad range of agricultural products
            to over 54+ countries around the world.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
