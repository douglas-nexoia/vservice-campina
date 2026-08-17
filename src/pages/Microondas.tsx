import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BrandStrip from '../components/BrandStrip';
import TrustBadges from '../components/TrustBadges';
import Location from '../components/Location';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { MessageCircle, CheckCircle, ChevronDown, Clock, ShieldCheck, Zap, Flame, Wrench } from 'lucide-react';

const microondasBrands = [
  { name: 'Electrolux', color: '#041E42' },
  { name: 'Brastemp', color: '#E30613' },
  { name: 'Samsung', color: '#1428A0' },
  { name: 'LG', color: '#A50034' },
  { name: 'Consul', color: '#7FB01A' },
  { name: 'Midea', color: '#00A0E3' },
  { name: 'Philco', color: '#000000' },
  { name: 'Fischer', color: '#D32F2F' },
];

const microondasServices = [
  {
    emoji: '⚡',
    title: 'Micro-ondas não Esquenta / Não Liga',
    description: 'Diagnóstico rápido e troca de magnetron, capacitor de alta tensão, diodo ou fusível. Resolvemos o problema do aparelho funcionar mas não aquecer os alimentos.',
    features: ['Troca de magnetron original', 'Substituição de capacitor e diodo', 'Reparo da placa de potência', 'Troca de fusível de alta tensão'],
    highlight: true,
  },
  {
    emoji: '🔥',
    title: 'Fornos Elétricos (Bancada ou Embutir)',
    description: 'Manutenção técnica em fornos elétricos residenciais. Troca de resistências queimadas, termostatos descalibrados, temporizadores e vedações de porta.',
    features: ['Substituição de resistências (superior/inferior)', 'Troca de termostato de temperatura', 'Conserto de timer e chaves seletoras', 'Solução para disjuntor desarmando'],
    highlight: false,
  },
  {
    emoji: '⚙️',
    title: 'Barulho, Faíscas ou Prato Parado',
    description: 'Eliminação de faíscas internas, barulho excessivo e conserto do motor do prato giratório. Troca da folha de mica isolante e teclado touch screen.',
    features: ['Substituição da lâmina de mica isolante', 'Troca do motor do prato giratório', 'Reparo do painel de membrana (touch)', 'Substituição de microchaves da porta'],
    highlight: false,
  },
];

const microondasFaq = [
  {
    question: 'Por que o micro-ondas liga, roda o prato mas NÃO esquenta?',
    answer: 'Esse é o defeito mais comum. Geralmente indica que o magnetron (peça responsável por gerar as micro-ondas) ou o capacitor de alta tensão queimou. Realizamos o diagnóstico e a substituição da peça original no mesmo dia.',
  },
  {
    question: 'É perigoso usar micro-ondas saindo faíscas por dentro?',
    answer: 'Sim, não continue usando! As faíscas ocorrem quando a folha de mica isolante interna está suja ou queimada. A substituição da lâmina de mica é rápida e barata, prevenindo danos graves ao aparelho.',
  },
  {
    question: 'Vocês consertam Forno Elétrico de Embutir e de Bancada?',
    answer: 'Sim! Atendemos fornos elétricos de embutir em móveis planejados ou de bancada de todas as marcas (Fischer, Brastemp, Electrolux, Consul, Philco). Resolvendo problemas de resistência queimada ou forno desarmando disjuntor.',
  },
  {
    question: 'Como funciona o atendimento e a garantia?',
    answer: 'Atendemos diretamente no seu endereço em Campina Grande/PB com horário agendado. Todos os serviços e peças novas contam com 90 dias de garantia por escrito.',
  },
];

const Microondas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Conserto de Micro-ondas e Fornos Elétricos em Campina Grande | VService";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Assistência técnica especializada em Micro-ondas e Fornos Elétricos em Campina Grande/PB. Micro-ondas não esquenta, faíscas ou placa queimada. Atendimento a domicílio com peças originais e garantia de 90 dias."
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
            <source media="(max-width: 640px)" srcSet="/vservice_hero-sm.webp" />
            <img
              src="/vservice_hero.webp"
              alt="Manutenção de micro-ondas e forno elétrico"
              aria-hidden="true"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
          </picture>
        </div>

        {/* Dark gradient overlay from left */}
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
              Seu Micro-ondas Não Esquenta ou o Forno Parou?{" "}
              <span className="text-[#FF6A00] font-extrabold">Consertamos Hoje.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl leading-relaxed">
              Especialistas em conserto de Micro-ondas e Fornos Elétricos em Campina Grande/PB. Resolução rápida para aparelhos que não aquecem, soltam faíscas ou não ligam.
            </p>

            {/* Benefit badges */}
            <div className="flex flex-wrap gap-3 mb-8 text-xs sm:text-sm font-semibold text-white">
              <span className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
                <CheckCircle size={16} className="text-[#FF6A00]" /> 90 dias de garantia
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
                href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20conserto%20para%20meu%20micro-ondas%2Fforno."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-lg uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
              >
                <MessageCircle size={22} />
                Chamar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <BrandStrip brands={microondasBrands} title="Marcas Atendidas em Micro-ondas e Fornos" />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider">Especialidade Técnica</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Solução Definitiva para Micro-ondas e Fornos Elétricos
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              Técnicos treinados para identificar rapidamente o componente queimado e devolver a eficiência do seu eletrodoméstico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microondasServices.map((service, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 transition-all hover:-translate-y-1 ${
                  service.highlight
                    ? 'bg-[#121212] text-white shadow-xl ring-2 ring-[#FF6A00]'
                    : 'bg-white text-gray-900 border border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className={`text-sm mb-6 leading-relaxed ${service.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                  {service.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm">
                      <CheckCircle size={16} className="text-[#FF6A00] shrink-0" />
                      <span className={service.highlight ? 'text-gray-200' : 'text-gray-700'}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20conserto%20para%20meu%20micro-ondas%2Fforno."
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl text-sm transition-all ${
                    service.highlight
                      ? 'bg-[#FF6A00] hover:bg-[#e05d00] text-white shadow-lg'
                      : 'bg-[#25D366] hover:bg-[#20BD5A] text-white'
                  }`}
                >
                  <MessageCircle size={18} />
                  Solicitar Diagnóstico
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider">Tire Suas Dúvidas</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Perguntas Frequentes sobre Micro-ondas
            </h2>
          </div>

          <div className="space-y-4">
            {microondasFaq.map((item, idx) => (
              <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors font-bold text-gray-900 text-base"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#FF6A00] transition-transform duration-200 ${
                      openIndex === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === idx && (
                  <div className="p-5 bg-white text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <Location />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloat message="Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20conserto%20para%20meu%20micro-ondas%2Fforno." />
    </div>
  );
};

export default Microondas;
