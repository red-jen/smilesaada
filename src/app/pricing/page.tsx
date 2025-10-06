"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { 
  Crown,
  CheckCircle, 
  Clock,
  Shield,
  Award,
  Star,
  ArrowRight,
  Calculator,
  Heart,
  Zap,
  Users,
  Phone
} from "lucide-react"

const implantTypes = [
  {
    name: "Single Dental Implant",
    description: "Premium titanium implant with zirconia crown for one missing tooth",
    ukPrice: "£2,000",
    ourPrice: "£900",
    savings: "55%",
    duration: "3-4 months",
    sessions: "2-3 visits",
    warranty: "25 years",
    popular: true,
    features: [
      "Grade 4 titanium implant",
      "Custom zirconia crown",
      "3D surgical planning",
      "Bone graft if needed",
      "Healing abutment",
      "Professional cleaning kit"
    ]
  },
  {
    name: "Dental Crowns",
    description: "Premium zirconia crowns for damaged or broken teeth restoration",
    ukPrice: "£650",
    ourPrice: "£250", 
    savings: "62%",
    duration: "2-3 weeks",
    sessions: "2 visits",
    warranty: "15 years",
    popular: false,
    features: [
      "Zirconia crown material",
      "Perfect color matching",
      "Digital impressions",
      "Custom fabrication",
      "Natural aesthetics",
      "Durable construction"
    ]
  },
  {
    name: "Dental Veneers",
    description: "Ultra-thin porcelain veneers for perfect smile transformation",
    ukPrice: "£1,000",
    ourPrice: "£270",
    savings: "73%",
    duration: "2-3 weeks",
    sessions: "2-3 visits", 
    warranty: "10 years",
    popular: false,
    features: [
      "Premium porcelain material",
      "Custom design process",
      "Minimally invasive prep",
      "Perfect color matching",
      "Natural translucency",
      "Stain resistant"
    ]
  },
  {
    name: "All-on-4 Full Arch",
    description: "Complete jaw restoration with 4 strategically placed implants",
    ukPrice: "£18,000",
    ourPrice: "£7,500",
    savings: "58%",
    duration: "1 day surgery",
    sessions: "2-3 visits",
    warranty: "Lifetime",
    popular: true,
    features: [
      "4 premium implants per arch",
      "Immediate load prosthetic",
      "Same-day teeth",
      "Computer-guided surgery",
      "Premium materials",
      "Lifetime support"
    ]
  },
  {
    name: "Invisible Orthodontics",
    description: "Clear aligner treatment for discreet teeth straightening",
    ukPrice: "£12,000",
    ourPrice: "£3,840",
    savings: "68%",
    duration: "12-18 months",
    sessions: "Monthly check-ups",
    warranty: "5 years",
    popular: false,
    features: [
      "Custom clear aligners",
      "3D treatment planning",
      "Regular monitoring",
      "Invisible appearance",
      "Removable design",
      "Comfortable fit"
    ]
  },
  {
    name: "Prosthetics",
    description: "Complete prosthetic solutions for full mouth restoration",
    ukPrice: "£14,000",
    ourPrice: "£7,200",
    savings: "49%",
    duration: "4-6 weeks",
    sessions: "4-5 visits",
    warranty: "20 years",
    popular: false,
    features: [
      "Custom prosthetic design",
      "Premium materials",
      "Perfect fit guarantee",
      "Natural appearance",
      "Comfortable function",
      "Long-lasting durability"
    ]
  },
  {
    name: "Bridge Solutions",
    description: "Fixed bridge solutions for replacing multiple missing teeth",
    ukPrice: "£1,950",
    ourPrice: "£850",
    savings: "56%",
    duration: "3-4 weeks",
    sessions: "3-4 visits",
    warranty: "15 years",
    popular: false,
    features: [
      "Ceramic bridge construction",
      "Natural tooth preparation",
      "Perfect integration",
      "Durable materials",
      "Aesthetic excellence",
      "Functional restoration"
    ]
  },
  {
    name: "Facettes (Premium Veneers)",
    description: "Ultra-premium ceramic facettes for exceptional smile enhancement",
    ukPrice: "£1,000",
    ourPrice: "£400",
    savings: "60%",
    duration: "2-3 weeks",
    sessions: "2-3 visits",
    warranty: "12 years",
    popular: false,
    features: [
      "Ultra-thin ceramic design",
      "Perfect color matching",
      "Minimally invasive prep",
      "Exceptional durability",
      "Natural translucency",
      "Premium aesthetics"
    ]
  }
]

