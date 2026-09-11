import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BrandStrip from '../components/BrandStrip';
import TrustBadges from '../components/TrustBadges';
import Location from '../components/Location';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import {
  MessageCircle,
  CheckCircle,
  ChevronDown,
  Clock,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
  Wind,
  Flame,
  Wrench,
  FileText,
  AlertTriangle,
  Hotel,
  Coffee,
  Sparkles
} from 'lucide-react';

const commercialSectors = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurantes & Churrascarias',
    description: 'Exaustão contínua para chapas, grelhas e fogões industriais sem retorno de fumaça para o salão.',
  },
  {
    icon: Coffee,
    title: 'Padarias & Confeitarias',
    description: 'Controle térmico e extração de vapores e calor intenso de fornos de lastro e turbo.',
  },
  {
    icon: Hotel,
    title: 'Hotéis, Pousadas & Resorts',
    description: 'Manutenção silenciosa e padrão sanitário rigoroso para cozinhas de buffet e restaurantes de hóspedes.',
  },
  {
    icon: Building2,
    title: 'Hamburguerias & Lanchonetes',
    description: 'Solução sob medida para fritadeiras e charbroilers com alta taxa de desprendimento de gordura.',
  },
  {
    icon: Sparkles,
    title: 'Cozinhas Industriais & Dark Kitchens',
    description: 'Sistemas de exaustão operando em capacidade máxima para turnos intensivos de produção e delivery.',
  },
];

const commercialServices = [
  {
    icon: Wind,
    title: 'Instalação e Adequação de Dutos',
    description: 'Dimensionamento e instalação técnica de sistemas de dutos em aço inox e galvanizado, dampers, curvas aerodinâmicas e cálculo de vazão ideal (m³/h).',
    features: [
      'Dutos em aço inox e galvanizado',
      'Cálculo de vazão e perda de carga',
      'Instalação de chapéu chinês e exaustores externos',
      'Vedação hermética contra vazamento de gordura',
    ],
    highlight: true,
  },
  {
    icon: Wrench,
    title: 'Manutenção de Turbinas e Motores',
    description: 'Reparo e substituição de motores elétricos blindados (trifásicos e monofásicos), exaustores centrífugos e axiais, troca de correias, mancais e balanceamento de rotores.',
    features: [
      'Substituição de motores de exaustão',
      'Troca de correias, mancais e rolamentos',
      'Eliminação de ruídos anormais e vibração',
      'Revisão de quadros de comando elétrico',
    ],
    highlight: false,
  },
  {
    icon: Flame,
    title: 'Higienização e Desengorduramento',
    description: 'Limpeza profunda e desincrustação química pesada de coifas, caixas de exaustão e dutos. Previne risco iminente de incêndio e garante conformidade com a Vigilância Sanitária (ANVISA).',
    features: [
      'Desengorduramento químico especializado',
      'Prevenção contra riscos de incêndio',
      'Adequação às normas sanitárias da ANVISA',
      'Relatório técnico de execução para auditorias',
    ],
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: 'Filtros Inerciais e Colmeia em Inox',
    description: 'Fornecimento, substituição e manutenção de filtros inerciais corta-chama e filtros colmeia em aço inoxidável laváveis de alta retenção de partículas.',
    features: [
      'Filtros inerciais tipo labirinto (corta-chama)',
      'Filtros colmeia laváveis em aço inox',
      'Encaixes sob medida para coifas existentes',
      'Drenagem eficiente para calhas de coleta',
    ],
    highlight: false,
  },
];

const b2bDifferentials = [
  {
    icon: Clock,
    title: 'Atendimento Comercial com Prioridade',
    description: 'Sabemos que cozinha parada significa prejuízo e cancelamento de pedidos. Priorizamos chamados de restaurantes, padarias e hotéis com visita no mesmo dia.',
  },
  {
    icon: FileText,
    title: 'Emissão de Nota Fiscal (B2B / CNPJ)',
    description: 'Tranquilidade e conformidade contábil para sua empresa. Emitimos Nota Fiscal detalhada de prestação de serviços para pessoa jurídica.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia de 90 Dias por Escrito',
    description: 'Todos os serviços executados e peças substituídas contam com garantia legal de 90 dias, assegurando a durabilidade da operação.',
  },
  {
    icon: AlertTriangle,
    title: 'Prevenção de Riscos e Segurança',
    description: 'Serviços executados segundo as boas práticas de segurança contra incêndio e padrões sanitários para evitar notificações e interdições.',
  },
];

