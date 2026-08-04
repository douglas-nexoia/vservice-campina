import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BrandStrip from '../components/BrandStrip';
import TrustBadges from '../components/TrustBadges';
import Location from '../components/Location';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { MessageCircle, CheckCircle, ChevronDown, Clock, ShieldCheck } from 'lucide-react';

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
    document.title = "Conserto de Lavadoras e Lava e Seca em Campina Grande | VService";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Assistência técnica especializada em Lavadoras de Roupa e Lava e Seca em Campina Grande. Samsung, LG, Midea, Electrolux e Brastemp. Garantia de 90 dias com peças originais."
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
      <section className="relative min-h-[85vh] flex items-center bg-[#121212] text-white overflow-hidden pt-32 pb-16 lg:pt-36 lg:pb-16">
        {/* Background image - full-bleed seamless integration */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 640px)" srcSet="/vservice_laundry_hero-sm.webp" />
            <img
              src="/vservice_laundry_hero.webp"
              alt="Manutenção de máquina de lavar e lava e seca"
              aria-hidden="true"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        {/* Dark gradient overlay from left — Gellato/Lavgel style */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to right, #0F0F0F 0%, rgba(15,15,15,0.96) 45%, rgba(15,15,15,0.80) 70%, rgba(15,15,15,0.35) 100%)`
          }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Specialist tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              <span className="text-xs font-semibold text-gray-200 uppercase tracking-wider">Atendimento Hoje em Campina Grande</span>
            </div>

            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Sua Lavadora ou Lava e Seca Parou?{" "}
              <span className="text-[#FF6A00] font-extrabold">Consertamos Hoje.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl leading-relaxed">
              Especialistas em manutenção de Lavadoras de Roupa e Lava e Seca. Atendimento rápido no seu endereço em Campina Grande com garantia e peças originais.
            </p>

            {/* Benefit badges — Scannability rápida em 0.5s */}
            <div className="flex flex-wrap gap-3 mb-8 text-xs sm:text-sm font-semibold text-white">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <CheckCircle size={16} className="text-[#FF6A00]" /> Garantia nos serviços
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <Clock size={16} className="text-[#FF6A00]" /> Atendimento no mesmo dia
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <ShieldCheck size={16} className="text-[#FF6A00]" /> Peças originais
              </span>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20conserto%20para%20minha%20Lava%20e%20Seca."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-lg uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
              >
                <MessageCircle size={22} />
                Chamar no WhatsApp
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
              <span>Resposta em minutos. Sem compromisso.</span>
            </p>
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
                  href="https://wa.me/5583991908583?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20minha%20Lava%20e%20Seca!"
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

