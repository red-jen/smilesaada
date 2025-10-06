"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function OrthodonticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Orthodontics</h1>
            <p className="text-xl text-primary-100 mb-8">
              Straighten your teeth and perfect your smile with modern orthodontic solutions. Clear aligners, traditional braces, and personalized treatment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><a href="tel:0661250137">Book Consultation<Calendar className="w-5 h-5 ml-2" /></a></Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild><Link href="/pricing">View Pricing<ArrowRight className="w-5 h-5 ml-2" /></Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">Orthodontic Solutions</h2>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clear Aligners (Invisalign)</h3>
                <ul className="space-y-3">
                  {[
                    "Nearly invisible - discreet treatment",
                    "Removable for eating and cleaning",
                    "Comfortable with no metal brackets",
                    "Predictable results with 3D planning",
                    "Fewer dental visits required"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional Braces</h3>
                <ul className="space-y-3">
                  {[
                    "Effective for complex cases",
                    "Precise tooth movement control",
                    "Durable and reliable results",
                    "Cost-effective option",
                    "Suitable for all ages"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Conditions We Treat</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Crowded teeth",
                  "Gaps between teeth",
                  "Overbite and underbite",
                  "Crossbite",
                  "Open bite",
                  "Misaligned jaw",
                  "Crooked teeth",
                  "TMJ disorders"
                ].map((condition, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Start Your Orthodontic Journey</h2>
            <p className="text-xl text-primary-100 mb-8">Get a free consultation and personalized treatment plan</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><a href="tel:0661250137">Call 06 61 25 01 37<Phone className="w-5 h-5 ml-2" /></a></Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild><Link href="/contact">Book Online<Calendar className="w-5 h-5 ml-2" /></Link></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
