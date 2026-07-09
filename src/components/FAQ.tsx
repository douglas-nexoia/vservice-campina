import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'Qual o valor da visita técnica?',
    answer: 'O valor da visita técnica é informado no momento do agendamento. Caso aprove o serviço, o valor da visita é abatido do orçamento total do reparo.',
  },
  {
    question: 'Vocês trabalham com peças originais?',
    answer: 'Sim! Trabalhamos exclusivamente com peças originais ou de procedência garantida dos fabricantes, assegurando a qualidade e durabilidade do reparo.',
  },
  {
    question: 'Quanto tempo leva o conserto?',
    answer: 'A maioria dos reparos é concluída em 24 a 72 horas após a aprovação do orçamento. Casos que necessitam de peças específicas podem levar um pouco mais.',
  },
  {
    question: 'Qual a garantia do serviço?',
    answer: 'Oferecemos garantia de 90 dias para todos os nossos serviços e peças instaladas. A garantia cobre tanto a mão de obra quanto as peças substituídas.',
  },
  {
    question: 'Quais marcas vocês atendem?',
    answer: 'Atendemos marcas nacionais e importadas de linha gourmet e convencional, incluindo Brastemp, Electrolux, Fischer, Consul, Tramontina, Franke, Lofra e Smeg.',
  },
  {
    question: 'Atendem em quais cidades?',
    answer: 'Atendemos em toda a cidade de Campina Grande (incluindo bairros e condomínios fechados) e regiões próximas. Para instalações completas de coifas e projetos de cocção especiais, atendemos também João Pessoa e região metropolitana mediante agendamento.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#121212] mb-4">
            Dúvidas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Respostas rápidas para as perguntas mais comuns dos nossos clientes.
          </p>
        </div>

        <div className="space-y-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-[#0A1628] text-sm sm:text-base pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
