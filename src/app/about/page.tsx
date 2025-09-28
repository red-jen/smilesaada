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
    title: "Soins Dentaires",
    description:
      "Des soins dentaires modernes, sûrs et personnalisés qui préservent votre sourire jour après jour.",
    icon: Stethoscope
  },
  {
    title: "Chirurgie Orale",
    description:
      "Une expertise chirurgicale de pointe pour répondre à vos besoins complexes en toute confiance.",
    icon: Shield
  },
  {
    title: "Dental Implant",
    description:
      "Des implants fiables et esthétiques pour retrouver une mastication confortable et un sourire naturel.",
    icon: CheckCircle
  },
  {
    title: "Entretien des Couronnes",
    description:
      "Un entretien rigoureux de vos restaurations pour garantir longévité et bien-être bucco-dentaire.",
    icon: Heart
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30" />

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
                  <span className="text-accent-300 font-semibold text-lg">À propos de nous • About Us</span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                  À propos de la Clinique Dentaire Saada
                </h1>

                <p className="text-xl text-primary-100 blog-content leading-relaxed">
                  Bienvenue à la Clinique Dentaire Saada, un espace dédié à votre sourire et à votre bien-être.
                  Située au cœur de votre ville, notre clinique vous propose des soins dentaires modernes, sûrs et
                  personnalisés dans un cadre confortable et rassurant.
                </p>

                <p className="text-lg text-primary-100/80 blog-content leading-relaxed">
                  Notre équipe de professionnels passionnés met son expertise au service de votre santé bucco-dentaire.
                  De la prévention aux traitements spécialisés — orthodontie, chirurgie orale, implants, soins
                  esthétiques ou blanchiment — nous vous accompagnons avec écoute, transparence et bienveillance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group">
                  Découvrir notre clinique
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="xl"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  Contacter un expert
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
                badge="Clinique Saada"
                src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_1280.jpg"
                alt="Clinique Dentaire Saada"
                fallback={
                  <div className="text-center text-white p-8">
                    <Stethoscope className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">Clinique Dentaire Saada</p>
                    <p className="text-primary-200">Votre sourire, notre priorité</p>
                  </div>
                }
              />

              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">Soin personnalisé</div>
                  <div className="text-sm opacity-90">Chaque sourire compte</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder & Philosophy */}
      <section className="section-spacing bg-white">
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
                Notre priorité : vous offrir des soins de qualité
              </h2>
              <p className="text-lg text-gray-600 blog-content leading-relaxed">
                Notre priorité : vous offrir des soins de qualité avec des technologies de pointe tout en instaurant
                une relation de confiance durable. À la Clinique Dentaire Saada, chaque sourire compte… surtout le
                vôtre.
              </p>
              <p className="text-lg text-gray-600 blog-content leading-relaxed">
                Nous créons des expériences chaleureuses et rassurantes pour que votre parcours de soins soit simple,
                transparent et parfaitement adapté à vos attentes.
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
                    « Nous croyons qu’un sourire épanoui change une vie. Notre mission est d’offrir des soins dentaires
                    accessibles, humains et d’excellence, portés par une équipe passionnée et attentive. »
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold text-primary-900 mb-6 blog-heading">
              Advance Services
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Des solutions sur mesure pour votre sourire
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              Nous réunissons prévention, traitements spécialisés et suivi d’excellence pour accompagner chaque étape
              de votre santé bucco-dentaire.
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
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-playfair font-bold text-primary-900 mb-8 blog-heading">
              Prêt à transformer votre sourire ?
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                La Clinique Dentaire Saada vous accompagne
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 blog-content">
              Contactez notre équipe pour planifier une consultation personnalisée et découvrir comment nous pouvons
              prendre soin de votre sourire avec excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gold" size="xl" className="text-lg px-12 py-4 shadow-2xl">
                Prendre rendez-vous
                <Heart className="w-6 h-6 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="text-lg px-12 py-4">
                Appeler la clinique
                <Phone className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
