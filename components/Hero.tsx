
import React, { useState, useEffect } from 'react';
import { COLORS, BRAND } from '../constants';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/Generated Image January 15, 2026 - 10_58AM.jpeg" 
          className="w-full h-full object-cover object-center brightness-95"
          style={{ 
            objectPosition: isMobile ? 'center 45%' : 'center top',
            transform: isMobile ? 'scale(1.4)' : 'scale(1.1)'
          }}
          alt="Main Concept"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 pt-20 md:pt-16">
        <h1 className="serif-title text-3xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-2 md:mb-10 tracking-[0.15em] animate-fade-in-up delay-200 opacity-0 relative text-white" style={{ 
          textShadow: '0 0 20px rgba(255,255,255,0.3), 0 4px 30px rgba(0,0,0,0.5), 0 8px 60px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.6)',
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.4))',
          letterSpacing: '0.15em'
        }}>
          <span className="relative inline-block">
            美しさは、<br />
            削り出せる。
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></span>
          </span>
        </h1>
        <div className="flex flex-col items-center animate-fade-in-up delay-500 opacity-0">
          <div className="w-px h-6 md:h-24 bg-gradient-to-b from-white via-white/50 to-transparent mb-2 md:mb-8"></div>
          <p className="text-xs md:text-base tracking-[0.2em] font-light leading-loose font-english opacity-90">
            隠すための服選びを、今日で卒業する。<br />
            ジプソフィルで出逢う、新しいあなたの輪郭。
          </p>
        </div>
      </div>

      {/* Vertical Brand Title */}
      <div className="absolute right-8 lg:right-12 top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in-up delay-500 opacity-0">
        <p className="vertical-rl text-xs tracking-[0.8em] uppercase font-bold opacity-40 text-white font-english">
          {BRAND.name} {BRAND.branch}
        </p>
      </div>
    </section>
  );
};

export default Hero;
