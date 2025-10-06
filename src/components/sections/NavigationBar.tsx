"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "../ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Menu, 
  X, 
  ChevronDown, 
  Phone, 
  Calendar,
  Globe,
  MapPin,
  Clock,
  User,
  ArrowRight
} from "lucide-react"

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Dental Services", 
    href: "/#services", 
    submenu: [
      { name: "Dental Implants", href: "/services/implants", description: "Implant solutions to replace missing teeth" },
      { name: "Dental Crowns", href: "/services/crowns", description: "Complete restoration of damaged teeth" },
      { name: "Dental Bridges", href: "/services/bridges", description: "Replacement of several adjacent teeth" },
      { name: "Fixed Denture on Implant", href: "/services/denture-implant", description: "Fixed and durable solution on implants" },
      { name: "Teeth Whitening", href: "/services/whitening", description: "Get a bright and radiant smile" },
      { name: "Dental Veneers", href: "/services/veneers", description: "Perfect the aesthetics of your teeth" },
      { name: "Smile Transformations", href: "/services/transformations", description: "Discover our smile transformations" },
      { name: "Orthodontics", href: "/services/orthodontics", description: "Dental alignment and correction" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState("home")
  
  // Handle scroll effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background change
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Handle active section highlighting
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionElement = section as HTMLElement;
        const sectionHeight = sectionElement.offsetHeight;
        const sectionTop = sectionElement.offsetTop - 100;
        const sectionId = sectionElement.getAttribute("id");
        
        if (sectionId && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const handleSubmenuToggle = (index: number | null) => {
    setActiveSubmenu(index)
  }
  const handleMobileSubmenuToggle = (index: number) => {
    setOpenMobileSubmenu(openMobileSubmenu === index ? null : index)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-gradient-to-r from-[#062a52]/80 via-[#083a6b]/70 to-[#062a52]/80 shadow-lg py-3' : 'bg-transparent backdrop-blur-sm py-2'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-6">
          {/* Left: Logo */}
          <div className="flex items-center z-50">
            <Link href="/" className="block">
              <img src="/logo/DESIGNY-12.png" alt="Smile Saada Logo" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-6"> 
              {navigationLinks.map((link, index) => (
                <li key={link.name} className="relative" onMouseEnter={() => handleSubmenuToggle(link.submenu ? index : null)} onMouseLeave={() => handleSubmenuToggle(null)}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${scrolled ? 'text-white/90 hover:text-amber-300' : (activeSection === link.href.replace('/#','').replace('#','') ? 'text-white' : 'text-white/90 hover:text-amber-300')}`}>
                    {link.name}
                    {link.submenu && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  <AnimatePresence>
                    {link.submenu && activeSubmenu === index && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-full left-0 right-0 w-full bg-white shadow-xl border-t border-gray-100 z-50"
                      >
                      <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="flex gap-12">
                          {/* Left Side - Service Links */}
                          <div className="flex-1">
                            <div className="mb-6">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Dental Treatments</h3>
                              <p className="text-gray-600 text-sm">From general dentistry to implantology, including periodontics and cosmetic dentistry.</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2">
                              {link.submenu.map((sublink, subIndex) => (
                                <Link
                                  key={sublink.name}
                                  href={sublink.href}
                                  className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                                  onMouseEnter={() => setHoveredService(subIndex)}
                                  onMouseLeave={() => setHoveredService(null)}
                                  onClick={() => setIsOpen(false)}
                                >
                                  <span className="text-sm font-medium text-gray-800 group-hover:text-teal-600">
                                    {sublink.name}
                                  </span>
                                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors" />
                                </Link>
                              ))}
                            </div>
                            
                            <div className="mt-6">
                              <Link 
                                href="/#services" 
                                className="inline-flex items-center gap-2 text-teal-600 font-medium hover:text-teal-700 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <ArrowRight className="w-4 h-4" />
                                Découvrir nos types de soins
                              </Link>
                            </div>
                          </div>
                          
                          {/* Right Side - Details Panel */}
                          <div className="w-96">
                            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 h-full min-h-[300px]">
                              {hoveredService !== null && link.submenu[hoveredService] ? (
                                <div>
                                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                                    {link.submenu[hoveredService].name}
                                  </h4>
                                  <p className="text-gray-700 mb-6 leading-relaxed">
                                    {link.submenu[hoveredService].description}
                                  </p>
                                  <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <p className="text-gray-600 text-sm">Consultation et diagnostic personnalisé</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <p className="text-gray-600 text-sm">Technologies de pointe et matériaux de qualité</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                                      <p className="text-gray-600 text-sm">Suivi post-traitement inclus</p>
                                    </div>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex flex-col justify-center h-full text-center">
                                  <div className="mb-4">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                      <User className="w-6 h-6 text-teal-600" />
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Have a Question?</h4>
                                    <p className="text-gray-600 text-sm">
                                      Our advisors are here to listen and guide you in achieving your dental project.
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: CTAs */}
          <div className="flex items-center gap-4">
            {/* <div className="hidden md:flex flex-col text-right mr-4">
              <span className="text-sm font-medium text-white/90">Free Consultation</span>
              <span className="text-xs text-white/70">+44 20 1234 5678</span>
            </div> */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="outline" size="sm" className={`hidden xl:flex ${scrolled ? '' : 'bg-white/90 text-primary-900 border-white/90 hover:bg-white'}`}>Call Us</Button>
              <Button variant="premium" size="sm" className={`${scrolled ? '' : 'bg-amber-500 hover:bg-amber-600 text-white border-amber-500'}`}>Book Consultation</Button>
            </div>

            {/* Mobile Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2" aria-label="Toggle Menu">
              {!isOpen ? <Menu className="w-6 h-6 text-white" /> : <X className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }} className="lg:hidden bg-gradient-to-b from-[#072146]/95 via-[#083355]/90 to-[#05263f]/95 border-t border-slate-800 absolute top-full left-0 right-0 z-40">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-3">
                {navigationLinks.map((link, index) => (
                  <div key={link.name}>
                    {!link.submenu ? (
                      <Link href={link.href} className="block py-3 text-white" onClick={() => setIsOpen(false)}>{link.name}</Link>
                    ) : (
                      <div>
                        <button onClick={() => handleMobileSubmenuToggle(index)} className="w-full text-left py-3 flex items-center justify-between text-white">
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${openMobileSubmenu === index ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openMobileSubmenu === index && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-4 pb-2 space-y-2 overflow-hidden"
                            >
                            {link.submenu.map((sublink) => (
                              <Link 
                                key={sublink.name} 
                                href={sublink.href} 
                                className="block py-2 text-white/90 hover:text-white transition-colors" 
                                onClick={() => setIsOpen(false)}
                              >
                                <div className="font-medium">{sublink.name}</div>
                                {sublink.description && (
                                  <div className="text-xs text-white/60 mt-1">{sublink.description}</div>
                                )}
                              </Link>
                            ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              {/* <div className="mt-4 space-y-3">
                <Button variant="outline" className="w-full">+44 20 1234 5678</Button>
                <Button variant="premium" className="w-full">Book Free Consultation</Button>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}