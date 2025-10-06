"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number, address)",
      "Medical and dental history information",
      "Treatment records and dental X-rays",
      "Payment and billing information",
      "Communication preferences and appointment history"
    ]
  },
  {
    icon: Lock,
    title: "How We Use Your Information",
    content: [
      "To provide dental care services and treatment",
      "To schedule and confirm appointments",
      "To process payments and billing",
      "To communicate treatment plans and follow-up care",
      "To improve our services and patient experience",
      "To comply with legal and regulatory requirements"
    ]
  },
  {
    icon: Shield,
    title: "Data Protection",
    content: [
      "We implement appropriate security measures to protect your personal information",
      "Access to patient data is restricted to authorized personnel only",
      "We use encrypted connections for data transmission",
      "Regular security audits and updates to our systems",
      "Compliance with international data protection standards"
    ]
  },
  {
    icon: Eye,
    title: "Information Sharing",
    content: [
      "We do not sell or rent your personal information to third parties",
      "Information may be shared with dental laboratories for treatment purposes",
      "Data may be shared with insurance providers for claim processing",
      "We may share information when required by law or legal process",
      "Third-party service providers are bound by confidentiality agreements"
    ]
  }
]

export default function PrivacyPage() {
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
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-xl text-primary-100 leading-relaxed">
              At Clinique Dentaire Saada, we are committed to protecting your privacy and personal information. 
              This policy explains how we collect, use, and safeguard your data.
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

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                    Your Rights
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>You have the right to:</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Access your personal and medical information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Request corrections to inaccurate information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Request deletion of your information (subject to legal requirements)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Withdraw consent for data processing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Object to certain types of data processing</span>
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
                    Cookies and Tracking
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Our website uses cookies and similar tracking technologies to improve your browsing experience and analyze website traffic.
                    </p>
                    <p>
                      You can control cookie settings through your browser preferences. Please note that disabling cookies may affect website functionality.
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
                    Changes to This Policy
                  </h2>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. 
                      We will notify you of any significant changes by posting the updated policy on our website.
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
                  Questions About Privacy?
                </h2>
                <p className="text-gray-700 mb-6">
                  If you have any questions about this privacy policy or how we handle your information, 
                  please don't hesitate to contact us.
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
