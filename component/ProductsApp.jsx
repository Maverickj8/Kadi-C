'use client'
import React, { useState } from 'react';
import WhatWeDoSection, { products } from './WhatWeDoSection';
import DetailPage from './ProductDetail';

export default function ProductsApp() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      {selectedProduct ? (
        <DetailPage product={selectedProduct} onBack={handleBack} />
      ) : (
        <WhatWeDoSection onProductClick={handleProductClick} />
      )}
    </>
  );
}
