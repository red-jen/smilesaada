"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

// Smile transformation cases
const transformations = [
  {
    id: 1,
    title: "Complete Smile Makeover",
    description: "Professional teeth whitening and veneers for a stunning transformation",
    image: "/images/smile changes/IMG-20251014-WA0001.jpg",
    category: "Cosmetic"
  },
  {
    id: 2,
    title: "Implant Restoration",
    description: "Missing teeth replaced with premium dental implants",
    image: "/images/smile changes/IMG-20251014-WA0002.jpg",
    category: "Implants"
  },
  {
    id: 3,
    title: "Whitening Excellence",
    description: "Professional whitening for a brighter, more confident smile",
    image: "/images/smile changes/IMG-20251014-WA0003.jpg",
    category: "Whitening"
  },
  {
    id: 4,
    title: "Alignment & Aesthetics",
    description: "Modern orthodontics with invisible aligners",
    image: "/images/smile changes/IMG-20251014-WA0004.jpg",
    category: "Orthodontics"
  },
  {
    id: 5,
    title: "Crown & Bridge Work",
    description: "Ceramic crowns and bridges for complete restoration",
    image: "/images/smile changes/IMG-20251014-WA0005.jpg",
    category: "Restoration"
  },
  {
    id: 6,
    title: "Gum Contouring",
    description: "Professional gum shaping for the perfect smile frame",
    image: "/images/smile changes/IMG-20251014-WA0006.jpg",
    category: "Cosmetic"
  },
  {
    id: 7,
    title: "Veneer Application",
    description: "Porcelain veneers for a picture-perfect smile",
    image: "/images/smile changes/IMG-20251014-WA0007.jpg",
    category: "Veneers"
  },
  {
    id: 8,
    title: "Complex Restoration",
    description: "Multi-treatment approach for comprehensive results",
    image: "/images/smile changes/IMG-20251014-WA0008.jpg",
    category: "Advanced"
  },
  {
    id: 9,
    title: "Smile Design",
    description: "Custom smile design combining multiple treatments",
    image: "/images/smile changes/IMG-20251014-WA0009.jpg",
    category: "Design"
  },
  {
    id: 10,
    title: "Full Transformation",
    description: "Complete smile overhaul with professional results",
    image: "/images/smile changes/IMG-20251014-WA0010.jpg",
    category: "Cosmetic"
  }
]

const categories = [
  "All",
  "Cosmetic",
  "Implants",
  "Whitening",
  "Orthodontics",
  "Restoration",
  "Veneers",
  "Advanced",
  "Design"
]

export default function TransformationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<typeof transformations[0] | null>(null)

  const filteredTransformations = selectedCategory === "All" 
    ? transformations 
    : transformations.filter(t => t.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
                Smile Transformations
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                See the incredible transformations we've achieved for our patients. Real results, real smiles, real confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="xl" asChild>
                  <a href="tel:0661250137" className="flex items-center gap-2">
                    Book Consultation
                    <Calendar className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-center text-gray-700 font-semibold mb-4">Filter by Treatment:</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary-600 text-white shadow-lg scale-105"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTransformations.map((transformation, index) => (
                <motion.div
                  key={transformation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(transformation)}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-64 w-full">
                      <Image
                        src={transformation.image}
                        alt={transformation.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 className="text-white font-semibold text-lg mb-2">{transformation.title}</h3>
                      <p className="text-white/90 text-sm mb-3">{transformation.description}</p>
                      <span className="inline-flex items-center text-amber-400 text-sm font-semibold">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {transformation.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for selected image */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="relative h-96 w-full mb-6 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-playfair font-bold text-gray-900">
                    {selectedImage.title}
                  </h2>
                  <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                    {selectedImage.category}
                  </span>
                </div>
                <p className="text-gray-600 text-lg">{selectedImage.description}</p>
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="gold" size="lg" asChild>
                      <a href="tel:0661250137" className="flex items-center gap-2">
                        Call Us Now
                        <Phone className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button size="lg" asChild>
                      <Link href="/contact" className="flex items-center gap-2">
                        Book Consultation
                        <Calendar className="w-5 h-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule a consultation to begin your smile journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="tel:0661250137" className="flex items-center gap-2">
                  Call 06 61 25 01 37
                  <Phone className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link href="/contact" className="flex items-center gap-2">
                  Book Online
                  <Calendar className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
