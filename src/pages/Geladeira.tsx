import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import custom optimized hero WebP assets
import heroGeladeira from "@/assets/hero-geladeira.webp";
import heroGeladeiraMd from "@/assets/hero-geladeira-md.webp";
import heroGeladeiraSm from "@/assets/hero-geladeira-sm.webp";

const Geladeira = () => {
  useEffect(() => {
    document.title = "Conserto de Geladeira, Freezer e Frigobar em Franca/SP | Lavgel Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Conserto de geladeira, freezer, frigobar e refrigeração comercial em Franca e região. Atendimento rápido na sua casa com garantia. Peça seu orçamento pelo WhatsApp!"
      );
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={
            <>
              Conserto de <span className="text-gradient">Geladeira e Freezer</span> em Franca
            </>
          }
          description="Técnicos especializados em refrigeração doméstica e comercial. Atendimento rápido em domicílio com garantia e peças originais."
          whatsappMessage="Olá! Preciso de um orçamento para conserto de geladeira/freezer."
          heroImage={heroGeladeira}
          heroImageMd={heroGeladeiraMd}
          heroImageSm={heroGeladeiraSm}
        />
        <ServicesSection focusedService="geladeira" />
        <HowItWorksSection />
        <WhyChooseSection />
        <ServiceAreaSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <WhatsAppButton />
    </>
  );
};

export default Geladeira;
