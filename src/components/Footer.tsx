"use client"

import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin,
  Smile,
  Facebook,
  Instagram,
  Youtube,
  ArrowRight,
  Shield,
  Award,
  Clock
} from "lucide-react"
import { useState, useEffect } from "react"

const quickLinks = [
  { name: "Dental Implants", href: "#implants" },
  { name: "All-on-4", href: "#all-on-4" },
  { name: "Dental Crowns", href: "#crowns" },
  { name: "Veneers", href: "#veneers" },
  { name: "Orthodontics", href: "#orthodontics" }
]

const destinations = [
  { name: "Barcelona, Spain", href: "#barcelona" },
  { name: "Budapest, Hungary", href: "#budapest" },
  { name: "Porto, Portugal", href: "#porto" },
  { name: "Prague, Czech Republic", href: "#prague" }
]

const companyLinks = [
  { name: "About Us", href: "#about" },
  { name: "Our Clinics", href: "#clinics" },
  { name: "Patient Stories", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
]

export default function Footer() {
  const [year, setYear] = useState<string | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-primary-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-primary-700">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <h3 className="text-3xl font-playfair font-bold mb-4">
                Stay informed about dental care abroad
              </h3>
              <p className="text-primary-200 text-lg">
                Get our free guide, tips for dental tourism, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-400"
              />
              <Button 
                variant="gold" 
                size="lg"
                className="group whitespace-nowrap"
              >
                Get Free Guide
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                <Smile className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-playfair font-bold">
                  Premium Dental
                </span>
                <span className="text-xs text-accent-400 font-medium uppercase tracking-wider">
                  Luxury Care Abroad
                </span>
              </div>
            </div>
            
            <p className="text-primary-200 mb-6 leading-relaxed">
              Your trusted partner for premium dental care abroad. Save up to 70% without compromising on quality or service.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-accent-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Fully Insured & Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-accent-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">18 Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-accent-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 Patient Support</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-accent-400">
              Popular Treatments
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-200 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-accent-400">
              Our Destinations
            </h4>
            <ul className="space-y-3">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <a 
                    href={destination.href}
                    className="text-primary-200 hover:text-white transition-colors flex items-center group"
                  >
                    <MapPin className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-bold mb-6 text-accent-400">
              Get in Touch
            </h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-400 mt-0.5" />
                <div>
                  <p className="font-semibold">+44 20 7946 0958</p>
                  <p className="text-primary-300 text-sm">Mon-Fri 9AM-6PM GMT</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-400 mt-0.5" />
                <div>
                  <p className="font-semibold">info@premiumdental.co.uk</p>
                  <p className="text-primary-300 text-sm">24/7 Email Support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-400 mt-0.5" />
                <div>
                  <p className="font-semibold">London, UK</p>
                  <p className="text-primary-300 text-sm">Serving patients nationwide</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-700 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-700 bg-primary-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-300 text-sm">
              © {year ?? new Date().getFullYear()} Premium Dental. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-primary-300">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}