const comparisonFactors = [
  {
    factor: "Implant Quality",
    uk: "Premium brands available",
    us: "World-class Swiss/German implants",
    advantage: "us"
  },
  {
    factor: "Surgeon Experience", 
    uk: "15-20 years average",
    us: "20+ years, international training",
    advantage: "us"
  },
  {
    factor: "Technology",
    uk: "Standard 3D planning",
    us: "Advanced 4D planning + AR guidance",
    advantage: "us"
  },
  {
    factor: "Aftercare",
    uk: "6-month follow-up",
    us: "Lifetime support + UK partner care",
    advantage: "us"
  },
  {
    factor: "Warranty",
    uk: "10 years typical",
    us: "25 years to lifetime",
    advantage: "us"
  },
  {
    factor: "Total Investment",
    uk: "£15,000 - £25,000",
    us: "£4,500 - £7,500 (all-inclusive)",
    advantage: "us"
  }
]

const includedServices = [
  "Initial consultation and 3D scan",
  "Detailed treatment planning",
  "All surgical procedures",
  "Premium implants and materials", 
  "Temporary and final prosthetics",
  "Post-operative medications",
  "Airport transfers and transport",
  "Luxury accommodation (3-4 nights)",
  "24/7 patient support hotline",
  "UK follow-up care coordination",
  "Lifetime warranty on implants",
  "Professional cleaning kit"
]

