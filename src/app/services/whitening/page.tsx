"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WhiteningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Enhanced Visual Design */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 pt-32 pb-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
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
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">FDA Approved Treatment</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  Professional Teeth Whitening with Zoom 2
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
                >
                  Safe, effective in-office whitening treatment performed by certified dental professionals. 
                  Achieve up to 8 shades whiter teeth in a single 60-minute appointment.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <Button size="lg" variant="secondary" asChild>
                    <a href="tel:0661250137">
                      <Phone className="w-5 h-5 mr-2" />
                      Call 06 61 25 01 37
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-900" asChild>
                    <a href="#pricing">
                      View Pricing & Packages
                    </a>
                  </Button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-6 pt-6 border-t border-white/20"
                >
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">60</p>
                    <p className="text-sm text-blue-200">Minutes</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">8+</p>
                    <p className="text-sm text-blue-200">Shades Whiter</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white mb-1">500+</p>
                    <p className="text-sm text-blue-200">Happy Patients</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/IMG-20251003-WA0002.jpg"
                    alt="Professional Zoom 2 Whitening Treatment"
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">Certified Treatment</p>
                        <p className="text-sm text-gray-600">By Licensed Professionals</p>
                      </div>
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "Treatment Time", desc: "60 minutes per session", delay: 0.1 },
              { icon: Award, title: "Results", desc: "Up to 8 shades whiter", delay: 0.2 },
              { icon: Shield, title: "Safety", desc: "FDA approved technology", delay: 0.3 }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="text-center p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What is Zoom 2 Whitening */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Zoom 2 Teeth Whitening?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Zoom 2 is a professional teeth whitening system that uses a specialized LED light to activate a whitening gel applied to your teeth. This combination breaks down stains and discoloration, revealing a noticeably whiter smile.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unlike over-the-counter products, Zoom 2 whitening is performed by trained dental professionals in a controlled clinical environment, ensuring both safety and effectiveness.
                </p>
                <ul className="space-y-3">
                  {[
                    "Clinically proven whitening technology",
                    "Supervised by licensed dental professionals",
                    "Immediate visible results",
                    "Safe for tooth enamel"
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group"
              >
                <Image
                  src="/images/IMG-20251003-WA0002.jpg"
                  alt="Professional teeth whitening treatment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Process</h2>
              <p className="text-lg text-gray-600">A simple, straightforward procedure completed in four steps</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  number: "1",
                  title: "Initial Consultation",
                  description: "Assessment of your dental health and discussion of expected results"
                },
                {
                  number: "2",
                  title: "Preparation",
                  description: "Application of protective barriers to gums and soft tissues"
                },
                {
                  number: "3",
                  title: "Whitening Treatment",
                  description: "Application of whitening gel with LED light activation (45-60 minutes)"
                },
                {
                  number: "4",
                  title: "Completion & Care",
                  description: "Final evaluation and post-treatment care instructions"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            >
              Benefits of Professional Whitening
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                "Professional-grade results in one visit",
                "Safe for dental enamel and gums",
                "Supervised by licensed dentists",
                "Minimal tooth sensitivity",
                "Long-lasting results (1-3 years with proper care)",
                "Customized to your specific needs",
                "FDA-approved whitening agents",
                "Comprehensive post-treatment support"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Packages</h2>
              <p className="text-lg text-gray-600">Choose the package that best fits your needs</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Single Session",
                  price: "€350",
                  features: [
                    "One 60-minute treatment",
                    "Professional Zoom 2 application",
                    "Post-treatment care kit",
                    "Whitening results up to 8 shades",
                    "Same-day results"
                  ]
                },
                {
                  name: "Complete Package",
                  price: "€500",
                  popular: true,
                  features: [
                    "In-office Zoom 2 treatment",
                    "Custom take-home trays",
                    "Professional whitening gel",
                    "Follow-up consultation",
                    "Touch-up support (1 year)"
                  ]
                },
                {
                  name: "Take-Home Kit",
                  price: "€250",
                  features: [
                    "Custom-fitted whitening trays",
                    "Professional whitening gel",
                    "Detailed usage instructions",
                    "2-week treatment program",
                    "Gradual whitening results"
                  ]
                }
              ].map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  whileHover={{ y: -8, scale: pkg.popular ? 1.02 : 1, transition: { duration: 0.2 } }}
                  className={`bg-white rounded-xl p-8 ${
                    pkg.popular ? 'border-2 border-primary-600 shadow-xl' : 'border border-gray-200 shadow-md hover:shadow-lg'
                  } transition-shadow`}
                >
                  {pkg.popular && (
                    <motion.span
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
                    >
                      Most Popular
                    </motion.span>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" size="lg" variant={pkg.popular ? 'default' : 'outline'} asChild>
                    <a href="tel:0661250137">Book Appointment</a>
                  </Button>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                All treatments include professional consultation and aftercare guidance. 
                Payment plans available upon request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treatment Results</h2>
              <p className="text-lg text-gray-600">Real results from our patients</p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="relative h-48 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Whitening result ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "Is teeth whitening safe?",
                  answer: "Yes, when performed by licensed dental professionals using FDA-approved products, teeth whitening is safe and does not damage tooth enamel."
                },
                {
                  question: "How long do results last?",
                  answer: "Results typically last 1-3 years, depending on your diet, oral hygiene habits, and lifestyle choices. Regular touch-ups can help maintain your results."
                },
                {
                  question: "Will I experience sensitivity?",
                  answer: "Some patients experience mild sensitivity during or after treatment, which typically subsides within 24-48 hours. We provide desensitizing treatments to minimize discomfort."
                },
                {
                  question: "How white will my teeth get?",
                  answer: "Most patients achieve 6-8 shades whiter teeth. Results vary based on the initial tooth color and type of staining present."
                },
                {
                  question: "Am I a candidate for whitening?",
                  answer: "Most adults with healthy teeth and gums are candidates. A consultation will determine if whitening is appropriate for your specific situation."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 text-lg">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              <Calendar className="w-10 h-10" />
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Schedule your consultation to learn more about professional teeth whitening
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
                  Book Online
                </Link>
              </Button>
            </motion.div>
            
            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-12 pt-8 border-t border-white/20"
            >
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <Shield className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-sm text-blue-100">FDA Approved</p>
                </div>
                <div>
                  <Award className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-sm text-blue-100">Licensed Professionals</p>
                </div>
                <div>
                  <CheckCircle className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                  <p className="text-sm text-blue-100">Proven Results</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
