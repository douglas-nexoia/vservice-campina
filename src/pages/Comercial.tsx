import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Refrigerator,
  Store,
  Box,
  Warehouse,
  Snowflake,
  Phone,
  MessageCircle,
  ArrowLeft,
  Clock,
  ShieldCheck,
  FileText,
  CreditCard,
  CheckCircle,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import LavgelLogo from "@/components/LavgelLogo";
import heroComercial from "@/assets/hero-comercial.webp";
import heroComercialMd from "@/assets/hero-comercial-md.webp";
import heroComercialSm from "@/assets/hero-comercial-sm.webp";

const WHATSAPP_LINK =
  "https://wa.me/5583991908583?text=Olá! Vi o site da Lavgel Franca e gostaria de um orçamento para refrigeração comercial.";

/* ─── Mini Header ─── */
const ComercialHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="flex items-center gap-1">
          <LavgelLogo className="text-2xl" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#equipamentos"
            className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
          >
            Equipamentos
          </a>
          <a
            href="#diferenciais"
            className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
          >
            Diferenciais
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
          >
            Contato
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Voltar ao site</span>
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
          >
            <MessageCircle size={16} />
            Chamar Técnico
          </a>
        </div>

        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-white/10 pb-4">
          <nav className="container flex flex-col gap-3 pt-3">
            <a
              href="#equipamentos"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
            >
              Equipamentos
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
            >
              Diferenciais
            </a>
            <a
              href="#contato"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors py-2"
            >
              Contato
            </a>
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm font-medium text-primary-foreground/80 py-2"
            >
              <ArrowLeft size={16} />
              Voltar ao site
            </Link>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm mt-1"
            >
              <MessageCircle size={18} />
              Chamar Técnico no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

/* ─── Hero ─── */
const HeroComercial = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{ y: bgY }}
      >
        <img
          src={heroComercial}
          srcSet={`${heroComercialSm} 640w, ${heroComercialMd} 960w, ${heroComercial} 1344w`}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-[80%_center]"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.3) 100%)",
          }}
        />
      </motion.div>

      <div className="container relative z-10 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary-foreground">
              <CheckCircle size={14} className="text-accent" />
              Atendimento B2B
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary-foreground">
              <CheckCircle size={14} className="text-accent" />
              Visita Técnica no Mesmo Dia
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-5">
            Conserto de{" "}
            <span className="text-gradient">Refrigeração Comercial</span> em
            Franca e Região
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Atendimento rápido no local para bares, restaurantes, padarias,
            mercados e farmácias. Evite a perda de estoque hoje.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)] hover:scale-[1.02]"
            >
              <MessageCircle size={22} />
              Chamar Técnico no WhatsApp
            </a>
            <a
              href="tel:+5583991908583"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              <Phone size={20} />
              Ligar Agora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ─── Equipamentos ─── */
const equipment = [
  {
    icon: Refrigerator,
    title: "Cervejeiras e Expositores de Bebidas",
    desc: "Manutenção e reparo de cervejeiras, expositoras verticais e balcões de bebidas para comércios.",
  },
  {
    icon: Store,
    title: "Balcões Refrigerados e Vitrines de Inox",
    desc: "Conserto de balcões frigoríficos, vitrines refrigeradas e ilhas de congelados.",
  },
  {
    icon: Box,
    title: "Freezers Comerciais",
    desc: "Reparo em freezers horizontais e verticais de todas as capacidades e marcas.",
  },
  {
    icon: Warehouse,
    title: "Câmaras Frias",
    desc: "Diagnóstico, manutenção preventiva e corretiva em câmaras frias de pequeno e médio porte.",
  },
  {
    icon: Snowflake,
    title: "Máquinas de Gelo",
    desc: "Reparo e limpeza de máquinas de gelo em cubos e escamas para bares e restaurantes.",
  },
];

const EquipmentSection = () => (
  <section id="equipamentos" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Equipamentos que Atendemos
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Técnicos especializados em linha comercial de refrigeração
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipment.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group rounded-2xl bg-card p-7 border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
              <item.icon
                size={28}
                className="text-secondary group-hover:text-accent transition-colors"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Diferenciais ─── */
const diferenciais = [
  {
    icon: Clock,
    title: "Visita Técnica no Mesmo Dia",
    desc: "Sabemos que equipamento parado significa prejuízo. Priorizamos chamados comerciais com atendimento ágil.",
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 90 Dias e Peças Originais",
    desc: "Trabalhamos com peças genuínas e damos garantia real de 90 dias em todos os serviços executados.",
  },
  {
    icon: FileText,
    title: "Emissão de Nota Fiscal (B2B)",
    desc: "Essencial para contabilidade de empresas. Emitimos NF para todos os serviços, sem burocracia.",
  },
  {
    icon: CreditCard,
    title: "Aceitamos Cartões e PIX",
    desc: "Facilitamos o pagamento com múltiplas formas: cartão de crédito/débito e PIX.",
  },
];

const DiferenciaisSection = () => (
  <section
    id="diferenciais"
    className="py-20 md:py-28"
    style={{ background: "var(--gradient-section-alt)" }}
  >
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Diferenciais Críticos para Comércios
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto">
          Entendemos a urgência do seu negócio
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {diferenciais.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
              <item.icon size={28} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CTA Final ─── */
const CtaSection = () => (
  <section id="contato" className="py-20 md:py-28 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-8 md:p-14 shadow-[var(--shadow-card-hover)]"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Não deixe o estoque estragar
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Equipamento com problema? Fale agora pelo WhatsApp e agende uma visita
          técnica com prioridade comercial.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)] hover:scale-[1.02]"
          >
            <MessageCircle size={22} />
            Chamar Técnico no WhatsApp
          </a>
          <a
            href="tel:+5583991908583"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-border text-foreground font-semibold text-lg hover:bg-muted transition-all"
          >
            <Phone size={20} />
            (83) 99190-8583
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ─── Footer simples ─── */
const ComercialFooter = () => (
  <footer className="py-8 border-t border-border bg-primary">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <LavgelLogo className="text-xl" />
      </div>
      <p className="text-sm text-primary-foreground/60 text-center">
        © {new Date().getFullYear()} VService. Todos os direitos
        reservados.
      </p>
      <a
        href="https://eixodigitalbr.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors opacity-70 hover:opacity-100"
      >
        Desenvolvido por Eixo Digital
      </a>
      <Link
        to="/"
        className="text-sm text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-1"
      >
        <ArrowLeft size={14} />
        Voltar ao site principal
      </Link>
    </div>
  </footer>
);

/* ─── Página ─── */
const Comercial = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ComercialHeader />
      <main>
        <HeroComercial />
        <EquipmentSection />
        <DiferenciaisSection />
        <CtaSection />
      </main>
      <ComercialFooter />
    </div>
  );
};

export default Comercial;

