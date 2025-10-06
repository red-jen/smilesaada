"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar } from "lucide-react"
import Link from "next/link"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"

export default function TransformationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Smile Transformations</h1>
            <p className="text-xl text-primary-100 mb-8">
              See the incredible transformations we've achieved for our patients. Real results, real smiles, real confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><a href="tel:0661250137">Book Consultation<Calendar className="w-5 h-5 ml-2" /></a></Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild><Link href="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12 text-center">Our Patient Transformations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                  <ImagePlaceholder
                    aspectRatio="video"
                    src={`/images/IMG-20251003-WA000${index + 1}.jpg`}
                    alt={`Smile transformation ${index}`}
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Ready for Your Transformation?</h2>
            <p className="text-xl text-primary-100 mb-8">Schedule a consultation to begin your smile journey</p>
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