const commercialFaq = [
  {
    question: 'Com que frequência a coifa e os dutos do restaurante devem ser limpos?',
    answer: 'Para cozinhas de alto volume com fritadeiras e chapas, a higienização dos filtros deve ser semanal e a limpeza profunda dos dutos e motor deve ocorrer entre 3 a 6 meses. O acúmulo de gordura em dutos é o principal causador de incêndios em cozinhas comerciais e motivo frequente de advertências da Vigilância Sanitária e Bombeiros.',
  },
  {
    question: 'A coifa está ligada, mas o ambiente continua cheio de fumaça e calor. O que pode ser?',
    answer: 'Isso normalmente decorre de três fatores: filtros inerciais saturados de gordura impedindo a passagem de ar, motor com perda de rotação/correia frouxa ou duto subdimensionado/obstruído. Nossa equipe avalia a vazão e corrige o defeito no mesmo dia.',
  },
  {
    question: 'Vocês realizam atendimento fora do horário de funcionamento do restaurante?',
    answer: 'Sim! Sabemos que a rotina da cozinha não pode parar durante o almoço ou jantar. Podemos alinhar horários estratégicos no período da manhã ou intervalos entre turnos para realizar as intervenções técnicas.',
  },
  {
    question: 'A VService emite Nota Fiscal com CNPJ para empresas?',
    answer: 'Sim! Atendemos empresas com emissão oficial de Nota Fiscal de prestação de serviços para faturamento e prestação de contas contábeis.',
  },
  {
    question: 'Vocês atendem outras cidades da região além de Campina Grande?',
    answer: 'Sim, atendemos estabelecimentos comerciais em Campina Grande, Queimadas, Lagoa Seca e cidades vizinhas na Paraíba.',
  },
];

