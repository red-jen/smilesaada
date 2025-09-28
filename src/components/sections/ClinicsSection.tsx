"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { ImagePlaceholder } from "../ui/image-placeholder"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Shield, 
  Award, 
  MapPin, 
  Star,
  Stethoscope,
  Users,
  ArrowRight,
  CheckCircle,
  Building,
  BadgeCheck,
  Globe,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from "lucide-react"
import { useState } from "react"

// Enhanced clinics data with more details
const clinics = [
  {
    name: "EL CEDRO CLINIC",
    location: "BARCELONA, SPAIN",
    image: "EC",
    rating: 4.9,
    reviewCount: 428,
    specialties: ["Implantology", "Dental Aesthetics", "Orthodontics"],
    certifications: ["ISO 9001", "CE Medical", "EU Certification"],
    features: ["Luxury treatment rooms", "3D scanning technology", "Digital workflow", "Recovery lounge"],
    description: "Located in the heart of Barcelona, El Cedro Clinic combines Spanish hospitality with cutting-edge dental technology. Their implantology center is renowned throughout Europe."
  },
  {
    name: "PREMIUM DENTAL CLINIC",
    location: "BUDAPEST, HUNGARY", 
    image: "PD",
    rating: 4.8,
    reviewCount: 512,
    specialties: ["All-on-4", "Oral Surgery", "Prosthetics"],
    certifications: ["ISO 13485", "GMP Certified", "EU Standards"],
    features: ["In-house dental lab", "Same-day treatments", "VIP patient lounge", "Airport transfers"],
    description: "Our flagship clinic in Budapest offers comprehensive dental care in a premium environment. Specialists in full-mouth rehabilitation and complex cases."
  },
  {
    name: "DENTAL EXCELLENCE CENTRE",
    location: "PORTO, PORTUGAL",
    image: "DE",
    rating: 4.9,
    reviewCount: 376,
    specialties: ["Periodontology", "Endodontics", "Cosmetic"],
    certifications: ["Joint Commission", "ISO 9001", "EU Certified"],
    features: ["Sedation options", "Scenic location", "Digital smile design", "Hotel partnership"],
    description: "Set in beautiful Porto, this clinic specializes in cosmetic transformations and combines traditional Portuguese hospitality with modern dental excellence."
  }
]

// Enhanced selection criteria with more visual elements
const selectionCriteria = [
  {
    icon: Award,
    title: "Elite Expertise",
    description: "Surgeons with minimum 10+ years experience and international qualifications",
    color: "bg-amber-100 text-amber-800"
  },
  {
    icon: Shield,
    title: "Quality Certifications",
    description: "ISO standards, CE marks, and full EU regulatory compliance",
    color: "bg-blue-100 text-blue-800"
  },
  {
    icon: Stethoscope,
    title: "Advanced Technology",
    description: "Latest 3D imaging, digital planning, and premium materials",
    color: "bg-emerald-100 text-emerald-800"
  },
  {
    icon: Users,
    title: "English Fluency",
    description: "All staff members speak fluent English for seamless communication",
    color: "bg-purple-100 text-purple-800"
  }
]

