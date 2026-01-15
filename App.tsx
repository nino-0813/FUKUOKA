
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import MethodGrid from './components/MethodGrid';
import FukuokaExperience from './components/FukuokaExperience';
import ArchiveJournal from './components/ArchiveJournal';
import LineCtaSection from './components/LineCtaSection';
import SiteFooter from './components/SiteFooter';
import { COLORS } from './constants';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: COLORS.base, color: COLORS.text }}
    >
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="story" className="relative z-10">
          <BrandStory />
        </section>

        <section id="method" className="py-32 bg-white/30">
          <MethodGrid />
        </section>

        <section id="experience" className="py-32">
          <FukuokaExperience />
        </section>

        <section id="archives">
          <ArchiveJournal />
        </section>

        <section className="py-40">
          <LineCtaSection />
        </section>
      </main>

      <SiteFooter />

      {/* Floating LINE Button */}
      <a 
        href="https://lstep.app/JPUtt7Q"
        className="fixed bottom-8 right-8 z-[100] group flex items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-2xl hover:-translate-y-1 transition-all"
      >
        <div className="w-12 h-12 bg-[#06C755] rounded-full flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/LINE_logo.svg" className="w-6 h-6 invert" alt="LINE" />
        </div>
        <span className="text-sm font-bold tracking-tight">福岡店で美腕を手に入れる</span>
      </a>
    </div>
  );
};

export default App;
