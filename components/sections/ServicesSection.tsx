'use client';

import { Code2Icon, Smartphone, Server, Users } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="py-24 bg-white relative overflow-hidden animate-on-scroll">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-shape bg-red-500" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-shape bg-gray-200" style={{ borderRadius: '63% 37% 38% 62% / 46% 62% 38% 54%' }}></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="section-subtitle">What We Offer</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            <span className="section-header">Our Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">We deliver end-to-end digital solutions that solve complex business challenges and drive measurable results.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Web Development */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group staggered-animation">
            <Code2Icon className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Web Applications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Modern, scalable solutions</li>
              <li>User-focused design</li>
              <li>Business process automation</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group staggered-animation">
            <Smartphone className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Cross-platform applications</li>
              <li>Seamless user experience</li>
              <li>Real-world business impact</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group staggered-animation">
            <Server className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom Software</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Tailored solutions</li>
              <li>System integration</li>
              <li>Future-proof development</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group staggered-animation">
            <Users className="h-12 w-12 text-red-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">IT Outsourcing</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Dedicated teams</li>
              <li>Flexible scaling</li>
              <li>High-quality talent</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
