'use client'
import Link from 'next/link';
import React, { useState } from 'react';

// Product data
const products = [
  {
    id: 'sesame-seeds',
    title: 'Sesame Seeds',
    subtitle: 'Sesame Seeds Export',
    detailTitle: 'Hulled & Unhulled White & Black Sesame Seeds Supply & Export From Nigeria',
    detailSubtitle: 'We are hulled and unhulled white & black sesame seeds exporters in Nigeria',
    description: 'We are White & Black Sesame Seeds Exporters in Nigeria and can supply and export Sesame Seeds to Sesame Seeds buyers in Japan, China, India, Turkey, and much more places around the world.',
    additionalInfo: 'Whether you want to purchase White and/or Black Sesame Seeds and have it shipped to any port around the world, our world-class team is built to help you close fast, safe, and profitable transactions on time, every time!',
    exportInfo: 'We are Sesame Seeds exporters in Nigeria and can supply and export Sesame Seeds to Sesame Seeds buyers in many countries like Japan, India, China, Turkey, Vietnam and much more around the world.',
    specifications: {
      origin: 'Nigeria',
      type: 'Unhulled Natural White and/or Black Sesame Seeds',
      price: 'Negotiable per kg/Ton',
      trialOrder: '19 Metric Tonnes (One 20 ft Container Load)',
      tradeProcess: 'FOB/CFR',
      paymentMethod: '100% irrevocable L/C at Sight',
      packaging: '50 kg bags loaded in container 20" FCL',
      shippingTime: '15 to 25 days after confirmation of L/C',
      purity: 'Minimum of 98%'
    }
  },
  {
    id: 'ginger',
    title: 'Ginger',
    subtitle: 'Ginger Export',
    detailTitle: 'Fresh Ginger Supply & Export From Nigeria',
    detailSubtitle: 'We are premium ginger exporters in Nigeria',
    description: 'We supply high-quality fresh ginger to international markets. Ginger is a fragrant, spicy root (technically a rhizome) from the plant Zingiber officinale. It has been used for thousands of years across Asia, Africa, and the Middle East for cooking, healing, and wellness rituals. Its distinct warm, zesty aroma and sharp flavor make it a powerful ingredient in both food and natural medicine.',
    specifications: {
      origin: 'Nigeria',
      type: 'Fresh Ginger Root',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'shea-butter',
    title: 'Shea Butter & Oil',
    subtitle: 'Shea Butter & Oil Export',
    detailTitle: 'Premium Shea Butter & Oil Supply & Export From Nigeria',
    detailSubtitle: 'We are quality shea butter and oil exporters in Nigeria',
    description: 'We supply premium quality shea butter and oil to global markets. Shea butter is a rich, creamy natural fat extracted from the nuts of the shea tree (Vitellaria paradoxa), which grows mainly in West and Central Africa. It has been treasured for centuries as a skin-healing, moisturizing, and protective ingredient—often called “women’s gold” because many rural women rely on shea processing for their livelihood.',
    specifications: {
      origin: 'Nigeria',
      type: 'Raw and Refined Shea Butter & Oil',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'cashew-nuts',
    title: 'Cashew Nuts',
    subtitle: 'Cashew Nuts Export',
    detailTitle: 'Premium Cashew Nuts Supply & Export From Nigeria',
    detailSubtitle: 'We are quality cashew nuts exporters in Nigeria',
    description: 'We supply premium cashew nuts to international buyers. Cashew nuts are creamy, kidney-shaped seeds that come from the cashew tree (Anacardium occidentale), a tropical evergreen native to Brazil but now widely grown in West Africa, India, and Southeast Asia. They are loved worldwide for their rich, buttery taste and their versatility in both snacks and cooking.',
    specifications: {
      origin: 'Nigeria',
      type: 'Raw Cashew Nuts',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'tiger-nuts',
    title: 'Tiger Nuts',
    subtitle: 'Tiger Nuts Export',
    detailTitle: 'Tiger Nuts Supply & Export From Nigeria',
    detailSubtitle: 'We are tiger nuts exporters in Nigeria',
    description: 'We supply quality tiger nuts to global markets.',
    specifications: {
      origin: 'Nigeria',
      type: 'Dried Tiger Nuts',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'soybeans',
    title: 'Soybeans',
    subtitle: 'Soybeans Export',
    detailTitle: 'Soybeans Supply & Export From Nigeria',
    detailSubtitle: 'We are soybeans exporters in Nigeria',
    description: 'We supply quality soybeans for various industrial uses.',
    specifications: {
      origin: 'Nigeria',
      type: 'Dried Soybeans',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'palm oil',
    title: 'Red Palm Oil',
    subtitle: 'Red Palm Oil Export',
    detailTitle: 'Red Palm Oil Supply & Export From Nigeria',
    detailSubtitle: 'We are Red Palm Oil exporters in Nigeria',
    description: 'We supply premium Red Palm Oil to global markets.Palm oil is a rich, reddish-gold vegetable oil extracted from the fruit of the oil palm tree (Elaeis guineensis), a tropical species native to West Africa but now cultivated widely in Asia and parts of South America. It is one of the most widely used oils in the world, valued for its flavor, stability, and versatility.',
    specifications: {
      origin: 'Nigeria',
      type: 'Crude and Refined Red Palm Oil',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'moringa-seeds',
    title: 'Moringa Seeds',
    subtitle: 'Moringa Seeds Export',
    detailTitle: 'Moringa Seeds Supply & Export From Nigeria',
    detailSubtitle: 'We are moringa seeds exporters in Nigeria',
    description: 'We supply quality moringa seeds for various applications.',
    specifications: {
      origin: 'Nigeria',
      type: 'Dried Moringa Seeds',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'cocoa-beans',
    title: 'Cocoa Beans',
    subtitle: 'Cocoa Beans Export',
    detailTitle: 'Premium Cocoa Beans Supply & Export From Nigeria',
    detailSubtitle: 'We are quality cocoa beans exporters in Nigeria',
    description: 'We supply premium cocoa beans to chocolate manufacturers worldwide. Cocoa beans are the dried, fermented seeds of the cacao tree (Theobroma cacao), the tropical plant that gives the world chocolate. They are one of the most valuable agricultural commodities globally and are grown mainly in West Africa, Latin America, and Southeast Asia.',
    specifications: {
      origin: 'Nigeria',
      type: 'Fermented and Dried Cocoa Beans',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'peanuts',
    title: 'Peanuts',
    subtitle: 'Peanuts Export',
    detailTitle: 'Peanuts Supply & Export From Nigeria',
    detailSubtitle: 'We are peanuts exporters in Nigeria',
    description: 'We supply quality peanuts to international markets.Peanuts—also known as groundnuts—are one of the world’s most popular and versatile legumes. They grow underground (unlike most nuts), yet they have the rich, creamy taste people associate with tree nuts. They’re loved as snacks, cooking ingredients, and a major source of plant-based protein across Africa and the world.',
    specifications: {
      origin: 'Nigeria',
      type: 'Raw and Roasted Peanuts',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'hibiscus-flower',
    title: 'Hibiscus Flower',
    subtitle: 'Dry Hibiscus Flower Export',
    detailTitle: 'Hibiscus Flower Supply & Export From Nigeria',
    detailSubtitle: 'We are dried hibiscus flower exporters in Nigeria',
    description: 'We supply premium dried hibiscus flowers for tea and other uses.Hibiscus is a vibrant flowering plant treasured for its beauty, flavor, and powerful health benefits. In many parts of the world—including West Africa—it’s best known for its dried petals, which are used to make a refreshing, ruby-red drink commonly called zobo, bissap, or hibiscus tea.',
    specifications: {
      origin: 'Nigeria',
      type: 'Dried Hibiscus Flowers',
      price: 'Negotiable per kg/Ton'
    }
  },
  {
    id: 'Hardwood Charcoal',
    title: 'Hardwood Charcoal',
    subtitle: 'Hardwood Charcoal Export',
    detailTitle: 'Hardwood Charcoal Supply & Export From Nigeria',
    detailSubtitle: 'We are Hardwood Charcoal exporters in Nigeria',
    description: 'We supply Hardwood Charcoal to global markets.',
    specifications: {
      origin: 'Nigeria',
      type: 'Hardwood Charcoal',
      price: 'Negotiable per kg/Ton'
    }
  }
];

const departments = [
  'Agricultural Products Export',
  'Minerals & Metals Export',
  'Petroleum & Gas Supply',
  'Export Consulting',
  'Investors & Brokers'
];

export default function AgriculturalProductsApp() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {currentView === 'home' ? (
        <HomePage onProductClick={handleProductClick} />
      ) : (
        <DetailPage product={selectedProduct} onBack={handleBackToHome} />
      )}
    </div>
  );
}

function HomePage({ onProductClick }) {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16 md:py-24 px-4">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Agricultural Products
          </h1>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
            We facilitate the supply of a broad range of agricultural products to over 54+ countries around the world.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20">
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

function DetailPage({ product, onBack }) {
  if (!product) return null;

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-4">
          <button 
            onClick={onBack}
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors group"
          >
            <svg 
              className="w-5 h-5 md:w-6 md:h-6 mr-2 transform group-hover:-translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm md:text-base font-medium">Back to Products</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 md:py-20 px-4">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            {product.detailTitle}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {product.detailSubtitle}
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-200 py-3 md:py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center text-xs md:text-sm text-gray-600">
          <button onClick={onBack} className="hover:text-gray-900 font-medium">
            Home
          </button>
          <span className="mx-2">›</span>
          <span className="text-gray-900">{product.detailTitle}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 md:space-y-8">
            {/* Department Section */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-900">
                DEPARTMENT
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {departments.map((dept, index) => (
                  <li key={index}>
                    <a href="#" className="text-sm md:text-base text-gray-600 hover:text-gray-900 block py-1">
                      {dept}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Section */}
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 pb-3 border-b-2 border-gray-900">
                DOWNLOAD
              </h3>
              <div className="space-y-3">
                <Link href={'/'} >
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2.5 md:py-3 px-4 rounded text-sm md:text-base font-medium transition-colors">
                  Profile ↗
                </button>
                </Link>
                
                <Link href={'/contact'} >
                <button className="w-full bg-white hover:bg-gray-50 text-teal-600 border-2 border-teal-600 py-2.5 md:py-3 px-4 rounded text-sm md:text-base font-medium transition-colors">
                  Contact Us ↓
                </button>
                </Link>
                
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Our Service To You
              </h2>
              
              <div className="mb-6 md:mb-8">
                <p className="text-sm md:text-base text-gray-700 italic mb-4 md:mb-6 leading-relaxed">
                  "{product.description}"
                </p>
                
                {product.additionalInfo && (
                  <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
                    {product.additionalInfo}
                  </p>
                )}
                
                {product.exportInfo && (
                  <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8 leading-relaxed">
                    {product.exportInfo}
                  </p>
                )}
              </div>

              {/* Specifications */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Our {product.title} Trade Specifications are listed below:
                </h3>
                
                <div className="space-y-3 md:space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-200 pb-2 md:pb-3">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0">
                        <span className="font-semibold text-gray-700 text-sm md:text-base sm:w-48 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className="text-gray-600 text-sm md:text-base flex-1">
                          {value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {product.id === 'sesame-seeds' && (
                <div className="mt-6 md:mt-8">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                    Specifications
                  </h3>
                  <div className="border-b border-gray-200 pb-2 md:pb-3">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0">
                      <span className="font-semibold text-gray-700 text-sm md:text-base sm:w-48">
                        Purity:
                      </span>
                      <span className="text-gray-600 text-sm md:text-base flex-1">
                        Minimum of 98%
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Image Grid - Show for all products */}
              <div className="mt-8 md:mt-12">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Product Gallery
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {[1, 2, 3, 4].map((img) => (
                    <div key={img} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${
                          product.id === 'sesame-seeds' ? '1583967178902-37d8e185be30' :
                          product.id === 'ginger' ? '1615485290382-44eb6d0f2e91' :
                          product.id === 'shea-butter' ? '1608571423902-eed4a5ad8108' :
                          product.id === 'cashew-nuts' ? '1585515656ae1-eab000f?q=80' :
                          product.id === 'tiger-nuts' ? '1628773822503-930aa0f4a0cd' :
                          product.id === 'soybeans' ? '1589927986089-35812388c75d' :
                          product.id === 'palm-kernel-oil' ? '1474979266404-7eaacbcd87c5' :
                          product.id === 'moringa-seeds' ? '1580910051074-3cc8f1c1e8c4' :
                          product.id === 'cocoa-beans' ? '1511381939415-e44015466834' :
                          product.id === 'peanuts' ? '1566917677326-00a8bc833e23' :
                          product.id === 'hibiscus-flower' ? '1597848212624-e40ca987c2e1' :
                          '1565104781149-f324f1604f0e'
                        }?w=400&h=400&fit=crop`}
                        alt={`${product.title} ${img}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}