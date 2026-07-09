import { MessageCircle, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const badges = ['Brastemp', 'Electrolux', 'Fischer', 'Consul', 'Franke', 'Tramontina', 'Lofra', 'Smeg'];

  return (
    <section className="relative min-h-screen flex items-center bg-[#121212] overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#1C1C1C] to-[#121212]" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF6D00]/5 to-transparent" />

      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6D00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFA726]/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up">
            {/* Specialist tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <CheckCircle size={14} className="text-[#25D366]" />
              <span className="text-xs font-medium text-gray-300">Assistência Técnica e Instalação em Campina Grande</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Conserto de <span className="gradient-text">Cooktops, Fornos</span> e Coifas
            </h1>

            <p className="text-gray-400 text-lg sm:text-xl mb-8 max-w-lg leading-relaxed">
              Manutenção especializada para a sua cozinha gourmet. Atendimento rápido no seu endereço em Campina Grande com garantia e peças originais.
            </p>

            {/* Brand badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {badges.map((brand) => (
                <span
                  key={brand}
                  className="bg-white/10 border border-white/15 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-lg hover:bg-white/15 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5583988889168?text=Ol%C3%A1%2C%20preciso%20de%20assist%C3%AAncia%20t%C3%A9cnica%20para%20minha%20cozinha!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 shadow-xl shadow-green-500/25"
              >
                <MessageCircle size={22} />
                Solicitar Atendimento
              </a>
              <a
                href="tel:+5583988889168"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-2xl transition-all"
              >
                📞 (83) 98888-9168
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="animate-slide-in-right delay-300 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#FF6D00]/20 to-[#FFA726]/20 rounded-3xl blur-2xl" />
              <img
                src="/vservice_hero.png"
                alt="V Service Assistência Técnica - Campina Grande"
                className="relative rounded-3xl shadow-2xl w-full object-cover"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
