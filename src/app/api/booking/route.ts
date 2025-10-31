import { NextRequest, NextResponse } from 'next/server'

interface BookingData {
  name: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: BookingData = await request.json()

    // Validate data
    if (!data.name || !data.email || !data.phone || !data.service || !data.date || !data.time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create a more user-friendly date format
    const appointmentDate = new Date(`${data.date}T${data.time}`)
    const formattedDate = appointmentDate.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const formattedTime = appointmentDate.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
    })

    // Service names mapping
    const serviceNames: Record<string, string> = {
      whitening: 'Teeth Whitening',
      transformations: 'Smile Transformations',
      consultation: 'Free Consultation',
    }

    // Email content for client
    const clientEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; padding: 40px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 28px;">Appointment Confirmed! ✅</h1>
          <p style="margin: 10px 0 0 0; font-size: 16px;">Thank you for booking with Smiles Aada</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937; margin-bottom: 20px;">Your Appointment Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #1e40af;">
            <p style="margin: 0 0 10px 0;"><strong>Name:</strong> ${data.name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Service:</strong> ${serviceNames[data.service] || data.service}</p>
            <p style="margin: 0 0 10px 0;"><strong>Date:</strong> ${formattedDate}</p>
            <p style="margin: 0;"><strong>Time:</strong> ${formattedTime}</p>
          </div>

          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;"><strong>📍 Note:</strong> Please arrive 10 minutes early to complete your paperwork. If you need to cancel or reschedule, please contact us at least 24 hours in advance.</p>
          </div>

          <h3 style="color: #1f2937; margin-bottom: 15px;">Contact Information</h3>
          <p style="margin: 0 0 10px 0;">📞 <strong>Phone:</strong> 06 61 25 01 37</p>
          <p style="margin: 0 0 20px 0;">📧 <strong>Email:</strong> contact@smilesaada.com</p>

          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 14px; margin: 0;">We're looking forward to seeing you and giving you the smile you deserve!</p>
            <p style="color: #6b7280; font-size: 12px; margin: 10px 0 0 0;">© 2025 Smiles Aada - Premium Dental Care</p>
          </div>
        </div>
      </div>
    `

    // Email content for admin
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>New Appointment Booking</h2>
        
        <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <p><strong>Client Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Service:</strong> ${serviceNames[data.service] || data.service}</p>
          <p><strong>Appointment Date:</strong> ${formattedDate}</p>
          <p><strong>Appointment Time:</strong> ${formattedTime}</p>
          ${data.message ? `<p><strong>Message:</strong> ${data.message}</p>` : ''}
        </div>
      </div>
    `

    // Store for later use when email integration is enabled
    void clientEmailHtml
    void adminEmailHtml

    // For now, we'll just log the booking (in production, you'd send emails and sync with Google Calendar)
    console.log('New Booking:', {
      ...data,
      formattedDate,
      formattedTime,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual email sending with nodemailer
    // TODO: Implement Google Calendar sync
    // TODO: Store booking in database

    return NextResponse.json(
      {
        success: true,
        message: 'Appointment booked successfully',
        appointmentDetails: {
          date: formattedDate,
          time: formattedTime,
          service: serviceNames[data.service] || data.service,
        },
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    )
  }
}
