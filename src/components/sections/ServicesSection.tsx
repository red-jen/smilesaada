"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { 
  Smile, 
  Sparkles, 
  Shield, 
  Zap, 
  Crown, 
  Heart,
  ArrowRight,
  Euro,
  BadgePercent,
  CheckCircle,
  Clock,
  DollarSign,
  ThumbsUp
} from "lucide-react"
import { useState, useEffect } from "react"

const services = [
  {
    icon: Crown,
    title: "Dental Implants",
    description: "I want to replace a missing tooth permanently with a dental implant.",
    originalPrice: "£2,000",
    ourPrice: "£900", 
    savings: "55%",
    features: ["Titanium implants", "3D planning", "Lifetime warranty", "Single session placement"],
    popular: true,
    highlight: "Most Popular",
    image: "/images/implant.jpg"
  },
  {
    icon: Sparkles,
    title: "Dental Crowns", 
    description: "I want to restore a damaged or broken tooth with a dental crown.",
    originalPrice: "£650",
    ourPrice: "£250",
    savings: "62%",
    features: ["Zirconia crown", "Perfect fit", "Maximum durability", "Natural aesthetics"],
    popular: false,
    highlight: "Best Value",
    image: "/images/crown.jpg"
  },
  {
    icon: Smile,
    title: "Dental Veneers",
    description: "I want to correct the shape, colour or alignment of my front teeth.",
    originalPrice: "£1,000", 
    ourPrice: "£270",
    savings: "73%",
    features: ["Premium porcelain", "Custom design", "Non-invasive placement", "10-year warranty"],
    popular: false,
    highlight: "Best Aesthetics",
    image: "/images/veneer.jpg"
  },
  {
    icon: Zap,
    title: "All-on-4",
    description: "I want to replace all my teeth with a fixed solution on 4 implants.",
    originalPrice: "£18,000",
    ourPrice: "£7,500",
    savings: "58%",
    features: ["Only 4 implants", "Same-day teeth", "Immediate function", "Premium materials"],
    popular: true,
    highlight: "Life-Changing",
    image: "/images/all-on-4.jpg"
  },
  {
    icon: Heart,
    title: "Invisible Orthodontics", 
    description: "I want to straighten my teeth discreetly with clear aligners.",
    originalPrice: "£12,000",
    ourPrice: "£3,840",
    savings: "68%",
    features: ["Invisible aligners", "Personalised treatment", "Regular follow-up", "Fast results"],
    popular: false,
    highlight: "Discreet Solution",
    image: "/images/aligners.jpg"
  },
  {
    icon: Shield,
    title: "Prosthetics",
    description: "I want to restore my smile with high-quality prosthetic solutions.",
    originalPrice: "£14,000",
    ourPrice: "£7,200", 
    savings: "49%",
    features: ["Custom prosthetics", "Perfect fit", "Natural appearance", "Long-lasting materials"],
    popular: false,
    highlight: "Complete Restoration",
    image: "/images/prosthetics.jpg"
  },
  {
    icon: Smile,
    title: "Bridge Solutions",
    description: "I want to replace missing teeth with a fixed bridge solution.",
    originalPrice: "£1,950",
    ourPrice: "£850", 
    savings: "56%",
    features: ["Ceramic bridges", "Natural aesthetics", "Durable construction", "Perfect integration"],
    popular: false,
    highlight: "Permanent Solution",
    image: "/images/bridge.jpg"
  },
  {
    icon: Crown,
    title: "Facettes (Veneers)",
    description: "I want to enhance my smile with premium ceramic facettes.",
    originalPrice: "£1,000",
    ourPrice: "£400", 
    savings: "60%",
    features: ["Ultra-thin ceramics", "Perfect color match", "Minimally invasive", "Long-lasting results"],
    popular: false,
    highlight: "Smile Enhancement",
    image: "/images/facettes.jpg"
  }
];

