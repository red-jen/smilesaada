"use client"

import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/IMG-20251003-WA0001.jpg" 
          alt="Clinique Dentaire Saada - Premium Dental Care" 
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-teal-900/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 mx-auto w-full">
        <div className="w-full px-6 sm:px-10 lg:px-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 lg:py-12"
            >
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="inline-block"
                >
                  <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 shadow-lg">
                    ✨ Excellence in Dental Care
                  </span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                >
                  Your perfect smile
                  <span className="bg-gradient-to-r from-teal-300 to-blue-300 bg-clip-text text-transparent block mt-2">
                    starts here
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Experience excellence in dental care at Saada Dental Clinic. 
                  Our team of specialists is dedicated to helping you regain confidence 
                  and wellbeing through a brilliant, healthy smile.
                </motion.p>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="px-8 py-6 bg-teal-500 hover:bg-teal-600 text-white rounded-xl shadow-2xl hover:shadow-teal-500/50 transition-all group text-lg font-semibold">
                  Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm rounded-xl text-lg font-semibold">
                  Our Services
                </Button>
              </motion.div>

              {/* Trust indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-6 h-6 text-green-300" />
                  </div>
                  <p className="text-lg font-bold text-white">98%</p>
                  <p className="text-xs text-white/80">Satisfaction</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-blue-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-blue-300" />
                  </div>
                  <p className="text-lg font-bold text-white">15+</p>
                  <p className="text-xs text-white/80">Years</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <p className="text-lg font-bold text-white">1000+</p>
                  <p className="text-xs text-white/80">Patients</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-teal-400/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Clock className="w-6 h-6 text-teal-300" />
                  </div>
                  <p className="text-lg font-bold text-white">24/7</p>
                  <p className="text-xs text-white/80">Support</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Decorative circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl" />
                
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Professional Dentist - Dr. Mehdi Filal" 
                  className="relative w-full max-w-lg h-auto object-cover rounded-3xl shadow-2xl border-4 border-white/20"
                />
                
                {/* Floating credential card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Dr. Mehdi Filal</p>
                      <p className="text-sm text-gray-600">Lead Dental Surgeon</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating rating card */}
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-gray-100"
                >
                  <div className="text-center">
                    <div className="flex items-center gap-1 justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Sparkles key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600">200+ Reviews</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
