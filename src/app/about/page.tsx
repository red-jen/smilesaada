"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Phone,
  Shield,
  Stethoscope
} from "lucide-react"

const services = [
  {
    title: "Dental Care",
    description:
      "Modern, safe, and personalized dental care that preserves your smile every day with the latest technology.",
    icon: Stethoscope
  },
  {
    title: "Oral Surgery",
    description:
      "Advanced surgical expertise to address your complex needs with confidence and precision.",
    icon: Shield
  },
  {
    title: "Dental Implants",
    description:
      "Reliable and aesthetic implants to restore comfortable chewing and a natural smile.",
    icon: CheckCircle
  },
  {
    title: "Crown Maintenance",
    description:
      "Rigorous maintenance of your restorations to guarantee longevity and optimal oral health.",
    icon: Heart
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 relative">
      <div className="absolute inset-0 bg-[url('/patterns/dots-light.svg')] bg-repeat opacity-5 pointer-events-none" />
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-40" />
        <div className="absolute inset-0 bg-[url('/patterns/dots-light.svg')] bg-repeat opacity-10" />

        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-accent-300 font-semibold text-lg">About Us</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                  About Saada Dental Clinic
                </h1>

                <p className="text-xl text-primary-100 blog-content leading-relaxed">
                  Welcome to Saada Dental Clinic, a space dedicated to your smile and well-being.
                  Located in the heart of the city, our clinic offers modern, safe, and
                  personalized dental care in a comfortable and reassuring environment.
                </p>

                <p className="text-lg text-primary-100/80 blog-content leading-relaxed">
                  Our team of passionate professionals puts their expertise at the service of your oral health.
                  From prevention to specialized treatments — orthodontics, oral surgery, implants, cosmetic
                  care, or whitening — we support you with attentiveness, transparency, and care.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group">
                  Discover Our Clinic
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  Contact an Expert
                  <Phone className="w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ImagePlaceholder
                aspectRatio="portrait"
                className="rounded-3xl shadow-2xl"
                overlay="gradient"
                interactive
                badge="Saada Clinic"
                src="/images/IMG-20251003-WA0010.jpg"
                alt="Saada Dental Clinic"
                fallback={
                  <div className="text-center text-white p-8">
                    <Stethoscope className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">Saada Dental Clinic</p>
                    <p className="text-primary-200">Your smile, our priority</p>
                  </div>
                }
              />

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">Personalized Care</div>
                  <div className="text-sm opacity-90">Every smile matters</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder & Philosophy */}
      <section className="section-spacing bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/30 to-blue-100/20" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-playfair font-bold text-primary-900 blog-heading">
                Our Priority: Delivering Quality Care
              </h2>
              <p className="text-lg text-gray-600 blog-content leading-relaxed">
                Our priority is to provide you with quality care using cutting-edge technology while establishing
                a lasting relationship of trust. At Saada Dental Clinic, every smile matters... especially yours.
              </p>
              <p className="text-lg text-gray-600 blog-content leading-relaxed">
                We create warm and reassuring experiences so that your care journey is simple,
                transparent, and perfectly tailored to your expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="premium-card border-slate-100 shadow-xl">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white font-playfair text-2xl font-bold flex items-center justify-center">
                      MF
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-accent-500 font-semibold">CEO & Founder</p>
                      <h3 className="text-2xl font-playfair font-bold text-primary-900">Dr. Mehdi Filal</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 blog-content leading-relaxed">
                    "We believe that a radiant smile changes a life. Our mission is to offer accessible, human,
                    and excellent dental care, driven by a passionate and attentive team."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold text-primary-900 mb-6 blog-heading">
              Advanced Services
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Tailored Solutions for Your Smile
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              We combine prevention, specialized treatments, and excellent follow-up to support every step
              of your oral health journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full premium-card hover:shadow-2xl transition-shadow border-slate-100">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center mx-auto">
                      <service.icon className="w-8 h-8 text-primary-700" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-primary-900">{service.title}</h3>
                    <p className="text-gray-600 blog-content leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-white to-blue-50/50 relative">
        <div className="absolute inset-0 gradient-mesh opacity-10" />
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-playfair font-bold text-primary-900 mb-8 blog-heading">
              Ready to Transform Your Smile?
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Saada Dental Clinic is Here for You
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 blog-content">
              Contact our team to schedule a personalized consultation and discover how we can
              take care of your smile with excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gold" size="xl" className="text-lg px-12 py-4 shadow-2xl text-white">
                Book Appointment
                <Heart className="w-6 h-6 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="text-lg px-12 py-4 text-primary-900 border-primary-300">
                Call the Clinic
                <Phone className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
