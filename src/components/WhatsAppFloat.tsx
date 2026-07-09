import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para%20minha%20cozinha!"
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