const CoifasComerciais = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Coifas Comerciais e Industriais em Campina Grande | VService";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Instalação, manutenção e higienização de coifas comerciais e sistemas de exaustão em Campina Grande/PB. Atendimento B2B para restaurantes, padarias, hotéis e cozinhas industriais. Emissão de NF e garantia de 90 dias."
      );
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const whatsappCommercialLink =
    "https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20atendimento%20para%20coifa%2Fsistema%20de%20exaust%C3%A3o%20comercial.";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-[#121212] text-white overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/hero-comercial-sm.webp" />
            <source media="(max-width: 960px)" srcSet="/hero-comercial-md.webp" />
            <img
              src="/hero-comercial.webp"
              alt="Instalação e Manutenção de Coifas Comerciais e Industriais"
              aria-hidden="true"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center opacity-40 lg:opacity-50"
            />
          </picture>
        </div>

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, #0F0F0F 0%, rgba(15,15,15,0.96) 50%, rgba(15,15,15,0.80) 75%, rgba(15,15,15,0.40) 100%)`,
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Tag B2B */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">
                Linha Comercial & B2B • Atendimento Hoje
              </span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Coifas Comerciais e Sistemas de Exaustão{" "}
              <span className="text-[#FF6A00] font-extrabold">para a sua Empresa.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-2xl leading-relaxed">
              Manutenção especializada, instalação técnica e higienização profunda de coifas industriais em <strong>Campina Grande e região</strong>. Atendimento prioritário para <strong>restaurantes, padarias, hotéis, lanchonetes e cozinhas profissionais</strong>.
            </p>

            {/* Badges B2B */}
            <div className="flex flex-wrap gap-3 mb-8 text-xs sm:text-sm font-semibold text-white">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <CheckCircle size={16} className="text-[#FF6A00]" /> Emissão de Nota Fiscal (PJ)
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <Clock size={16} className="text-[#FF6A00]" /> Visita Técnica Prioritária
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <ShieldCheck size={16} className="text-[#FF6A00]" /> Garantia de 90 Dias
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappCommercialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-lg uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
              >
                <MessageCircle size={22} />
                Solicitar Técnico Comercial
              </a>
              <a
                href="tel:+5583991908583"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
              >
                📞 (83) 99190-8583
              </a>
            </div>

            <p className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-300">
              <CheckCircle size={16} className="text-[#25D366] flex-shrink-0" />
              <span>Orçamento ágil com foco em não interromper o seu turno.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Commercial Brand Strip */}
      <BrandStrip
        title="Especialistas em Sistemas de Exaustão Comercial e Industrial"
        brands={[
          { name: 'Coifas de Inox', color: '#111111' },
          { name: 'Dutos Modulares', color: '#333333' },
          { name: 'Motores Blindados', color: '#0054A6' },
          { name: 'Exaustores Centrífugos', color: '#E30613' },
          { name: 'Filtros Inerciais', color: '#FF6D00' },
          { name: 'Filtros Colmeia', color: '#25D366' },
        ]}
      />

      {/* Setores Atendidos (B2B) */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
              Setores Atendidos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
              Soluções Sob Medida para o Seu Negócio
            </h2>
            <p className="text-gray-600 text-lg">
              Entendemos a rotina exigente do setor de alimentação e hospitalidade. Atendemos com agilidade e compromisso técnico.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialSectors.map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 hover:bg-white rounded-2xl p-7 border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-orange-100/70 text-[#FF6A00] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{sector.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{sector.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
              Engenharia & Manutenção
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
              Serviços Especializados em Coifas Comerciais
            </h2>
            <p className="text-gray-600 text-lg">
              Do reparo urgente de motores à adequação técnica completa do sistema de dutos e exaustores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {commercialServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl p-8 transition-all duration-300 ${
                    service.highlight
                      ? 'bg-white shadow-xl border-2 border-[#FF6A00] relative'
                      : 'bg-white shadow-md hover:shadow-lg border border-gray-100'
                  }`}
                >
                  {service.highlight && (
                    <span className="absolute -top-3.5 left-8 bg-[#FF6A00] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      Mais Solicitado
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 border-t border-gray-100 pt-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-[#25D366] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-[#121212] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block bg-[#FF6A00]/20 text-[#FF6A00] text-xs uppercase tracking-widest font-extrabold px-3.5 py-1 rounded-full mb-4">
                Urgência Comercial
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                A coifa do seu estabelecimento parou ou está com fumaça no salão?
              </h3>
              <p className="text-gray-300 text-base mb-8">
                Fale agora com o nosso plantão técnico comercial no WhatsApp. Atendimento prioritário e orçamento rápido.
              </p>
              <a
                href={whatsappCommercialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-lg uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
              >
                <MessageCircle size={22} />
                Chamar Plantão Comercial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais B2B */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
              Vantagens Corporativas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
              Por que Restaurantes e Hotéis Escolhem a VService?
            </h2>
            <p className="text-gray-600 text-lg">
              Compromisso com o funcionamento ininterrupto da sua cozinha, segurança jurídica e conformidade sanitária.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bDifferentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-[#FF6A00] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Badges & Location */}
      <TrustBadges />
      <Location />

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
              Dúvidas Frequentes B2B
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
              Perguntas Frequentes sobre Coifas Comerciais
            </h2>
            <p className="text-gray-600 text-lg">
              Tudo o que você precisa saber sobre a manutenção do sistema de exaustão do seu comércio.
            </p>
          </div>

          <div className="space-y-4">
            {commercialFaq.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-base sm:text-lg pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#FF6A00] shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 pt-2 bg-gray-50 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat message="Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20atendimento%20para%20coifa%2Fsistema%20de%20exaust%C3%A3o%20comercial." />
    </div>
  );
};

export default CoifasComerciais;
