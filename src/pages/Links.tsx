import { useEffect } from 'react';
import { MessageCircle, Flame, Droplet, MapPin, Instagram } from 'lucide-react';

const Links = () => {
  useEffect(() => {
    document.title = "VSERVICE | Links Oficiais";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Acesse nossos canais oficiais de atendimento. Agende instalação e manutenção de Cooktops, Fornos, Coifas, Lava e Seca e Lava-Louças em Campina Grande."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-between px-4 py-12 relative overflow-hidden font-outfit text-white">
      {/* Decorative gradient glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[140%] h-[50%] bg-[#FF6D00]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[40%] bg-[#FFA726]/5 rounded-full blur-3xl" />

      {/* Main Container */}
      <div className="w-full max-w-md flex flex-col items-center relative z-10 my-auto">
        {/* Header / Logo */}
        <div className="flex flex-col items-center gap-3 mb-10 text-center animate-fade-in-up">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-2 shadow-xl shadow-[#FF6D00]/5">
            <img
              src="/favicon.png"
              alt="VSERVICE"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-black tracking-wider uppercase">VSERVICE</h1>
          <p className="text-gray-400 text-sm max-w-xs">
            Instalação e Manutenção de Eletrodomésticos em Campina Grande & Região
          </p>
        </div>

        {/* Buttons List */}
        <div className="w-full space-y-4 animate-fade-in-up delay-200">
          {/* Link 1: WhatsApp */}
          <a
            href="https://wa.me/5583991908583?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20atendimento!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-green-500/20 active:scale-[0.98] group"
          >
            <div className="flex items-center gap-4">
              <span className="p-2.5 bg-white/20 rounded-xl">
                <MessageCircle size={20} />
              </span>
              <div className="text-left">
                <p className="text-sm font-medium opacity-90 uppercase tracking-wider">Fale Conosco</p>
                <p className="text-base font-extrabold">Chamar no WhatsApp</p>
              </div>
            </div>
            <span className="text-white/70 group-hover:translate-x-1 transition-transform">➔</span>
          </a>

          {/* Link 2: Gourmet Kitchen Page */}
          <a
            href="/"
            className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6D00]/30 active:scale-[0.98] group"
          >
            <div className="flex items-center gap-4">
              <span className="p-2.5 bg-[#FF6D00]/20 text-[#FF6D00] rounded-xl">
                <Flame size={20} />
              </span>
              <div className="text-left">
                <p className="text-sm font-medium opacity-75 uppercase tracking-wider">Linha Quente / Cocção</p>
                <p className="text-base font-extrabold text-gray-200 group-hover:text-white transition-colors">
                  Cooktops, Fornos e Coifas
                </p>
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">➔</span>
          </a>

          {/* Link 3: Laundry / Washers Page */}
          <a
            href="/lava-e-seca"
            className="flex items-center justify-between w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:border-[#FF6D00]/30 active:scale-[0.98] group"
          >
            <div className="flex items-center gap-4">
              <span className="p-2.5 bg-blue-500/20 text-blue-400 rounded-xl">
                <Droplet size={20} />
              </span>
              <div className="text-left">
                <p className="text-sm font-medium opacity-75 uppercase tracking-wider">Linha de Lavagem</p>
                <p className="text-base font-extrabold text-gray-200 group-hover:text-white transition-colors">
                  Lava e Seca e Lava-Louças
                </p>
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all">➔</span>
          </a>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center space-y-4 animate-fade-in-up delay-300">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <MapPin size={14} className="text-[#FF6D00]" />
            <span>Atendimento em Domicílio | Campina Grande - PB</span>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright branding */}
      <div className="mt-8 text-center relative z-10">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} VSERVICE. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};

export default Links;

