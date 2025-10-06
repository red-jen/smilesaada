"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function WhiteningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-accent-400" />
            </div>
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Teeth Whitening</h1>
            <p className="text-xl text-primary-100 mb-8">
              Achieve a brighter, more confident smile with our professional teeth whitening treatments. Safe, effective, and dramatic results.
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
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">Why Choose Professional Whitening?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Whiten teeth up to 8 shades lighter",
                "Safe and supervised by professionals",
                "Faster results than over-the-counter products",
                "Customized treatment for your needs",
                "Long-lasting, dramatic results",
                "Removes years of stains from coffee, wine, smoking",
                "Minimal sensitivity with professional-grade products",
                "Boosts confidence and self-esteem"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Ready for a Brighter Smile?</h2>
            <p className="text-xl text-primary-100 mb-8">Get professional teeth whitening results in just one visit</p>
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
