'use client';

import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  return (
    <div className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Our Methodology</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">How We Deliver Excellence</h2>
          <p className="text-base md:text-lg text-gray-600">Our proven development process ensures transparent communication, predictable outcomes, and exceptional quality at every stage.</p>
        </div>
        
        <div className="relative h-full flex items-center justify-center">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10 relative">
                1
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center h-full">
                <h3 className="text-xl font-bold mb-3">Discovery</h3>
                <p className="text-gray-600 mb-4">
                  We deeply understand your business goals, challenges, and requirements.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Stakeholder interviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Requirements gathering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Technical assessment</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10 relative">
                2
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center h-full">
                <h3 className="text-xl font-bold mb-3">Design & Planning</h3>
                <p className="text-gray-600 mb-4">
                  We create detailed plans and designs for your solution.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>UX/UI prototyping</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Architecture planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Sprint planning</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10 relative">
                3
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center h-full">
                <h3 className="text-xl font-bold mb-3">Development</h3>
                <p className="text-gray-600 mb-4">
                  We build your solution with agile methodology and regular updates.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Agile development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Regular demos</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center text-2xl font-bold mb-6 z-10 relative">
                4
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center h-full">
                <h3 className="text-xl font-bold mb-3">Delivery & Support</h3>
                <p className="text-gray-600 mb-4">
                  We ensure smooth deployment and ongoing support.
                </p>
                <ul className="text-sm text-gray-500 space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Seamless deployment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Knowledge transfer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    <span>Ongoing maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
          
        <div className="hidden">
          <div className="flex justify-center mt-16">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
