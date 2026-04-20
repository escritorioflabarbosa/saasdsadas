import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Atuação', href: '#servicos' },
    { name: 'Equipe', href: '#equipe' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-luxury ${
        isScrolled ? 'header-blur py-4 border-b border-gold/20' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <a href="#home" className="flex items-center group">
            {/* Logo Image */}
            <div className="relative h-12 md:h-16 w-auto">
              <img 
                src="https://storage.googleapis.com/static-files-prod/flafson-barbosa-advocacia-logo.png" 
                alt="Flafson Barbosa Advocacia" 
                className="h-full w-auto object-contain transition-luxury group-hover:drop-shadow-[0_0_15px_rgba(197,160,89,0.5)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="nav-link hover:text-gold"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
          
          <div className="flex items-center gap-6">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gold transition-colors"
            >
              <Instagram size={18} />
            </motion.a>
            <button className="text-[11px] font-bold tracking-widest uppercase border border-gold px-6 py-2 cursor-pointer hover:bg-gold hover:text-legal-black transition-luxury">
              Consulta
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-legal-black border-b border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gold/10">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gold"
                >
                  <Instagram size={20} />
                  <span className="text-sm">Siga-nos no Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
