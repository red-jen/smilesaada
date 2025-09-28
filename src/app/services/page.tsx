"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { 
  Heart,
  Smile,
  Shield,
  Clock,
  Award,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Camera,
  Sparkles,
  Calendar,
  Phone
} from "lucide-react"

const services = [
  {
    title: "Dental Implants",
    subtitle: "Premium Titanium Implants",
    description: "Replace missing teeth with permanent, natural-looking implants using Nobel Biocare and Straumann systems.",
    price: "From £950",
    ukPrice: "UK Price: £3,000+",
    savings: "Save 70%",
    duration: "2-3 days",
    warranty: "Lifetime",
    features: [
      "Nobel Biocare premium implants",
      "Same-day temporary crown",
      "3D surgical planning",
      "Immediate loading available",
      "Lifetime warranty included"
    ],
    icon: Heart,
    color: "from-red-500 to-pink-600",
    popular: true,
    image: "implant-procedure"
  },
  {
    title: "All-on-4 Implants", 
    subtitle: "Full Mouth Reconstruction",
    description: "Complete smile transformation with just 4 implants per jaw. Get a full set of teeth in just one visit.",
    price: "From £3,500",
    ukPrice: "UK Price: £15,000+",
    savings: "Save 75%", 
    duration: "4-5 days",
    warranty: "Lifetime",
    features: [
      "Full mouth reconstruction",
      "Immediate teeth same day",
      "Premium Straumann implants", 
      "Digital smile design",
      "Comprehensive aftercare"
    ],
    icon: Smile,
    color: "from-blue-500 to-cyan-600",
    popular: true,
    image: "all-on-4"
  },
  {
    title: "Porcelain Veneers",
    subtitle: "Hollywood Smile Makeover", 
    description: "Ultra-thin porcelain veneers for a perfect smile. Custom-designed for natural-looking perfection.",
    price: "From £280",
    ukPrice: "UK Price: £800+",
    savings: "Save 65%",
    duration: "3-4 days", 
    warranty: "15 years",
    features: [
      "Hand-crafted porcelain",
      "Digital smile preview",
      "Minimal tooth preparation",
      "Stain-resistant finish", 
      "Natural translucency"
    ],
    icon: Sparkles,
    color: "from-purple-500 to-indigo-600",
    popular: false,
    image: "veneers"
  },
  {
    title: "Dental Crowns",
    subtitle: "Premium Ceramic Restorations",
    description: "High-quality ceramic crowns that look and feel like natural teeth. Perfect fit and colour matching.",
    price: "From £190",
    ukPrice: "UK Price: £600+",
    savings: "Save 68%",
    duration: "2-3 days",
    warranty: "15 years", 
    features: [
      "Zirconia ceramic crowns",
      "Perfect colour matching",
      "Digital impressions",
      "Same-day temporaries",
      "Precision fit guaranteed"
    ],
    icon: Shield,
    color: "from-emerald-500 to-green-600",
    popular: false,
    image: "crowns"
  },
  {
    title: "Orthodontics",
    subtitle: "Invisible & Traditional Braces",
    description: "Straighten your teeth with modern orthodontic treatments. Clear aligners and ceramic braces available.",
    price: "From £1,200",
    ukPrice: "UK Price: £4,000+",
    savings: "Save 70%",
    duration: "12-18 months",
    warranty: "Treatment guarantee",
    features: [
      "Invisalign clear aligners",
      "Ceramic braces available",
      "3D treatment planning", 
      "Regular progress monitoring",
      "Retainer included"
    ],
    icon: Zap,
    color: "from-amber-500 to-orange-600",
    popular: false,
    image: "orthodontics"
  },
  {
    title: "Smile Makeover",
    subtitle: "Complete Transformation",
    description: "Comprehensive smile transformation combining multiple treatments for dramatic results.",
    price: "From £2,500",
    ukPrice: "UK Price: £10,000+",
    savings: "Save 75%",
    duration: "5-7 days",
    warranty: "Comprehensive",
    features: [
      "Complete consultation",
      "Digital smile design",
      "Multiple treatment options",
      "Coordinated care plan",
      "Stunning final results"
    ],
    icon: Camera,
    color: "from-pink-500 to-rose-600", 
    popular: true,
    image: "smile-makeover"
  }
]

const process = [
  {
    step: "1",
    title: "Free Consultation",
    description: "Video call with our experts to discuss your needs and review X-rays",
    icon: Users,
    color: "from-blue-500 to-cyan-600"
  },
  {
    step: "2", 
    title: "Treatment Planning",
    description: "Detailed treatment plan with 3D imaging and cost breakdown within 24 hours",
    icon: Calendar,
    color: "from-emerald-500 to-green-600"
  },
  {
    step: "3",
    title: "Travel Arrangement", 
    description: "We arrange flights, accommodation, and transfers - everything sorted",
    icon: Clock,
    color: "from-purple-500 to-indigo-600"
  },
  {
    step: "4",
    title: "Treatment Abroad",
    description: "3-5 days of world-class treatment in our premium partner clinics",
    icon: Heart,
    color: "from-red-500 to-pink-600"
  },
  {
    step: "5",
    title: "UK Aftercare",
    description: "Comprehensive follow-up care through our UK partner network",
    icon: Shield,
    color: "from-amber-500 to-orange-600"
  }
]

