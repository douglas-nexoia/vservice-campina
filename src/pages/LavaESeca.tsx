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

// Import custom optimized laundry hero WebP assets
import heroLavaSeca from "@/assets/hero-lava-seca.webp";
import heroLavaSecaMd from "@/assets/hero-lava-seca-md.webp";
import heroLavaSecaSm from "@/assets/hero-lava-seca-sm.webp";

const LavaESeca = () => {
  useEffect(() => {
    document.title = "Conserto de Máquinas de Lavar e Lava e Seca em Franca/SP | Lavgel Service";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Assistência técnica de máquina de lavar roupas, secadora e Lava e Seca em Franca e região. Atendimento rápido na sua casa com garantia. Peça seu orçamento pelo WhatsApp!"
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
              Conserto de <span className="text-gradient">Máquina de Lavar</span> em Franca
            </>
          }
          description="Especialistas em conserto de lavadoras e máquinas Lava e Seca multimarcas. Atendimento rápido em domicílio com garantia e peças originais."
          whatsappMessage="Olá! Preciso de um orçamento para conserto de máquina de lavar/Lava e Seca."
          heroImage={heroLavaSeca}
          heroImageMd={heroLavaSecaMd}
          heroImageSm={heroLavaSecaSm}
        />
        <ServicesSection focusedService="lava-e-seca" />
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

export default LavaESeca;
