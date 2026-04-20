import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-legal-black">
      {/* Background overlay simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-legal-black/40 via-legal-black/70 to-legal-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070"
          alt="Legal Authority"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-3 py-1 border border-gold text-gold text-[10px] tracking-[0.4em] uppercase mb-8">
            Estratégia e Autoridade
          </div>
          <h1 className="hero-title font-serif mb-8 text-white">
            Soluções <span className="italic font-light">Jurídicas</span><br />
            de Alto Padrão.
          </h1>
          <p className="max-w-xl mx-auto text-lg text-white/60 mb-12 font-light leading-relaxed underline decoration-gold/30 underline-offset-8 decoration-1">
            Protegendo seu patrimônio e liberdade com a precisão técnica que o cenário jurídico moderno exige.
          </p>

          <div className="flex justify-center items-center gap-10 mb-12">
            <div className="flex flex-col items-center">
              <span className="text-gold text-3xl font-bold font-serif tracking-tight">15+</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Anos de Experiência</span>
            </div>
            <div className="w-[1px] h-10 bg-white/10 hidden sm:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-gold text-3xl font-bold font-serif tracking-tight">2.4k</span>
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Casos Encerrados</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="px-10 py-4 bg-gold hover:bg-gold-hover text-legal-black font-bold uppercase tracking-[0.2em] transition-luxury rounded-sm text-xs">
              Agendar Consultoria
            </button>
            <button className="px-10 py-4 border border-white/20 hover:border-gold hover:text-gold text-white font-bold uppercase tracking-[0.2em] transition-luxury rounded-sm text-xs">
              Conhecer Áreas
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/30 z-20"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
