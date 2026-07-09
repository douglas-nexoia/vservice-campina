import { motion } from "framer-motion";
import { Star, Wrench } from "lucide-react";

const testimonials = [
  { name: "Maria S.", city: "Franca/SP", text: "Atendimento excelente! O técnico foi pontual e resolveu o problema da minha geladeira rapidamente.", stars: 5 },
  { name: "João P.", city: "Franca/SP", text: "Serviço de primeira. Minha máquina de lavar voltou a funcionar perfeitamente. Recomendo!", stars: 5 },
  { name: "Ana C.", city: "Patrocínio Paulista/SP", text: "Muito profissionais. Orçamento justo e trabalho bem feito. Vou sempre chamar a Lavgel.", stars: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28" style={{ background: "var(--gradient-section-alt)" }}>
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">O Que Nossos Clientes Dizem</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="rounded-2xl bg-card p-7 border border-border shadow-[var(--shadow-card)]"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} size={18} className="fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground mb-5 leading-relaxed italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.city}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Counter */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-primary text-primary-foreground">
          <Wrench size={32} className="text-accent" />
          <div>
            <p className="text-3xl font-bold">500+</p>
            <p className="text-sm text-primary-foreground/70">Eletrodomésticos Consertados</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
