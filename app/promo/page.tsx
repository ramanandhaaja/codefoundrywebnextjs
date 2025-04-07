"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function PromoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    // Re-enable body scrolling
    document.body.style.overflow = "auto";
  };

  // Fix WhatsApp link format
  const whatsappNumber = "6282211588989";
  const whatsappMessage = encodeURIComponent("I'm interested in your website services");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="min-h-screen flex items-center justify-center bg-no-repeat bg-center bg-cover relative backdrop-blur-sm" 
          style={{ 
            backgroundImage: 'url(/promo.jpg)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center center'
          }}
        >
          {/* Subtle blur overlay */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-black bg-opacity-20"></div>
          
          {/* Semi-transparent card with text */}
          <div className="max-w-7xl mx-auto text-center px-8 py-16 bg-white bg-opacity-85 backdrop-filter backdrop-blur-sm rounded-lg relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200 m-4">
            <span className="text-lg font-semibold text-red-600 uppercase tracking-wider">Limited Time Offer</span>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 mt-4">
              Get Your Professional Website
              <span className="block text-red-600 mt-2">Starting at $499</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Premium quality websites at affordable prices. Fast delivery, modern
              design, and exceptional performance.
            </p>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-10 py-5 rounded-lg text-xl font-semibold hover:bg-red-700 transition-colors duration-200 hover:shadow-lg"
            >
              Get Started Now
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                <span className="section-header">Key Features</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                We deliver high-quality websites that help your business stand out
                from the competition.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="text-4xl mb-4 flex justify-center">🎨</div>
                <h3 className="text-xl font-bold mb-2">Modern Design</h3>
                <p className="text-gray-600">
                  Clean and professional design that converts visitors into
                  customers
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="text-4xl mb-4 flex justify-center">🚀</div>
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Get your website up and running in just 2 weeks
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="text-4xl mb-4 flex justify-center">📱</div>
                <h3 className="text-xl font-bold mb-2">Mobile Responsive</h3>
                <p className="text-gray-600">
                  Perfect display on all devices - desktop, tablet, and mobile
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
              <span className="section-subtitle">Our Work</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                <span className="section-header">Featured Projects</span>
              </h2>
              <p className="text-base md:text-lg text-gray-600 mb-8">
                Take a look at some of our recent website projects. Each design is
                custom-built to meet our clients unique business goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portfolio Item 1 */}
              <div className="group">
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg mb-4 cursor-pointer"
                  onClick={() => openModal("/9to9.png", "E-Commerce Store - Fashion Retailer")}
                >
                  <div className="relative">
                    <Image
                      src="/9to9.png"
                      width={500}
                      height={300}
                      alt="E-Commerce Store - Fashion Retailer"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">E-Commerce Store</h3>
                      <p className="text-sm text-white/80">Fashion Retailer</p>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-gray-600 text-sm">
                    A modern e-commerce platform with seamless checkout and
                    inventory management.
                  </p>
                </div>
              </div>

              {/* Portfolio Item 2 */}
              <div className="group">
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg mb-4 cursor-pointer"
                  onClick={() => openModal("/mandiricapital.png", "Corporate Website - Financial Services")}
                >
                  <div className="relative">
                    <Image
                      src="/mandiricapital.png"
                      width={500}
                      height={300}
                      alt="Corporate Website - Financial Services"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Corporate Website</h3>
                      <p className="text-sm text-white/80">Financial Services</p>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-gray-600 text-sm">
                    Professional website with custom CMS for a leading financial
                    advisory firm.
                  </p>
                </div>
              </div>

              {/* Portfolio Item 3 */}
              <div className="group">
                <div 
                  className="relative overflow-hidden rounded-lg shadow-lg mb-4 cursor-pointer"
                  onClick={() => openModal("/mandiricapital.png", "Restaurant Site - Food & Beverage")}
                >
                  <div className="relative">
                    <Image
                      src="/mandiricapital.png"
                      width={500}
                      height={300}
                      alt="Restaurant Site - Food & Beverage"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/80 group-hover:opacity-90 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="text-xl font-bold">Restaurant Site</h3>
                      <p className="text-sm text-white/80">Food & Beverage</p>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <p className="text-gray-600 text-sm">
                    Responsive website with online ordering system and reservation
                    functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-gray-100">
          <div className="max-w-3xl mx-auto text-center px-4">
            <span className="section-subtitle">Limited Time</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="section-header">Special Offer</span>
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 mt-8">
              <div className="text-5xl font-bold text-red-600 mb-4">$499</div>
              <ul className="text-left max-w-md mx-auto space-y-3 mb-8">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Professional Website Design
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mobile Responsive Layout
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Contact Form Integration
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-red-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Basic SEO Setup
                </li>
              </ul>
              <Link
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
              >
                Claim This Offer
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Dont miss out on this limited-time offer. Get your professional
              website today!
            </p>
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Contact Us Now
            </Link>
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white text-3xl hover:text-red-500 transition-colors"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="bg-white p-2 rounded-lg">
              <Image
                src={selectedImage.src}
                width={1200}
                height={800}
                alt={selectedImage.alt}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