const testimonials = [
  {
    name: "Sarah Johnson",
    treatment: "All-on-4 Implants",
    rating: 5,
    text: "Life-changing experience! My new teeth look and feel completely natural. The whole process was so professional.",
    location: "London",
    image: "patient-sarah"
  },
  {
    name: "Michael Brown", 
    treatment: "Dental Implants",
    rating: 5,
    text: "Saved £8,000 compared to UK prices and got better service. The clinic was like a 5-star hotel!",
    location: "Manchester", 
    image: "patient-michael"
  },
  {
    name: "Emma Wilson",
    treatment: "Porcelain Veneers", 
    rating: 5,
    text: "My Hollywood smile dreams came true! The veneers are perfect and the whole trip was amazing.",
    location: "Birmingham",
    image: "patient-emma"
  }
]

export default function ServicesPage() {
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
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-accent-300 font-semibold text-lg">Premium Dental Services</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Smile Today
                  </span>
                </h1>
                
                <p className="text-xl text-primary-100 blog-content leading-relaxed">
                  World-class dental treatments at 70% less than UK prices. Our expert surgeons use 
                  the latest European techniques and premium materials for exceptional results.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Award className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">70%</div>
                  <div className="text-sm text-primary-200">Savings</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Users className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">12,000+</div>
                  <div className="text-sm text-primary-200">Patients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Shield className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">Lifetime</div>
                  <div className="text-sm text-primary-200">Warranty</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group">
                  Free Consultation
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
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
                type="before-after"
                badge="Amazing Results"
                src="https://cdn.pixabay.com/photo/2017/08/06/09/50/people-2590551_1280.jpg"
                alt="Beautiful smile transformation after dental treatment"
                fallback={
                  <div className="text-center text-white p-8">
                    <Smile className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">Smile Transformation</p>
                    <p className="text-primary-200">Before & After Gallery</p>
                  </div>
                }
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Premium Services
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                World-Class Dental Care
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              From single implants to complete smile makeovers, we offer comprehensive dental treatments 
              using the latest European techniques and premium materials.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className={`h-full premium-card transition-all duration-500 relative ${
                  service.popular 
                    ? 'border-accent-300 ring-2 ring-accent-100 shadow-2xl shadow-accent-500/20' 
                    : 'border-slate-200 hover:border-primary-300 hover:shadow-2xl'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-accent-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="relative mb-6">
                      <ImagePlaceholder
                        aspectRatio="video"
                        className="rounded-2xl"
                        overlay="light"
                        src="https://images.pexels.com/photos/3845806/pexels-photo-3845806.jpeg"
                        alt="Dental treatment procedure"
                        fallback={
                          <div className={`bg-gradient-to-br ${service.color} text-white flex items-center justify-center rounded-2xl h-48`}>
                            <service.icon className="w-16 h-16" />
                          </div>
                        }
                      />
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl text-sm font-bold text-primary-900">
                          {service.savings}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} group-hover:scale-105 transition-transform`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1 blog-heading text-gray-900">
                          {service.title}
                        </CardTitle>
                        <p className="text-sm text-accent-600 font-semibold">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed blog-content mb-6">
                      {service.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-br from-slate-50 to-white p-4 rounded-2xl border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-3xl font-bold text-primary-900">{service.price}</div>
                          <div className="text-sm text-gray-500 line-through">{service.ukPrice}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-600">Duration:</div>
                          <div className="font-semibold text-primary-900">{service.duration}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Warranty:</span>
                        <span className="font-semibold text-emerald-600">{service.warranty}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary-900">What's Included:</h4>
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        variant={service.popular ? "premium" : "outline"}
                        className="flex-1 group"
                        size="lg"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="ghost" size="lg" className="px-3">
                        <Calendar className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How It Works
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Your Journey to a Perfect Smile
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              Our streamlined process makes dental tourism easy and stress-free. 
              From consultation to aftercare, we handle everything for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-primary-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm blog-content">{step.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-accent-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Patient Success Stories
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Real Results, Real People
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-8 premium-card hover:shadow-2xl transition-all duration-500 border-slate-200">
                  <div className="flex items-center gap-4 mb-6">
                    <ImagePlaceholder
                      width={60}
                      height={60}
                      className="rounded-2xl"
                      src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_1280.jpg"
                      alt="Professional dental specialist"
                      fallback={
                        <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white flex items-center justify-center rounded-2xl font-bold text-xl">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      }
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-primary-900">{testimonial.name}</h3>
                      <p className="text-sm text-accent-600 font-semibold">{testimonial.treatment}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 blog-content leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </Card>
              </motion.div>
            ))}
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
              Ready to Transform
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent block">
                Your Smile?
              </span>
            </h2>
            
            <p className="text-xl text-primary-100 blog-content mb-12 max-w-2xl mx-auto">
              Join thousands of satisfied patients who've transformed their smiles with our premium dental services. 
              Get your free consultation and personalised treatment plan today.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Phone className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Call Our Experts</h3>
                <p className="text-primary-200 mb-4">+44 20 7946 0958</p>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Call Now
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Calendar className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Book Online</h3>
                <p className="text-primary-200 mb-4">Free consultation available</p>
                <Button variant="gold" className="shadow-lg">
                  Schedule Now
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Heart className="w-12 h-12 text-accent-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Get Quote</h3>
                <p className="text-primary-200 mb-4">Personalised treatment plan</p>
                <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Get Started
                </Button>
              </div>
            </div>

            <Button variant="gold" size="xl" className="text-lg px-12 py-4 shadow-2xl">
              Start Your Smile Journey Today
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}