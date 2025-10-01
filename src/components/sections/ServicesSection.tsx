"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { motion } from "framer-motion"
import { 
  Smile, 
  Sparkles, 
  Crown, 
  Heart,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Users
} from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Dental Implants",
    description: "Permanently replace missing teeth with our premium quality implants and advanced techniques.",
    popular: true,
    features: ["Titanium implants", "3D planning", "Lifetime warranty", "Single session placement"]
  },
  {
    icon: Sparkles,
    title: "Dental Crowns", 
    description: "Restore damaged teeth with our premium zirconia crowns for lasting durability.",
    popular: false,
    features: ["Zirconia crowns", "Perfect fit", "Maximum durability", "Natural aesthetics"]
  },
  {
    icon: Smile,
    title: "Dental Veneers",
    description: "Correct the shape, colour and alignment of your front teeth with precision veneers.",
    popular: false,
    features: ["Premium porcelain", "Custom design", "Non-invasive placement", "10-year warranty"]
  },
  {
    icon: Heart,
    title: "Invisible Orthodontics", 
    description: "Straighten your teeth discreetly with our clear aligner technology.",
    popular: true,
    features: ["Invisible aligners", "Personalised treatment", "Regular monitoring", "Fast results"]
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "State-of-the-art materials and technologies for excellent care"
  },
  {
    icon: Users,
    title: "Certified Team",
    description: "Qualified dentists with international expertise"
  },
  {
    icon: Clock,
    title: "Fast Treatment",
    description: "No waiting lists - treatment within days"
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "98% of our patients recommend our services"
  }
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-6 border border-blue-100">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">OUR DENTAL SERVICES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A carefully selected range of
            <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent block">
              excellent dental treatments
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Discover our premium dental treatments performed by certified specialists. 
            All our treatments include a thorough consultation and our satisfaction guarantee.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-xl border-2 ${
                service.popular 
                  ? 'border-blue-200 bg-gradient-to-br from-blue-50/50 to-white shadow-lg' 
                  : 'border-gray-100 hover:border-blue-200 bg-white'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-4 rounded-2xl ${
                      service.popular
                        ? 'bg-blue-100'
                        : 'bg-gray-100 group-hover:bg-blue-100'
                    } transition-colors duration-300`}>
                      <service.icon className={`w-8 h-8 ${
                        service.popular
                          ? 'text-blue-600'
                          : 'text-gray-600 group-hover:text-blue-600'
                      } transition-colors duration-300`} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant={service.popular ? "default" : "outline"}
                    className="w-full group mt-6 transition-all"
                    size="lg"
                  >
                    <span className="flex items-center gap-2">
                      Request Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Need a personalised treatment plan?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Our specialists create a bespoke treatment plan tailored to your needs and budget.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">Free evaluation</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">No obligation</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm text-gray-700">Multiple options</span>
              </div>
            </div>
            
            <Button size="lg" className="px-12 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all group">
              <span className="flex items-center gap-2">
                Get a free consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
