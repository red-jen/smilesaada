"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight, Star, ChevronRight, Shield } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BridgesPage() {
  const testimonials = [
    {
      quote: "After losing two teeth in an accident, I was devastated. The dental bridge I got looks and feels completely natural. No one can tell the difference!",
      author: "Sophie M.",
      rating: 5
    },
    {
      quote: "The entire process was smooth and painless. The team was professional and the results exceeded my expectations. I can eat and smile with confidence again.",
      author: "Thomas L.",
      rating: 5
    },
    {
      quote: "I was worried about the cost, but the financing options made it manageable. The quality of the bridge is outstanding and worth every penny.",
      author: "Élodie R.",
      rating: 5
    }
  ]

  const pricing = [
    {
      title: "Metal Bridge",
      price: "€800",
      features: ["Single crown unit", "High-quality alloy", "Average lifespan of 10-15 years"],
      popular: false
    },
    {
      title: "Porcelain-Fused-to-Metal Bridge",
      price: "€1,200",
      features: ["Enhanced aesthetics", "Metal base covered with ceramic", "Strength and durability"],
      popular: true
    },
    {
      title: "All-Ceramic Bridge",
      price: "€1,500",
      features: ["Best aesthetic result", "No metal, natural translucency", "Ideal for visible teeth"],
      popular: false
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Comprehensive examination and personalized treatment plan"
    },
    {
      number: "02",
      title: "Tooth Preparation",
      description: "Preparation of abutment teeth and impression taking"
    },
    {
      number: "03",
      title: "Bridge Fabrication",
      description: "Custom creation in dental laboratory"
    },
    {
      number: "04",
      title: "Final Placement",
      description: "Fitting and final adjustment of the bridge"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Dental Bridges</h1>
              <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
                A fixed solution to replace one or more missing teeth. Restore your smile's radiance with our custom-made dental bridges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" asChild>
                  <a href="tel:0661250137">
                    Book Appointment <Calendar className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <a href="#pricing">
                    View Pricing <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                  What is a Dental Bridge?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  A dental bridge is a fixed prosthetic that replaces one or more missing teeth. It consists of crowns that rest on adjacent teeth (abutment teeth) and one or more artificial teeth (pontics) that fill the vacant space.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  Unlike removable dentures, a bridge is permanently fixed, offering optimal comfort and a natural appearance that restores confidence.
                </p>
                <Button variant="gold" size="lg" asChild>
                  <a href="tel:0661250137">
                    Consult an Expert <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/images/IMG-20251003-WA0006.jpg"
                  alt="Professional dental bridge"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Benefits of Dental Bridges</h2>
            <p className="text-xl text-gray-600">
              A reliable and aesthetic solution to restore a harmonious smile and effective chewing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Shield className="w-10 h-10 text-primary-600 mb-4" />,
                title: "Durability",
                description: "A long-lasting solution that can last over 10 years with proper care."
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-primary-600 mb-4" />,
                title: "Comfort",
                description: "Permanently fixed, no discomfort or movement like with removable appliances."
              },
              {
                icon: <Star className="w-10 h-10 text-primary-600 mb-4" />,
                title: "Aesthetics",
                description: "Color and shape matched to your natural teeth for a perfectly integrated result."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-center">
                  <div className="mx-auto w-fit">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Work</h2>
              <p className="text-xl text-gray-600">
                Discover the quality of our work through our dental bridge cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "/images/IMG-20251003-WA0001.jpg",
                "/images/IMG-20251003-WA0003.jpg",
                "/images/IMG-20251003-WA0005.jpg",
                "/images/IMG-20251003-WA0007.jpg",
                "/images/IMG-20251003-WA0009.jpg",
                "/images/IMG-20251003-WA0011.jpg"
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={img}
                      alt={`Dental bridge case ${index + 1}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Treatment Process</h2>
            <p className="text-xl text-gray-600">
              In just a few appointments, restore a complete and functional smile.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 font-bold text-xl mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Our Pricing</h2>
            <p className="text-xl text-gray-600">
              Solutions tailored to every need and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl overflow-hidden ${plan.popular ? 'ring-2 ring-primary-500' : 'border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="bg-primary-600 text-white text-sm font-medium py-1 text-center">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ tooth</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'} size="lg" asChild>
                    <a href="tel:0661250137">
                      Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-gray-600">
            <p>Payment plans are available. Don't hesitate to contact us for more information.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">Patient Testimonials</h2>
            <p className="text-xl text-gray-600">
              Discover testimonials from our patients satisfied with their dental bridge treatment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <p className="font-medium text-gray-900">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Ready to Restore Your Smile?</h2>
            <p className="text-xl text-primary-100 mb-8">Book your appointment now for a personalized consultation</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="tel:0661250137">
                  Call 06 61 25 01 37 <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link href="/contact">
                  Book Online <Calendar className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
