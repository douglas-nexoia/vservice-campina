import { Shield, Wrench, Zap, Award } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Garantia de 90 Dias',
    description: 'Todos os nossos serviços possuem garantia total de 90 dias para sua segurança.',
    color: '#FF6D00',
  },
  {
    icon: Wrench,
    title: 'Peças Originais',
    description: 'Trabalhamos exclusivamente com peças originais e de procedência garantida.',
    color: '#FFA726',
  },
  {
    icon: Zap,
    title: 'Atendimento Rápido',
    description: 'Diagnóstico ágil e reparo no menor tempo possível. Valorizamos o seu tempo.',
    color: '#25D366',
  },
  {
    icon: Award,
    title: 'Técnicos Especializados',
    description: 'Equipe treinada e certificada nas principais marcas do mercado.',
    color: '#FF9800',
  },
];

const TrustBadges = () => {
  return (
    <section className="pt-16 pb-10 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
            Por que escolher a <span className="gradient-text whitespace-nowrap">VService</span>?
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Compromisso com qualidade e confiança em cada serviço realizado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${badge.color}15` }}
                >
                  <Icon size={28} style={{ color: badge.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#121212] mb-2">{badge.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
