import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

const Location = () => {
  const hours = [
    { day: 'Segunda', time: '08:30 – 12:00 / 13:30 – 18:30' },
    { day: 'Terça a Sexta', time: '08:30 – 12:00 / 13:30 – 18:00' },
    { day: 'Sábado', time: '08:00 – 12:30' },
    { day: 'Domingo', time: 'Fechado' },
  ];

  return (
    <section id="sobre" className="relative py-20 bg-[#121212] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Onde <span className="gradient-text">Estamos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Atendimento local estruturado para sua total comodidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Address & Hours */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6D00]/20 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={24} className="text-[#FF6D00]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Área de Atendimento</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Atendimento em Domicílio<br />
                    Campina Grande – Paraíba, PB
                  </p>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#25D366]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={24} className="text-[#25D366]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1">Telefone</h3>
                  <p className="text-gray-300">
                    <a href="tel:+5583991908583" className="hover:text-white transition-colors">(83) 99190-8583</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FFA726]/20 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={24} className="text-[#FFA726]" />
                </div>
                <div className="w-full">
                  <h3 className="text-white font-bold text-lg mb-3">Horário de Funcionamento</h3>
                  <div className="space-y-2">
                    {hours.map((item) => (
                      <div key={item.day} className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">{item.day}</span>
                        <span className={`font-medium ${item.time === 'Fechado' ? 'text-[#FF6D00]' : 'text-gray-200'}`}>
                          {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map / CTA */}
          <div className="glass rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[400px]">
            <div className="w-20 h-20 bg-[#FF6D00]/20 rounded-full flex items-center justify-center mb-6 animate-float">
              <Navigation size={36} className="text-[#FF6D00]" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">Atendimento Rápido!</h3>
            <p className="text-gray-400 mb-6 max-w-sm">
              Nossos técnicos realizam o atendimento direto no seu endereço em Campina Grande, atendendo residências e condomínios com agilidade.
            </p>
            <a
              href="https://www.google.com/maps/search/Campina+Grande+PB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF6D00] hover:bg-[#E65100] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/20"
            >
              <MapPin size={18} />
              Ver Mapa da Região
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

