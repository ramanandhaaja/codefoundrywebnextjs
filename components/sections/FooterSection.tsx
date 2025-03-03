'use client';

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white pt-24 pb-10 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              About CodeFoundry
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <p className="text-gray-400 text-sm">
              We are a premier software development company dedicated to transforming businesses through innovative digital solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Services
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mobile Applications</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Custom Software</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">IT Outsourcing</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cloud Solutions</Link></li>
            </ul>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
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
              </li>
              
              <li className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-white/80">+62 822 1158 8989</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/80">info@codefoundry.co.id</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Subscribe to our newsletter</h4>
              <div className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-red-500 w-full" />
                <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 CodeFoundry. All rights reserved.</p>
            <div className="hidden flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
