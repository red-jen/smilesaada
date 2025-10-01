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
  User
} from "lucide-react"

const navigationLinks = [
  { name: "Accueil", href: "/" },
  { name: "À Propos", href: "/about" },
  { 
    name: "Nos Soins", 
    href: "/#services", 
    submenu: [
      { name: "Implants Dentaires", href: "/services/implants" },
      { name: "Facettes Dentaires", href: "/services/facettes" },
      { name: "Couronnes", href: "/services/couronnes" },
      { name: "Orthodontie", href: "/services/orthodontie" },
      { name: "Blanchiment", href: "/services/blanchiment" },
    ]
  },
  { name: "Tarifs", href: "/pricing" },
  { name: "Témoignages", href: "/#testimonials" },
  { name: "Contact", href: "/contact" },
]

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null)
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
                    className={`text-sm font-medium transition-colors ${scrolled ? 'text-white/90 hover:text-amber-300' : (activeSection === link.href.replace('/#','').replace('#','') ? 'text-white' : 'text-white/90 hover:text-amber-300')}`}>
                    {link.name}
                  </Link>

                  {link.submenu && activeSubmenu === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden z-50">
                      <div className="py-2">
                        {link.submenu.map((sublink) => (
                          <Link key={sublink.name} href={sublink.href} className="block px-4 py-2 text-primary-700 hover:bg-slate-50" onClick={() => setIsOpen(false)}>{sublink.name}</Link>
                        ))}
                      </div>
                    </div>
                  )}
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
                        <button onClick={() => handleMobileSubmenuToggle(index)} className="w-full text-left py-3 flex items-center justify-between text-primary-800">
                          <span>{link.name}</span>
                          <ChevronDown className={`w-5 h-5 transition-transform ${openMobileSubmenu === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openMobileSubmenu === index && (
                          <div className="pl-4 pb-2">
                            {link.submenu.map((sublink) => (
                              <Link key={sublink.name} href={sublink.href} className="block py-2 text-white/90" onClick={() => setIsOpen(false)}>{sublink.name}</Link>
                            ))}
                          </div>
                        )}
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