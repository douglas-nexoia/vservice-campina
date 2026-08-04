import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const areas = ['Campina Grande', 'João Pessoa (Projetos)', 'Queimadas', 'Lagoa Seca'];

  return (
    <footer className="bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            {/* Logo Transparente e Leve (Manual VSERVICE) */}
            <div className="flex items-center gap-3 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 shrink-0">
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
                <span className="text-xl font-black tracking-wider text-white font-outfit uppercase leading-none">
                  VSERVICE
                </span>
                <span className="text-[9px] font-bold tracking-[0.16em] text-gray-300 uppercase leading-tight mt-1">
                  REPAROS • INSTALAÇÕES
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Manutenção especializada e instalação de Coifas, Cooktops e Fornos em Campina Grande e região.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5583991908583" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone size={16} />
                  (83) 99190-8583
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20gostaria%20de%20um%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-[#25D366] text-sm transition-colors"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>
                  Atendimento em Domicílio<br />
                  Campina Grande – Paraíba, PB
                </span>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Áreas de Atendimento</h4>
            <ul className="space-y-2">
              {areas.map((area) => (
                <li key={area} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#FF6D00] rounded-full" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} VService. Todos os direitos reservados.
          </p>
          <a
            href="https://eixodigitalbr.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-300 text-xs transition-colors opacity-70 hover:opacity-100"
          >
            Desenvolvido por Eixo Digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

