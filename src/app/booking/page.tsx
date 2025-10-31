import BookingComponent from '@/components/BookingComponent'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an Appointment - Smiles Aada',
  description: 'Schedule your dental appointment with our professional team. Teeth whitening, smile transformations, and free consultations available.',
  openGraph: {
    title: 'Book an Appointment - Smiles Aada',
    description: 'Schedule your dental appointment with our professional team.',
    url: 'https://smilesaada.com/booking',
    siteName: 'Smiles Aada',
    images: [
      {
        url: 'https://smilesaada.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Smiles Aada - Premium Dental Care',
      },
    ],
  },
}

export default function BookingPage() {
  return (
    <>
      <BookingComponent />
      
      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">EU Certified</h3>
              <p className="text-gray-600">All our dentists are fully licensed and EU certified professionals</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">70% Savings</h3>
              <p className="text-gray-600">Get premium dental care at 70% lower cost compared to Western Europe</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Global Patients</h3>
              <p className="text-gray-600">Join thousands of satisfied patients from around the world</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
