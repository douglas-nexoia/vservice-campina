import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5583991908583?text=Olá! Gostaria de saber se vocês atendem na minha cidade.";

const cities = ["Franca", "Ribeirão Preto", "Patrocínio Paulista", "Restinga", "Cristais Paulista"];

const ServiceAreaSection = () => (
  <section id="area-atendimento" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Onde Atendemos</h2>
        <p className="text-muted-foreground text-lg">Franca e região — Interior de São Paulo</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border aspect-[4/3]"
        >
          <iframe
            title="Localização Lavgel Service Franca"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119849.94652050977!2d-47.45783615!3d-20.538918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a5ccba16d40d%3A0xc29ebb9e14e37c2b!2sFranca%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Cidades Atendidas</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {cities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card border border-border text-foreground font-medium text-sm"
              >
                <MapPin size={16} className="text-secondary" />
                {city}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mb-6">
            Não encontrou sua cidade? Entre em contato e consulte disponibilidade.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
          >
            Consulte Atendimento na Sua Região
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ServiceAreaSection;

