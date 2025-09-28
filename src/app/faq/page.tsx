"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { 
  ChevronDown,
  ChevronUp,
  Search,
  MessageCircle,
  Phone,
  Mail,
  Shield,
  Award,
  Clock,
  Users,
  Plane,
  Heart,
  CreditCard,
  CheckCircle,
  AlertCircle,
  FileText
} from "lucide-react"
import { useState } from "react"

const faqCategories = [
  {
    id: "treatment",
    title: "Treatment & Procedures",
    icon: Heart,
    color: "from-red-500 to-pink-600"
  },
  {
    id: "travel",
    title: "Travel & Logistics", 
    icon: Plane,
    color: "from-blue-500 to-cyan-600"
  },
  {
    id: "cost",
    title: "Costs & Payment",
    icon: CreditCard,
    color: "from-emerald-500 to-green-600"
  },
  {
    id: "safety",
    title: "Safety & Quality",
    icon: Shield,
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: "aftercare",
    title: "Aftercare & Support",
    icon: Users,
    color: "from-amber-500 to-orange-600"
  }
]

const faqs = {
  treatment: [
    {
      question: "What types of dental treatments do you offer?",
      answer: "We offer a comprehensive range of treatments including dental implants, All-on-4, crowns, veneers, bridges, orthodontics, and cosmetic dentistry. All procedures are performed by GMC-registered specialists using the latest European techniques and materials."
    },
    {
      question: "How long does dental implant treatment take?",
      answer: "Most implant treatments are completed in 3-5 days. Single implants can often be done in 2-3 days, while full mouth reconstructions (All-on-4) typically take 4-5 days. We provide temporary teeth immediately so you never go without a smile."
    },
    {
      question: "Are the materials and techniques the same as in the UK?",
      answer: "Yes, and often superior. We use premium European materials (Nobel Biocare, Straumann) and our clinics exceed UK safety standards. Many of our partner surgeons have trained in leading UK dental schools and hold international certifications."
    },
    {
      question: "Will I need multiple trips abroad?",
      answer: "Most treatments require just one trip of 3-5 days. Complex cases might need a second short visit after 3-4 months for final adjustments, but 85% of our patients complete everything in a single journey."
    },
    {
      question: "What if I have dental anxiety or phobia?",
      answer: "We specialise in anxious patients. Our clinics offer sedation options, and our patient coordinators provide extra support. Many patients tell us their experience was far more comfortable than previous UK treatments."
    }
  ],
  travel: [
    {
      question: "What's included in the travel package?",
      answer: "Everything: flights (if part of package), accommodation (3-4 nights in 4-star hotels), all airport transfers, clinic transportation, and a local patient coordinator. You just need to focus on your treatment."
    },
    {
      question: "Which destinations do you offer?",
      answer: "We partner with premium clinics in Hungary (Budapest), Poland (Krakow, Warsaw), Czech Republic (Prague), and Turkey (Istanbul, Ankara). All are 2-3 hours from the UK with excellent facilities."
    },
    {
      question: "Can I bring a companion?",
      answer: "Absolutely! Companion accommodation and flights can be arranged at reduced rates. Many patients find having support helpful, and our destinations offer plenty to see and do."
    },
    {
      question: "What about travel insurance?",
      answer: "We provide comprehensive treatment insurance. For general travel insurance, we recommend declaring your dental treatment. We can provide documentation to support any claims if needed."
    },
    {
      question: "What happens if flights are cancelled?",
      answer: "Our patient coordinators monitor all flights and will rearrange your treatment schedule if needed. We maintain flexibility to accommodate travel disruptions at no extra cost."
    }
  ],
  cost: [
    {
      question: "How much can I really save?",
      answer: "Typical savings are 60-70% compared to UK private treatment. A single implant costing £3,000-4,000 in the UK costs around £950-1,200 with us, including travel and accommodation."
    },
    {
      question: "Are there any hidden costs?",
      answer: "No hidden costs ever. Our quotes include everything: treatment, materials, accommodation, transfers, and follow-up care. The only extras would be personal purchases or additional nights if you choose to extend your stay."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit/debit cards, and offer 0% finance options up to 24 months. Payment schedules can be arranged, with typically 30% deposit and balance before treatment."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans and 0% finance options. You can spread costs over 6-24 months with no interest. Our finance partners offer quick online approval."
    },
    {
      question: "What if I need additional work after treatment?",
      answer: "Any necessary adjustments within the first 12 months are covered at no charge. If additional treatments are needed, you'll receive the same discounted rates with no travel costs."
    }
  ],
  safety: [
    {
      question: "Are the clinics safe and regulated?",
      answer: "All partner clinics exceed UK safety standards and hold international certifications (ISO, EU medical device regulations). They undergo regular inspections and maintain the same infection control protocols as leading UK practices."
    },
    {
      question: "What qualifications do the dentists have?",
      answer: "All our partner surgeons are GMC-registered with European dental qualifications recognised in the UK. Many have trained at prestigious UK institutions and hold advanced specialist certifications in implantology and oral surgery."
    },
    {
      question: "What about infection control and sterilisation?",
      answer: "Our clinics use hospital-grade sterilisation equipment and follow strict EU infection control protocols. All instruments are single-use or undergo rigorous sterilisation cycles that exceed UK standards."
    },
    {
      question: "What happens if something goes wrong?",
      answer: "We maintain comprehensive professional indemnity insurance and have partnerships with UK dental practices for any urgent aftercare. Our 24/7 patient hotline provides immediate support and guidance."
    },
    {
      question: "How do you ensure quality control?",
      answer: "Regular clinic audits, patient feedback monitoring, and continuous professional development ensure consistent high standards. We only work with clinics that maintain our strict quality criteria."
    }
  ],
  aftercare: [
    {
      question: "What aftercare do I receive back in the UK?",
      answer: "Comprehensive UK aftercare through our network of partner dentists. This includes check-ups, adjustments, and ongoing maintenance. We also provide 24/7 patient support for any concerns."
    },
    {
      question: "How long is the warranty on dental work?",
      answer: "Lifetime warranty on implants and 10-15 years on crowns/prosthetics. This covers manufacturing defects and implant failure. Normal wear and tear after expected lifespan is not covered but replacement costs are heavily discounted."
    },
    {
      question: "What if I have problems after returning home?",
      answer: "Our 24/7 patient hotline provides immediate guidance. For urgent issues, we have partner dentists across the UK who can provide emergency care. Non-urgent concerns are managed through video consultations."
    },
    {
      question: "Do you provide ongoing maintenance plans?",
      answer: "Yes, we offer comprehensive maintenance plans through our UK partner network. This includes regular check-ups, hygienist appointments, and priority access for any adjustments needed."
    },
    {
      question: "What about NHS dental care after treatment?",
      answer: "You can return to NHS care for routine maintenance like hygienist visits and check-ups. However, any work on the treated teeth would need to be private or through our aftercare network to maintain warranties."
    }
  ]
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("treatment")
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({})
  const [searchQuery, setSearchQuery] = useState("")

  const toggleItem = (category: string, index: number) => {
    const key = `${category}-${index}`
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const filteredFaqs = Object.entries(faqs).reduce((acc, [category, questions]) => {
    if (searchQuery.length < 2) return { ...acc, [category]: questions }
    
    const filtered = questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
    
    return { ...acc, [category]: filtered }
  }, {} as typeof faqs)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-30"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <span className="text-accent-300 font-semibold text-lg">Frequently Asked Questions</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                Everything You Need{" "}
                <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                  to Know
                </span>
              </h1>
              
              <p className="text-xl text-primary-100 blog-content leading-relaxed max-w-2xl mx-auto">
                Get answers to the most common questions about dental treatment abroad, 
                travel arrangements, costs, and our comprehensive care process.
              </p>

              {/* Search Box */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl 
                           text-white placeholder-white/70 focus:ring-2 focus:ring-accent-400 focus:border-transparent
                           focus:bg-white/20 transition-all"
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <FileText className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">100+</div>
                  <div className="text-sm text-primary-200">Questions Answered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Clock className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">24/7</div>
                  <div className="text-sm text-primary-200">Expert Support</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <Users className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">12,000+</div>
                  <div className="text-sm text-primary-200">Patients Helped</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center">
                  <CheckCircle className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">98%</div>
                  <div className="text-sm text-primary-200">Satisfaction Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-lg bg-white/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r text-white shadow-lg scale-105 ' + category.color
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-spacing bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {Object.entries(filteredFaqs).map(([categoryId, questions]) => (
              <motion.div
                key={categoryId}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCategory === categoryId ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className={activeCategory === categoryId ? 'block' : 'hidden'}
              >
                <div className="mb-12">
                  <h2 className="text-4xl font-playfair font-bold text-primary-900 mb-6 blog-heading text-center">
                    {faqCategories.find(cat => cat.id === categoryId)?.title}
                  </h2>
                  
                  {questions.length === 0 && searchQuery.length >= 2 && (
                    <div className="text-center py-12">
                      <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-gray-600 mb-2">No results found</h3>
                      <p className="text-gray-500">Try a different search term or browse categories above</p>
                    </div>
                  )}

                  <div className="space-y-4">
                    {questions.map((faq, index) => {
                      const isOpen = openItems[`${categoryId}-${index}`]
                      const currentCategory = faqCategories.find(cat => cat.id === categoryId)
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <Card className="overflow-hidden border-slate-200 hover:shadow-lg transition-all duration-300">
                            <button
                              onClick={() => toggleItem(categoryId, index)}
                              className="w-full text-left p-6 hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-start gap-4 flex-1">
                                  <div className={`p-2 rounded-lg bg-gradient-to-r ${currentCategory?.color} flex-shrink-0`}>
                                    {currentCategory && <currentCategory.icon className="w-5 h-5 text-white" />}
                                  </div>
                                  <h3 className="font-bold text-primary-900 text-lg blog-heading pr-4">
                                    {faq.question}
                                  </h3>
                                </div>
                                <div className="flex-shrink-0">
                                  {isOpen ? (
                                    <ChevronUp className="w-6 h-6 text-gray-500" />
                                  ) : (
                                    <ChevronDown className="w-6 h-6 text-gray-500" />
                                  )}
                                </div>
                              </div>
                            </button>
                            
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="px-6 pb-6"
                              >
                                <div className="ml-14">
                                  <p className="text-gray-600 blog-content leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </Card>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-primary-900 mb-6 blog-heading">
                Still Have Questions?
                <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                  We're Here to Help
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 blog-content mb-12 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our expert patient coordinators 
                are available 24/7 to provide personalised guidance.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="p-8 text-center border-slate-200 hover:shadow-xl transition-all duration-300 premium-card">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-accent-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Call Our Experts</h3>
                  <p className="text-gray-600 mb-6">Speak directly with our patient coordinators</p>
                  <Button variant="premium" size="lg" className="w-full">
                    +44 20 7946 0958
                  </Button>
                </Card>

                <Card className="p-8 text-center border-slate-200 hover:shadow-xl transition-all duration-300 premium-card">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Email Support</h3>
                  <p className="text-gray-600 mb-6">Send your questions for detailed answers</p>
                  <Button variant="outline" size="lg" className="w-full">
                    Send Email
                  </Button>
                </Card>

                <Card className="p-8 text-center border-slate-200 hover:shadow-xl transition-all duration-300 premium-card">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-4">Live Chat</h3>
                  <p className="text-gray-600 mb-6">Get instant answers to your questions</p>
                  <Button variant="outline" size="lg" className="w-full">
                    Start Chat
                  </Button>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-200">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0">
                    <ImagePlaceholder 
                      width={120}
                      height={120}
                      className="rounded-2xl"
                      src="https://cdn.pixabay.com/photo/2017/08/06/00/26/people-2586888_1280.jpg"
                      alt="Expert dental team"
                      fallback={
                        <div className="bg-gradient-to-br from-primary-600 to-accent-600 text-white flex items-center justify-center rounded-2xl">
                          <Users className="w-12 h-12" />
                        </div>
                      }
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">Book a Free Consultation</h3>
                    <p className="text-gray-700 mb-4 blog-content">
                      Get personalised advice from our dental experts. We'll review your case, 
                      answer all your questions, and provide a detailed treatment plan - all at no cost.
                    </p>
                    <Button variant="gold" size="xl" className="shadow-lg">
                      Schedule Free Consultation
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-spacing bg-primary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Shield className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Fully Regulated</h3>
              <p className="text-primary-200">CQC & GMC approved</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Award className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Award Winning</h3>
              <p className="text-primary-200">Excellence in dental tourism</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Users className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-primary-200">18+ years experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="w-12 h-12 text-accent-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Guaranteed Results</h3>
              <p className="text-primary-200">Lifetime warranty</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}