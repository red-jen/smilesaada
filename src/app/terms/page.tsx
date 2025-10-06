"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, AlertCircle, CheckCircle, XCircle, Mail, Phone } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the Clinique Dentaire Saada website and services, you agree to be bound by these Terms of Use.",
      "If you do not agree with any part of these terms, please do not use our website or services.",
      "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of modified terms."
    ]
  },
  {
    icon: CheckCircle,
    title: "Use of Services",
    content: [
      "Our services are intended for individuals seeking dental care and information.",
      "You agree to provide accurate and complete information when booking appointments or consultations.",
      "You are responsible for maintaining the confidentiality of your account information.",
      "You agree not to misuse our services or interfere with their normal operation."
    ]
  },
  {
    icon: AlertCircle,
    title: "Medical Disclaimer",
    content: [
      "Information on this website is for general informational purposes only and does not constitute medical advice.",
      "Always seek the advice of qualified healthcare professionals for any medical questions or concerns.",
      "Do not disregard professional medical advice or delay seeking it because of information on this website.",
      "In case of a dental emergency, contact emergency services immediately."
    ]
  },
  {
    icon: XCircle,
    title: "Prohibited Uses",
    content: [
      "Violating any applicable laws or regulations",
      "Impersonating another person or entity",
      "Transmitting viruses, malware, or other harmful code",
      "Collecting or harvesting information from other users",
      "Using automated systems to access the website without permission",
      "Interfering with the security or proper functioning of the website"
    ]
  }
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-accent-500 rounded-3xl flex items-center justify-center">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Terms of Use
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed">
              Please read these terms carefully before using our website and services. 
              These terms govern your use of Clinique Dentaire Saada's website and dental services.
            </p>
            
            <p className="text-sm text-primary-200 mt-4">
              Last Updated: October 5, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                          {section.title}
                        </h2>
                        <ul className="space-y-3">
                          {section.content.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    Appointments and Cancellations
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Appointments must be confirmed at least 24 hours in advance.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Cancellations should be made at least 24 hours before the scheduled appointment.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Late cancellations or no-shows may be subject to a cancellation fee.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>We reserve the right to reschedule appointments in case of emergencies or unforeseen circumstances.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    Payment and Fees
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Payment is due at the time of service unless other arrangements have been made.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>We accept cash, bank transfers, and major credit cards.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Treatment cost estimates are provided in good faith but may vary based on actual procedures performed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Detailed invoices are provided for insurance reimbursement purposes.</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    Intellectual Property
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      All content on this website, including text, graphics, logos, images, and software, is the property of 
                      Clinique Dentaire Saada and is protected by international copyright laws.
                    </p>
                    <p>
                      You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    Limitation of Liability
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Clinique Dentaire Saada shall not be liable for any indirect, incidental, special, or consequential damages 
                      arising from the use of our website or services.
                    </p>
                    <p>
                      Our total liability for any claim arising from the use of our services shall not exceed the amount paid 
                      for the specific service in question.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    Governing Law
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      These terms shall be governed by and construed in accordance with the laws of Morocco.
                    </p>
                    <p>
                      Any disputes arising from these terms or your use of our services shall be subject to the exclusive 
                      jurisdiction of the courts of Rabat, Morocco.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-primary-200 bg-gradient-to-br from-primary-50 to-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  Questions About These Terms?
                </h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about these terms of use or our services, 
                  please contact us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <div className="flex items-center gap-2 text-primary-700">
                    <Mail className="w-5 h-5" />
                    <a href="mailto:info@saadadental.ma" className="hover:underline font-semibold">
                      info@saadadental.ma
                    </a>
                  </div>
                  <div className="hidden sm:block text-gray-400">|</div>
                  <div className="flex items-center gap-2 text-primary-700">
                    <Phone className="w-5 h-5" />
                    <a href="tel:0661250137" className="hover:underline font-semibold">
                      06 61 25 01 37
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
