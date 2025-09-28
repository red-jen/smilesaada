"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { motion } from "framer-motion"
import { 
  Phone, 
  Mail, 
  MapPin,
  Menu,
  X,
  Smile
} from "lucide-react"
import { useState } from "react"

const navigationLinks = [
  // { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Clinics", href: "/#clinics" },
  { name: "Contact", href: "/contact" }
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent-400" />
              <span>+44 20 7946 0958</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-400" />
              <span>info@premiumdental.co.uk</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-primary-200">
            <MapPin className="w-4 h-4" />
            <span>Serving UK patients across Europe</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                  <Smile className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-playfair font-bold text-primary-900">
                    Premium Dental
                  </span>
                  <span className="text-xs text-accent-600 font-medium uppercase tracking-wider">
                    Luxury Care Abroad
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-neutral-700 hover:text-primary-600 font-medium transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block"
              >
                <Button 
                  variant="premium" 
                  size="lg"
                  className="group"
                >
                  Free Consultation
                  <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-neutral-700 hover:text-primary-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? "auto" : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t border-neutral-200"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-neutral-700 hover:text-primary-600 font-medium py-2 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <Button 
                  variant="premium" 
                  size="lg"
                  className="w-full"
                >
                  Free Consultation
                  <Phone className="w-4 h-4" />
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}