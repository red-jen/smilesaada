"use client"

import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { 
  MessageCircle, 
  Calendar, 
  Stethoscope, 
  Heart,
  ArrowRight,
  Clock,
  CheckCircle,
  ShieldCheck,
  Phone,
  Star,
  UserCheck,
  Plane
} from "lucide-react"
import { useState } from "react"

const steps = [
  {
    number: "01",
    title: "Consultation Gratuite",
    timeline: "SOUS 24H",
    description: "Un conseiller Clinique Saada dédié vous contacte pour comprendre vos besoins dentaires.",
    subStep: "SOUS 7 JOURS",
    subDescription: "Recevez votre plan de traitement personnalisé avec devis détaillé.",
    icon: MessageCircle,
    color: "from-blue-400 to-blue-600",
    benefits: [
      "Consultation vidéo gratuite",
      "Plan de traitement personnalisé",
      "Plusieurs options de traitement",
      "Tarification transparente"
    ]
  },
  {
    number: "02", 
    title: "Planification de Voyage",
    timeline: "CONCIERGE SERVICE",
    description: "We organize your entire journey including transportation, premium accommodation, and all medical appointments.",
    subStep: "VIP SUPPORT",
    subDescription: "Your dedicated advisor handles all paperwork and administrative procedures for a seamless experience.",
    icon: Plane,
    color: "from-green-400 to-green-600",
    benefits: [
      "Premium accommodation",
      "Airport transfers included",
      "Flexible scheduling",
      "Local transportation"
    ]
  },
  {
    number: "03",
    title: "Expert Treatment",
    timeline: "ON LOCATION",
    description: "Your treatment is performed by EU-certified specialists in our partner luxury clinics with state-of-the-art equipment.",
    subStep: "DAILY FOLLOW-UP",
    subDescription: "Personal assistance and comprehensive medical follow-up throughout your entire stay abroad.",
    icon: Stethoscope,
    color: "from-accent-400 to-accent-600",
    benefits: [
      "EU-certified dentists",
      "Premium materials",
      "State-of-the-art facilities",
      "Same-day procedures"
    ]
  },
  {
    number: "04",
    title: "Aftercare Program",
    timeline: "BACK IN THE UK",
    description: "Comprehensive follow-up care and continuous support after your return to ensure optimal results.",
    subStep: "LIFETIME WARRANTY",
    subDescription: "Long-term technical and medical support included with all our premium treatments.",
    icon: Heart,
    color: "from-purple-400 to-purple-600",
    benefits: [
      "Lifetime warranty",
      "Follow-up appointments",
      "24/7 support line",
      "UK partner clinics"
    ]
  }
]

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section-spacing relative bg-gradient-to-b from-white via-blue-50 to-sky-50 gradient-mesh overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-100 to-sky-200 blur-3xl opacity-50"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 30,
            ease: "easeInOut"
          }}
          style={{ top: '15%', right: '10%' }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 blur-3xl opacity-30"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', left: '5%' }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-5 h-5 text-blue-700" />
            <span className="text-sm font-bold text-blue-800">VIP CONCIERGE SERVICE</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8 blog-heading">
            We take care of everything 
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent block">
              from consultation to aftercare
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 font-inter leading-relaxed blog-content max-w-4xl">
            Our premium concierge service guarantees a smooth, stress-free experience and exceptional results for every patient.
          </p>
        </motion.div>

        {/* Interactive Timeline Steps */}
        <div className="mb-20">
          {/* Step Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12 relative"
          >
            {/* Connecting line */}
            <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>
            <div 
              className="absolute h-1 bg-gradient-to-r from-primary-500 to-primary-700 left-0 top-1/2 transform -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative z-10"
                onClick={() => setActiveStep(index)}
              >
                <div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-500/30' 
                      : 'bg-white text-primary-300 border-2 border-gray-200 hover:border-primary-300'
                  }`}
                >
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <div className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium ${
                  index <= activeStep ? 'text-primary-800' : 'text-gray-500'
                }`}>
                  {step.title}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Step Content Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="grid lg:grid-cols-5 h-full">
              {/* Left Content - Step Details */}
              <div className="lg:col-span-3 p-8 lg:p-12">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-primary-100 px-3 py-1.5 rounded-full mb-4">
                    <Clock className="w-4 h-4 text-primary-700" />
                    <span className="text-xs font-bold text-primary-800">{steps[activeStep].timeline}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-primary-900 font-playfair mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    {steps[activeStep].description}
                  </p>
                  
                  {/* Benefits List */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {steps[activeStep].benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-gradient-to-br ${steps[activeStep].color}`}>
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-neutral-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sub-step Enhanced */}
                  <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-6 rounded-xl border border-primary-100">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-full">
                        <UserCheck className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <div className="font-bold text-primary-900 mb-1">
                          {steps[activeStep].subStep}
                        </div>
                        <div className="text-primary-700">
                          {steps[activeStep].subDescription}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className="gap-2"
                  >
                    <ArrowRight className="w-4 h-4 rotate-180" />
                    Previous Step
                  </Button>
                  <Button 
                    variant={activeStep === steps.length - 1 ? "gold" : "premium"}
                    onClick={() => {
                      if (activeStep < steps.length - 1) {
                        setActiveStep(prev => prev + 1);
                      }
                    }}
                    className="gap-2"
                  >
                    {activeStep === steps.length - 1 ? 'Start Your Journey' : 'Next Step'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* Right Content - Visual Illustration */}
              <div className={`hidden lg:block lg:col-span-2 bg-gradient-to-br ${steps[activeStep].color} text-white p-12`}>
                <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-8">
                    {(() => {
                      const StepIcon = steps[activeStep].icon;
                      return <StepIcon className="w-16 h-16" />;
                    })()}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-5xl font-bold font-playfair mb-4">
                      {steps[activeStep].number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{steps[activeStep].title}</h3>
                    
                    {/* Testimonial quote for this step */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-8 relative">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                      </div>
                      <p className="text-white/90 italic text-sm mb-4">
                        "The {steps[activeStep].title.toLowerCase()} process was incredibly smooth. Premium Dental made everything so easy!"
                      </p>
                      <p className="text-white font-bold text-sm">— Satisfied Patient</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced VIP Concierge Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-white/10 to-transparent blur-xl"
              animate={{ 
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }} 
              transition={{ 
                repeat: Infinity,
                duration: 15,
                ease: "easeInOut"
              }}
              style={{ top: '10%', right: '5%' }}
            />
            <motion.div 
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-accent-500/5 to-transparent blur-xl"
              animate={{ 
                x: [0, -20, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }} 
              transition={{ 
                repeat: Infinity,
                duration: 20,
                ease: "easeInOut"
              }}
              style={{ bottom: '5%', left: '10%' }}
            />
          </div>
          
          {/* Content */}
          <div className="grid lg:grid-cols-5 relative z-10">
            {/* Left content */}
            <div className="lg:col-span-3 p-8 lg:p-12 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-accent-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <UserCheck className="w-5 h-5 text-accent-300" />
                  <span className="text-sm font-bold text-accent-200">VIP CONCIERGE TEAM</span>
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-playfair font-bold text-white">
                  Meet Your Dedicated Care Team
                </h3>
                <p className="text-xl text-primary-100 mb-4">
                  100% FOCUSED ON YOUR PREMIUM DENTAL EXPERIENCE
                </p>
                <p className="text-primary-200 leading-relaxed">
                  Your UK-based personal advisors guide you through every step of your journey. 
                  From your first consultation to final follow-up, our concierge team ensures 
                  a luxury experience with exceptional attention to detail.
                </p>
              </div>
              
              {/* Enhanced benefit cards */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-500/30 rounded-lg">
                      <Phone className="w-5 h-5 text-accent-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">24/7 Support</h4>
                      <p className="text-sm text-primary-200">
                        Always available assistance before, during, and after your treatment
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-500/30 rounded-lg">
                      <Plane className="w-5 h-5 text-accent-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Travel Coordination</h4>
                      <p className="text-sm text-primary-200">
                        Complete handling of all travel and accommodation arrangements
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-500/30 rounded-lg">
                      <Calendar className="w-5 h-5 text-accent-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Flexible Scheduling</h4>
                      <p className="text-sm text-primary-200">
                        Treatment plans adapted to your availability and preferences
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-accent-500/30 rounded-lg">
                      <ShieldCheck className="w-5 h-5 text-accent-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Treatment Guarantee</h4>
                      <p className="text-sm text-primary-200">
                        Comprehensive warranty and follow-up care for your peace of mind
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Button 
                variant="gold" 
                size="xl" 
                className="group shadow-xl hover:shadow-accent-500/20"
              >
                Connect With Your Advisor
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Right content - Concierge team visualization */}
            <div className="hidden lg:block lg:col-span-2 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/abstract-pattern.svg')] opacity-10"></div>
              </div>
              
              <div className="relative h-full flex flex-col items-center justify-center p-12 z-10">
                {/* Team photos with animated elements */}
                <div className="grid grid-cols-2 gap-8 mb-8 w-full">
                  {/* Marie */}
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative mb-4">
                      {/* Animated ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border-2 border-accent-400/50"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }} 
                        transition={{ 
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                      
                      <div className="w-28 h-28 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-xl border-4 border-white/20">
                        M
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-white text-lg">Marie</p>
                      <p className="text-primary-200 text-sm">Lead Patient Coordinator</p>
                      <div className="flex items-center justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Julien */}
                  <motion.div 
                    className="flex flex-col items-center"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="relative mb-4">
                      {/* Animated ring */}
                      <motion.div 
                        className="absolute inset-0 rounded-full border-2 border-primary-400/50"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }} 
                        transition={{ 
                          repeat: Infinity,
                          duration: 3,
                          delay: 1.5,
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                      
                      <div className="w-28 h-28 bg-gradient-to-br from-primary-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-xl border-4 border-white/20">
                        J
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      {/* Online indicator */}
                      <div className="absolute top-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-white text-lg">Julien</p>
                      <p className="text-primary-200 text-sm">Medical Treatment Liaison</p>
                      <div className="flex items-center justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Testimonial quote */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mt-4 border border-white/10"
                >
                  <p className="text-white/90 italic text-sm mb-4">
                    "Marie and Julien were incredibly attentive throughout my entire journey. 
                    They took care of every detail and made me feel like a VIP. 
                    The personal touch made all the difference."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold">
                      RB
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">Richard B.</p>
                      <p className="text-xs text-primary-200">London, UK</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}