// Benefits added
const serviceBenefits = [
  {
    icon: ThumbsUp,
    title: "Premium Quality",
    description: "Same materials and technology as in the UK, at a fraction of the price"
  },
  {
    icon: CheckCircle,
    title: "Certified Specialists",
    description: "EU-certified dentists with international qualifications"
  },
  {
    icon: Clock,
    title: "Faster Treatment",
    description: "No waiting lists - get treated in days, not months"
  },
  {
    icon: DollarSign,
    title: "70% Average Savings",
    description: "Same quality treatment for up to 70% less than UK prices"
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all");

  // Filter services based on active tab
  const filteredServices = activeTab === "all" 
    ? services 
    : activeTab === "popular" 
      ? services.filter(service => service.popular)
      : services.filter(service => !service.popular);

  return (
    <section className="section-spacing relative bg-gradient-to-b from-white via-blue-50/50 to-sky-50 gradient-mesh overflow-hidden pt-24 pb-24">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-blue-100 to-sky-200 blur-3xl opacity-30"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 25,
            ease: "easeInOut"
          }}
          style={{ top: '5%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-sky-100 to-cyan-100 blur-3xl opacity-20"
          animate={{ 
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.2, 1],
          }} 
          transition={{ 
            repeat: Infinity,
            duration: 30,
            ease: "easeInOut"
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-sky-200 px-4 py-2 rounded-full mb-6">
            <BadgePercent className="w-5 h-5 text-blue-700" />
            <span className="text-sm font-bold text-blue-800">UP TO 70% SAVINGS ON TREATMENTS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-playfair font-bold text-gray-900 mb-8 blog-heading">
            Premium Dental Care
            <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-600 bg-clip-text text-transparent block">at Affordable Prices</span>
          </h2>
          
          <p className="text-xl text-neutral-600 font-inter leading-relaxed blog-content max-w-4xl mb-8">
            Discover our high-end dental treatments performed by certified specialists. 
            All our treatments include a thorough consultation, premium materials and our satisfaction guarantee.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <img 
              src="/globe.svg" 
              alt="Global Dental Network" 
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/window.svg" 
              alt="Transparent Pricing" 
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src="/file.svg" 
              alt="Certified Documentation" 
              className="h-12 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Filter tabs */}
          <div className="inline-flex bg-slate-100 p-1.5 rounded-full mb-8">
            <button 
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "all" 
                  ? "bg-white text-primary-900 shadow-md" 
                  : "text-primary-700 hover:text-primary-900"
              }`}
            >
              All Treatments
            </button>
            <button 
              onClick={() => setActiveTab("popular")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "popular" 
                  ? "bg-white text-primary-900 shadow-md" 
                  : "text-primary-700 hover:text-primary-900"
              }`}
            >
              Most Popular
            </button>
            <button 
              onClick={() => setActiveTab("other")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "other" 
                  ? "bg-white text-primary-900 shadow-md" 
                  : "text-primary-700 hover:text-primary-900"
              }`}
            >
              Other Treatments
            </button>
          </div>
        </motion.div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {serviceBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-4 shadow-md border border-slate-100 flex flex-col items-center text-center"
            >
              <div className="p-3 bg-primary-50 rounded-full mb-3">
                <benefit.icon className="w-6 h-6 text-primary-700" />
              </div>
              <h3 className="font-bold text-primary-900 mb-1">{benefit.title}</h3>
              <p className="text-xs text-neutral-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full premium-card transition-all duration-500 relative overflow-visible rounded-2xl hover:translate-y-[-5px] ${
                service.popular 
                  ? 'border-gradient-to-r from-accent-300 to-orange-300 ring-2 ring-accent-200 shadow-2xl shadow-accent-500/20 bg-gradient-to-br from-white to-accent-50/30' 
                  : 'border-slate-200 hover:border-primary-300 hover:shadow-2xl bg-gradient-to-br from-white to-slate-50/50'
              }`}>
                {/* Background patterns */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-50 to-accent-50 rounded-full transform translate-x-20 -translate-y-20 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-50 to-primary-50 rounded-full transform -translate-x-12 translate-y-12 opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                {/* Highlight badge */}
                {service.popular ? (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <span className="bg-gradient-to-r from-accent-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      {service.highlight}
                    </span>
                  </div>
                ) : (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gradient-to-r from-primary-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      {service.highlight}
                    </span>
                  </div>
                )}
                
                {/* Popular card glow effect */}
                {service.popular && (
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-orange-500/5 rounded-2xl"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                )}
                
                <CardHeader className="pt-8 pb-6 relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="relative group">
                      <div className={`p-5 rounded-2xl shadow-lg transition-all duration-300 ${
                        service.popular
                          ? 'bg-gradient-to-br from-accent-100 to-amber-100 group-hover:from-accent-200 group-hover:to-amber-200'
                          : 'bg-gradient-to-br from-primary-100 to-primary-200 group-hover:from-accent-100 group-hover:to-accent-200'
                      }`}>
                        <service.icon className={`w-12 h-12 ${
                          service.popular
                            ? 'text-accent-700 group-hover:text-accent-800'
                            : 'text-primary-700 group-hover:text-accent-700'
                        } transition-colors duration-300`} />
                      </div>
                      
                      {/* Hover glow effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-accent-500/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                        animate={service.popular ? { scale: [0.95, 1.05, 0.95] } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                      ></motion.div>
                    </div>
                    
                    <div className="text-right">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-lg flex items-center gap-1">
                        <BadgePercent className="w-4 h-4" />
                        <span>{service.savings}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardTitle className="text-2xl mb-3 blog-heading text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed blog-content">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  {/* Visually enhanced pricing comparison */}
                  <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 p-6 rounded-2xl border border-blue-100 shadow-inner">
                    {/* Price comparison chart */}
                    <div className="mb-4 pt-2">
                      <div className="text-sm text-neutral-600 mb-2">Price comparison</div>
                      <div className="relative h-8 rounded-full bg-gray-100 overflow-hidden">
                        {/* Premium Dental bar */}
                        <div 
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ 
                            width: `${30}%`,
                          }}
                        >
                          <div className="h-full flex items-center justify-end px-3">
                            <span className="text-xs font-bold text-white">Our Price</span>
                          </div>
                        </div>
                        
                        {/* UK price bar */}
                        <div className="absolute right-0 top-0 h-full flex items-center justify-end px-3">
                          <span className="text-xs font-bold text-red-600">UK Price</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">UK Private Price:</div>
                        <div className="text-lg line-through text-red-600 font-semibold relative flex items-center">
                          {service.originalPrice}
                          <div className="absolute inset-0 bg-red-100/30 rounded"></div>
                        </div>
                      </div>
                      <div className="h-12 w-px bg-slate-200"></div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-500 mb-1">Our Price:</div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                          {service.ourPrice}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-blue-200">
                      <span className="text-sm text-gray-600">Your savings:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <BadgePercent className="w-4 h-4" />
                        £{(parseInt(service.originalPrice.replace(/[£,]/g, '')) - parseInt(service.ourPrice.replace(/[£,]/g, ''))).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </span>
                    </div>
                  </div>

                  {/* Features with enhanced styling */}
                  <div className="space-y-3 px-1">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={feature} 
                        className="flex items-center gap-3 text-sm group/feature"
                      >
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          service.popular
                            ? 'bg-accent-100 text-accent-700'
                            : 'bg-primary-100 text-primary-700'
                        }`}>
                          <CheckCircle className="w-3 h-3" />
                        </div>
                        <span className="text-neutral-700 group-hover/feature:text-primary-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={service.popular ? "gold" : "premium"}
                    className="w-full group mt-6 shadow-lg hover:shadow-xl transition-shadow"
                    size="lg"
                  >
                    Request Free Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-500/10 to-transparent rounded-full transform -translate-x-24 translate-y-24"></div>
            
            {/* Animated dots */}
            {/** Client-generated animated dots to avoid SSR mismatch **/}
            <AnimatedDots />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20 shadow-md">
                    <Sparkles className="w-4 h-4 text-blue-200" />
                    <span className="text-sm font-bold text-blue-100">TAILORED DENTAL SOLUTIONS</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-playfair font-bold mb-4 leading-tight">
                    Need a personalized <span className="text-blue-200">treatment plan?</span>
                  </h3>
                  <p className="text-xl text-blue-100 mb-6">
                    Our specialists create a tailored treatment plan adapted to your needs and budget.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                    <CheckCircle className="w-4 h-4 text-blue-200" />
                    <span className="text-sm">Free assessment</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-blue-200" />
                    <span className="text-sm">No obligation</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                    <CheckCircle className="w-4 h-4 text-blue-200" />
                    <span className="text-sm">Multiple options</span>
                  </div>
                </div>
                
                <Button variant="gold" size="xl" className="text-lg px-12 shadow-xl group hover:shadow-accent-500/30">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              {/* Consultation Preview Card */}
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      PD
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">Premium Dental</h4>
                      <p className="text-sm text-primary-200">Treatment Consultation</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-xs text-primary-300 mb-1">Treatment type</div>
                      <div className="font-medium text-white">Full Smile Makeover</div>
                    </div>
                    
                    <div className="bg-white/5 p-4 rounded-xl">
                      <div className="text-xs text-primary-300 mb-1">UK Private Price</div>
                      <div className="font-medium text-red-300 line-through">£12,000</div>
                    </div>
                    
                    <div className="bg-accent-500/20 p-4 rounded-xl">
                      <div className="text-xs text-accent-300 mb-1">Your Price</div>
                      <div className="font-bold text-xl text-white">£3,600</div>
                    </div>
                    
                    <div className="p-4 border-t border-white/10 flex items-center justify-between">
                      <div className="text-sm text-primary-200">You save</div>
                      <div className="text-lg font-bold text-accent-300">£8,400 (70%)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/** Client-generated animated dots to avoid SSR mismatch **/
function AnimatedDots() {
  const [dotPositions, setDotPositions] = useState<{ top: string; left: string }[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: 30 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    }));
    setDotPositions(positions);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0" 
      initial={{ opacity: 0.3 }}
      animate={{ opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 5, repeat: Infinity }}
    >
      {dotPositions.map((position, i) => (
        <div 
          key={i} 
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          style={position}
        />
      ))}
    </motion.div>
  );
}