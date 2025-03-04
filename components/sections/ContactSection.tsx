'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, FormEvent } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<{
    message: string;
    type: 'success' | 'error' | '';
  }>({ message: '', type: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        type: 'error'
      });
      return;
    }

    try {
      setIsSubmitting(true);
      setFormStatus({ message: '', type: '' });
      
      const response = await fetch('/api/contact', {
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
      setFormData({ name: '', company: '', email: '', phone: '', service: '', message: '' });
      setFormStatus({
        message: 'Thank you! Your message has been sent. We will contact you shortly.',
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email Us</h3>
                  <p className="text-white/80">info@codefoundry.co.id</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.572 3.428C18.254 1.11 15.136 0 11.893 0C5.387 0 0.107 5.28 0.107 11.786c0 2.077.547 4.104 1.588 5.89L0 24l6.484-1.7c1.722.938 3.667 1.432 5.65 1.432h.005c6.505 0 11.786-5.28 11.786-11.786 0-3.243-1.11-6.36-3.353-8.518zM11.893 21.55h-.004a9.8 9.8 0 0 1-5-1.372l-.358-.213-3.715.974.994-3.63-.233-.372a9.8 9.8 0 0 1-1.5-5.2c0-5.41 4.405-9.814 9.82-9.814 2.624 0 5.09 1.024 6.944 2.878 1.853 1.854 2.876 4.32 2.875 6.944-.005 5.41-4.41 9.814-9.823 9.814zm5.384-7.346c-.296-.148-1.75-.864-2.023-.962-.272-.099-.47-.148-.668.148-.198.296-.767.962-.94 1.16-.173.197-.345.222-.642.074-.296-.148-1.253-.462-2.384-1.475-.882-.787-1.477-1.76-1.65-2.056-.173-.296-.018-.456.13-.604.134-.132.297-.345.445-.518.149-.173.198-.296.297-.494.099-.198.05-.371-.025-.518-.074-.148-.668-1.61-.915-2.205-.241-.578-.486-.5-.668-.51-.173-.01-.371-.012-.57-.012-.197 0-.518.074-.79.37-.272.297-1.037.963-1.037 2.35 0 1.385 1.012 2.722 1.16 2.92.148.197 2.073 3.17 5.02 4.447.7.303 1.248.483 1.675.618.704.224 1.347.192 1.854.116.565-.084 1.75-.715 1.997-1.41.247-.693.247-1.286.173-1.41-.074-.123-.272-.197-.569-.345z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call or WhatsApp Us</h3>
                  <a 
                    href="https://wa.me/6282211588989" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white hover:underline transition-colors"
                  >
                    +62 822 1158 8989
                  </a>
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none text-black"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none text-black"
                    placeholder="Your Company"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none text-black"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none text-black"
                    placeholder="+62 xxx xxx xxxx"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In <span className="text-red-500">*</span></label>
                <select 
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none appearance-none"
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 20 20'%3e%3cpath stroke='gray' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", 
                           backgroundPosition: "right 0.5rem center", 
                           backgroundRepeat: "no-repeat", 
                           backgroundSize: "1.5em 1.5em", 
                           paddingRight: "2.5rem" }}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile Development">Mobile Development</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="IT Outsourcing">IT Outsourcing</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message <span className="text-red-500">*</span></label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 focus:outline-none h-32 text-black"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>
              
              {formStatus.message && (
                <div className={`text-sm p-3 rounded ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-6 rounded-lg font-medium text-lg disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://wa.me/6282211588989" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg w-full transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.572 3.428C18.254 1.11 15.136 0 11.893 0C5.387 0 0.107 5.28 0.107 11.786c0 2.077.547 4.104 1.588 5.89L0 24l6.484-1.7c1.722.938 3.667 1.432 5.65 1.432h.005c6.505 0 11.786-5.28 11.786-11.786 0-3.243-1.11-6.36-3.353-8.518zM11.893 21.55h-.004a9.8 9.8 0 0 1-5-1.372l-.358-.213-3.715.974.994-3.63-.233-.372a9.8 9.8 0 0 1-1.5-5.2c0-5.41 4.405-9.814 9.82-9.814 2.624 0 5.09 1.024 6.944 2.878 1.853 1.854 2.876 4.32 2.875 6.944-.005 5.41-4.41 9.814-9.823 9.814zm5.384-7.346c-.296-.148-1.75-.864-2.023-.962-.272-.099-.47-.148-.668.148-.198.296-.767.962-.94 1.16-.173.197-.345.222-.642.074-.296-.148-1.253-.462-2.384-1.475-.882-.787-1.477-1.76-1.65-2.056-.173-.296-.018-.456.13-.604.134-.132.297-.345.445-.518.149-.173.198-.296.297-.494.099-.198.05-.371-.025-.518-.074-.148-.668-1.61-.915-2.205-.241-.578-.486-.5-.668-.51-.173-.01-.371-.012-.57-.012-.197 0-.518.074-.79.37-.272.297-1.037.963-1.037 2.35 0 1.385 1.012 2.722 1.16 2.92.148.197 2.073 3.17 5.02 4.447.7.303 1.248.483 1.675.618.704.224 1.347.192 1.854.116.565-.084 1.75-.715 1.997-1.41.247-.693.247-1.286.173-1.41-.074-.123-.272-.197-.569-.345z" />
                  </svg>
                  or WhatsApp
                </a>
              </div>
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
