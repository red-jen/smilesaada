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
  Shield,
  Award,
  Users,
  ArrowRight,
  Send
} from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Call Our Experts",
    description: "Speak directly with our patient coordinators",
    contact: "+44 20 7946 0958",
    availability: "Monday - Friday: 8:00 AM - 8:00 PM GMT",
    action: "Call Now",
    primary: true
  },
  {
    icon: Mail,
    title: "Email Consultation",
    description: "Send us your questions and X-rays",
    contact: "info@premiumdental.co.uk",
    availability: "Response within 2 hours",
    action: "Send Email",
    primary: false
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Support",
    description: "Quick responses on your mobile",
    contact: "+44 7700 123456",
    availability: "Available 24/7",
    action: "Chat Now",
    primary: false
  },
  {
    icon: Calendar,
    title: "Book Consultation",
    description: "Schedule a free video consultation",
    contact: "Online Booking System",
    availability: "Choose your preferred time",
    action: "Book Now",
    primary: true
  }
]

const offices = [
  {
    name: "London Head Office",
    address: "123 Harley Street, Marylebone, London W1G 6BA",
    phone: "+44 20 7946 0958",
    email: "london@premiumdental.co.uk",
    hours: {
      weekdays: "8:00 AM - 8:00 PM",
      weekends: "9:00 AM - 5:00 PM"
    },
    services: ["Initial Consultations", "Treatment Planning", "UK Aftercare"]
  },
  {
    name: "Manchester Office",
    address: "45 King Street, Manchester M2 6AZ", 
    phone: "+44 161 123 4567",
    email: "manchester@premiumdental.co.uk",
    hours: {
      weekdays: "9:00 AM - 6:00 PM", 
      weekends: "10:00 AM - 4:00 PM"
    },
    services: ["Consultations", "Follow-up Care", "Patient Support"]
  },
  {
    name: "Birmingham Office",
    address: "78 Corporation Street, Birmingham B4 6TB",
    phone: "+44 121 234 5678", 
    email: "birmingham@premiumdental.co.uk",
    hours: {
      weekdays: "9:00 AM - 6:00 PM",
      weekends: "Closed"
    },
    services: ["Regional Consultations", "Aftercare Support"]
  }
]

