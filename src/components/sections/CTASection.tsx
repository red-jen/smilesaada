"use client"

import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  Calendar, 
  ArrowRight,
  Award,
  Shield,
  Clock,
  Euro
} from "lucide-react"

export default function CTASection() {
  return (
    <section 
      className="py-20 text-white relative overflow-hidden" 
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
        color: 'white'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 border border-accent-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6">
            Ready for Your
            <span className="text-accent-400 block">Dream Smile?</span>
          </h2>
          <p className="text-xl lg:text-2xl text-primary-100 mb-8 font-inter leading-relaxed">
            Book your free consultation today and discover how much you can save on premium dental care. 
            No obligations, just professional advice from EU certified specialists.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">70% Savings</h3>
              <p className="text-primary-200 text-sm">Compared to EU prices</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">EU Certified</h3>
              <p className="text-primary-200 text-sm">Qualified specialists</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Fast Service</h3>
              <p className="text-primary-200 text-sm">Same-day treatments</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-white">Guaranteed</h3>
              <p className="text-primary-200 text-sm">Satisfaction promise</p>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button 
              variant="gold" 
              size="xl"
              className="group text-lg px-12 py-4"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-white/30 text-white hover:bg-white hover:text-primary-900 text-lg px-12 py-4"
            >
              Get Treatment Quote
            </Button>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-primary-200 text-sm"
          >
            <p className="mb-4">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:+123456789" 
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </a>
              <a 
                href="mailto:info@premierdental.com" 
                className="flex items-center gap-2 hover:text-accent-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@premierdental.com
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-playfair font-bold mb-2 text-white">Why Choose Us?</h3>
            <p className="text-primary-200">Trusted by thousands across Europe</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">15+</div>
              <div className="text-sm text-white">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">ISO 9001</div>
              <div className="text-sm text-white">Certified Quality</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-sm text-white">Patient Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}