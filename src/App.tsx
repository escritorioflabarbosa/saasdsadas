/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Blog from './components/Blog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-legal-black">
      <Header />
      <main>
        <Hero />
        <About />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Services />
        <Team />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
