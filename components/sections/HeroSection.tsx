'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState, FormEvent } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({ message: '', type: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.service) {
      setFormStatus({
        message: 'Please fill in all fields',
        type: 'error'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus({ message: '', type: '' });
      
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      // Clear form on success
      setFormData({ name: '', email: '', service: '' });
      setFormStatus({
        message: 'Thank you! We will contact you shortly.',
        type: 'success'
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-white pb-32 md:pb-0">
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
      <div className="absolute top-10 left-10 md:top-20 md:left-20 w-32 h-32 md:w-64 md:h-64 bg-shape bg-white" style={{ borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%' }}></div>
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-40 h-40 md:w-80 md:h-80 bg-shape bg-white" style={{ borderRadius: '63% 37% 38% 62% / 46% 62% 38% 54%' }}></div>
      <div className="floating absolute top-1/4 right-1/3 w-8 h-8 md:w-16 md:h-16 rounded-full bg-white/10" data-amplitude="20" data-period="4000"></div>
      <div className="floating absolute bottom-1/3 left-1/4 w-6 h-6 md:w-12 md:h-12 rounded-full bg-white/10" data-amplitude="15" data-period="3500"></div>
      
      {/* Content */}
      <div className="relative pt-20 md:pt-0 md:h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 mb-10 md:mb-0 z-10">
            <div className="flex items-center mb-4 justify-center md:justify-start mt-10 md:mt-0">
              <div className="bg-white/20 text-white text-xs md:text-sm font-medium px-3 py-1 rounded-full">
                Trusted by 100+ Indonesian Businesses
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
              Transforming Business Challenges into Digital Solutions
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-2xl">
              We design, build, and scale custom software that drives growth and solves complex business problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium"
              onClick={() => {
                const successSection = document.getElementById('contact-section');
                if (successSection) {
                  successSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                Get a Free Consultation
              </Button>
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium"
                onClick={() => {
                  const successSection = document.getElementById('success-story-section');
                  if (successSection) {
                    successSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Our Work
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <Avatar key={i} className="w-10 h-10 border-2 border-red-600">
                    <AvatarImage src={`/avatar${i}.png`} alt={`User ${i}`} />
                  </Avatar>
                ))}
              </div>
              <p className="text-white/80 text-sm">Join our satisfied clients who&apos;ve transformed their businesses</p>
            </div>
          </div>
          
          {/* Form section with better mobile spacing */}
          <div className="w-full md:w-2/5 z-10 mt-8 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20 max-w-md mx-auto">
              <h3 className="text-white text-xl font-bold mb-4">Start Your Digital Transformation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 20 20'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                           backgroundPosition: "right 0.5rem center", 
                           backgroundRepeat: "no-repeat", 
                           backgroundSize: "1.5em 1.5em", 
                           paddingRight: "2.5rem" }}
                  >
                    <option value="" className="text-gray-800">Select Service</option>
                    <option value="Web Development" className="text-gray-800">Web Development</option>
                    <option value="Mobile Development" className="text-gray-800">Mobile Development</option>
                    <option value="Custom Software" className="text-gray-800">Custom Software</option>
                    <option value="IT Consulting" className="text-gray-800">IT Consulting</option>
                  </select>
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-white hover:bg-gray-100 text-red-600 px-8 py-6 rounded-lg font-medium text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Request a Callback'}
                </Button>
                
                {formStatus.message && (
                  <div className={`text-sm p-2 rounded ${formStatus.type === 'success' ? 'bg-green-500/20 text-white' : 'bg-red-500/20 text-white'}`}>
                    {formStatus.message}
                  </div>
                )}
                
                <p className="text-white/60 text-xs text-center">
                  We&apos;ll get back to you within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
