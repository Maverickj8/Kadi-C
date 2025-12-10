'use client'
import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter , Youtube } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: ''
  });

  // Address for the map - change this to update the map location
  const address = "No: 24 Nnamdi Azikiwe road. Opposite road 12 junction shop number 6, Trans Ekulu, Enugu State";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ email: '', name: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+2347025676306',
      link: '+2347025676306'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Kadi-c@gmail.com',
      link: 'Kadi-C.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'No: 24 Nnamdi Azikiwe road. Opposite road 12 junction shop number 6, Trans Ekulu, Enugu State',
      link: '#map'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: 'yourid.com',
      link: 'https://instagram.com'
    }
  ];

  const socialMedia = [
    { icon: Facebook, link: 'https://facebook.com' },
    { icon: Twitter, link: 'https://twitter.com' },
    { icon: Youtube, link: 'https://youtube.com' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-25 px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div data-aos="zoom-in-right">
              <h1 className="text-4xl sm:text-5xl font-bold text-green-900 mb-4">
                Get In Touch
              </h1>
              <p className="text-green-950/40 leading-relaxed">
                We’re here to support you. Whether you have questions, feedback, or need assistance, our team is ready to help. Reach out to us anytime.
              </p>
            </div>

            {/* Contact Cards */}
            <div data-aos="zoom-in-left" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-800 text-white p-3 rounded-lg transform group-hover:scale-90 transition-transform duration-300">
                      <item.icon size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-green-900 mb-1">
                        {item.label}
                      </h3>
                      <p className="text-green-950/40 text-sm break-words">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div data-aos="zoom-in">
              <h3 className="text-sm font-semibold text-green-900 mb-3">
                Social Media
              </h3>
              <div className="flex space-x-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transform hover:scale-90 transition-all duration-300"
                  >
                    <social.icon size={20} className="text-green-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-100 p-8 sm:p-10 rounded-lg">
            <div className="space-y-6">
              {/* Email and Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-950 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-950 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-green-950 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-green-950 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-green-800 text-white font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                SUBMIT BUTTON
              </button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div id="map" className="w-full h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}