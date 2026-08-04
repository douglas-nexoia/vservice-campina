import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Transparente e Leve (Manual VSERVICE) */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 shrink-0">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Orange V */}
                <path d="M16 22L42 78H58L84 22H67L50 58L33 22H16Z" fill="#FF6A00" />
                {/* Lightning Bolt */}
                <path d="M52 32L38 58H50L46 78L62 52H50L54 32H52Z" fill="#FF6A00" />
                {/* Outer Plug Arc */}
                <path d="M68 26C80 36 83 56 73 71C66 81 50 85 38 80" stroke="#E5E5E5" strokeWidth="7" strokeLinecap="round" />
                <rect x="65" y="16" width="6" height="12" rx="2" fill="#E5E5E5" transform="rotate(25 65 16)" />
                <rect x="75" y="21" width="6" height="12" rx="2" fill="#E5E5E5" transform="rotate(25 75 21)" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xl md:text-2xl font-black tracking-wider text-white font-outfit uppercase leading-none">
                VSERVICE
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-[0.16em] text-gray-300 uppercase leading-tight mt-1">
                REPAROS • INSTALAÇÕES
              </span>
            </div>
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
              href="tel:+5583991908583"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone size={16} />
              <span>(83) 99190-8583</span>
            </a>
            <a
              href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20gostaria%20de%20um%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all hover:scale-105 shadow-lg shadow-green-500/20"
            >
              Chamar no WhatsApp
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
              <a href="tel:+5583991908583" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium py-2">
                <Phone size={16} />
                <span>(83) 99190-8583</span>
              </a>
              <a
                href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20gostaria%20de%20um%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-bold text-center mt-2"
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

