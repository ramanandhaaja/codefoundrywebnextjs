'use client';

import Image from "next/image";
import { Clock, Shield, Star } from "lucide-react";

export default function PurposeSection() {
  return (
    <div className="bg-gray-50 py-24 border-t border-gray-100 animate-on-scroll">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2">
            <div className="max-w-xl">
              <span className="section-subtitle">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                <span className="section-header">Our Purpose</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-4 md:mb-6 leading-relaxed">
                To accelerate digital transformation through rapid, reliable solutions that empower Indonesian businesses to thrive in the digital age.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8">
                At CodeFoundry, we believe technology should be an enabler, not a barrier. Our mission is to bridge the gap between complex technical challenges and real business outcomes.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-red-600 mr-2" />
                  <span className="font-medium">Rapid Delivery</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-6 w-6 text-red-600 mr-2" />
                  <span className="font-medium">Reliable Solutions</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-red-600 mr-2" />
                  <span className="font-medium">Excellence Driven</span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            {/* Decorative elements - moved before the image to ensure they're rendered first */}
            <div className="hidden md:block absolute -bottom-6 -left-6 w-24 h-24 bg-red-600 rounded-lg z-0"></div>
            <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-gray-200 rounded-lg z-0"></div>
            
            {/* Image container with higher z-index */}
            <div className="aspect-video relative rounded-lg overflow-hidden shadow-xl z-10">
              <Image 
                src="/bulb.jpg" 
                alt="Digital transformation" 
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
