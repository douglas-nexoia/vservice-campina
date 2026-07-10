import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BrandStrip from '../components/BrandStrip';
import TrustBadges from '../components/TrustBadges';
import Location from '../components/Location';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { MessageCircle, CheckCircle, ChevronDown } from 'lucide-react';

const laundryBrands = [
  { name: 'Samsung', color: '#1428A0' },
  { name: 'LG', color: '#A50034' },
  { name: 'Midea', color: '#00A0E3' },
  { name: 'Electrolux', color: '#041E42' },
  { name: 'Brastemp', color: '#E30613' },
];

const laundryServices = [
  {
    emoji: '⚙️',
    title: 'Lava e Seca',
    description: 'Manutenção corretiva e preventiva de máquinas Lava e Seca. Solução de barulho na centrifugação, erros de painel, placas e falhas de secagem.',
    features: ['Troca de rolamento e retentor', 'Reparo de placa de potência', 'Substituição de sensores e trava', 'Desobstrução do duto de secar'],
    highlight: true,
  },
  {
    emoji: '🍽️',
    title: 'Lava-Louças',
    description: 'Instalação e conserto de lava-louças de embutir ou piso. Soluções rápidas para vazamentos, falha de escoamento ou água que não aquece.',
    features: ['Troca de bomba de circulação', 'Substituição de resistências', 'Reparo de vedações e mangueiras', 'Conserto de placas controladoras'],
    highlight: false,
  },
  {
    emoji: '🧼',
    title: 'Higienização Técnica',
    description: 'Limpeza profunda de cestos, mangueiras e filtros para eliminar mau cheiro, fiapos acumulados e prolongar a vida útil dos seus aparelhos.',
    features: ['Limpeza química de resíduos', 'Filtros e dutos desobstruídos', 'Prevenção de entupimentos', 'Calibração e testes de ciclo'],
    highlight: false,
  },
];

const laundryFaq = [
  {
    question: 'Quanto tempo leva o diagnóstico e conserto?',
    answer: 'Na maioria dos casos, o diagnóstico é feito no próprio local. Reparos comuns como troca de bombas, válvulas ou resistências são resolvidos em até 24h. Problemas de placas eletrônicas levam de 48h a 72h.',
  },
  {
    question: 'Quais marcas vocês atendem?',
    answer: 'Somos especializados nas principais marcas do mercado de lavagem, como Samsung, LG, Midea, Electrolux e Brastemp, atendendo modelos nacionais e importados.',
  },
  {
    question: 'Quais problemas comuns vocês resolvem em Lava-Louças?',
    answer: 'Consertamos falhas de aquecimento da água (louça saindo molhada ou fria), vazamentos nas vedações da porta, água parada no fundo (problema de drenagem) e falhas no painel digital.',
  },
  {
    question: 'Como funciona a garantia do serviço?',
    answer: 'Oferecemos garantia de 90 dias por escrito cobrindo tanto a mão de obra quanto as peças novas instaladas no conserto do seu eletrodoméstico.',
  },
];

const LavaESeca = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "VService | Instalação e Manutenção de Lava e Seca e Lava-Louças em Campina Grande";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Instalação e manutenção de Lava e Seca e Lava-Louças em Campina Grande. Técnicos especialistas em Samsung, LG, Midea, Electrolux e Brastemp. Garantia de 90 dias."
      );
    }
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] lg:min-h-screen flex items-center bg-[#121212] overflow-hidden pt-24 pb-8 lg:pt-20 lg:pb-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1C1C1C] to-[#121212]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6D00]/5 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6D00]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFA726]/8 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left content */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5 lg:mb-6">
                <CheckCircle size={14} className="text-[#25D366]" />
                <span className="text-xs font-medium text-gray-300">Assistência de Lava e Seca e Lava-Louças em Campina Grande</span>
              </div>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 lg:mb-6">
                Instalação e Manutenção de <span className="gradient-text">Lava e Seca</span> e Lava-Louças
              </h1>

              <p className="text-gray-400 text-base sm:text-lg mb-6 lg:mb-8 max-w-lg leading-relaxed">
                Especialistas em manutenção de máquinas Lava e Seca e Lava-Louças. Atendimento rápido no seu endereço em Campina Grande com garantia e peças originais.
              </p>

              {/* Brand badges */}
              <div className="flex flex-wrap gap-3 mb-6 lg:mb-8">
                {['Samsung', 'LG', 'Midea', 'Electrolux', 'Brastemp'].map((brand) => (
                  <span
                    key={brand}
                    className="bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg"
                  >
                    {brand}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20para%20minha%20Lava%20e%20Seca!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
                >
                  <MessageCircle size={22} />
                  Solicitar Atendimento
                </a>
                <a
                  href="tel:+5583988891689"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all"
                >
                  📞 (83) 98889-1689
                </a>
              </div>
            </div>

            {/* Right image */}
            <div className="animate-slide-in-right delay-300 hidden lg:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF6D00]/20 to-[#FFA726]/20 rounded-3xl blur-2xl" />
                <img
                  src="/vservice_laundry_hero.png"
                  alt="Instalação e Manutenção de Lava e Seca - Campina Grande"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section className="bg-white py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400 font-medium uppercase tracking-widest mb-6">
            Especialistas nas Marcas
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {laundryBrands.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center px-5 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group cursor-default"
              >
                <span
                  className="text-lg font-bold tracking-tight opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ color: brand.color }}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services Section */}
      <section id="servicos" className="pt-8 pb-12 sm:pt-10 sm:pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg">
              Reparo mecânico, manutenção eletrônica e preventiva de alto padrão para sua lavadora.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {laundryServices.map((service) => (
              <div
                key={service.title}
                className={`relative rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:-translate-y-2 group ${
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
                  href="https://wa.me/5583988891689?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20Lava%20e%20Seca!"
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

      <Location />

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-20 bg-[#F8F9FA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 lg:mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
              Dúvidas <span className="gradient-text">Frequentes</span>
            </h2>
            <p className="text-gray-500 text-base sm:text-lg">
              Respostas rápidas para as dúvidas de conserto de Lava e Seca.
            </p>
          </div>

          <div className="space-y-3">
            {laundryFaq.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 py-4 sm:px-6 sm:py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-[#121212] text-sm sm:text-lg pr-4">{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#FF6D00] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 sm:p-6 text-gray-500 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default LavaESeca;
