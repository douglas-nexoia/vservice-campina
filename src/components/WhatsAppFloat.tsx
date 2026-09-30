import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, handleWhatsAppClick, ServiceType } from '../lib/conversions';

interface WhatsAppFloatProps {
  service?: ServiceType;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({ service = 'home' }) => {
  return (
    <a
      href={getWhatsAppUrl(service)}
      onClick={(e) => {
        e.currentTarget.href = getWhatsAppUrl(service);
        handleWhatsAppClick(service);
      }}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float animate-pulse-glow"
      aria-label="Conversar no WhatsApp"
    >
      <MessageCircle size={30} className="text-white" fill="white" />
    </a>
  );
};

export default WhatsAppFloat;
