"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { CheckCircle, Clock, Award, Shield, Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CrownsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Dental Crowns</h1>
              <p className="text-xl text-primary-100 mb-8">
                Restore damaged or weakened teeth with custom dental crowns. Our high-quality crowns provide strength, durability, and a natural appearance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild><a href="tel:0661250137">Book Consultation<Calendar className="w-5 h-5 ml-2" /></a></Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild><Link href="/pricing">View Pricing<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <ImagePlaceholder aspectRatio="square" className="rounded-3xl shadow-2xl" overlay="gradient" src="/images/IMG-20251003-WA0004.jpg" alt="Dental Crowns" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">What Are Dental Crowns?</h2>
              <p className="text-xl text-gray-600">
                Dental crowns are custom-made caps that cover damaged or weakened teeth, restoring their shape, size, strength, and appearance.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Shield, title: "Protection", description: "Shields weak teeth from further damage" },
                { icon: Award, title: "Natural Look", description: "Matches your natural tooth color" },
                { icon: CheckCircle, title: "Long-Lasting", description: "Durable solution for 10-15 years" }
              ].map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Card><CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent></Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">When Do You Need a Crown?</h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Severely decayed tooth requiring protection",
                "Cracked or broken tooth restoration",
                "After root canal treatment",
                "Large filling that weakens the tooth",
                "Cosmetic enhancement of discolored teeth",
                "Dental implant restoration",
                "Bridge support for missing teeth",
                "Worn down teeth from grinding"
              ].map((reason, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Need a Dental Crown?</h2>
            <p className="text-xl text-primary-100 mb-8">Get a free consultation to discuss your crown options</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><a href="tel:0661250137">Call 06 61 25 01 37<Phone className="w-5 h-5 ml-2" /></a></Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild><Link href="/contact">Book Online<Calendar className="w-5 h-5 ml-2" /></Link></Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
