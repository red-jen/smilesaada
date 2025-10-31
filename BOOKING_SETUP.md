# Google Calendar & Appointment Booking System Setup Guide

## 📋 Overview

This guide will help you set up Google Calendar integration with the appointment booking system for your Smiles Aada dental clinic website.

## 🚀 Quick Start

### Step 1: Get Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing one)
3. Enable the **Google Calendar API**:
   - Search for "Calendar API" in the search bar
   - Click "Enable"
4. Create OAuth 2.0 Credentials:
   - Go to "Credentials" in the left sidebar
   - Click "Create Credentials" → "OAuth 2.0 Client IDs"
   - Choose "Web application"
   - Add Authorized redirect URIs:
     - `http://localhost:3000/api/auth/callback/google`
     - `https://yourdomainname.com/api/auth/callback/google`
   - Copy your **Client ID** and **Client Secret**

### Step 2: Configure Environment Variables

Edit your `.env.local` file and add:

```bash
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_client_id_here
GOOGLE_CLIENT_SECRET=your_client_secret_here
NEXTAUTH_URL=http://localhost:3000  # or your production domain
NEXTAUTH_SECRET=generate_with_openssl_rand_base64_32  # Generate with: openssl rand -base64 32
```

To generate NEXTAUTH_SECRET:
```bash
openssl rand -base64 32
```

### Step 3: Set Up Email (Optional but Recommended)

For automatic email confirmations, add to `.env.local`:

```bash
# Gmail Configuration (recommended)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password  # Generate app-specific password

# Or use your own email service:
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_email
SMTP_PASSWORD=your_password
```

**For Gmail:**
1. Enable 2-Step Verification
2. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Generate app-specific password for "Mail" and "Windows Computer"
4. Use this password in SMTP_PASSWORD

### Step 4: Update Email Sending (in `src/app/api/booking/route.ts`)

```typescript
// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
})

// Send confirmation email
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: data.email,
  subject: 'Appointment Confirmed - Smiles Aada',
  html: clientEmailHtml,
})

// Send admin notification
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.ADMIN_EMAIL,
  subject: 'New Appointment Booking',
  html: adminEmailHtml,
})
```

## 📅 API Endpoints

### POST `/api/booking`
Create a new appointment booking

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+33661250137",
  "service": "whitening",
  "date": "2025-11-15",
  "time": "14:30",
  "message": "Optional message"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Appointment booked successfully",
  "appointmentDetails": {
    "date": "Friday, November 15, 2025",
    "time": "14:30",
    "service": "Teeth Whitening"
  }
}
```

### GET/POST `/api/calendar`
Manage Google Calendar events

**For authenticated users only**

## 🔧 Features Implemented

✅ **Multi-step booking form** with validation
✅ **Service selection** (Whitening, Transformations, Consultation)
✅ **Date & time picker** with future dates only
✅ **Client information collection**
✅ **Confirmation summary** before booking
✅ **Responsive design** (mobile-friendly)
✅ **Success/error messages** with animations
✅ **Email notifications** (when configured)

## 🌐 Usage

### Access the Booking Page

Navigate to `/booking` on your website:
```
https://smilesaada.com/booking
```

### Components Used

- **BookingComponent** (`src/components/BookingComponent.tsx`) - Main booking form
- **Next.js API Routes** - Backend processing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible components

## 🔐 Security Best Practices

1. **Never commit `.env.local`** - Add to `.gitignore`
2. **Use environment variables** for sensitive data
3. **Validate all inputs** on both client and server
4. **Rate limit booking endpoint** (production)
5. **Implement CAPTCHA** for spam prevention (optional)
6. **Use HTTPS** in production

## 📊 Future Enhancements

- [ ] **Google Calendar Sync** - Auto-sync bookings to calendar
- [ ] **Payment Integration** - Accept deposits/payments
- [ ] **SMS Notifications** - Send SMS reminders
- [ ] **Calendar Dashboard** - View all bookings
- [ ] **Availability Management** - Set working hours and holidays
- [ ] **Patient History** - Track patient records
- [ ] **Automated Reminders** - Email/SMS reminders 24h before appointment
- [ ] **Multi-language Support** - French, English, Arabic, Spanish

## 🐛 Troubleshooting

### Issue: "Invalid credentials"
- Verify Client ID and Secret in Google Cloud Console
- Check redirect URIs match exactly

### Issue: "Emails not sending"
- Verify SMTP credentials
- For Gmail, use app-specific password
- Check email hasn't hit daily sending limits

### Issue: "Calendar events not syncing"
- Verify Google Calendar API is enabled
- Check OAuth scopes include `calendar`

## 📞 Support

For issues or questions:
- Call: 06 61 25 01 37
- Email: contact@smilesaada.com

---

**Last Updated:** October 30, 2025
**Version:** 1.0.0
