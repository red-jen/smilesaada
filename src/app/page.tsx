import HeroSection from "../components/sections/HeroSection"
import ServicesSection from "../components/sections/ServicesSection"
import ProcessSection from "../components/sections/ProcessSection"
import ClinicGallerySection from "../components/sections/ClinicGallerySection"
import ClinicsSection from "../components/sections/ClinicsSection"
import TestimonialsSection from "../components/sections/TestimonialsSection"
import CTASection from "../components/sections/CTASection"
import FooterSection from "../components/sections/FooterSection"

export default function Home() {
  return (
    <>
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <section id="gallery">
          <ClinicGallerySection />
        </section>
        <section id="clinics">
          <ClinicsSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="contact">
          <CTASection />
        </section>
      </main>
      <FooterSection />
    </>
  );
}