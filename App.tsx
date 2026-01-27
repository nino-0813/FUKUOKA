import React, { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
  const storyRef = useRef<HTMLElement>(null);
  const methodRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const archivesRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const refs = [storyRef, methodRef, experienceRef, archivesRef, ctaRef, footerRef];

    refs.forEach((ref) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div 
      className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: COLORS.base, color: COLORS.text }}
    >
      <Navbar />
      
      <main>
        <Hero />
        
        <section 
          ref={storyRef}
          id="story" 
          className="relative z-10 bg-pink-50/50 scroll-fade-up"
        >
          <BrandStory />
        </section>

        <section 
          ref={methodRef}
          id="method" 
          className="pt-0 pb-8 md:pb-32 bg-white/30 scroll-fade-up delay-100"
        >
          <MethodGrid />
        </section>

        <section 
          ref={experienceRef}
          id="experience" 
          className="pt-8 md:pt-32 pb-32 bg-pink-50/50 scroll-fade-up delay-200"
        >
          <FukuokaExperience />
        </section>

        <section 
          ref={archivesRef}
          id="archives" 
          className="bg-white scroll-fade-up delay-300"
        >
          <ArchiveJournal />
        </section>

        <section 
          ref={ctaRef}
          className="py-40 scroll-fade-up delay-500"
        >
          <LineCtaSection />
        </section>
      </main>

      <SiteFooter ref={footerRef} />

      {/* Floating LINE Button */}
      <a 
        href="https://lin.ee/Js14Alx"
        className="hidden md:flex fixed bottom-8 right-8 z-[100] group items-center gap-4 bg-white p-2 pr-6 rounded-full shadow-2xl hover:-translate-y-1 transition-all"
      >
        <div className="w-12 h-12 bg-[#06C755] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="white">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h2.754c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.028 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
        </div>
        <span className="text-sm font-bold tracking-tight">福岡店で美腕を手に入れる</span>
      </a>
      <Analytics />
    </div>
  );
};

export default App;
