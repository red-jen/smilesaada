"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our dental team",
    contact: "06 61 25 01 37",
    availability: "Monday - Saturday: 9:00 AM - 6:00 PM",
    action: "Call Now",
    primary: true
  },
  {
    icon: Mail,
    title: "Email Consultation",
    description: "Send us your questions and dental X-rays",
    contact: "info@saadadental.ma",
    availability: "Response within 24 hours",
    action: "Send Email",
    primary: false
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    description: "Quick responses on your mobile",
    contact: "06 61 25 01 37",
    availability: "Available during business hours",
    action: "Chat Now",
    primary: false
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description: "Schedule your dental consultation",
    contact: "Online Booking",
    availability: "Choose your preferred time",
    action: "Book Now",
    primary: true
  }
]

const clinicInfo = {
  name: "Clinique Dentaire Saada",
  address: "Immeuble Saada, Avenue Hassan II, Rabat, Morocco",
  phone: "06 61 25 01 37",
  email: "info@saadadental.ma",
  hours: {
    weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
    sunday: "Sunday: Closed"
  },
  services: ["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics", "Emergency Care"]
}

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can call us at 06 61 25 01 37, email info@saadadental.ma, or use our online booking system. We'll confirm your appointment within 24 hours."
  },
  {
    question: "Do you accept international patients?",
    answer: "Yes! We welcome international patients and offer dental tourism packages with significant cost savings. We can arrange consultations and treatment plans before your visit."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfers, and major credit cards. We can also provide detailed invoices for insurance reimbursement."
  },
  {
    question: "Do you offer emergency dental services?",
    answer: "Yes, we provide emergency dental care. Please call us immediately at 06 61 25 01 37 if you have a dental emergency."
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden pt-32">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        
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
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-accent-300 font-semibold text-lg">Get In Touch</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight">
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Smile Journey
                  </span>
                </h1>
                
                <p className="text-xl text-primary-100 leading-relaxed">
                  Ready to transform your smile? Our expert dental team in Rabat is here to guide you every step of the way. 
                  Get your free consultation today.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Clock className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">24 Hours</div>
                  <div className="text-sm text-primary-200">Response Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Users className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">Free</div>
                  <div className="text-sm text-primary-200">Consultation</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group" asChild>
                  <a href="tel:0661250137">
                    Call Now: 06 61 25 01 37
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Book Online
                  <Calendar className="w-5 h-5" />
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
                aspectRatio="square"
                className="rounded-3xl shadow-2xl"
                overlay="gradient"
                interactive={true}
                type="video"
                badge="Free Consultation"
                src="/images/IMG-20251005-WA0006.jpg"
                alt="Free dental consultation at Clinique Dentaire Saada"
                fallback={
                  <div className="text-center text-white p-8">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">Consultation</p>
                    <p className="text-primary-200">Meet our experts</p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              How to <span className="text-primary-600">Reach Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose your preferred way to contact us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-xl transition-shadow duration-300 ${
                  method.primary ? 'border-primary-300 bg-gradient-to-br from-primary-50 to-white' : ''
                }`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                        method.primary 
                          ? 'bg-gradient-to-br from-primary-600 to-primary-700' 
                          : 'bg-gradient-to-br from-gray-100 to-gray-200'
                      }`}>
                        <method.icon className={`w-8 h-8 ${method.primary ? 'text-white' : 'text-primary-600'}`} />
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                        <p className="text-lg font-semibold text-primary-600 mb-1">{method.contact}</p>
                        <p className="text-xs text-gray-500">{method.availability}</p>
                      </div>

                      <Button 
                        variant={method.primary ? "default" : "outline"}
                        className="w-full"
                      >
                        {method.action}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Information */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Clinic Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-primary-900">
                    Visit Our Clinic
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                      <p className="text-gray-600">{clinicInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                      <a href={`tel:${clinicInfo.phone.replace(/\s/g, '')}`} className="text-primary-600 hover:underline">
                        {clinicInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href={`mailto:${clinicInfo.email}`} className="text-primary-600 hover:underline">
                        {clinicInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                      <div className="space-y-1 text-gray-600">
                        <p>{clinicInfo.hours.weekdays}</p>
                        <p>{clinicInfo.hours.saturday}</p>
                        <p className="text-gray-500">{clinicInfo.hours.sunday}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Our Services</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {clinicInfo.services.map((service, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-600">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="h-full rounded-2xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.7715634879!2d-6.8498!3d34.0151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDAwJzU0LjQiTiA2wrA1MCc1OS4zIlc!5e0!3m2!1sen!2sma!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinique Dentaire Saada Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Common <span className="text-primary-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Quick answers to help you get started
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Book your free consultation today and take the first step towards your perfect smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="xl" asChild>
                <a href="tel:0661250137">
                  Call 06 61 25 01 37
                  <Phone className="w-5 h-5 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                <a href={`mailto:${clinicInfo.email}`}>
                  Email Us
                  <Mail className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
