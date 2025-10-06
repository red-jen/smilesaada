"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function VeneersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Dental Veneers</h1>
            <p className="text-xl text-primary-100 mb-8">
              Transform your smile with ultra-thin porcelain veneers. Achieve the perfect smile you've always dreamed of with minimal tooth preparation.
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
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">Perfect for Correcting</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Discolored or stained teeth",
                "Chipped or broken teeth",
                "Misaligned or uneven teeth",
                "Gaps between teeth",
                "Worn down teeth",
                "Irregularly shaped teeth",
                "Minor crowding issues",
                "Teeth that are too small or large"
              ].map((issue, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{issue}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Veneers?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Instant smile transformation in just 2-3 visits</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Natural-looking, stain-resistant porcelain</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Minimal tooth preparation required</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Durable and long-lasting (10-15 years)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Transform Your Smile Today</h2>
            <p className="text-xl text-primary-100 mb-8">Discover how veneers can give you the smile of your dreams</p>
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
