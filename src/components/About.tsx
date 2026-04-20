import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-legal-dark overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-template-columns-[1.2fr_1fr] gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Sobre a Banca</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Uma trajetória de<br />
              <span className="text-gold italic">compromisso e vitória.</span>
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed font-light text-lg">
              <p>
                Fundado com o propósito de elevar o padrão da prestação jurisdicional, o escritório Barboza & Associados consolidou-se como referência em soluções complexas.
              </p>
              <p>
                Atuamos com discrição, agilidade técnica e uma visão humanizada de cada caso. Nossa equipe é composta por especialistas que dedicam-se à defesa intransigente dos interesses de nossos constituintes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="text-3xl font-serif text-gold block mb-1">20+</span>
                <span className="text-xs uppercase tracking-wider text-white/40">Anos de Experiência</span>
              </div>
              <div>
                <span className="text-3xl font-serif text-gold block mb-1">5k+</span>
                <span className="text-xs uppercase tracking-wider text-white/40">Casos Resolvidos</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm border border-gold/20 p-4">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070"
                alt="Escritório"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-luxury"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Design elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r border-b border-gold/30 hidden lg:block" />
            <div className="absolute -top-6 -left-6 px-4 py-2 bg-gold text-legal-black text-[10px] font-bold tracking-[0.2em] transform rotate-90 origin-bottom-left uppercase">
              Est. 2004
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
