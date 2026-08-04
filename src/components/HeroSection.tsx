import { MessageCircle, CheckCircle, Clock, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-[#121212] text-white overflow-hidden pt-24 pb-12 lg:pt-20 lg:pb-0">
      {/* Background image - full-bleed seamless integration */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 640px)" srcSet="/vservice_hero-sm.webp" />
          <img
            src="/vservice_hero.webp"
            alt="Cozinha moderna com cooktop e forno"
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
          background: `linear-gradient(to right, #0F0F0F 0%, rgba(15,15,15,0.95) 45%, rgba(15,15,15,0.75) 70%, rgba(15,15,15,0.35) 100%)`
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

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Seu Cooktop ou Forno Parou?{" "}
            <span className="text-[#FF6A00] font-extrabold">A Gente Resolve Hoje.</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl leading-relaxed">
            Assistência técnica especializada em cooktops, fornos e coifas em Campina Grande. Atendimento rápido no seu endereço com garantia real e peças originais.
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
              href="https://wa.me/5583991908583?text=Ol%C3%A1!%20Vim%20pelo%20site%2C%20gostaria%20de%20um%20atendimento."
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
          <p className="mt-4 flex items-center gap-2 text-sm text-gray-400">
            <CheckCircle size={16} className="text-[#25D366]" /> Resposta em minutos. Sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

