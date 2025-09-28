"use client"

import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden pt-24 pb-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/pexels-photo-6812561.webp"
          alt="Professional dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/50" />
      </div>

      {/* Content */}
      <div className="relative mx-auto min-h-[calc(100vh-6rem)] flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-24">
          <div className="max-w-3xl">
            <div className="inline-block bg-blue-600 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              EU-Certified Specialists
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Exceptional Dental Care
              <span className="block text-blue-300 mt-3">At Prices You Can Afford</span>
            </h1>
            
            <p className="text-lg text-gray-200 mb-8">
              Experience world-class dental treatments in state-of-the-art European clinics. 
              Our award-winning specialists combine cutting-edge technology with personalized care 
              to deliver outstanding results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" className="px-8 py-3 bg-blue-600 hover:bg-blue-700">
                Book Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-white border-white/30 hover:bg-white/10">
                View Our Work
              </Button>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10">
              <p className="text-sm text-gray-300">
                <span className="font-medium text-white">25+ Years</span> of Excellence • 
                <span className="font-medium text-white ml-1">98%</span> Patient Satisfaction • 
                <span className="font-medium text-white ml-1">24/7</span> Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}