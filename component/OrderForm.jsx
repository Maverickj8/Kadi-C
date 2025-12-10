"use client";
import React, { useState } from 'react';

export default function OrderFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    shippingAddress: '',
    billingAddress: '',
    product: '',
    quantity: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const products = [
    'Select Product',
    'Organic Vegetables',
    'Organic Fruits',
    'Organic Grains',
    'Organic Herbs',
    'Mixed Produce'
  ];

  const quantities = [
    'Select Quantity',
    '1-10 kg',
    '11-50 kg',
    '51-100 kg',
    '101-500 kg',
    '500+ kg'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Order submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Navigation */}
      <nav className="bg-gradient-to-r from-green-400 via-emerald-400 to-green-300 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-700 rounded-full flex items-center justify-center">
                <span className="text-white text-lg sm:text-xl font-bold">K</span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-green-900">Kadi-C</span>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#" className="text-green-900 hover:text-green-700 font-medium transition-colors">About</a>
              <a href="#" className="text-green-900 hover:text-green-700 font-medium transition-colors">Services</a>
              <a href="#" className="text-green-900 hover:text-green-700 font-medium transition-colors">Projects</a>
              <a href="#" className="text-green-900 hover:text-green-700 font-medium transition-colors">Team</a>
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 sm:px-6 py-2 rounded-md font-medium transition-all duration-300 transform hover:scale-105 text-sm">
                Contact Us
              </button>
            </div>

            <button className="md:hidden text-green-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-20">
          <div className="text-8xl">🌿</div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-800 mb-3 sm:mb-4">
            Place Your Order
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            <span className="hover:text-green-700 cursor-pointer">Home</span> / 
            <span className="text-green-700 font-semibold"> Order Cart</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-green-700 text-white text-center py-4 sm:py-5 rounded-t-lg">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Order Form</h2>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg p-6 sm:p-8 md:p-10">
            
            <div className="mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-6">My Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-md transition-all duration-300 ${
                        focusedField === 'name' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                      } focus:outline-none`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full pl-12 pr-4 py-3 border-2 rounded-md transition-all duration-300 ${
                        focusedField === 'company' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                      } focus:outline-none`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone No.<span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-md transition-all duration-300 ${
                      focusedField === 'phone' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                    } focus:outline-none`}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shipping Address <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <textarea
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('shipping')}
                    onBlur={() => setFocusedField(null)}
                    rows="3"
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-md transition-all duration-300 ${
                      focusedField === 'shipping' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                    } focus:outline-none resize-none`}
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Billing Address <span className="text-red-600">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-4 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <textarea
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('billing')}
                    onBlur={() => setFocusedField(null)}
                    rows="3"
                    className={`w-full pl-12 pr-4 py-3 border-2 rounded-md transition-all duration-300 ${
                      focusedField === 'billing' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                    } focus:outline-none resize-none`}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="mb-8 sm:mb-10">
              <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-6">My Product</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Product <span className="text-red-600">*</span>
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('product')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 border-2 rounded-md transition-all duration-300 ${
                    focusedField === 'product' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                  } focus:outline-none appearance-none bg-white cursor-pointer`}
                >
                  {products.map((product, index) => (
                    <option key={index} value={product}>{product}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Quantity <span className="text-red-600">*</span>
                </label>
                <select
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('quantity')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 border-2 rounded-md transition-all duration-300 ${
                    focusedField === 'quantity' ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-300'
                  } focus:outline-none appearance-none bg-white cursor-pointer`}
                >
                  {quantities.map((quantity, index) => (
                    <option key={index} value={quantity}>{quantity}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-start">
              <button
                onClick={handleSubmit}
                className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 sm:px-12 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm sm:text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}