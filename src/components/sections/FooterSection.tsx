"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  ChevronRight,
  MapPin,
  Star,
  Shield,
  Heart
} from 'lucide-react';

export default function FooterSection() {
  const [year, setYear] = useState<string | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-gradient-to-b from-[#0b3a6b] via-[#0f4cac] to-[#1e3aa8] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-12 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-[#60a5fa] blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-[#1e40af] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h2 className="font-playfair font-bold text-2xl mb-4 text-white">Premium Dental</h2>
            <p className="text-slate-100 mb-6">
              The luxury approach to affordable dental care abroad. UK-based patient coordination with premium clinics across Europe.
            </p>

            {/* Clinic image + Testimonial section */}
            <div className="mt-6 flex items-start gap-6">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1f8b5e3d9b4f?auto=format&fit=crop&w=600&q=60"
                alt="Luxury dental clinic"
                className="w-36 h-24 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />

              <div>
                <h3 className="font-semibold text-base mb-2 text-white">Patient Testimonials</h3>
                <p className="text-slate-200 text-sm mb-3">Real patients, real results — stories from our satisfied patients.</p>
                <div className="flex gap-3">
                  <img src="https://placehold.co/48x48/0ea5e9/ffffff?text=JD" alt="patient 1" className="w-12 h-12 rounded-full border-2 border-[#60a5fa]" loading="lazy" />
                  <img src="https://placehold.co/48x48/0ea5e9/ffffff?text=SM" alt="patient 2" className="w-12 h-12 rounded-full border-2 border-[#60a5fa]" loading="lazy" />
                  <img src="https://placehold.co/48x48/0ea5e9/ffffff?text=MR" alt="patient 3" className="w-12 h-12 rounded-full border-2 border-[#60a5fa]" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-100 hover:text-[#a5f3fc] transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> About Us</Link></li>
              <li><Link href="/services" className="text-slate-100 hover:text-[#a5f3fc] transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Our Services</Link></li>
              <li><Link href="/pricing" className="text-slate-100 hover:text-[#a5f3fc] transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Pricing</Link></li>
              <li><Link href="/contact" className="text-slate-100 hover:text-[#a5f3fc] transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">Contact & Social</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#a5f3fc] mt-0.5" />
                <div>
                  <p className="text-white">125 London Wall</p>
                  <p className="text-slate-200">London, EC2Y 5AS, UK</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#a5f3fc]" />
                <p className="text-white">+44 20 1234 5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#a5f3fc]" />
                <p className="text-white">care@premiumdental.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-[#0f4cac] hover:bg-[#60a5fa] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-[#0f4cac] hover:bg-[#60a5fa] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#0f4cac] hover:bg-[#60a5fa] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#0f4cac] hover:bg-[#60a5fa] w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Trust badges section */}
        <div className="mt-16 pt-8 border-t border-[#133a75]">
          <h3 className="font-semibold text-lg mb-6 text-center text-white">Trusted By</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1583225154330-2f02b0f4b3d4?auto=format&fit=crop&w=400&q=60" 
                alt="Trusted Clinic" 
                className="w-16 h-16 rounded-lg mb-2 object-cover shadow-md"
                loading="lazy"
              />
              <p className="text-xs text-slate-200">Global Dentistry</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1600180758890-1b9e4b3d2a3f?auto=format&fit=crop&w=400&q=60" 
                alt="Trusted Clinic" 
                className="w-16 h-16 rounded-lg mb-2 object-cover shadow-md"
                loading="lazy"
              />
              <p className="text-xs text-slate-200">Euro Dental</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=400&q=60" 
                alt="Trusted Clinic" 
                className="w-16 h-16 rounded-lg mb-2 object-cover shadow-md"
                loading="lazy"
              />
              <p className="text-xs text-slate-200">World Dent</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=400&q=60" 
                alt="Trusted Clinic" 
                className="w-16 h-16 rounded-lg mb-2 object-cover shadow-md"
                loading="lazy"
              />
              <p className="text-xs text-slate-200">Premium Dent</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-100 text-sm">© {year ?? new Date().getFullYear()} Premium Dental. All rights reserved.</p>
          <div className="flex gap-4 text-slate-100 text-sm mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-[#a5f3fc] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#a5f3fc] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}