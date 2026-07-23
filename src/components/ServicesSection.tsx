import { motion } from "framer-motion";
import { Refrigerator, WashingMachine, Wind, Snowflake, Cpu, RefreshCw, Zap } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5583991908583?text=Olá! Vi o site de vocês e preciso de um orçamento para conserto.";

const defaultServices = [
  {
    icon: Refrigerator,
    title: "Geladeira, Freezer e Refrigerador",
    desc: "Conserto, manutenção e carga de gás em geladeiras Frost Free, Duplex, Side by Side e Freezers. Especialistas nas marcas Brastemp, Electrolux, Consul, Samsung e LG. Peças originais e garantia no serviço.",
    extra:
      "Seu refrigerador parou de gelar ou está fazendo barulho? Nosso técnico vai até você em Franca e região para um diagnóstico rápido no mesmo dia. Atendemos todas as marcas líderes de mercado com garantia por escrito.",
  },
  {
    icon: WashingMachine,
    title: "Lava e Seca e Máquina de Lavar",
    desc: "Assistência especializada em máquinas de lavar roupas e sistemas Lava e Seca. Técnicos treinados em placas eletrônicas e mecânica de modelos Samsung, LG, Brastemp, Electrolux e Consul. Atendimento em domicílio.",
    extra:
      "Conserto rápido de lavadoras convencionais e Lava e Seca de abertura frontal. Solucionamos problemas de centrifugação, vazamentos, erros no painel e placas queimadas. Garantia no serviço e peças de reposição originais.",
  },
  {
    icon: Wind,
    title: "Ar Condicionado",
    desc: "Instalação, higienização química preventiva, carga de gás e conserto de sistemas de climatização Split e Inverter. Especialistas em marcas como LG, Samsung, Midea, Elgin, Consul e Carrier.",
    extra:
      "Evite problemas de saúde e reduza o consumo de energia do seu ar condicionado. Realizamos a limpeza completa, higienização da evaporadora/condensadora e manutenção de placas Inverter em Franca e região.",
  },
];

const geladeiraServices = [
  {
    icon: Refrigerator,
    title: "Geladeiras e Refrigeradores",
    desc: "Conserto de geladeiras Frost Free, Cycle Defrost, Duplex e Side by Side. Diagnosticamos problemas de placa, sensores e motor no mesmo dia.",
    extra:
      "Trabalhamos com marcas líderes como Brastemp, Electrolux, Consul, Samsung e LG, utilizando peças originais e oferecendo garantia por escrito.",
  },
  {
    icon: Snowflake,
    title: "Carga de Gás e Filtro Secador",
    desc: "Carga de gás refrigerante ecológica (R134a, R600a), reparo de vazamentos na tubulação e troca de filtro secador entupido.",
    extra:
      "Se sua geladeira parou de gelar embaixo ou está ligando sem parar, realizamos o diagnóstico e reoperação do gás no próprio local.",
  },
  {
    icon: Zap,
    title: "Troca de Motor (Compressor)",
    desc: "Substituição de compressores queimados ou com desgaste de compressão. Instalação profissional com vácuo e carga precisa.",
    extra:
      "Motores originais de alta eficiência com garantia completa de funcionamento e atendimento imediato em Franca e região.",
  },
];

const lavaESecaServices = [
  {
    icon: WashingMachine,
    title: "Máquinas de Lavar Roupas",
    desc: "Manutenção corretiva e mecânica completa de lavadoras top-load (abertura superior). Conserto de barulhos, vazamentos e centrifugação.",
    extra:
      "Assistência autorizada multimarcas: Brastemp, Electrolux, Consul, Panasonic, entre outras, com peças originais a pronta entrega.",
  },
  {
    icon: RefreshCw,
    title: "Lava e Seca Inverter",
    desc: "Especialistas em lavadoras front-load (Lava e Seca). Troca de rolamentos do cesto, retentor, borracha da porta e sensores.",
    extra:
      "Modelos inverter de marcas renomadas como Samsung, LG, Midea e Philco. Mão de obra qualificada e garantia estendida.",
  },
  {
    icon: Cpu,
    title: "Reparo de Placas e Sensores",
    desc: "Conserto e substituição de placas eletrônicas de potência e interface, sensores de nível (pressostato) e bombas de drenagem.",
    extra:
      "Solucionamos códigos de erro no painel, problemas de não ligar ou não entrar água, restaurando sua lavadora no mesmo dia em Franca.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

interface ServicesSectionProps {
  focusedService?: "geladeira" | "lava-e-seca" | "default";
}

const ServicesSection = ({ focusedService = "default" }: ServicesSectionProps) => {
  const currentServices =
    focusedService === "geladeira"
      ? geladeiraServices
      : focusedService === "lava-e-seca"
      ? lavaESecaServices
      : defaultServices;

  const sectionTitle =
    focusedService === "geladeira"
      ? "Serviços em Refrigeração"
      : focusedService === "lava-e-seca"
      ? "Serviços em Lavadoras"
      : "O Que Consertamos";

  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">{sectionTitle}</h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Atendimento em domicílio em Franca e cidades da região
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentServices.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group rounded-2xl bg-card p-7 border border-border hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <s.icon size={28} className="text-secondary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <p className="text-sm text-foreground/70 leading-relaxed border-t border-border pt-4 mt-auto">
                {s.extra}
              </p>
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
            Precisa de Conserto? Chame no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

