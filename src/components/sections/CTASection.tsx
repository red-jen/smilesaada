"use client"

import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  Calendar, 
  ArrowRight,
  Shield,
  Clock,
  CheckCircle
} from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Clean CTA Design inspired by the image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full mb-6 border border-teal-100">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-semibold">BOOK YOUR CONSULTATION</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Transform Your Smile?
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Book your free consultation today and discover how we can take care of your smile 
            with excellence and compassion.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="px-12 py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all group text-lg"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="px-12 py-4 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl text-lg"
            >
              Call the Clinic
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-gray-600 mb-12">
            <p className="mb-4 text-lg">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="tel:+212661250137" 
                className="flex items-center gap-3 hover:text-teal-600 transition-colors text-lg"
              >
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                06 61 25 01 37
              </a>
              <a 
                href="https://wa.me/212668418741" 
                className="flex items-center gap-3 hover:text-teal-600 transition-colors text-lg relative z-50"
                target="_blank"
              >
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </div>
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Elements - Clean White Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Qualite Garantie</h3>
            <p className="text-gray-600">15 ans d'experience et materiaux premium</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Service Rapide</h3>
            <p className="text-gray-600">Rendez-vous disponibles sous 48h</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction 98%</h3>
            <p className="text-gray-600">Patients satisfaits et recommandent</p>
          </div>
        </motion.div>

        {/* Bottom CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Une question sur vos soins dentaires ?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Notre equipe est la pour vous conseiller et vous accompagner dans votre projet de soins.
            </p>
            <Button 
              size="lg"
              className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Poser une Question
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