const faqs = [
  {
    question: "How do I start my treatment journey?",
    answer: "Simply call us or book a free consultation online. We'll discuss your needs, review any X-rays, and provide a detailed treatment plan within 24 hours."
  },
  {
    question: "What's included in the treatment cost?",
    answer: "Everything: surgery, materials, accommodation (3-4 nights), airport transfers, all follow-up appointments, and our lifetime warranty on implants."
  },
  {
    question: "Is treatment abroad safe?",
    answer: "Absolutely. Our partner clinics exceed UK safety standards, are fully certified, and our surgeons have extensive international training and experience."
  },
  {
    question: "What about aftercare in the UK?",
    answer: "We provide comprehensive UK aftercare through our network of partner dentists, plus lifetime support from our team for any concerns."
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
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
                
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                  Start Your{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Smile Journey
                  </span>
                </h1>
                
                <p className="text-xl text-primary-100 blog-content leading-relaxed">
                  Ready to transform your smile? Our expert team is here to guide you every step of the way. 
                  Get your free consultation and personalised treatment plan today.
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
                <Button variant="gold" size="xl" className="group">
                  Call Now: +44 20 7946 0958
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
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
                src="https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg"
                alt="Free dental consultation with our expert team"
                fallback={
                  <div className="text-center text-white p-8">
                    <MessageSquare className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">Virtual Consultation</p>
                    <p className="text-primary-200">Meet our experts online</p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold text-primary-900 mb-6 blog-heading">
              Choose How to Connect
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                We're Here When You Need Us
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              Multiple ways to get in touch - choose what works best for you. 
              Our patient coordinators are ready to help with all your questions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full premium-card transition-all duration-500 ${
                  method.primary 
                    ? 'border-accent-300 ring-2 ring-accent-100 shadow-2xl shadow-accent-500/20' 
                    : 'border-slate-200 hover:border-primary-300 hover:shadow-2xl'
                }`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-4 rounded-2xl ${
                        method.primary 
                          ? 'bg-gradient-to-br from-accent-100 to-accent-200' 
                          : 'bg-gradient-to-br from-primary-100 to-primary-200'
                      } group-hover:scale-105 transition-transform`}>
                        <method.icon className={`w-8 h-8 ${
                          method.primary ? 'text-accent-600' : 'text-primary-700'
                        }`} />
                      </div>
                      {method.primary && (
                        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-xl text-xs font-bold">
                          RECOMMENDED
                        </div>
                      )}
                    </div>

                    <CardTitle className="text-xl mb-2 blog-heading text-gray-900">
                      {method.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed blog-content mb-4">
                      {method.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-2xl border border-slate-200">
                      <div className="font-semibold text-primary-900 mb-2">{method.contact}</div>
                      <div className="text-sm text-gray-600 mb-3">{method.availability}</div>
                      
                      <Button 
                        variant={method.primary ? "premium" : "outline"}
                        className="w-full group"
                        size="lg"
                      >
                        {method.action}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
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
              Our UK Offices
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Professional Care Near You
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full premium-card hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-primary-300">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl blog-heading text-primary-900 mb-4">
                      {office.name}
                    </CardTitle>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{office.address}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-accent-600" />
                        <p className="font-semibold text-primary-900">{office.phone}</p>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5 text-accent-600" />
                        <p className="text-gray-700">{office.email}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-2xl border border-slate-200">
                      <h4 className="font-semibold text-primary-900 mb-3 flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent-600" />
                        Opening Hours
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Mon - Fri:</span>
                          <span className="font-medium text-primary-900">{office.hours.weekdays}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Weekends:</span>
                          <span className="font-medium text-primary-900">{office.hours.weekends}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-primary-900 mb-3">Services Available:</h4>
                      <div className="space-y-2">
                        {office.services.map((service) => (
                          <div key={service} className="flex items-center gap-2 text-sm">
                            <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                            <span className="text-gray-600">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Visit This Office
                      <MapPin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-primary-900 mb-8 blog-heading">
                Send Us a Message
                <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block text-2xl">
                  We'll respond within 2 hours
                </span>
              </h2>
              
              <Card className="p-8 shadow-2xl border-slate-200">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="+44 7xxx xxx xxx"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Treatment Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent">
                      <option>Select treatment type</option>
                      <option>Dental Implants</option>
                      <option>All-on-4</option>
                      <option>Dental Crowns</option>
                      <option>Veneers</option>
                      <option>Orthodontics</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                      placeholder="Tell us about your dental needs and any questions you have..."
                    ></textarea>
                  </div>
                  
                  <Button variant="premium" size="xl" className="w-full text-lg py-4">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    🔒 Your information is secure and confidential
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-primary-900 mb-8 blog-heading">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6 border-slate-200 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-primary-900 mb-3 text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 blog-content leading-relaxed">
                      {faq.answer}
                    </p>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl border border-primary-200">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary-900 mb-2">Still have questions?</h3>
                    <p className="text-gray-700 mb-4">
                      Our patient coordinators are standing by to help with any questions about treatment, 
                      travel, or our process.
                    </p>
                    <Button variant="outline" className="group">
                      Speak to an Expert
                      <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-playfair font-bold mb-8 blog-heading">
              Your Peace of Mind is
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent block">
                Our Top Priority
              </span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Award className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fully Regulated</h3>
                <p className="text-primary-200">CQC registered and GMC approved professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Shield className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Comprehensive Insurance</h3>
                <p className="text-primary-200">Full indemnity and patient protection coverage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                <p className="text-primary-200">Patient hotline available around the clock</p>
              </div>
            </div>

            <Button variant="gold" size="xl" className="text-lg px-12 py-4 shadow-2xl">
              Start Your Consultation Today
              <Phone className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}