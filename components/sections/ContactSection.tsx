'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-24 border-t border-gray-100" id="contact-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full mb-6">
              Let&apos;s Talk
            </span>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 max-w-lg">
              Partner with us to build innovative digital solutions that drive growth and solve your most complex business challenges.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-white/80">Jakarta, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/80">+62 822 1158 8989</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/80">info@codefoundry.co.id</p>
                </div>
              </div>
            </div>
            
            <div className="hidden flex flex-col sm:flex-row gap-4">
              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <Image 
                  src="/google.png" 
                  alt="Google Reviews" 
                  className="h-8 w-8 mr-3" 
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white ml-1">4.9/5</span>
                  </div>
                  <p className="text-xs text-white/70">Based on 48 reviews</p>
                </div>
              </div>
              
              <div className="flex items-center bg-white/10 p-4 rounded-lg">
                <Image 
                  src="/clutch-logo.svg" 
                  alt="Clutch" 
                  className="h-8 w-8 mr-3" 
                  width={32}
                  height={32}
                />
                <div>
                  <div className="flex items-center">
                    <span className="font-medium">Top Rated</span>
                  </div>
                  <p className="text-xs text-white/70">Software Developer 2024</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Get a Free Consultation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600"
                    placeholder="+62 xxx xxx xxxx"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                <select 
                  className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 20 20'%3e%3cpath stroke='gray' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                           backgroundPosition: "right 0.5rem center", 
                           backgroundRepeat: "no-repeat", 
                           backgroundSize: "1.5em 1.5em", 
                           paddingRight: "2.5rem" }}
                >
                  <option value="">Select a service</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Development</option>
                  <option value="custom">Custom Software</option>
                  <option value="outsourcing">IT Outsourcing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 h-32"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg font-medium text-lg">
                Send Message
              </Button>
              <p className="text-xs text-gray-500 text-center mt-2">
                We&apos;ll get back to you within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
