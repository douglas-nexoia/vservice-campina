import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BrandStrip from '../components/BrandStrip';
import TrustBadges from '../components/TrustBadges';
import Services from '../components/Services';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Index = () => {
  useEffect(() => {
    document.title = "Instalação e Conserto de Cooktops, Fornos e Coifas em Campina Grande | VService";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BrandStrip />
      <TrustBadges />
      <Services />
      <Location />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
