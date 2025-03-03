"use client";

import HeroSection from "@/components/sections/HeroSection";
import PurposeSection from "@/components/sections/PurposeSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import SuccessStorySection from "@/components/sections/SuccessStorySection";
import ClientSection from "@/components/sections/ClientSection";
import TechnologyStackSection from "@/components/sections/TechnologyStackSection";
import ContactSection from "@/components/sections/ContactSection";
import FooterSection from "@/components/sections/FooterSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Enhanced scroll animations for sections
    const animateOnScroll = () => {
      // Get window height once for all animations
      const windowHeight = window.innerHeight;

      // Fade-in animations for sections
      const sections = document.querySelectorAll(".animate-on-scroll");

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight * 0.75) {
          section.classList.add("animate-fade-in");
        }
      });

      // Parallax effect for background elements
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || "0.5";
        const yPos = -(window.scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Different animation speeds for various elements
      const staggeredElements = document.querySelectorAll(
        ".staggered-animation"
      );
      staggeredElements.forEach((element, index) => {
        const delay = index * 0.15; // Staggered delay
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight * 0.85) {
          (element as HTMLElement).style.transitionDelay = `${delay}s`;
          element.classList.add("animate-slide-up");
        }
      });

      // Floating animation for decorative elements
      const floatingElements = document.querySelectorAll(".floating");
      floatingElements.forEach((element, index) => {
        const amplitude = element.getAttribute("data-amplitude") || "15";
        const period = element.getAttribute("data-period") || "3000";
        const phase = index * (Math.PI / 4); // Different starting positions

        const sinValue = Math.sin(Date.now() / parseInt(period) + phase);
        const translateY = sinValue * parseInt(amplitude);

        (
          element as HTMLElement
        ).style.transform = `translateY(${translateY}px)`;
      });
    };

    // Initialize animations
    animateOnScroll();

    // Set up animation loop for continuous animations (floating elements)
    const animationFrame = requestAnimationFrame(function animate() {
      const floatingElements = document.querySelectorAll(".floating");
      if (floatingElements.length > 0) {
        floatingElements.forEach((element, index) => {
          const amplitude = element.getAttribute("data-amplitude") || "15";
          const period = element.getAttribute("data-period") || "3000";
          const phase = index * (Math.PI / 4);

          const sinValue = Math.sin(Date.now() / parseInt(period) + phase);
          const translateY = sinValue * parseInt(amplitude);

          (
            element as HTMLElement
          ).style.transform = `translateY(${translateY}px)`;
        });
      }
      requestAnimationFrame(animate);
    });

    // Add scroll event listener
    window.addEventListener("scroll", animateOnScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Purpose Section */}
      <PurposeSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Our Process Section */}
      <ProcessSection />

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Success Story */}
      <SuccessStorySection />

      {/* Client Section */}
      <ClientSection />

      {/* Technology Stack Section */}
      <TechnologyStackSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}
