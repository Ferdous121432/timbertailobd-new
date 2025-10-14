import Footer from "@/components/footer/footer";
import Navigation from "@/components/header/navigation";
import ClientListSection from "@/components/homepage/client-list-section";
import ClientSection from "@/components/homepage/client-section";
import ContactSection from "@/components/homepage/contact-us";
import HeroSection from "@/components/homepage/hero-section";
import ModernLivingSection from "@/components/homepage/modern-living";
import ServicesSection from "@/components/homepage/service-section";
import TestimonialSection from "@/components/homepage/testimonial-section";
import WorkSection from "@/components/homepage/work-section";

export default function Home() {
  return (
    <div className="min-h-screen font-serif overflow-hidden  ">
      <div className="flex flex-col mx-border border-primarycolor bg-white ">
        <HeroSection />
        <WorkSection />
        <ModernLivingSection />
        <ServicesSection />
        <ClientSection />
        <ClientListSection />
        <TestimonialSection />
        <ContactSection />
      </div>
    </div>
  );
}
