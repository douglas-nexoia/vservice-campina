import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src="/vservice_logo.png"
              alt="VService"
              className="h-10 md:h-12 w-auto object-contain"
              fetchPriority="high"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#servicos" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Sobre
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
              Dúvidas
            </a>
            <a
              href="tel:+5583988891689"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={16} />
              <span>(83) 98889-1689</span>
            </a>
            <a
              href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para%20minha%20cozinha!"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 shadow-lg shadow-green-500/20"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10 mt-2 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              <a href="#servicos" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium py-2">
                Serviços
              </a>
              <a href="#sobre" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium py-2">
                Sobre
              </a>
              <a href="#faq" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium py-2">
                Dúvidas
              </a>
              <a href="tel:+5583988891689" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium py-2">
                <Phone size={16} />
                <span>(83) 98889-1689</span>
              </a>
              <a
                href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para%20minha%20cozinha!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-2"
              >
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
