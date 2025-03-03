'use client';

import Image from "next/image";
import { BuildingIcon, ArrowRightIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function SuccessStorySection() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24 border-t border-gray-100 relative overflow-hidden" id="success-story-section">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Transforming Businesses Through Innovation</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
            Our portfolio of successful projects demonstrates our commitment to excellence and our ability to deliver transformative solutions across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="w-full h-56 relative">
              <Image 
                src="/lifebuoy-header.png"
                alt="Lifebuoy Health Monitoring Platform"
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Healthcare</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <BuildingIcon className="h-7 w-7 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">Lifebuoy</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                  <p className="text-gray-700">
                    We developed a sophisticated mobile application empowering Lifebuoy Moms with advanced health monitoring and predictive analytics to proactively safeguard their family&apos;s wellbeing.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Mobile App</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Health Tech</span>
                  </div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="/lifebuoy-scrn.png" 
                    alt="Lifebuoy Application Interface" 
                    className="rounded-lg shadow-md object-contain max-h-[180px] w-auto" 
                    width={400}
                    height={225}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="w-full h-56 relative">
              <Image 
                src="/dolarindo-header.png"
                alt="Dolarindo Financial Platform"
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">FinTech</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <BuildingIcon className="h-7 w-7 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">Dolarindo</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                  <p className="text-gray-700">
                    We engineered a comprehensive Money Changer Operation System that streamlines currency exchange processes, enhances security, and provides real-time analytics for optimal business performance.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Financial</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Enterprise</span>
                  </div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="/dolarindo-scrn.png" 
                    alt="Dolarindo Platform Interface" 
                    className="rounded-lg shadow-md object-contain max-h-[180px] w-auto" 
                    width={400}
                    height={225}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="w-full h-56 relative">
              <Image 
                src="/idai-header.png"
                alt="IDAI Child Development Platform"
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Healthcare</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <BuildingIcon className="h-7 w-7 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">IDAI</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                  <p className="text-gray-700">
                    We created a trusted digital companion for Indonesian parents, featuring advanced tracking tools, personalized insights, and expert guidance to nurture children&apos;s growth from infancy through adolescence.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Mobile App</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Child Health</span>
                  </div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="/idai.png" 
                    alt="IDAI Application Interface" 
                    className="rounded-lg shadow-md object-contain max-h-[180px] w-auto" 
                    width={400}
                    height={225}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="w-full h-56 relative">
              <Image 
                src="/rmp-header.png"
                alt="Royal Medica Pharmalab Dashboard"
                className="object-cover"
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">Pharma</span>
              </div>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <BuildingIcon className="h-7 w-7 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold">Royal Medica Pharmalab</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                  <p className="text-gray-700">
                    We delivered a comprehensive Sales Management and Performance Monitoring System that optimizes pharmaceutical sales operations, provides actionable insights, and drives revenue growth through data-driven decision making.
                  </p>
                  <div className="mt-4">
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Enterprise</span>
                    <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2">Analytics</span>
                  </div>
                </div>
                <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="/rmp.png" 
                    alt="Royal Medica Pharmalab Dashboard" 
                    className="rounded-lg shadow-md object-contain max-h-[180px] w-auto" 
                    width={400}
                    height={225}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 inline-flex items-center">
            View All Case Studies
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
