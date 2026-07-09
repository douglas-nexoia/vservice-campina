import { motion } from "framer-motion";
import { Home, Zap, Shield, DollarSign, Wrench, MapPin } from "lucide-react";

const reasons = [
  { icon: Home, title: "Vamos Até Você", desc: "Atendimento em domicílio. Sem precisar sair de casa." },
  { icon: Zap, title: "Atendimento Rápido", desc: "Diagnóstico e reparo no menor tempo possível." },
  { icon: Shield, title: "Garantia no Serviço", desc: "Todos os reparos com garantia. Sua tranquilidade." },
  { icon: DollarSign, title: "Avaliação Profissional", desc: "Diagnóstico técnico detalhado com preço justo e transparente." },
  { icon: Wrench, title: "Técnicos Especializados", desc: "Profissionais experientes em todas as marcas." },
  { icon: MapPin, title: "Atendemos Toda a Região", desc: "Franca e cidades próximas do interior de SP." },
];

const WhyChooseSection = () => (
  <section id="por-que-nos" className="py-20 md:py-28" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Por Que Escolher a Lavgel em Franca?</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex gap-5 items-start p-6 rounded-2xl bg-card border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
          >
            <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <r.icon size={24} className="text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