export default function ImplantPricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.2),transparent)] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-accent-300 font-semibold text-lg">Dental Treatment Pricing</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                  Transparent Treatment Prices,{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Exceptional Value
                  </span>
                </h1>
                
                <p className="text-xl text-primary-100 blog-content leading-relaxed">
                  Premium dental treatments at Saada Smile Morocco with up to 73% savings compared to UK private prices. 
                  All-inclusive packages with no hidden costs, comprehensive warranties, and world-class care.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-accent-300">70%</div>
                    <div className="text-sm text-primary-200">Average Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-300">25+</div>
                    <div className="text-sm text-primary-200">Years Warranty</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent-300">900+</div>
                    <div className="text-sm text-primary-200">Implants Placed</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group">
                  Get Free Quote
                  <Calculator className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Call Now: +44 20 7946 0958
                  <Phone className="w-5 h-5" />
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
                aspectRatio="portrait"
                className="rounded-3xl shadow-2xl"
                overlay="gradient"
                interactive={true}
                type="before-after"
                badge="Before & After"
                src="/images/IMG-20251003-WA0013.jpg"
                alt="Perfect smile dental treatment results"
                fallback={
                  <div className="text-center text-white p-8">
                    <Crown className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">Implant Transformation</p>
                    <p className="text-primary-200">See the amazing results</p>
                  </div>
                }
              />
              
              {/* Floating testimonial */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center text-white font-bold">
                    SM
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Mitchell</p>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  "Saved £12,000 and got better quality than London!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
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
              Dental Treatment Pricing
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Clear & Transparent
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              Compare UK private prices with Saada Smile Morocco prices. All prices include surgery, materials, accommodation, and aftercare. 
              No hidden costs, no surprises - just exceptional value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {implantTypes.map((implant, index) => (
              <motion.div
                key={implant.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <Card className={`h-full premium-card transition-all duration-500 ${
                  implant.popular 
                    ? 'border-accent-300 ring-2 ring-accent-100 shadow-2xl shadow-accent-500/20' 
                    : 'border-slate-200 hover:border-primary-300 hover:shadow-2xl'
                }`}>
                  {implant.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-accent-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ MOST POPULAR
                      </span>
                    </div>
                  )}

                  <CardHeader className="pb-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl group-hover:from-accent-100 group-hover:to-accent-200 transition-all duration-300">
                        <Crown className="w-8 h-8 text-primary-700 group-hover:text-accent-600 transition-colors" />
                      </div>
                      <div className="text-right">
                        <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-3 py-1 rounded-xl text-sm font-bold">
                          -{implant.savings}
                        </div>
                      </div>
                    </div>

                    <CardTitle className="text-xl mb-2 blog-heading text-gray-900">
                      {implant.name}
                    </CardTitle>
                    <p className="text-gray-600 text-sm leading-relaxed blog-content">
                      {implant.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Pricing */}
                    <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-gray-500">UK Price:</span>
                        <span className="text-lg line-through text-red-500 font-semibold">
                          {implant.ukPrice}
                        </span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-bold text-primary-800">Saada Smile Price:</span>
                        <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                          {implant.ourPrice}
                        </span>
                      </div>
                      
                      {/* Treatment Details */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                        <div className="text-center">
                          <Clock className="w-4 h-4 text-accent-600 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">{implant.duration}</div>
                        </div>
                        <div className="text-center">
                          <Shield className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                          <div className="text-xs text-gray-600">{implant.warranty}</div>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">What's Included:</h4>
                      <div className="space-y-2">
                        {implant.features.slice(0, 4).map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </div>
                        ))}
                        {implant.features.length > 4 && (
                          <p className="text-xs text-gray-500 italic">
                            +{implant.features.length - 4} more included...
                          </p>
                        )}
                      </div>
                    </div>

                    <Button 
                      variant={implant.popular ? "premium" : "outline"}
                      className="w-full group"
                      size="lg"
                    >
                      Get Free Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UK vs International Comparison */}
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
              UK vs Saada Smile Morocco
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                The Smart Choice Comparison
              </span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6">
              <div className="grid grid-cols-3 gap-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl font-semibold text-primary-900">
                <div>Comparison Factor</div>
                <div className="text-center">UK Private</div>
                <div className="text-center">Saada Smile Morocco</div>
              </div>
              
              {comparisonFactors.map((item, index) => (
                <motion.div
                  key={item.factor}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="font-semibold text-gray-900 flex items-center">
                    {item.factor}
                  </div>
                  <div className={`text-center p-3 rounded-xl ${
                    item.advantage === 'uk' ? 'bg-emerald-50 text-emerald-800' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {item.uk}
                    {item.advantage === 'uk' && <CheckCircle className="w-4 h-4 text-emerald-600 inline ml-2" />}
                  </div>
                  <div className={`text-center p-3 rounded-xl ${
                    item.advantage === 'us' ? 'bg-emerald-50 text-emerald-800 font-semibold' : 'bg-gray-50 text-gray-600'
                  }`}>
                    {item.us}
                    {item.advantage === 'us' && <CheckCircle className="w-4 h-4 text-emerald-600 inline ml-2" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-primary-900 mb-8 blog-heading">
                Everything Included
                <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                  No Hidden Costs
                </span>
              </h2>
              
              <div className="grid grid-cols-1 gap-4">
                {includedServices.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-100"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-gray-800">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ImagePlaceholder
                aspectRatio="square"
                className="rounded-3xl shadow-2xl"
                interactive={true}
                overlay="dark"
                badge="All-Inclusive"
                src="https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg"
                alt="Premium all-inclusive dental facility"
                fallback={
                  <div className="text-center text-white p-8">
                    <Heart className="w-20 h-20 mx-auto mb-6 text-accent-400" />
                    <p className="text-2xl font-bold mb-4">Complete Care Package</p>
                    <p className="text-primary-200">Everything you need for your perfect smile</p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Save £15,000+ on Your 
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent block">
                Perfect Smile?
              </span>
            </h2>
            
            <p className="text-xl text-primary-100 mb-8 blog-content">
              Get your personalised treatment plan and quote in under 24 hours. 
              No obligations, completely free consultation with our UK-based experts.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gold" size="xl" className="text-lg px-12 py-4 shadow-2xl">
                Get Free Consultation
                <Phone className="w-6 h-6 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="text-lg px-12 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Price Guide
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </div>

            <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
              <p className="text-primary-200 mb-2">🔒 Secure & Confidential</p>
              <p className="text-sm text-primary-300">Your information is protected and will never be shared</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}