import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import BrandStrip from '../components/BrandStrip';
import TrustBadges from '../components/TrustBadges';
import Location from '../components/Location';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import { MessageCircle, CheckCircle, ChevronDown, Clock, ShieldCheck } from 'lucide-react';

const dishwasherBrands = [
  { name: 'Brastemp', color: '#E30613' },
  { name: 'Electrolux', color: '#041E42' },
  { name: 'Samsung', color: '#1428A0' },
  { name: 'LG', color: '#A50034' },
  { name: 'Midea', color: '#00A0E3' },
  { name: 'Philco', color: '#2B2B2B' },
];

const dishwasherServices = [
  {
    emoji: '🍽️',
    title: 'Conserto de Lava-Louças',
    description: 'Diagnóstico e reparo rápido para lava-louças de embutir ou piso. Solução de vazamentos, falha de aquecimento de água e erros de bomba.',
    features: ['Troca de bomba de circulação e drenagem', 'Substituição de resistências de aquecimento', 'Reparo de placas e sensores de nível', 'Troca de gaxetas e vedações de porta'],
    highlight: true,
  },
  {
    emoji: '🔌',
    title: 'Instalação Técnica de Lava-Louças',
    description: 'Instalação profissional garantida para modelos de embutir em nichos de marcenaria ou modelos de piso, com conexões hidráulicas e elétricas seguras.',
    features: ['Conexão hidráulica e ponto de esgoto', 'Ajuste de nivelação e fixação no nicho', 'Testes de estanqueidade e vazamentos', 'Orientações de primeiro uso e cuidados'],
    highlight: false,
  },
  {
    emoji: '🧼',
    title: 'Higienização e Desobstrução',
    description: 'Limpeza técnica interna para remoção de gordura impregnada, fiapos e calcificação, eliminando mau cheiro e restaurando a eficiência de lavagem.',
    features: ['Desobstrução dos hélices e braços borrifadores', 'Limpeza química de filtros e bomba', 'Eliminação de mau cheiro e resíduos', 'Check-up completo de ciclos'],
    highlight: false,
  },
];

const dishwasherFaq = [
  {
    question: 'Vocês fazem tanto a instalação quanto o conserto de Lava-Louças?',
    answer: 'Sim! Realizamos a instalação técnica completa (pontos de água, esgoto e nichos de marcenaria) e também o conserto corretivo com peças originais e garantia.',
  },
  {
    question: 'O que fazer se a lava-louças estiver com água parada no fundo?',
    answer: 'Isso indica obstrução no filtro, bomba de drenagem travada ou mangueira de esgoto dobrada. Nossos técnicos resolvem esse problema no mesmo dia em seu endereço.',
  },
  {
    question: 'Por que a lava-louças não está esquentando a água?',
    answer: 'Geralmente é causado por falha na resistência de aquecimento ou no termostato de temperatura. Substituímos a peça por um componente original com 90 dias de garantia.',
  },
  {
    question: 'Quanto tempo dura o atendimento?',
    answer: 'A visita técnica e o diagnóstico são realizados no próprio local. A maioria dos reparos de instalações ou trocas de bombas é concluída no mesmo dia.',
  },
];

const LavaLoucas = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Instalação e Conserto de Lava-Louças em Campina Grande | VService";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Assistência técnica e instalação de Lava-Louças em Campina Grande. Brastemp, Electrolux, Samsung, LG e Midea. Atendimento rápido com garantia de 90 dias e peças originais."
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
            <source media="(max-width: 640px)" srcSet="/hero-lava-loucas-sm.webp" />
            <source media="(max-width: 960px)" srcSet="/hero-lava-loucas-md.webp" />
            <img
              src="/hero-lava-loucas.webp"
              alt="Instalação e Conserto de Lava-Louças"
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
              Sua Lava-Louças Parou ou Precisa de Instalação?{" "}
              <span className="text-[#FF6A00] font-extrabold">A Gente Resolve Hoje.</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl leading-relaxed">
              Instalação técnica e conserto especializado de lava-louças de embutir ou piso. Atendimento rápido no seu endereço em Campina Grande com garantia e peças originais.
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
                href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20atendimento%20para%20minha%20Lava-Lou%C3%A7as."
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
      <BrandStrip title="Marcas Atendidas em Lava-Louças" brands={dishwasherBrands} />

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6A00] font-bold text-sm uppercase tracking-wider bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
              Especialidade Técnica
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4 mb-4">
              Instalação e Conserto de Lava-Louças em Campina Grande
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos serviços completos de instalação técnica e manutenção preventiva/corretiva para a sua cozinha.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {dishwasherServices.map((service, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 transition-all duration-300 ${
                  service.highlight
                    ? 'bg-white shadow-xl border-2 border-[#FF6A00] relative scale-105'
                    : 'bg-white shadow-md hover:shadow-lg border border-gray-100'
                }`}
              >
                {service.highlight && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF6A00] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Mais Solicitado
                  </span>
                )}
                <div className="text-4xl mb-4">{service.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2.5 border-t border-gray-100 pt-6">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#25D366] shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-[#121212] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Precisa instalar ou consertar sua Lava-Louças?
              </h3>
              <p className="text-gray-300 text-base mb-8">
                Fale agora com a nossa equipe no WhatsApp. Atendimento rápido e orçamento sem compromisso.
              </p>
              <a
                href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20preciso%20de%20atendimento%20para%20minha%20Lava-Lou%C3%A7as."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-extrabold text-lg uppercase tracking-wide px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
              >
                <MessageCircle size={22} />
                Chamar no WhatsApp Agora
              </a>
            </div>
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
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4">
              Perguntas Frequentes sobre Lava-Louças
            </h2>
          </div>

          <div className="space-y-4">
            {dishwasherFaq.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-gray-900 hover:text-[#FF6A00] transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180 text-[#FF6A00]' : 'text-gray-400'
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </div>
                )}
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

export default LavaLoucas;
