"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight, Shield, Clock, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WhiteningPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Teeth Whitening with Zoom 2
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Safe, effective in-office whitening treatment performed by certified dental professionals. 
                Achieve up to 8 shades whiter teeth in a single 60-minute appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:0661250137">
                    <Phone className="w-5 h-5 mr-2" />
                    Call 06 61 25 01 37
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#pricing">
                    View Pricing & Packages
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Information Cards */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Treatment Time</h3>
              <p className="text-gray-600">60 minutes per session</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
              <p className="text-gray-600">Up to 8 shades whiter</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="w-10 h-10 text-primary-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Safety</h3>
              <p className="text-gray-600">FDA approved technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* What is Zoom 2 Whitening */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Zoom 2 Teeth Whitening?</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Zoom 2 is a professional teeth whitening system that uses a specialized LED light to activate a whitening gel applied to your teeth. This combination breaks down stains and discoloration, revealing a noticeably whiter smile.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Unlike over-the-counter products, Zoom 2 whitening is performed by trained dental professionals in a controlled clinical environment, ensuring both safety and effectiveness.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Clinically proven whitening technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Supervised by licensed dental professionals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Immediate visible results</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Safe for tooth enamel</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/IMG-20251003-WA0002.jpg"
                  alt="Professional teeth whitening treatment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Process</h2>
              <p className="text-gray-600">A simple, straightforward procedure completed in four steps</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
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
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits of Professional Whitening</h2>
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
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Packages</h2>
              <p className="text-gray-600">Choose the package that best fits your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
                <div
                  key={index}
                  className={`bg-white rounded-lg p-8 ${
                    pkg.popular ? 'border-2 border-primary-600 shadow-lg' : 'border border-gray-200 shadow-sm'
                  }`}
                >
                  {pkg.popular && (
                    <span className="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={pkg.popular ? 'default' : 'outline'} asChild>
                    <a href="tel:0661250137">Book Appointment</a>
                  </Button>
                </div>
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Results</h2>
              <p className="text-gray-600">Real results from our patients</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "/images/IMG-20251003-WA0004.jpg",
                "/images/IMG-20251003-WA0008.jpg",
                "/images/IMG-20251003-WA0010.jpg",
                "/images/IMG-20251003-WA0012.jpg"
              ].map((img, index) => (
                <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src={img}
                    alt={`Whitening result ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
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
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 text-primary-100">
              Schedule your consultation to learn more about professional teeth whitening
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:0661250137">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 06 61 25 01 37
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
