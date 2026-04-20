import { motion } from 'motion/react';
import { Gavel, Landmark, Tent, ShieldCheck, Heart, Briefcase, Scale } from 'lucide-react';

const services = [
  {
    title: 'Direito Criminal',
    description: 'Defesa estratégica em inquéritos policiais e processos em todas as instâncias judiciais.',
    icon: Gavel,
  },
  {
    title: 'Direito Bancário',
    description: 'Recuperação de ativos, revisão de contratos e defesa em execuções bancárias complexas.',
    icon: Landmark,
  },
  {
    title: 'Direito Agrário',
    description: 'Assessoria jurídica para o agronegócio, questões fundiárias e contratos rurais.',
    icon: Tent,
  },
  {
    title: 'Direito Militar',
    description: 'Defesa administrativa e judicial de militares em conselhos e promoções.',
    icon: ShieldCheck,
  },
  {
    title: 'Direito de Família',
    description: 'Planejamento sucessório, inventários, divórcios e mediação de conflitos familiares.',
    icon: Heart,
  },
  {
    title: 'Direito Trabalhista',
    description: 'Consultoria preventiva e contencioso para empresas e cargos de alta gestão.',
    icon: Briefcase,
  },
  {
    title: 'Previdenciário',
    description: 'Planejamento de aposentadoria e concessão de benefícios judiciais e administrativos.',
    icon: Scale,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-legal-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Especialidades</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Expertise em todas as<br /> <span className="text-gold italic">esferas do Direito.</span></h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="card-glass p-8 hover:border-gold/50 transition-luxury relative group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="text-gold group-hover:scale-110 transition-luxury">
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <span className="area-tag">Especialidade</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{service.title}</h3>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-12 h-[1px] bg-gold/30 group-hover:w-full transition-luxury" />
              <a href="#contato" className="mt-4 block text-[10px] uppercase font-bold tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-luxury">
                Consultar Especialista +
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
