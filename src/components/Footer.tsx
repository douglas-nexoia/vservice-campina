import { MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  const areas = ['Campina Grande', 'João Pessoa (Projetos)', 'Queimadas', 'Lagoa Seca'];

  return (
    <footer className="bg-[#121212] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src="/vservice_logo.png"
              alt="V Service"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Manutenção especializada e instalação de Coifas, Cooktops, Fornos e Fogões em Campina Grande e região.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+5583988891689" className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                  <Phone size={16} />
                  (83) 98889-1689
                </a>
              </li>

              <li>
                <a
                  href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para%20minha%20cozinha!"
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
            © {new Date().getFullYear()} V Service. Todos os direitos reservados.
          </p>
          <a
            href="https://eixodigitalbr.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none', opacity: 0.6 }}
            className="text-xs hover:opacity-100 transition-opacity"
          >
            Desenvolvido por Eixo Digital
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
