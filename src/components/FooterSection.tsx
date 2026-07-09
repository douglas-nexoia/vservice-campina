import { Instagram, Phone } from "lucide-react";
import LavgelLogo from "./LavgelLogo";

const footerLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Área de Atendimento", href: "#area-atendimento" },
  { label: "Contato", href: "#contato" },
];

const FooterSection = () => (
  <footer className="bg-primary py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div>
          <LavgelLogo className="text-3xl" />
          <p className="text-primary-foreground/60 text-sm mt-2 max-w-xs">
            Assistência Técnica de Eletrodomésticos em Franca/SP e Região
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <a
            href="https://instagram.com/lavgelservice"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/20 transition-all"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href="tel:+5516992301363"
            className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/20 transition-all"
            aria-label="Telefone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center">
        <p className="text-primary-foreground/50 text-xs">
          © 2026 Lavgel Service. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
