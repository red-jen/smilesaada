"use client"

import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"
import { Star, Quote, MapPin, Calendar } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dubois",
    location: "Paris, France",
    treatment: "Implants Dentaires",
    rating: 5,
    image: "MD",
    quote: "Une equipe exceptionnelle et des soins de qualite. Dr. Filal a transforme mon sourire avec une expertise remarquable. Je recommande vivement cette clinique !",
    date: "Il y a 2 mois"
  },
  {
    name: "Ahmed Benali",
    location: "Casablanca, Maroc", 
    treatment: "Couronnes en Zircone",
    rating: 5,
    image: "AB",
    quote: "Accueil chaleureux et soins professionnels. Les technologies utilisees sont de pointe et le resultat depasse mes attentes. Merci a toute l'equipe !",
    date: "Il y a 1 mois"
  },
  {
    name: "Fatima El Amrani",
    location: "Rabat, Maroc",
    treatment: "Facettes Dentaires",
    rating: 5,
    image: "FE",
    quote: "Je suis ravie du resultat ! Un sourire naturel et eclatant. L'equipe est a l'ecoute et tres professionnelle. Une experience parfaite du debut a la fin.",
    date: "Il y a 3 semaines"
  },
  {
    name: "Jean-Pierre Martin",
    location: "Lyon, France",
    treatment: "Orthodontie Invisible",
    rating: 5,
    image: "JP",
    quote: "Un traitement discret et efficace. Le suivi est excellent et les resultats sont visibles rapidement. Je recommande cette clinique les yeux fermes !",
    date: "Il y a 6 mois"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full mb-6 border border-teal-100">
            <Star className="w-4 h-4" />
            <span className="text-sm font-semibold">TEMOIGNAGES PATIENTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent nos patients
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Decouvrez les experiences de nos patients et leur satisfaction apres leurs soins 
            a la Clinique Dentaire Saada.
          </p>
        </motion.div>

        {/* Clean Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <Quote className="w-6 h-6 text-teal-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm text-teal-600 font-medium mb-1">
                      {testimonial.treatment}
                    </div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {testimonial.date}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-12 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
                <div className="text-gray-700 font-medium">Satisfaction Client</div>
                <div className="text-sm text-gray-500">Sur +1000 patients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-700 font-medium">Annees d'Experience</div>
                <div className="text-sm text-gray-500">En soins dentaires</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
                <div className="text-gray-700 font-medium">Note Moyenne</div>
                <div className="text-sm text-gray-500">Avis Google & Facebook</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
