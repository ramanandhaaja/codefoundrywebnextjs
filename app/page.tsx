import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BuildingIcon, Code2Icon, Smartphone, Server, Users, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/hero.jpg"
            alt="Hero background" 
            className="object-cover"
            fill
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/90 to-red-700/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-6 text-white">
              CodeFoundry
            </h1>
            <p className="text-4xl mb-8 text-white/90 max-w-4xl mx-auto">
              Building Digital Excellence Through Innovation
            </p>
            <div className="space-x-4">
              <Button variant="outline" className="text-red border-white hover:bg-white hover:text-red-600">
                Get Started
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Purpose</h2>
          <p className="text-lg text-gray-700 mb-8">
            To accelerate digital transformation through rapid, reliable solutions that empower Indonesian businesses to thrive in the digital age.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <Code2Icon className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Web Applications</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Modern, scalable solutions</li>
                  <li>User-focused design</li>
                  <li>Business process automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Smartphone className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Cross-platform applications</li>
                  <li>Seamless user experience</li>
                  <li>Real-world business impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Server className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Custom Software</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Tailored solutions</li>
                  <li>System integration</li>
                  <li>Future-proof development</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">IT Outsourcing</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Dedicated teams</li>
                  <li>Flexible scaling</li>
                  <li>High-quality talent</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Rapid development cycles with consistent quality</p>
          </div>
          <div className="text-center">
            <Shield className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Reliable Partner</h3>
            <p className="text-gray-600">Long-term commitment to your success</p>
          </div>
          <div className="text-center">
            <Star className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
            <p className="text-gray-600">Understanding Indonesian business needs</p>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Success Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <Image 
                  src="/lifebuoy-header.png"
                  alt="Lifebuoy"
                  className="object-cover rounded-t-lg"
                  fill
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BuildingIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold">Lifebuoy</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                    <p className="text-gray-600">
                    A mobile application empowering Lifebuoy Moms with advanced health monitoring and predictive tools to safeguard their family's wellbeing.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src="/lifebuoy-scrn.png" alt="BI Screenshot 1" className="rounded-lg" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <img 
                  src="/dolarindo-header.png"
                  alt="Telkom Project"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BuildingIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold">Dolarindo</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                    <p className="text-gray-600">
                    Money Changer Operation System.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src="/dolarindo-scrn.png" alt="Telkom Screenshot 1" className="rounded-lg" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <img 
                  src="/idai-header.png"
                  alt="Pertamina Project"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BuildingIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold">IDAI</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                    <p className="text-gray-600">
                    Your trusted digital companion for Indonesian parents to track, understand, and nurture their children's growth journey from day one. 
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src="/idai.png" alt="Pertamina Screenshot 1" className="rounded-lg" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <img 
                  src="/rmp-header.png"
                  alt="Bank Mandiri Project"
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <BuildingIcon className="h-8 w-8 text-red-600 mr-3" />
                  <h3 className="text-2xl font-bold">Royal Medica Pharmalab</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold mb-3">Challenge & Solution</h4>
                    <p className="text-gray-600">
                    Sales Management and Performance Monitoring System.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <img src="/rmp.png" alt="Mandiri Screenshot 1" className="rounded-lg" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Client Section */}
      <div className="py-16 bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center ">Trusted By Leading Companies</h2>
          <div className="w-full overflow-hidden">
            <div className="flex justify-center items-center gap-12 py-12 relative h-96 max-w-7xl mx-auto">
              <Image
                src="/client.png"
                alt="Client Companies"
                className="object-contain"
                fill
                sizes="(max-width: 1920px) 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-xl mb-8">Partner with us to transform your business</p>
        </div>
      </div>
    </div>
  );
}