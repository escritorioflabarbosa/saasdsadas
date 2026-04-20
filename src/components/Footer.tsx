import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contato" className="pt-24 pb-12 bg-legal-dark border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="flex flex-col">
            <div className="flex flex-col mb-8 h-12 w-auto">
              <img 
                src="https://storage.googleapis.com/static-files-prod/flafson-barbosa-advocacia-logo.png" 
                alt="Flafson Barbosa Advocacia" 
                className="h-full w-auto object-contain object-left mb-2 opacity-90"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/40 font-light text-sm leading-relaxed mb-8">
              Escritório jurídico boutique focado em soluções estratégicas de alto impacto. Excelência, ética e compromisso com o resultado.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 border border-white/10 hover:border-gold hover:text-gold transition-luxury rounded-sm">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-3 border border-white/10 hover:border-gold hover:text-gold transition-luxury rounded-sm">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 uppercase tracking-widest text-xs">Áreas de Atuação</h4>
            <ul className="space-y-4 text-white/40 text-sm font-light">
              <li><a href="#" className="hover:text-gold transition-colors italic">Direito Criminal</a></li>
              <li><a href="#" className="hover:text-gold transition-colors italic">Direito Bancário</a></li>
              <li><a href="#" className="hover:text-gold transition-colors italic">Direito Agrário</a></li>
              <li><a href="#" className="hover:text-gold transition-colors italic">Direito Militar</a></li>
              <li><a href="#" className="hover:text-gold transition-colors italic">Previdenciário</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 uppercase tracking-widest text-xs">Menu Rápido</h4>
            <ul className="space-y-4 text-white/40 text-sm font-light uppercase tracking-widest text-[10px]">
              <li><a href="#home" className="hover:text-gold transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a></li>
              <li><a href="#equipe" className="hover:text-gold transition-colors">Equipe</a></li>
              <li><a href="#blog" className="hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-8 uppercase tracking-widest text-xs">Contato</h4>
            <ul className="space-y-6 text-white/40 text-sm font-light">
              <li className="flex items-start space-x-4 italic">
                <MapPin className="text-gold shrink-0" size={20} />
                <span>Av. Paulista, 1000 - Bela Vista, São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center space-x-4 italic">
                <Phone className="text-gold shrink-0" size={20} />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-center space-x-4 italic">
                <Mail className="text-gold shrink-0" size={20} />
                <span>contato@flafsonbarbosa.adv.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-white/20">
          <p>© 2024 Flafson Barbosa Advocacia. Todos os direitos reservados.</p>
          <p>OAB/SP 123.456 - CNPJ 00.000.000/0000-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
