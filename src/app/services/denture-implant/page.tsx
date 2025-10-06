"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle, Phone, Calendar, ArrowRight, Clock, Users, Award, Shield, Heart, Smile, Star } from "lucide-react"
import Link from "next/link"

export default function DentureImplantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">Retrouvez une Dentition Complète</h1>
            <p className="text-xl text-primary-100 mb-8">
              Redécouvrez le plaisir de sourire, manger et parler en toute confiance grâce aux implants dentaires. Une solution permanente pour une dentition complète et naturelle.
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
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8 text-center">Why Choose Implant-Supported Dentures?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "No slipping or clicking sounds",
                "Eat your favorite foods without worry",
                "Improved speech and comfort",
                "Prevents bone loss in the jaw",
                "No messy adhesives needed",
                "Natural look and feel",
                "Permanent, stable solution",
                "Easier to clean than traditional dentures"
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

      {/* Journey to Complete Dentition */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Votre Parcours vers une Dentition Complète</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un processus en plusieurs étapes soigneusement planifié pour vous garantir les meilleurs résultats et retrouver une mastication parfaite.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-900 font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation et Diagnostic Complet</h3>
                    <p className="text-gray-600">Examen clinique approfondi, radiographies 3D et plan de traitement personnalisé pour votre cas spécifique.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-900 font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Préparation et Pose des Implants</h3>
                    <p className="text-gray-600">Intervention chirurgicale mini-invasive sous anesthésie locale pour placer les implants en titane biocompatibles.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-900 font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Période d'Ostéointégration</h3>
                    <p className="text-gray-600">Guérison de 3-6 mois pendant laquelle les implants fusionnent naturellement avec l'os de la mâchoire.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-900 font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pose de la Prothèse Définitive</h3>
                    <p className="text-gray-600">Fixation de votre dentier sur implants, parfaitement ajusté pour un confort et une esthétique optimaux.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6">Résultats Attendus</h3>
                <div className="space-y-4">
                  {[
                    { icon: Smile, text: "Sourire naturel et confiant" },
                    { icon: Heart, text: "Mastication efficace à 95%" },
                    { icon: Star, text: "Confort toute la journée" },
                    { icon: Shield, text: "Solution durable 20+ ans" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="w-6 h-6 text-green-600" />
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Garantie Qualité</span>
                  </div>
                  <p className="text-sm text-green-700">Suivi post-opératoire inclus pendant 2 ans avec notre équipe d'experts.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Restoration Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">Solutions pour Retrouver Toutes Vos Dents</h2>
              <p className="text-xl text-gray-600">Différentes options selon votre situation et vos besoins</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">All-on-4</h3>
                  <p className="text-sm text-gray-600 mt-2">Dentition complète sur 4 implants</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">14 dents fixées sur 4 implants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Intervention en une séance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Dents temporaires immédiates</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-900">À partir de 12 000€</p>
                  <p className="text-sm text-gray-600">Par mâchoire</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-gold-50 to-gold-100 rounded-2xl p-8 border-2 border-gold-300 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Plus Populaire</span>
                </div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">All-on-6</h3>
                  <p className="text-sm text-gray-600 mt-2">Solution premium renforcée</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">14 dents sur 6 implants</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Stabilité maximale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Longévité exceptionnelle</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gold-900">À partir de 15 000€</p>
                  <p className="text-sm text-gray-600">Par mâchoire</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Implants Unitaires</h3>
                  <p className="text-sm text-gray-600 mt-2">Remplacement dent par dent</p>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Préservation des dents saines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Résultat ultra-naturel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">Hygiène facilitée</span>
                  </li>
                </ul>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">À partir de 1 500€</p>
                  <p className="text-sm text-gray-600">Par implant</p>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Tous nos traitements incluent : consultation, radiographies 3D, intervention, suivi post-opératoire</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gold" size="lg" asChild>
                  <a href="tel:0661250137">Devis Personnalisé Gratuit<Phone className="w-5 h-5 ml-2" /></a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Prendre RDV<Calendar className="w-5 h-5 ml-2" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-12 text-center">Questions Fréquentes</h2>
            
            <div className="space-y-6">
              {[
                {
                  question: "Combien de temps faut-il pour retrouver une dentition complète ?",
                  answer: "Le processus complet prend généralement entre 4 à 6 mois. Cela inclut la pose des implants, la période de cicatrisation (ostéointégration) et la fixation de la prothèse définitive. Des dents temporaires peuvent être posées immédiatement dans certains cas."
                },
                {
                  question: "Les implants dentaires sont-ils douloureux ?",
                  answer: "L'intervention se déroule sous anesthésie locale, vous ne ressentez donc aucune douleur pendant l'opération. Les suites opératoires sont généralement bien tolérées avec un traitement antalgique adapté. La plupart des patients reprennent leurs activités normales sous 2-3 jours."
                },
                {
                  question: "Quelle est la durée de vie d'un implant dentaire ?",
                  answer: "Avec une bonne hygiène bucco-dentaire et un suivi régulier, les implants dentaires peuvent durer plus de 20 ans, voire toute la vie. Le taux de succès est supérieur à 95% après 10 ans."
                },
                {
                  question: "Puis-je manger normalement avec des implants ?",
                  answer: "Absolument ! Les implants dentaires vous permettent de retrouver 95% de votre capacité de mastication. Vous pourrez croquer, mâcher et savourer tous vos aliments préférés sans restriction, contrairement aux dentiers traditionnels."
                },
                {
                  question: "Y a-t-il des contre-indications aux implants dentaires ?",
                  answer: "Les implants sont contre-indiqués en cas de maladie grave non contrôlée, de traitement par bisphosphonates, ou de tabagisme important. L'âge n'est pas un facteur limitant. Un bilan pré-opératoire permet d'évaluer votre éligibilité."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Retrouvez Enfin Votre Sourire</h2>
            <p className="text-xl text-primary-100 mb-8">Découvrez la liberté d'une dentition complète et permanente avec nos implants dentaires</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild><a href="tel:0661250137">Appelez le 06 61 25 01 37<Phone className="w-5 h-5 ml-2" /></a></Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild><Link href="/contact">Réserver en Ligne<Calendar className="w-5 h-5 ml-2" /></Link></Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
