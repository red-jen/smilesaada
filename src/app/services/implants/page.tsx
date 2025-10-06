"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { 
  CheckCircle,
  Clock,
  Award,
  Shield,
  Phone,
  Calendar,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

export default function ImplantsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
                Dental Implants
              </h1>
              <p className="text-xl text-primary-100 mb-8">
                Replace missing teeth with permanent, natural-looking dental implants. 
                Restore your smile and confidence with our advanced implant solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" asChild>
                  <a href="tel:0661250137">
                    Book Consultation
                    <Calendar className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/pricing">
                    View Pricing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ImagePlaceholder
                aspectRatio="square"
                className="rounded-3xl shadow-2xl"
                overlay="gradient"
                src="/images/IMG-20251003-WA0003.jpg"
                alt="Dental Implants at Clinique Dentaire Saada"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Are Dental Implants */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                What Are Dental Implants?
              </h2>
              <p className="text-xl text-gray-600">
                Dental implants are titanium posts surgically placed into your jawbone to replace missing tooth roots. 
                They provide a strong foundation for permanent or removable replacement teeth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { icon: Shield, title: "Durable", description: "Lasts 20+ years with proper care" },
                { icon: Award, title: "Natural Look", description: "Blends seamlessly with your teeth" },
                { icon: CheckCircle, title: "Bone Preservation", description: "Prevents jawbone deterioration" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                Benefits of Dental Implants
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Permanent solution for missing teeth",
                "Improved chewing and speaking ability",
                "No need to alter adjacent healthy teeth",
                "Prevents bone loss in the jaw",
                "Easy to clean and maintain",
                "Boosts confidence and self-esteem",
                "High success rate (95-98%)",
                "Cost-effective long-term solution"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                The Implant Process
              </h2>
              <p className="text-xl text-gray-600">
                Our streamlined process ensures comfort and optimal results
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { step: 1, title: "Initial Consultation", description: "Complete dental exam, X-rays, and treatment planning", time: "1 visit" },
                { step: 2, title: "Implant Placement", description: "Surgical placement of titanium implant into jawbone", time: "1-2 hours" },
                { step: 3, title: "Healing Period", description: "Osseointegration - implant fuses with bone", time: "3-6 months" },
                { step: 4, title: "Abutment Attachment", description: "Connector piece attached to implant", time: "1 visit" },
                { step: 5, title: "Crown Placement", description: "Custom crown attached to complete restoration", time: "2-3 weeks" }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">{phase.step}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                          <p className="text-gray-600 mb-2">{phase.description}</p>
                          <div className="flex items-center gap-2 text-sm text-primary-600">
                            <Clock className="w-4 h-4" />
                            <span>{phase.time}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Restore Your Smile?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Schedule a free consultation to discuss your dental implant options
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="tel:0661250137">
                  Call 06 61 25 01 37
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <Link href="/contact">
                  Book Online
                  <Calendar className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
