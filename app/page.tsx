'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BuildingIcon, Code2Icon, Smartphone, Server, Users, Clock, Shield, Star } from "lucide-react";
import Image from "next/image";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Enhanced scroll animations for sections
    const animateOnScroll = () => {
      // Get window height once for all animations
      const windowHeight = window.innerHeight;
      
      // Fade-in animations for sections
      const sections = document.querySelectorAll('.animate-on-scroll');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('animate-fade-in');
        }
      });
      
      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(window.scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
      
      // Different animation speeds for various elements
      const staggeredElements = document.querySelectorAll('.staggered-animation');
      staggeredElements.forEach((element, index) => {
        const delay = index * 0.15; // Staggered delay
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight * 0.85) {
          (element as HTMLElement).style.transitionDelay = `${delay}s`;
          element.classList.add('animate-slide-up');
        }
      });
      
      // Floating animation for decorative elements
      const floatingElements = document.querySelectorAll('.floating');
      floatingElements.forEach((element, index) => {
        const amplitude = element.getAttribute('data-amplitude') || '15';
        const period = element.getAttribute('data-period') || '3000';
        const phase = index * (Math.PI / 4); // Different starting positions
        
        const sinValue = Math.sin(Date.now() / parseInt(period) + phase);
        const translateY = sinValue * parseInt(amplitude);
        
        (element as HTMLElement).style.transform = `translateY(${translateY}px)`;
      });
    };
    
    // Initialize animations
    animateOnScroll();
    
    // Set up animation loop for continuous animations (floating elements)
    const animationFrame = requestAnimationFrame(function animate() {
      const floatingElements = document.querySelectorAll('.floating');
      if (floatingElements.length > 0) {
        floatingElements.forEach((element, index) => {
          const amplitude = element.getAttribute('data-amplitude') || '15';
          const period = element.getAttribute('data-period') || '3000';
          const phase = index * (Math.PI / 4);
          
          const sinValue = Math.sin(Date.now() / parseInt(period) + phase);
          const translateY = sinValue * parseInt(amplitude);
          
          (element as HTMLElement).style.transform = `translateY(${translateY}px)`;
        });
      }
      requestAnimationFrame(animate);
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen bg-white">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="parallax" data-speed="0.2">
            <Image 
              src="/hero.jpg"
              alt="Hero background" 
              className="object-cover"
              fill
              priority
            />
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/90 to-red-700/90"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-shape bg-white" style={{ borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-shape bg-white" style={{ borderRadius: '63% 37% 38% 62% / 46% 62% 38% 54%' }}></div>
        <div className="floating absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-white/10" data-amplitude="20" data-period="4000"></div>
        <div className="floating absolute bottom-1/3 left-1/4 w-12 h-12 rounded-full bg-white/10" data-amplitude="15" data-period="3500"></div>
        
        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 mb-10 md:mb-0">
              <div className="flex items-center mb-4 justify-center md:justify-start">
                <div className="bg-white/20 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Trusted by 100+ Indonesian Businesses
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                Transforming Business Challenges into Digital Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
                We design, build, and scale custom software that drives growth and solves complex business problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium">
                  Get a Free Consultation
                </Button>
                <Button variant="outline" className="border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-6 text-lg font-medium">
                  View Our Work
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-red-600 bg-gray-${i*100} flex items-center justify-center text-xs font-bold`}>
                      {i === 4 ? '+' : ''}
                    </div>
                  ))}
                </div>
                <p className="text-white/80 text-sm">Join our satisfied clients who&apos;ve transformed their businesses</p>
              </div>
            </div>
            <div className="md:w-2/5">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 max-w-md mx-auto">
                <h3 className="text-white text-xl font-bold mb-4">Start Your Digital Transformation</h3>
                <div className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <select 
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                      style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                             backgroundPosition: "right 0.5rem center", 
                             backgroundRepeat: "no-repeat", 
                             backgroundSize: "1.5em 1.5em", 
                             paddingRight: "2.5rem" }}
                    >
                      <option value="" className="text-gray-800">Select Service</option>
                      <option value="web" className="text-gray-800">Web Development</option>
                      <option value="mobile" className="text-gray-800">Mobile Development</option>
                      <option value="custom" className="text-gray-800">Custom Software</option>
                      <option value="consulting" className="text-gray-800">IT Consulting</option>
                    </select>
                  </div>
                  <Button className="w-full bg-white hover:bg-gray-100 text-red-600 px-8 py-6 rounded-lg font-medium text-lg">
                    Request a Callback
                  </Button>
                  <p className="text-white/60 text-xs text-center">
                    We&apos;ll get back to you within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Purpose Section */}
      <div className="bg-gray-50 py-24 border-t border-gray-100 animate-on-scroll">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="max-w-xl">
                <span className="section-subtitle">Our Mission</span>
                <h2 className="text-4xl font-bold mb-6 text-gray-900">
                  <span className="section-header">Our Purpose</span>
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  To accelerate digital transformation through rapid, reliable solutions that empower Indonesian businesses to thrive in the digital age.
                </p>
                <p className="text-gray-600 mb-8">
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
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-600 rounded-lg z-0"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-200 rounded-lg z-0"></div>
              
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

      {/* Services Section */}
      <div className="py-24 bg-white relative overflow-hidden animate-on-scroll">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-shape bg-red-500" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-shape bg-gray-200" style={{ borderRadius: '63% 37% 38% 62% / 46% 62% 38% 54%' }}></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">What We Offer</span>
            <h2 className="text-4xl font-bold mb-6">
              <span className="section-header">Our Services</span>
            </h2>
            <p className="text-lg text-gray-600">We deliver end-to-end digital solutions that solve complex business challenges and drive measurable results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Our Process Section */}
      <div className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Our Methodology</span>
            <h2 className="text-4xl font-bold mb-6">How We Deliver Excellence</h2>
            <p className="text-lg text-gray-600">Our proven development process ensures transparent communication, predictable outcomes, and exceptional quality at every stage.</p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
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
            
            <div className="text-center mt-16">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
            
                Learn More About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-600 font-semibold tracking-wider uppercase text-sm mb-3 block">Why Partner With Us</span>
            <h2 className="text-4xl font-bold mb-6">Building Trust Through Excellence</h2>
            <p className="text-lg text-gray-600">
              We don&apos;t just deliver code &ndash; we deliver confidence. Our proven approach has helped businesses across Indonesia achieve digital success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg text-lg font-medium">
              Schedule a Consultation
            </Button>
            <p className="mt-4 text-gray-500 text-sm">
              No obligation, just a conversation about your needs
            </p>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="bg-gray-50 py-24 border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center ">Featured Success Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <Image 
                  src="/lifebuoy-header.png"
                  alt="Lifebuoy"
                  className="object-cover"
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
                    A mobile application empowering Lifebuoy Moms with advanced health monitoring and predictive tools to safeguard their family&apos;s wellbeing.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Image 
                      src="/lifebuoy-scrn.png" 
                      alt="BI Screenshot 1" 
                      className="rounded-lg" 
                      width={800}
                      height={450}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <Image 
                  src="/dolarindo-header.png"
                  alt="Telkom Project"
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  width={800}
                  height={300}
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
                    <Image 
                      src="/dolarindo-scrn.png" 
                      alt="Telkom Screenshot 1" 
                      className="rounded-lg" 
                      width={800}
                      height={450}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <Image 
                  src="/idai-header.png"
                  alt="Pertamina Project"
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  width={800}
                  height={300}
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
                    Your trusted digital companion for Indonesian parents to track, understand, and nurture their children&apos;s growth journey from day one. 
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Image 
                      src="/idai.png" 
                      alt="Pertamina Screenshot 1" 
                      className="rounded-lg" 
                      width={800}
                      height={450}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="max-w-2xl">
              <div className="w-full h-48 relative">
                <Image 
                  src="/rmp-header.png"
                  alt="Bank Mandiri Project"
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                  width={800}
                  height={300}
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
                    <Image 
                      src="/rmp.png" 
                      alt="Mandiri Screenshot 1" 
                      className="rounded-lg" 
                      width={800}
                      height={450}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Client Section */}
      <div className="py-16 bg-white w-screen relative left-1/2 right-1/2 -mx-[50vw] border-t border-gray-100">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/20 via-red-600/40 to-red-500/20"></div> 
      <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center ">Trusted By Leading Companies</h2>
          <div className="w-full overflow-hidden">
            <div className="flex justify-center items-center gap-12 py-12 relative h-96 max-w-7xl mx-auto">
              <Image
                src="/client.png"
                alt="Client Companies"
                className="object-contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      {/* Technology Stack Section */}
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
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
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
                        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#:r8:paint0_linear_408_134)"></path>
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
                    </svg></div>
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
                      src="/tech/node.svg" 
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
                      src="/tech/python.svg" 
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
                      src="/tech/java.svg" 
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
                      src="/tech/go.svg" 
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
                      src="/tech/php.svg" 
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
                      src="/tech/dotnet.svg" 
                      alt=".NET" 
                      className="w-full h-full object-contain" 
                      width={64}
                      height={64}
                    />
                  </div>
                  <span className="text-sm text-gray-600">.NET</span>
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
                      src="/tech/aws.svg" 
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
                      src="/tech/gcp.svg" 
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
                      src="/tech/azure.svg" 
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
                      src="/tech/mongodb.svg" 
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
                      src="/tech/postgresql.svg" 
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
                      src="/tech/firebase.svg" 
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
            
            <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 rounded-lg text-lg font-medium">
              Learn More About Our Technical Expertise
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-24 border-t border-gray-100">
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
                    <p className="text-white/80">+62 21 1234 5678</p>
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
                    <p className="text-white/80">info@codefoundry.id</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center bg-white/10 p-4 rounded-lg">
                  <Image 
                    src="/google-reviews.svg" 
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-24 pb-10 relative">
        {/* Wave Separator */}
        
        
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
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-800 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
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
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Mobile Applications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Custom Software</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">IT Outsourcing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">UI/UX Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cloud Solutions</a></li>
              </ul>
            </div>
            
            {/* Quick Links Column */}
            <div>
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-red-500"></span>
              </h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a></li>
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
                    <p className="text-white/80">+62 21 1234 5678</p>
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
                    <p className="text-white/80">info@codefoundry.id</p>
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
              <p className="text-gray-400 text-sm"> 2024 CodeFoundry. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}