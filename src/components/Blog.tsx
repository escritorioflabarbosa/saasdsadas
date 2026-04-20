import { motion } from 'motion/react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'As Novas Tendências do Direito Bancário em 2024',
    category: 'Direito Bancário',
    date: '15 Abr, 2024',
    author: 'Dra. Luiza Mendes',
  },
  {
    title: 'Segurança Jurídica no Agronegócio: O que você precisa saber',
    category: 'Agronegócio',
    date: '10 Mar, 2024',
    author: 'Dr. Ricardo Antunes',
  },
  {
    title: 'Compliance e Gestão de Riscos Trabalhistas nas Empresas',
    category: 'Empresarial',
    date: '22 Fev, 2024',
    author: 'Dr. Flávio Barboza',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-legal-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs font-bold mb-4 block">Informativo Jurídico</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Artigos e <span className="text-gold italic">Insights.</span></h2>
        </div>

        <div className="space-y-0 border-t border-white/10">
          {posts.map((post, idx) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 hover:bg-gold/5 transition-luxury px-4 lg:px-8"
            >
              <div className="max-w-2xl">
                <span className="text-gold text-xs uppercase tracking-widest font-bold mb-3 block">{post.category}</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4 group-hover:text-gold transition-colors italic">{post.title}</h3>
                <div className="flex items-center space-x-6 text-white/40 text-[10px] uppercase tracking-widest font-bold">
                  <span className="flex items-center space-x-2"><Calendar size={14} className="text-gold" /> <span>{post.date}</span></span>
                  <span className="flex items-center space-x-2"><User size={14} className="text-gold" /> <span>{post.author}</span></span>
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gold group-hover:translate-x-2 transition-luxury font-bold uppercase tracking-widest text-xs">
                <span>Ler Artigo</span>
                <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-gold text-gold hover:bg-gold hover:text-legal-black font-bold uppercase tracking-widest transition-luxury">
            Ver Todos os Artigos
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
