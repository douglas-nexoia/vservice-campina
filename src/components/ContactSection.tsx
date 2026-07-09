import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Clock, Instagram } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message from form
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const msg = `Olá! Preciso de um orçamento.\n\nNome: ${data.get("name")}\nTelefone: ${data.get("phone")}\nCidade/Bairro: ${data.get("location")}\nAparelho: ${data.get("appliance")}\nProblema: ${data.get("problem")}`;
    window.open(`https://wa.me/5516992301363?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Fale Conosco</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-card p-8 border border-border shadow-[var(--shadow-card)] space-y-5"
          >
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-xl font-semibold text-foreground mb-2">Mensagem enviada! ✅</p>
                <p className="text-muted-foreground">Estamos te redirecionando para o WhatsApp.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Nome</label>
                  <input name="name" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telefone</label>
                  <input name="phone" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="(XX) XXXXX-XXXX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Bairro / Cidade</label>
                  <input name="location" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Ex: Centro, Franca" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Qual eletrodoméstico?</label>
                  <input name="appliance" required className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Ex: Geladeira Brastemp" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Descrição do problema</label>
                  <textarea name="problem" rows={3} className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Descreva o que está acontecendo..." />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:brightness-110 transition-all shadow-[var(--shadow-cta)]"
                >
                  Enviar pelo WhatsApp
                </button>
              </>
            )}
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 justify-center"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-whatsapp/15 flex items-center justify-center">
                <Phone size={22} className="text-whatsapp" />
              </div>
              <div>
                <p className="font-semibold text-foreground">WhatsApp / Telefone</p>
                <p className="text-muted-foreground">(16) 99230-1363</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-secondary/15 flex items-center justify-center">
                <Instagram size={22} className="text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Instagram</p>
                <p className="text-muted-foreground">@lavgelservice</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                <Clock size={22} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Horário de Atendimento</p>
                <p className="text-muted-foreground">Seg a Sex: 8h às 18h</p>
                <p className="text-muted-foreground">Sáb: 8h às 12h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
