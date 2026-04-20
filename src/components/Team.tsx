import React from 'react';
import { motion } from 'motion/react';

const presidency = {
  name: 'Dr. Flafson Barbosa',
  role: 'Presidência | Sócio Fundador',
  image: '/equipe/flafson.jpg',
};

const board = {
  name: 'Carolina Ribeiro',
  role: 'Diretoria Executiva',
  image: '/equipe/caroline.jpg',
};

const lawyers = [
  {
    name: 'Dra. Vitória Belo',
    role: 'Advogada Associada',
    image: '/equipe/vitoria.jpg',
  },
  {
    name: 'Dr. Egon',
    role: 'Advogado Associado',
    image: '',
  },
  {
    name: 'Dra. Rafaelle',
    role: 'Advogada Associada',
    image: '/equipe/rafaelle.jpg',
  },
];

const assistants = [
  { name: 'Sérgio dos Santos', role: 'Auxiliar Jurídico', image: 'https://s11.aconvert.com/convert/p3r68-cdx67/fgrq4-d7pvc.webp' },
  { name: 'João Victor de Moura', role: 'Auxiliar Jurídico', image: '/equipe/joaovictor.jpg' },
  { name: 'Claudia Silva', role: 'Auxiliar Jurídico', image: '/equipe/claudia.jpg' },
  { name: 'Matheus Palagar', role: 'Auxiliar Jurídico', image: '/equipe/matheus.jpg' },
  { name: 'Stefany Avelar', role: 'Auxiliar Jurídico', image: '/equipe/stefany.jpg' },
];

interface MemberCardProps {
  member: any;
  size?: 'large' | 'normal' | 'small';
}

const MemberCard: React.FC<MemberCardProps> = ({ member, size = 'normal' }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`group card-glass p-4 transition-luxury h-full flex flex-col`}
  >
    <div className={`${size === 'large' ? 'aspect-[4/5]' : 'aspect-[3/4]'} overflow-hidden mb-6 relative grayscale hover:grayscale-0 transition-luxury`}>
      <img
        src={member.image || `https://picsum.photos/seed/${member.name}/600/800`}
        alt={member.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-luxury"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="px-2 pb-2">
      <h3 className={`${size === 'large' ? 'text-2xl' : 'text-lg'} font-serif font-bold mb-1 group-hover:text-gold transition-colors group-hover:drop-shadow-[0_0_8px_rgba(197,160,89,0.3)]`}>{member.name}</h3>
      <p className="text-[10px] tracking-widest uppercase text-white/40 font-bold">{member.role}</p>
    </div>
  </motion.div>
);

const Team = () => {
  return (
    <section id="equipe" className="py-24 bg-legal-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Corpo Jurídico</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Nossos <span className="text-gold italic">Especialistas.</span></h2>
            <div className="w-20 h-1 bg-gold mx-auto" />
          </motion.div>
        </div>

        {/* Level 1: Presidency */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-sm">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-6 text-center">Presidência</h4>
            <MemberCard member={presidency} size="large" />
          </div>
        </div>

        {/* Level 2: Board */}
        <div className="flex justify-center mb-20">
          <div className="w-full max-w-sm">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-6 text-center">Diretoria</h4>
            <MemberCard member={board} size="large" />
          </div>
        </div>

        {/* Level 3: Lawyers */}
        <div className="mb-20">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-8 text-center">Advogados</h4>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {lawyers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </div>

        {/* Level 3: Assistants */}
        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-8 text-center">Auxiliares Jurídicos</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {assistants.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group card-glass p-3 transition-luxury border-gold/10 hover:border-gold/40 h-full"
              >
                <div className="aspect-square overflow-hidden mb-4 grayscale hover:grayscale-0 transition-luxury opacity-60 group-hover:opacity-100">
                  <img
                    src={member.image || `https://picsum.photos/seed/${member.name}/400/400`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center">
                  <h5 className="text-sm font-serif font-bold group-hover:text-gold transition-colors">{member.name}</h5>
                  <p className="text-[8px] uppercase tracking-wider text-white/30">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
