"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ImagePlaceholder } from "@/components/ui/image-placeholder"
import { 
  Award,
  Users,
  Globe,
  Shield,
  Heart,
  Stethoscope,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Phone
} from "lucide-react"

const stats = [
  { number: "18", label: "Years Experience", icon: Award },
  { number: "12,000+", label: "Happy Patients", icon: Users },
  { number: "15", label: "Partner Clinics", icon: Globe },
  { number: "98%", label: "Success Rate", icon: Shield }
]

const teamMembers = [
  {
    name: "Dr. James Richardson",
    title: "Clinical Director & Oral Surgeon",
    credentials: "BDS, MFDS, MSc Implantology",
    experience: "20+ years",
    speciality: "Complex implant cases and bone reconstruction",
    image: "JR"
  },
  {
    name: "Dr. Sarah Chen",
    title: "Senior Prosthodontist", 
    credentials: "BDS, MSc Prosthodontics",
    experience: "15+ years",
    speciality: "Aesthetic rehabilitation and smile design",
    image: "SC"
  },
  {
    name: "Marie Williams",
    title: "Patient Care Director",
    credentials: "RDN, Patient Advocacy Cert.",
    experience: "12+ years",
    speciality: "International patient coordination",
    image: "MW"
  },
  {
    name: "Dr. Antonio García",
    title: "Partner Clinic Director - Barcelona",
    credentials: "DDS, PhD Oral Surgery",
    experience: "25+ years", 
    speciality: "Advanced surgical techniques and research",
    image: "AG"
  }
]

const certifications = [
  "General Medical Council (GMC) Registered",
  "Care Quality Commission (CQC) Approved",
  "International Association of Dental Tourism",
  "ISO 9001:2015 Quality Management",
  "British Academy of Cosmetic Dentistry",
  "European Federation of Periodontology"
]

const milestones = [
  {
    year: "2006",
    title: "Founded Premium Dental",
    description: "Started with a vision to make world-class dental care accessible to UK patients"
  },
  {
    year: "2010", 
    title: "First International Partnership",
    description: "Established our flagship clinic partnership in Barcelona, Spain"
  },
  {
    year: "2015",
    title: "10,000 Patients Milestone",
    description: "Celebrated treating our 10,000th patient with exceptional results"
  },
  {
    year: "2020",
    title: "Digital Innovation Award",
    description: "Pioneered virtual consultations and 3D treatment planning technology"
  },
  {
    year: "2023",
    title: "Lifetime Warranty Program",
    description: "Launched industry-leading lifetime warranty on all implant treatments"
  },
  {
    year: "2025",
    title: "Excellence Recognition",
    description: "Awarded 'Best International Dental Provider' by UK Healthcare Awards"
  }
]

export default function AboutPage() {
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
                  <span className="text-accent-300 font-semibold text-lg">About Premium Dental</span>
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-playfair font-bold leading-tight blog-heading">
                  18 Years of{" "}
                  <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                    Exceptional Care
                  </span>
                </h1>
                
                <p className="text-xl text-primary-100 blog-content leading-relaxed">
                  We're the UK's most trusted dental tourism provider, helping over 12,000 patients 
                  achieve their perfect smile with world-class treatment abroad at affordable prices.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 text-center"
                  >
                    <stat.icon className="w-8 h-8 text-accent-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-primary-200">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="gold" size="xl" className="group">
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Our Credentials
                  <Award className="w-5 h-5" />
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
                badge="Our Clinic"
                src="https://cdn.pixabay.com/photo/2017/07/23/10/44/dentist-2530990_1280.jpg"
                alt="Our state-of-the-art dental clinic"
                fallback={
                  <div className="text-center text-white p-8">
                    <Stethoscope className="w-16 h-16 mx-auto mb-4 text-accent-400" />
                    <p className="text-xl font-bold mb-2">State-of-the-Art Facility</p>
                    <p className="text-primary-200">Where excellence meets innovation</p>
                  </div>
                }
              />
              
              {/* Floating achievement badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-2xl p-4 shadow-2xl">
                <div className="text-center">
                  <Award className="w-8 h-8 mx-auto mb-2" />
                  <div className="text-lg font-bold">Award Winning</div>
                  <div className="text-sm opacity-90">2025 Excellence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
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
              Our Mission & Values
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                What Drives Us Every Day
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-4">Patient-Centred Care</h3>
              <p className="text-gray-600 blog-content">
                Every decision we make puts our patients first. From initial consultation to post-treatment care, 
                your comfort, safety, and satisfaction are our top priorities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-4">Uncompromising Quality</h3>
              <p className="text-gray-600 blog-content">
                We partner only with the most prestigious clinics and experienced surgeons. Our rigorous 
                standards ensure you receive world-class treatment every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-4">Transparent Pricing</h3>
              <p className="text-gray-600 blog-content">
                No hidden costs, no surprises. We believe in honest, transparent pricing that gives you 
                exceptional value without compromising on quality or service.
              </p>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-4xl font-bold text-primary-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Expert Team
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                World-Class Professionals
              </span>
            </h2>
            <p className="text-xl text-gray-600 blog-content max-w-3xl mx-auto">
              Our team combines decades of experience with cutting-edge technology to deliver 
              exceptional results for every patient.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full premium-card hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-primary-300">
                  <CardContent className="p-6 text-center">
                    {/* Profile Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto shadow-xl">
                        {member.image}
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <h3 className="text-xl font-playfair font-bold text-primary-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-accent-600 font-semibold mb-2">{member.title}</p>
                    <p className="text-sm text-gray-600 mb-3">{member.credentials}</p>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Experience:</span>
                        <span className="font-semibold text-primary-700">{member.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                      {member.speciality}
                    </p>

                    <div className="flex items-center justify-center gap-1 mt-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
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
              Our Journey of Excellence
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Nearly Two Decades of Innovation
              </span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-8 mb-12 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <Card className="p-6 premium-card hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-accent-600">{milestone.year}</div>
                        <div className="text-sm text-gray-500">Milestone Year</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-primary-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 blog-content">
                      {milestone.description}
                    </p>
                  </Card>
                </div>
                
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-accent-500 to-orange-500 rounded-full"></div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-gradient-to-b from-accent-200 to-transparent mt-2"></div>
                  )}
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-spacing bg-gradient-to-br from-primary-900 via-primary-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-playfair font-bold mb-6 blog-heading">
              Accreditations & Certifications
              <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent block">
                Your Trust, Our Commitment
              </span>
            </h2>
            <p className="text-xl text-primary-100 blog-content max-w-3xl mx-auto">
              We maintain the highest industry standards through continuous certification and regulation compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-accent-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">{cert}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-playfair font-bold text-primary-900 mb-8 blog-heading">
              Ready to Experience
              <span className="bg-gradient-to-r from-accent-600 to-orange-500 bg-clip-text text-transparent block">
                Premium Dental Excellence?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 blog-content">
              Join thousands of satisfied patients who have transformed their smiles with our expert care. 
              Let's discuss how we can help you achieve your perfect smile.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="gold" size="xl" className="text-lg px-12 py-4 shadow-2xl">
                Start Your Journey
                <Heart className="w-6 h-6 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="text-lg px-12 py-4">
                Call Our Experts
                <Phone className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}