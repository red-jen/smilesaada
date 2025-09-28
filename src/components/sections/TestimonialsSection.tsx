"use client"

import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"
import { Star, Quote, MapPin } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "London, UK",
    treatment: "Dental Implants",
    rating: 5,
    image: "SJ",
    quote: "I saved over €7,000 compared to UK prices and received exceptional care. The team was professional, and my new smile looks absolutely natural. Best decision I ever made!",
    savings: "€7,200"
  },
  {
    name: "Michael Weber",
    location: "Berlin, Germany", 
    treatment: "All-on-4 Implants",
    rating: 5,
    image: "MW",
    quote: "The entire process was seamless. From consultation to final fitting, everything was perfectly planned. My new teeth feel and look amazing. The savings were incredible too.",
    savings: "€12,400"
  },
  {
    name: "Emma Martinez",
    location: "Madrid, Spain",
    treatment: "Porcelain Veneers",
    rating: 5,
    image: "EM",
    quote: "I was nervous about dental tourism, but this clinic exceeded all expectations. The quality is superior to what I experienced in Spain, and I saved thousands.",
    savings: "€3,600"
  },
  {
    name: "James O'Connor",
    location: "Dublin, Ireland",
    treatment: "Invisalign Treatment",
    rating: 5,
    image: "JO",
    quote: "Professional service from start to finish. The clear aligners worked perfectly, and the regular follow-ups made me feel confident throughout the treatment.",
    savings: "€4,500"
  },
  {
    name: "Sophie Laurent",
    location: "Paris, France",
    treatment: "Dental Implants & Crowns",
    rating: 5,
    image: "SL",
    quote: "The combination of premium quality and affordable prices is unmatched. My French dentist was amazed by the quality of work. Highly recommend!",
    savings: "€5,800"
  },
  {
    name: "Alessandro Rossi",
    location: "Rome, Italy",
    treatment: "Smile Makeover",
    rating: 5,
    image: "AR",
    quote: "Complete smile transformation at a fraction of Italian prices. The attention to detail and patient care was outstanding. My confidence has skyrocketed!",
    savings: "€8,900"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
            What Our Patients Say
            <span className="text-blue-600 block">Real Stories, Real Savings</span>
          </h2>
          <p className="text-xl text-neutral-600 font-inter leading-relaxed">
            Join thousands of satisfied patients from across Europe who chose us for their dental care.
            Read their authentic experiences and discover why they recommend us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Savings Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Saved {testimonial.savings}
                </div>
                
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-accent-400 mb-4" />
                  
                  {/* Quote Text */}
                  <blockquote className="text-neutral-700 mb-6 font-inter leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent-400 text-accent-400" />
                    ))}
                  </div>
                  
                  {/* Patient Info */}
                  <div className="border-t border-neutral-200 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {testimonial.image}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 font-inter">{testimonial.name}</div>
                        <div className="flex items-center gap-1 text-sm text-neutral-500">
                          <MapPin className="w-3 h-3" />
                          {testimonial.location}
                        </div>
                        <div className="text-sm text-blue-600 font-medium">{testimonial.treatment}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-800 to-sky-600 text-white rounded-2xl p-8 lg:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold font-playfair mb-2">5000+</div>
              <div className="text-blue-100">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold font-playfair mb-2">€2.8M</div>
              <div className="text-blue-100">Total Savings</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold font-playfair mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold font-playfair mb-2">25+</div>
              <div className="text-blue-100">EU Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}