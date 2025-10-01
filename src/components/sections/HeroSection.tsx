"use client"

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden pt-20 pb-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/30 to-blue-50/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(16,185,129,0.05),transparent_50%)]" />
      </div>
      
      {/* Content */}
      <div className="relative mx-auto min-h-[85vh] flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-8">
              <div className="space-y-6">
                <motion.div 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block"
                >
                  <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold border border-teal-100">
                    ✨ Excellence in Dental Care
                  </span>
                </motion.div>
                
                <motion.h1 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  Your perfect smile
                  <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent block">
                    starts here
                  </span>
                </motion.h1>
                
                <motion.p 
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  Experience excellence in dental care at Saada Dental Clinic. 
                  Our team of specialists is dedicated to helping you regain confidence 
                  and wellbeing through a brilliant, healthy smile.
                </motion.p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all group">
                  <span className="flex items-center gap-2">
                    Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl">
                  Our Services
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">98%</p>
                  <p className="text-xs text-gray-600">Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">15+</p>
                  <p className="text-xs text-gray-600">Years Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">1000+</p>
                  <p className="text-xs text-gray-600">Happy Patients</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-teal-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-900">24/7</p>
                  <p className="text-xs text-gray-600">Support</p>
                </div>
              </div>
            </motion.div>

            {/* Hero image */}
            <motion.div 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/pexels-photo-6812561.webp" 
                  alt="Saada Dental Clinic - Professional Team" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
              </div>
              
              {/* Floating cards */}
              <motion.div 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Dr. Mehdi Filal</p>
                    <p className="text-sm text-gray-600">Lead Dental Surgeon</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="flex items-center gap-1 justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Sparkles key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold text-gray-900">Rated 4.9/5</p>
                  <p className="text-xs text-gray-600">200+ Reviews</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