export default function ClinicsSection() {
  const [activeClinic, setActiveClinic] = useState(0);
  const [isMapView, setIsMapView] = useState(false);
  
  // Handle clinic navigation
  const nextClinic = () => {
    setActiveClinic((prev) => (prev + 1) % clinics.length)
  }

  const prevClinic = () => {
    setActiveClinic((prev) => (prev - 1 + clinics.length) % clinics.length)
  }
  
  return (
    <section className="section-spacing relative bg-gradient-to-b from-white via-blue-50/50 to-sky-50 gradient-mesh overflow-hidden pt-24 pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-100 to-sky-200 blur-3xl opacity-30"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
          style={{ top: "12%", left: "8%" }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 blur-3xl opacity-20"
          animate={{ x: [0, -25, 0], y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 28, ease: "easeInOut" }}
          style={{ bottom: "8%", right: "6%" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
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
            <Building className="w-5 h-5 text-blue-700" />
            <span className="text-sm font-bold text-blue-800">LUXURY DENTAL FACILITIES</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8 blog-heading">
            Premium Clinics
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent block">
              with 5-star standards
            </span>
          </h2>
          
          <p className="text-xl text-neutral-600 font-inter leading-relaxed mb-8 blog-content max-w-4xl">
            We partner only with the most prestigious dental facilities that meet our rigorous 
            quality standards. Experience luxury dental care in state-of-the-art environments 
            while saving up to 70% compared to UK prices.
          </p>
          
          {/* Toggle between list and map view */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full mb-8">
            <button 
              onClick={() => setIsMapView(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                !isMapView 
                  ? "bg-white text-primary-900 shadow-md" 
                  : "text-primary-700 hover:text-primary-900"
              }`}
            >
              <Building className="w-4 h-4" />
              Clinic Showcase
            </button>
            <button 
              onClick={() => setIsMapView(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isMapView 
                  ? "bg-white text-primary-900 shadow-md" 
                  : "text-primary-700 hover:text-primary-900"
              }`}
            >
              <Globe className="w-4 h-4" />
              View on Map
            </button>
          </div>
        </motion.div>

        {/* Enhanced Selection Criteria */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {selectionCriteria.map((criteria, index) => (
            <motion.div 
              key={criteria.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 hover:border-primary-200 h-full">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 ${criteria.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <criteria.icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-bold text-xl text-primary-900 mb-3 font-playfair">
                    {criteria.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {criteria.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Toggle content based on view mode */}
        {!isMapView ? (
          /* Clinic Carousel */
          <div className="mb-16">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeClinic}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
                    {/* Left side - Clinic Image */}
                    <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 to-blue-800/90 flex items-center justify-center z-10">
                        <div className="text-center p-6 lg:p-8 w-full max-w-md">
                          <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-28 h-28 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-4xl lg:text-5xl mx-auto mb-6 shadow-2xl border-4 border-white/30"
                          >
                            {clinics[activeClinic].image}
                          </motion.div>
                          
                          <motion.h3 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-2xl lg:text-3xl font-bold text-white mb-2 font-playfair"
                          >
                            {clinics[activeClinic].name}
                          </motion.h3>
                          
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="flex items-center justify-center gap-2 text-blue-200 mb-6"
                          >
                            <MapPin className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span className="text-sm lg:text-base">{clinics[activeClinic].location}</span>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full w-fit mx-auto mb-6 border border-white/20"
                          >
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-white font-semibold ml-1">{clinics[activeClinic].rating}</span>
                          </motion.div>
                          
                          <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="flex flex-wrap justify-center gap-2 mb-6"
                          >
                            {clinics[activeClinic].certifications.map((cert, index) => (
                              <motion.div 
                                key={cert}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                                className="flex items-center gap-1 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-white border border-white/20"
                              >
                                <BadgeCheck className="w-3 h-3 text-emerald-300" />
                                {cert}
                              </motion.div>
                            ))}
                          </motion.div>
                          
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                          >
                            <Button 
                              variant="outline" 
                              size="lg" 
                              className="group bg-white/10 border-white/30 text-white hover:bg-white hover:text-blue-900 backdrop-blur-sm"
                            >
                              Virtual Tour
                              <Sparkles className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-30"></div>
                    </div>
                    
                    {/* Right side - Clinic Details */}
                    <div className="p-6 lg:p-12 flex flex-col justify-between">
                      <div>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="mb-8"
                        >
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 font-playfair mb-4">
                            About the Clinic
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
                            {clinics[activeClinic].description}
                          </p>
                          
                          {/* Reviews */}
                          <div className="flex items-center gap-3 mb-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                              ))}
                            </div>
                            <span className="font-bold text-gray-900 text-lg">{clinics[activeClinic].rating}/5</span>
                            <span className="text-gray-600">({clinics[activeClinic].reviewCount} verified reviews)</span>
                          </div>
                        </motion.div>
                        
                        {/* Specialties and Features */}
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          className="grid gap-8 mb-8"
                        >
                          <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                              <Stethoscope className="w-5 h-5 text-blue-600" />
                              Specialities
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                              {clinics[activeClinic].specialties.map((specialty, index) => (
                                <motion.div 
                                  key={specialty}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                                  className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-100"
                                >
                                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                  <span className="text-gray-700 font-medium">{specialty}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                              <Award className="w-5 h-5 text-emerald-600" />
                              Premium Features
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                              {clinics[activeClinic].features.map((feature, index) => (
                                <motion.div 
                                  key={feature}
                                  initial={{ x: -20, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                                  className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-100"
                                >
                                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                      
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0, duration: 0.5 }}
                        className="space-y-4"
                      >
                        <Button 
                          variant="default" 
                          className="w-full group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg"
                          size="lg"
                        >
                          Request Treatment at This Clinic
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="w-full group border-blue-200 text-blue-700 hover:bg-blue-50"
                          size="lg"
                        >
                          Download Clinic Brochure
                          <Building className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation buttons */}
              <motion.button 
                onClick={prevClinic}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 -left-6 transform -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 border border-blue-100"
                aria-label="Previous clinic"
              >
                <ChevronLeft className="w-6 h-6 text-blue-700" />
              </motion.button>
              <motion.button 
                onClick={nextClinic}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-blue-50 transition-all duration-300 border border-blue-100"
                aria-label="Next clinic"
              >
                <ChevronRight className="w-6 h-6 text-blue-700" />
              </motion.button>
              
              {/* Enhanced dots navigation */}
              <div className="flex items-center justify-center gap-3 mt-8">
                {clinics.map((clinic, idx) => (
                  <motion.button 
                    key={idx} 
                    onClick={() => setActiveClinic(idx)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative transition-all duration-300 ${
                      activeClinic === idx 
                        ? 'w-12 h-4 bg-blue-600 rounded-full' 
                        : 'w-4 h-4 bg-gray-300 hover:bg-blue-400 rounded-full'
                    }`}
                    aria-label={`View ${clinic.name}`}
                  >
                    {activeClinic === idx && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Enhanced Map View */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden relative shadow-2xl border border-blue-100">
              {/* Enhanced map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50"></div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-60"></div>
              
              {/* Map overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-blue-900/10"></div>
              
              {/* Enhanced map markers */}
              {clinics.map((clinic, idx) => (
                <div 
                  key={idx}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                    idx === 0 ? 'left-[25%] top-[65%]' : 
                    idx === 1 ? 'left-[65%] top-[35%]' : 
                    'left-[45%] top-[75%]'
                  }`}
                >
                  <motion.div
                    animate={{ 
                      scale: activeClinic === idx ? [1, 1.2, 1] : [1, 1.05, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: activeClinic === idx ? 1.5 : 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="relative cursor-pointer group"
                    onClick={() => setActiveClinic(idx)}
                  >
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 border-3 border-white flex items-center justify-center text-white font-bold shadow-xl transition-all duration-300 ${
                      activeClinic === idx ? 'ring-4 ring-blue-300 ring-opacity-50' : 'group-hover:ring-2 group-hover:ring-blue-200'
                    }`}>
                      <span className="text-lg">{clinic.image}</span>
                    </div>
                    
                    {/* Enhanced clinic info popup */}
                    <AnimatePresence>
                      {activeClinic === idx && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.3 }}
                          className="absolute mt-4 -left-32 w-72 bg-white rounded-xl shadow-2xl p-4 z-30 border border-blue-100"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                              {clinic.image}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-900 text-sm mb-1">{clinic.name}</h4>
                              <p className="text-xs text-gray-600 mb-2 flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {clinic.location}
                              </p>
                              <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                                ))}
                                <span className="text-xs font-medium text-gray-700 ml-1">{clinic.rating}</span>
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {clinic.specialties.slice(0, 2).map((specialty) => (
                                  <span key={specialty} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                    {specialty}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              ))}
              
              {/* Enhanced map controls */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-5 border border-blue-100"
              >
                <div className="text-center mb-4">
                  <h4 className="font-bold text-gray-900 mb-1">Premium Clinic Network</h4>
                  <p className="text-sm text-gray-600 mb-3">Click markers to explore our facilities</p>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Active Clinics</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-blue-200 text-blue-700 hover:bg-blue-50" 
                    onClick={() => setIsMapView(false)}
                  >
                    <Building className="w-4 h-4 mr-2" />
                    View as Carousel
                  </Button>
                  
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Full Map View
                  </Button>
                </div>
              </motion.div>
              
              {/* Map legend */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-blue-100"
              >
                <h4 className="font-bold text-gray-900 text-sm mb-2">Our Locations</h4>
                <div className="space-y-2">
                  {clinics.map((clinic, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => setActiveClinic(idx)}
                      whileHover={{ scale: 1.02 }}
                      className={`flex items-center gap-2 w-full text-left p-2 rounded-lg transition-all duration-200 ${
                        activeClinic === idx ? 'bg-blue-100 text-blue-900' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full ${
                        activeClinic === idx ? 'bg-blue-500' : 'bg-gray-300'
                      }`}></div>
                      <span className="text-xs font-medium">{clinic.location}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white shadow-2xl">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-500/60 to-transparent blur-3xl" aria-hidden />
            <div className="absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-blue-500/25 blur-2xl" aria-hidden />

            <div className="relative grid gap-10 p-10 lg:grid-cols-[1.5fr_auto] lg:p-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100">
                  Concierge Experience
                </div>
                <h3 className="mt-6 text-3xl font-playfair font-bold leading-tight md:text-4xl">
                  The Premium Dental Difference
                </h3>
                <p className="mt-4 max-w-2xl text-base text-blue-100/80 md:text-lg">
                  UK-based advisors coordinate medical records, travel logistics and bespoke treatment timelines.
                  Focus on your transformation while we handle every detail.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {[
                    "Personal treatment concierge",
                    "Transparent, fixed pricing",
                    "Same-day treatment planning",
                    "Aftercare with UK partner clinics",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-200">
                        <CheckCircle className="h-5 w-5" aria-hidden />
                      </span>
                      <p className="text-sm font-medium text-blue-50">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4 self-stretch rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blue-100/70">Book your call</p>
                  <p className="mt-2 text-3xl font-bold text-white">Start your bespoke plan</p>
                </div>
                <Button variant="premium" size="lg" className="w-full justify-center text-base font-semibold">
                  Speak to an Advisor
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center border-white/40 text-base font-semibold text-white hover:border-white hover:bg-white/10"
                >
                  Download Clinic Portfolio
                </Button>
                <p className="text-xs text-blue-100/70">
                  Response within 12 hours • Confidential consultation • No obligation
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}