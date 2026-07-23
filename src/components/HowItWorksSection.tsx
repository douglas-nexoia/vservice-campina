import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, Search, ShieldCheck } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5583991908583?text=Olá! Gostaria de agendar uma visita técnica.";

const steps = [
  { icon: MessageCircle, num: "1", title: "Nos Chame pelo WhatsApp", desc: "Descreva o problema do seu eletrodoméstico" },
  { icon: CalendarCheck, num: "2", title: "Agendamos a Visita", desc: "Combinamos o melhor dia e horário para você" },
  { icon: Search, num: "3", title: "Diagnóstico na Sua Casa", desc: "Nosso técnico vai até você e avalia o problema" },
  { icon: ShieldCheck, num: "4", title: "Reparo com Garantia", desc: "Consertamos e você tem garantia no serviço" },
];

const HowItWorksSection = () => (
  <section
    id="como-funciona"
    className="py-20 md:py-28"
    style={{ background: "var(--gradient-hero)" }}
  >
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">Como Funciona Nosso Atendimento</h2>
        <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto">
          Simples, rápido e sem complicação
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="text-center"
          >
            <div className="relative mx-auto w-20 h-20 rounded-2xl glass flex items-center justify-center mb-5">
              <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
                {s.num}
              </span>
              <s.icon size={32} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary-foreground mb-2">{s.title}</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
        >
          Agendar Visita Técnica
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

