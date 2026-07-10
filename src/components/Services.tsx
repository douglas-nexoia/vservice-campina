import { MessageCircle } from 'lucide-react';

const services = [
  {
    emoji: '🔥',
    title: 'Cooktops',
    description: 'Instalação e manutenção especializada em cooktops a gás, elétricos e por indução das principais marcas nacionais e importadas.',
    features: ['Instalação e conversão de gás', 'Reparo em cooktop por indução', 'Substituição de vidro e painéis', 'Limpeza e desobstrução de injetores'],
    highlight: true,
  },
  {
    emoji: '🍞',
    title: 'Fornos e Micro-ondas',
    description: 'Instalação e manutenção profissional para fornos de embutir (elétricos e a gás) e micro-ondas residenciais ou gourmet.',
    features: ['Substituição de resistências', 'Reparo de placas de comando', 'Troca de termostatos e sensores', 'Troca de vidros e dobradiças'],
    highlight: false,
  },
  {
    emoji: '💨',
    title: 'Coifas e Depuradores',
    description: 'Instalação, higienização e manutenção de coifas de ilha, parede e depuradores, garantindo a perfeita exaustão da sua cozinha.',
    features: ['Instalação de dutos de exaustão', 'Substituição de motores', 'Troca de filtros de carvão ativo', 'Manutenção elétrica e fiação LED'],
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="pt-10 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Manutenção especializada e instalação de alto padrão para a sua linha de cocção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 group ${
                service.highlight
                  ? 'bg-gradient-to-br from-[#121212] to-[#1E1E1E] text-white shadow-2xl shadow-neutral-900/20 ring-2 ring-[#FF6D00]/30'
                  : 'bg-[#F8F9FA] hover:bg-white hover:shadow-xl border border-gray-100'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF6D00] text-white text-xs font-bold px-4 py-1 rounded-full">
                  MAIS PROCURADO
                </div>
              )}

              <div className="text-4xl mb-4">{service.emoji}</div>

              <h3 className={`text-xl font-bold mb-3 ${service.highlight ? 'text-white' : 'text-[#121212]'}`}>
                {service.title}
              </h3>

              <p className={`text-sm mb-5 leading-relaxed ${service.highlight ? 'text-gray-300' : 'text-gray-500'}`}>
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-center gap-2 text-sm ${service.highlight ? 'text-gray-300' : 'text-gray-600'}`}
                  >
                    <span className="text-[#25D366] text-base">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20cozinha!"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 w-full font-semibold text-sm py-3 rounded-xl transition-all ${
                  service.highlight
                    ? 'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-lg shadow-green-500/20'
                    : 'bg-[#121212] hover:bg-[#1E1E1E] text-white'
                }`}
              >
                <MessageCircle size={16} />
                Solicitar Atendimento
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
