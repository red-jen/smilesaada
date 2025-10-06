"use client"

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin, MapPin, Heart, Clock, Award, Shield } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h2 className="font-playfair font-bold text-2xl">Clinique Dentaire Saada</h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Modern dental clinic in Rabat offering comprehensive dental care with advanced technology and experienced professionals.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300">Licensed Clinic</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-gray-300">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">General Dentistry</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Cosmetic Dentistry</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Dental Implants</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Orthodontics</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Teeth Whitening</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Pricing</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 inline-block">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white font-medium">Immeuble Saada</p>
                  <p className="text-gray-400">Av. Hassan II, Rabat 10000</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="tel:0661250137" className="text-white hover:text-blue-400 transition-colors">06 61 25 01 37</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div className="text-sm">
                  <a href="mailto:contact@saadadental.ma" className="text-white hover:text-blue-400 transition-colors">contact@saadadental.ma</a>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium text-white">Opening Hours</span>
                </div>
                <div className="text-sm text-gray-400 ml-7">
                  <p>Mon - Fri: 9:00 - 18:00</p>
                  <p>Saturday: 9:00 - 14:00</p>
                  <p className="text-gray-500">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clinique Dentaire Saada. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm hidden md:inline">Follow us:</span>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-blue-700 to-blue-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
