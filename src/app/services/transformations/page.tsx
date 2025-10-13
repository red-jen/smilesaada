"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, CheckCircle, ArrowRight, Star, Award, Shield, Users, Sparkles, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TransformationsPage() {
  const transformations = [
    {
      name: "Élodie, 34 ans",
      before: "Dents tâchées et cariées à répétition",
      after: "Sourire harmonieux, esthétique et naturel",
      treatment: "Bridge céramique zirconium",
      duration: "2 semaines",
      satisfaction: "Très satisfaite",
      imageAfter: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
      imageBefore: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"
    },
    {
      name: "Delphine, 40 ans",
      before: "Dents jaunies, fragiles et abîmées",
      after: "Dents blanches et esthétiques retrouvées",
      treatment: "Bridge complet céramique zirconium",
      duration: "3 semaines",
      satisfaction: "Excellente",
      imageAfter: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      imageBefore: "https://images.unsplash.com/photo-1609324217556-5df8e87d5e12?w=400&q=80"
    },
    {
      name: "Nina, 30 ans",
      before: "Dents tordues, tâchées et jaunies",
      after: "Sourire parfaitement aligné et naturel",
      treatment: "Implants dentaires + Couronnes zircone",
      duration: "4 semaines",
      satisfaction: "Ravie",
      imageAfter: "https://images.unsplash.com/photo-1609324217556-5df8e87d5e12?w=800&q=80",
      imageBefore: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80"
    },
    {
      name: "Brigitte, 59 ans",
      before: "Déchaussement dentaire avancé",
      after: "Dentition stable, fixe et solide",
      treatment: "Implants + Bridge zircone + Greffe osseuse",
      duration: "6 semaines",
      satisfaction: "Très heureuse",
      imageAfter: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      imageBefore: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80"
    },
    {
      name: "Pascal, 59 ans",
      before: "Dents manquantes et fragilisées",
      after: "Dentition complète et confort retrouvé",
      treatment: "Implants dentaires + Bridge complet",
      duration: "5 semaines",
      satisfaction: "Très satisfait",
      imageAfter: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
      imageBefore: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80"
    },
    {
      name: "Christel, 52 ans",
      before: "Dents fragilisées, sensibles et jaunies",
      after: "Belle dentition pour sourire sans complexe",
      treatment: "Bridge complet céramique sur zirconium",
      duration: "3 semaines",
      satisfaction: "Parfait",
      imageAfter: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
      imageBefore: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&q=80"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 pt-32 pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm font-medium">Real Patient Transformations</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Transform Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                    Smile & Confidence
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
                >
                  Discover real before & after stories from our patients. See how advanced dental solutions have transformed lives and restored confidence.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <Button size="lg" variant="secondary" className="text-base" asChild>
                    <a href="tel:0661250137">
                      <Phone className="w-5 h-5 mr-2" />
                      Book Free Consultation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary-900" asChild>
                    <Link href="/contact">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Visit
                    </Link>
                  </Button>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-5 h-5 text-blue-300" />
                      <p className="text-3xl font-bold text-white">500+</p>
                    </div>
                    <p className="text-sm text-blue-200">Happy Patients</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      <p className="text-3xl font-bold text-white">98%</p>
                    </div>
                    <p className="text-sm text-blue-200">Satisfaction</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Award className="w-5 h-5 text-blue-300" />
                      <p className="text-3xl font-bold text-white">15+</p>
                    </div>
                    <p className="text-sm text-blue-200">Years Experience</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right - Hero Images */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative hidden lg:block"
              >
                <div className="relative">
                  {/* Main Featured Image */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80"
                      alt="Smile Transformation"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900">Transformation Complete</p>
                            <p className="text-sm text-gray-600">Élodie, 34 ans</p>
                          </div>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Small Before Badge */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=200&q=80"
                          alt="Before"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded mb-1">BEFORE</p>
                        <ArrowRight className="w-4 h-4 text-primary-600" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Our Patients Choose Us</h2>
              <p className="text-lg text-gray-600">Excellence in dental care and patient satisfaction</p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Award, title: "Expert Team", desc: "Certified specialists with 15+ years experience" },
                { icon: Shield, title: "Safe Procedures", desc: "Latest technology and safety protocols" },
                { icon: Users, title: "500+ Patients", desc: "Successful transformations completed" },
                { icon: Star, title: "5-Star Reviews", desc: "98% patient satisfaction rate" }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Gallery - Enhanced Design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary-100 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-primary-600" />
                <span className="text-primary-700 font-medium text-sm">Success Stories</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Transformations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real transformations from real patients. See how we've helped restore confidence and transform lives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {transformations.map((transformation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100"
                >
                  {/* Main Image (After) with Before Overlay */}
                  <div className="relative h-72 overflow-hidden">
                    {/* Main After Image */}
                    <Image
                      src={transformation.imageAfter}
                      alt={`After - ${transformation.name}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Completed
                      </span>
                      <span className="bg-white/95 backdrop-blur-sm text-primary-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                        AFTER
                      </span>
                    </div>

                    {/* Before Image - Bottom Right Corner */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className="absolute bottom-4 right-4 w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-2xl group-hover:scale-110 transition-transform"
                    >
                      <Image
                        src={transformation.imageBefore}
                        alt={`Before - ${transformation.name}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-1 left-1">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">BEFORE</span>
                      </div>
                    </motion.div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-28 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{transformation.name}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-sm text-white ml-2">{transformation.satisfaction}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Before/After */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">BEFORE</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{transformation.before}</p>
                      </div>
                      
                      <div className="flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-primary-600" />
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-16 flex-shrink-0">
                          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">AFTER</span>
                        </div>
                        <p className="text-sm text-gray-900 font-semibold leading-relaxed">{transformation.after}</p>
                      </div>
                    </div>

                    {/* Treatment Details */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Treatment</p>
                          <p className="text-sm text-gray-900">{transformation.treatment}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-medium text-gray-500 mb-1">Duration</p>
                          <p className="text-sm text-gray-900">{transformation.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6">
                      <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-colors" asChild>
                        <a href="tel:0661250137">
                          Start Your Journey
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 mb-4">Want to see your own transformation?</p>
              <Button size="lg" asChild>
                <a href="tel:0661250137">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before/After Visual Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Before & After Gallery</h2>
              <p className="text-lg text-gray-600">Visual proof of life-changing results</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80", after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80", label: "Complete Smile Makeover" },
                { before: "https://images.unsplash.com/photo-1609324217556-5df8e87d5e12?w=600&q=80", after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80", label: "Dental Implants" },
                { before: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80", after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80", label: "Teeth Whitening & Veneers" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="group"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative h-48">
                        <Image src={item.before} alt="Before" fill className="object-cover" />
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
                        </div>
                      </div>
                      <div className="relative h-48">
                        <Image src={item.after} alt="After" fill className="object-cover" />
                        <div className="absolute top-2 right-2">
                          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                      <div className="text-center text-white">
                        <Sparkles className="w-8 h-8 mx-auto mb-2" />
                        <p className="font-semibold">{item.label}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
              <p className="text-lg text-gray-600">Hear from those who experienced the transformation</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "I can't believe the transformation! The team made me feel comfortable throughout the process. My confidence has completely changed.",
                  author: "Sophie M.",
                  age: "32 ans",
                  treatment: "Veneers",
                  rating: 5
                },
                {
                  quote: "After years of hiding my smile, I finally feel proud to show my teeth. The results exceeded all my expectations!",
                  author: "Jean-Pierre L.",
                  age: "45 ans",
                  treatment: "Implants",
                  rating: 5
                },
                {
                  quote: "Professional, caring, and exceptional results. I wish I had done this years ago. Thank you for giving me my smile back!",
                  author: "Marie D.",
                  age: "38 ans",
                  treatment: "Bridge",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.age} • {testimonial.treatment}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Star className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Your Transformation?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Join hundreds of satisfied patients who have transformed their smiles with us
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto" asChild>
                <a href="tel:0661250137">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 06 61 25 01 37
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-6 h-auto" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
