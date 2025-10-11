"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight, Sparkles, Star, Shield, Clock, Zap, Eye, Award, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WhiteningPage() {
  const whyChooseUs = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team is trained in the latest Zoom 2 whitening technology"
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your comfort and satisfaction are our top priorities"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Over 500+ satisfied patients with brighter smiles"
    }
  ]

  const beforeAfter = [
    { before: "Yellowed teeth from coffee & smoking", after: "8 shades whiter in 60 minutes" },
    { before: "Stained teeth affecting confidence", after: "Natural white smile restored" },
    { before: "Ineffective over-the-counter products", after: "Professional-grade transformation" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20251003-WA0002.jpg"
            alt="Smile Saada Zoom 2 Whitening"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <div className="inline-flex items-center gap-2 bg-accent-500/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-accent-400" />
                <span className="text-accent-300 font-medium">Smile Saada Professional Whitening</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight">
                Get 8 Shades<br />
                <span className="text-accent-400">Whiter</span> in<br />
                60 Minutes
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-xl">
                Experience the transformative power of Zoom 2 whitening at Smile Saada. 
                Safe, fast, and stunning results that will make you fall in love with your smile again.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Duration</p>
                    <p className="font-bold text-lg">60 Minutes</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Results</p>
                    <p className="font-bold text-lg">Instant</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Safety</p>
                    <p className="font-bold text-lg">FDA Approved</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="default" size="lg" className="bg-accent-500 hover:bg-accent-600 text-white" asChild>
                  <a href="tel:0661250137" className="group">
                    Book Your Transformation
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900" asChild>
                  <a href="#how-it-works">
                    Learn More
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Smile Saada?</h3>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-primary-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Before & After Comparison - Magazine Style */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm">Transformation</span>
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mt-3 mb-4">
              See The Smile Saada Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations from our patients who chose professional Zoom 2 whitening
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {beforeAfter.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 font-bold text-lg">Before</span>
                    </div>
                    <p className="text-gray-700 mt-2">{item.before}</p>
                  </div>
                  
                  <div className="my-6 flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gray-200"></div>
                    <ArrowRight className="w-8 h-8 text-accent-500 mx-4 flex-shrink-0" />
                    <div className="w-full h-0.5 bg-gray-200"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">After</span>
                    </div>
                    <p className="text-gray-700 mt-2 font-medium">{item.after}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              "/images/IMG-20251003-WA0004.jpg",
              "/images/IMG-20251003-WA0008.jpg",
              "/images/IMG-20251003-WA0010.jpg",
              "/images/IMG-20251003-WA0012.jpg"
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <Image
                  src={img}
                  alt={`Smile Saada result ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-accent-600/0 group-hover:bg-accent-600/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Zoom 2 Works - Interactive Timeline */}
      <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.05),transparent)]" />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm">The Process</span>
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mt-3 mb-4">
              Your Journey to a Brighter Smile
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, comfortable, and effective in just one hour
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation & Preparation",
                  description: "We assess your teeth, discuss your goals, and prepare your gums with a protective barrier.",
                  icon: CheckCircle
                },
                {
                  step: "02",
                  title: "Zoom 2 Gel Application",
                  description: "Professional-strength whitening gel is carefully applied to your teeth surface.",
                  icon: Sparkles
                },
                {
                  step: "03",
                  title: "LED Light Activation",
                  description: "Our advanced LED light activates the gel, breaking down stains at the molecular level.",
                  icon: Zap
                },
                {
                  step: "04",
                  title: "Reveal Your New Smile",
                  description: "After 60 minutes, see your transformation with teeth up to 8 shades whiter!",
                  icon: Star
                }
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-accent-300 transition-colors shadow-sm hover:shadow-lg duration-300">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {item.step}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <Icon className="w-6 h-6 text-accent-600" />
                            <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing - Cards Style */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm">Investment in Your Smile</span>
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mt-3 mb-4">
              Smile Saada Whitening Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible options to fit your lifestyle and budget
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Express Whitening",
                price: "€350",
                description: "Perfect for special occasions",
                features: [
                  "60-minute in-office treatment",
                  "Professional Zoom 2 technology",
                  "Up to 8 shades whiter",
                  "Immediate visible results",
                  "Post-treatment care kit"
                ],
                recommended: false
              },
              {
                name: "Complete Transformation",
                price: "€500",
                description: "Our most popular package",
                features: [
                  "In-office Zoom 2 session",
                  "Take-home maintenance kit",
                  "Custom whitening trays",
                  "Follow-up consultation",
                  "1-year touch-up support",
                  "Satisfaction guaranteed"
                ],
                recommended: true
              },
              {
                name: "Home Whitening Kit",
                price: "€250",
                description: "Whiten at your own pace",
                features: [
                  "Custom-fitted trays",
                  "Professional whitening gel",
                  "2-week treatment plan",
                  "Detailed instructions",
                  "Gradual, natural results"
                ],
                recommended: false
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${pkg.recommended ? 'lg:scale-105' : ''}`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className={`h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${pkg.recommended ? 'border-2 border-accent-500' : 'border border-gray-200'}`}>
                  <div className={`p-8 ${pkg.recommended ? 'bg-gradient-to-br from-accent-50 to-white' : ''}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{pkg.description}</p>
                    
                    <div className="mb-8">
                      <span className="text-5xl font-extrabold text-gray-900">{pkg.price}</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-accent-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${pkg.recommended ? 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700' : ''}`}
                      variant={pkg.recommended ? 'default' : 'outline'} 
                      size="lg" 
                      asChild
                    >
                      <a href="tel:0661250137" className="group">
                        Book Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              <Shield className="w-5 h-5 inline-block mr-2 text-accent-600" />
              All packages include professional consultation and post-treatment support
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-600 font-semibold tracking-wider uppercase text-sm">Success Stories</span>
            <h2 className="text-5xl font-playfair font-bold text-gray-900 mt-3 mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who transformed their smiles at Smile Saada
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "I was skeptical at first, but Smile Saada's Zoom 2 treatment blew me away! My teeth are 8 shades whiter and I can't stop smiling. The team made me feel so comfortable throughout.",
                author: "Sarah K.",
                role: "Marketing Manager"
              },
              {
                quote: "After years of coffee stains, I finally decided to try professional whitening. Best decision ever! The results were instant and have lasted over a year with proper care.",
                author: "Michael R.",
                role: "Entrepreneur"
              },
              {
                quote: "The Smile Saada team is incredible! They explained everything, the process was painless, and my smile has never looked better. Worth every penny!",
                author: "Emma L.",
                role: "Teacher"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-accent-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Bold & Action-Oriented */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/IMG-20251003-WA0013.jpg"
            alt="Smile Saada"
            fill
            className="object-cover brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-accent-900/80 to-primary-900/90" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Sparkles className="w-16 h-16 text-accent-400 mx-auto mb-6" />
              
              <h2 className="text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
                Your Dream Smile is<br />
                <span className="text-accent-400">60 Minutes Away</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Join the Smile Saada family and experience the confidence that comes with a brilliant, white smile
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button 
                  size="xl" 
                  className="bg-accent-500 hover:bg-accent-600 text-white shadow-2xl text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <a href="tel:0661250137" className="group">
                    <Phone className="w-6 h-6 mr-3" />
                    Call 06 61 25 01 37
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 h-auto"
                  asChild
                >
                  <Link href="/contact">
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Online
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-white/20">
                <div>
                  <p className="text-4xl font-bold text-accent-400 mb-2">500+</p>
                  <p className="text-sm text-gray-300">Happy Patients</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent-400 mb-2">8</p>
                  <p className="text-sm text-gray-300">Shades Whiter</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-accent-400 mb-2">60</p>
                  <p className="text-sm text-gray-300">Minutes Only</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
