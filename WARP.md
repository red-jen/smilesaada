# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Premium dental care website (Clinique Dentaire Saada) built with Next.js 15, focused on luxury medical aesthetics and dental tourism with 70% cost savings messaging. The site includes a marketing website and a file-based blog system.

## Commands

### Development
```powershell
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing
No test framework is currently configured in this project.

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom theme
- **Animations**: Framer Motion
- **UI Components**: Radix UI for accessibility
- **Icons**: Lucide React
- **Form Handling**: Native FormData with multer for file uploads

### Project Structure

```
src/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/blog/create/   # Blog image upload API endpoint
│   ├── blog/              # Blog listing and creation pages
│   ├── services/          # Service detail pages
│   └── [pages]            # About, Contact, FAQ, Pricing, Privacy
├── components/
│   ├── sections/          # Page section components (Hero, Services, etc.)
│   └── ui/                # Reusable UI primitives (Button, Card, Form)
├── lib/                   # Utilities (cn() for className merging)
└── types/                 # TypeScript type definitions (currently empty)
```

### Key Architectural Patterns

**Section-Based Pages**: The homepage (`app/page.tsx`) is composed of self-contained section components from `components/sections/`:
- HeroSection, ServicesSection, ProcessSection
- ClinicGallerySection, ClinicsSection, TestimonialsSection
- CTASection, FooterSection
- NavigationBar (shared across all pages)

**Component Composition**: Uses class-variance-authority (CVA) for consistent component variants. Base UI components in `components/ui/` provide styled primitives that sections build upon.

**Path Aliases**: `@/*` resolves to `src/*` (configured in tsconfig.json)

**Font Strategy**: Google Fonts (Playfair Display for headings, Inter for body) loaded via next/font in root layout with CSS variables

**File Upload System**: Blog images are uploaded to `/public/uploads/blog/` via API route using Node.js fs module. Filenames use timestamp-based naming to prevent conflicts.

**Blog Data Storage**: Currently uses localStorage (demo mode). The `database-setup.sql` file contains PostgreSQL schema for future database integration with proper relational structure (posts, categories, tags, images tables).

### Brand Guidelines

**Color Palette**:
- Primary: Blue family (`#1e40af` - primary-800)
- Accent: Gold family (`#d97706` - accent-600)
- Aesthetic: Luxury medical spa with trust-building elements

**Typography**:
- Headings: Playfair Display (serif) - `font-playfair` or `font-serif`
- Body: Inter (sans-serif) - `font-inter` or `font-sans`

**Custom Tailwind Animations**: `fade-up`, `fade-in`, `slide-up`, `bounce-gentle` defined in tailwind.config.ts

### Important Context

**Mobile-First**: All components use responsive design with mobile-first approach
**Client Components**: Most section components use `"use client"` directive due to Framer Motion animations
**Image Paths**: Static images stored in `/public/images/`, blog uploads in `/public/uploads/blog/`
**WhatsApp Integration**: Floating WhatsApp button configured with phone number `+447445339972`
**ESLint Rule**: `react/no-unescaped-entities` disabled to allow natural punctuation in copy
**Environment Variables**: Template in `.env.local.example` shows Supabase configuration (not yet integrated)

## Development Workflow

### When Working on UI Components
1. Add base components to `src/components/ui/`
2. Use the `cn()` utility from `@/lib/utils` for className composition
3. Follow the existing pattern of using CVA for variant management
4. Ensure accessibility by using Radix UI primitives where appropriate

### When Adding New Pages
1. Create page in `src/app/[page-name]/page.tsx`
2. Import and compose section components from `components/sections/`
3. Wrap sections in semantic HTML (`<section id="...">`)
4. Include NavigationBar and FooterSection for consistency

### When Modifying Animations
1. Use Framer Motion's `motion` components with `initial`, `animate`, `transition` props
2. Reference custom animations from tailwind.config.ts (`animate-fade-up`, etc.)
3. Use staggered delays (0.2s, 0.3s increments) for sequential element reveals

### When Working with Blog System
1. Blog posts are created at `/blog/create` and listed at `/blog`
2. Images upload via `/api/blog/create` endpoint using FormData
3. Currently stores data in localStorage; database schema ready in `database-setup.sql`
4. Categories: General, Treatments, Preventive Care, Cosmetic Dentistry, News

## Messaging and Copy

The site emphasizes:
- 70% cost savings on dental treatments
- EU certified dentists
- Premium quality and luxury experience
- Medical tourism positioning
- Trust indicators (15+ years, 1000+ patients, 98% satisfaction, 24/7 support)
