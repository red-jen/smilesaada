"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar, Clock, Mail, Phone, User, ArrowRight } from 'lucide-react'

export default function BookingComponent() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const services = [
    { id: 'whitening', name: 'Teeth Whitening', duration: '60 mins' },
    { id: 'transformations', name: 'Smile Transformations', duration: '90 mins' },
    { id: 'consultation', name: 'Free Consultation', duration: '30 mins' },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitMessage('✅ Appointment booked successfully! Check your email for confirmation.')
        setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', message: '' })
        setStep(1)
      } else {
        setSubmitMessage('❌ Failed to book appointment. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('❌ An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl text-gray-600">
              Schedule your dental treatment with our professional team
            </p>
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3].map((stepNum) => (
              <div key={stepNum} className="flex flex-col items-center flex-1">
                <motion.div
                  animate={{
                    backgroundColor: step >= stepNum ? '#1e40af' : '#e5e7eb',
                  }}
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-2"
                >
                  {stepNum}
                </motion.div>
                <p className="text-sm text-gray-600">
                  {stepNum === 1 && 'Your Info'}
                  {stepNum === 2 && 'Service & Date'}
                  {stepNum === 3 && 'Confirm'}
                </p>
              </div>
            ))}
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8 mb-6"
          >
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+33 6 XX XX XX XX"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition"
                    />
                  </div>

                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    disabled={!formData.name || !formData.email || !formData.phone}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white"
                  >
                    Next <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Service & Date/Time */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Service & Date</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Select Service
                    </label>
                    <div className="grid gap-3">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-primary-600 transition"
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.id}
                            checked={formData.service === service.id}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary-600"
                          />
                          <span className="ml-3 flex-1">
                            <p className="font-semibold text-gray-900">{service.name}</p>
                            <p className="text-sm text-gray-600">{service.duration}</p>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Preferred Time
                      </label>
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep(1)}
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!formData.service || !formData.date || !formData.time}
                      className="flex-1 bg-primary-600 hover:bg-primary-700 text-white"
                    >
                      Next <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Review & Confirm</h2>

                <div className="space-y-6 mb-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-4">Appointment Details</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Name:</strong> {formData.name}</p>
                      <p><strong>Email:</strong> {formData.email}</p>
                      <p><strong>Phone:</strong> {formData.phone}</p>
                      <p><strong>Service:</strong> {services.find(s => s.id === formData.service)?.name}</p>
                      <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString()}</p>
                      <p><strong>Time:</strong> {formData.time}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Message (optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any additional information for your dentist?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-600 focus:outline-none transition"
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setStep(2)}
                    variant="outline"
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                  >
                    {isSubmitting ? 'Booking...' : 'Confirm Booking'}
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.form>

          {/* Success Message */}
          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 rounded-lg text-center font-semibold ${
                submitMessage.includes('✅')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {submitMessage}
            </motion.div>
          )}

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mt-8 text-gray-600"
          >
            <p>Need help? Call us at <span className="font-semibold text-gray-900">06 61 25 01 37</span></p>
            <p className="mt-2">or contact us at <span className="font-semibold text-gray-900">contact@smilesaada.com</span></p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
