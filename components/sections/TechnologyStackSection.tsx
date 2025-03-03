'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function TechnologyStackSection() {
  return (
    <div className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Technology Stack</span>
          <h2 className="text-4xl font-bold mb-6">Cutting-Edge Technologies</h2>
          <p className="text-lg text-gray-600">
            We leverage the latest technologies to build scalable, secure, and high-performance solutions for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Frontend */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              Frontend Technologies
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/react.svg" 
                    alt="React" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">React</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="64" height="64">
                    <mask height="180" id=":r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{maskType: 'alpha'}}>
                      <circle cx="90" cy="90" fill="black" r="90"></circle>
                    </mask>
                    <g mask="url(#:r8:mask0_408_134)">
                      <circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle>
                      <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)" />
                      <rect fill="url(#:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect>
                    </g>
                    <defs>
                      <linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                      <linearGradient gradientUnits="userSpaceOnUse" id=":r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
                        <stop stopColor="white"></stop>
                        <stop offset="1" stopColor="white" stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Next.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/vue.svg" 
                    alt="Vue.js" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Vue.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/tailwind.png" 
                    alt="Tailwind CSS" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Tailwind</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/typescript.svg" 
                    alt="TypeScript" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/flutter.svg" 
                    alt="Flutter" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Flutter</span>
              </div>
            </div>
          </div>
          
          {/* Backend */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </span>
              Backend Technologies
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/node.png" 
                    alt="Node.js" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/python.png"
                    alt="Python" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/java.svg" 
                    alt="Java" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Java</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/go.png" 
                    alt="Go" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Go</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/php.png" 
                    alt="PHP" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">PHP</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/dart.png" 
                    alt="Dart" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Dart</span>
              </div>
            </div>
          </div>
          
          {/* Database & Cloud */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                </svg>
              </span>
              Database & Cloud
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/aws.png" 
                    alt="AWS" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">AWS</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/gc.png" 
                    alt="Google Cloud" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Google Cloud</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/azure.svg" 
                    alt="Azure" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Azure</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/mongo.png" 
                    alt="MongoDB" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">MongoDB</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/postgres.png" 
                    alt="PostgreSQL" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center p-3 mb-2">
                  <Image 
                    src="/firebase.png" 
                    alt="Firebase" 
                    className="w-full h-full object-contain" 
                    width={64}
                    height={64}
                  />
                </div>
                <span className="text-sm text-gray-600">Firebase</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">
            Our technology stack is constantly evolving to meet the changing needs of our clients and the industry.
          </p>
          

          <Button variant="outline" className="hidden border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 rounded-lg text-lg font-medium">
            Learn More About Our Technical Expertise
          </Button>
        </div>
      </div>
    </div>
  );
}
