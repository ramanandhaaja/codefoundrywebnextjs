'use client';

import { Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhyChooseUsSection() {
  return (
    <div className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-2 md:mb-3 block">Why Partner With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Building Trust Through Excellence</h2>
          <p className="text-base md:text-lg text-gray-600">
            We don&apos;t just deliver code &ndash; we deliver confidence. Our proven approach has helped businesses across Indonesia achieve digital success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-xl"></div>
            <div className="bg-red-50 rounded-full p-4 inline-block mb-6 group-hover:bg-red-100 transition-colors duration-300">
              <Clock className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Accelerated Delivery</h3>
            <p className="text-gray-600 mb-6">
              Our agile methodology ensures rapid development cycles without compromising on quality, getting your solutions to market faster.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-900 mr-2">30%</span> faster time-to-market than industry average
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-xl"></div>
            <div className="bg-red-50 rounded-full p-4 inline-block mb-6 group-hover:bg-red-100 transition-colors duration-300">
              <Shield className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Trusted Partnership</h3>
            <p className="text-gray-600 mb-6">
              We build lasting relationships based on transparency, accountability, and a deep commitment to your long-term success.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-900 mr-2">95%</span> client retention rate over 3+ years
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-t-xl"></div>
            <div className="bg-red-50 rounded-full p-4 inline-block mb-6 group-hover:bg-red-100 transition-colors duration-300">
              <Star className="h-10 w-10 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Local Market Mastery</h3>
            <p className="text-gray-600 mb-6">
              Our deep understanding of Indonesian business landscape ensures solutions that are culturally relevant and locally optimized.
            </p>
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center text-sm text-gray-500">
                <span className="font-medium text-gray-900 mr-2">100+</span> successful projects across Indonesia
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg font-medium"
            onClick={() => {
              const contactSection = document.getElementById('contact-section');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Schedule a Consultation
          </Button>
          <p className="mt-4 text-gray-500 text-sm">
            No obligation, just a conversation about your needs
          </p>
        </div>
      </div>
    </div>
  );
}
