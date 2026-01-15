
import React from 'react';
import { COLORS, BRAND } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/Generated Image January 15, 2026 - 10_58AM.jpeg" 
          className="w-full h-full object-cover object-center brightness-95"
          style={{ objectPosition: 'center 30%' }}
          alt="Main Concept"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 pt-16 md:pt-24">
        <h1 className="serif-title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-10 tracking-wider animate-fade-in-up delay-200 opacity-0 drop-shadow-lg">
          美しさは、<br />
          削り出せる。
        </h1>
        <div className="flex flex-col items-center animate-fade-in-up delay-500 opacity-0">
          <div className="w-px h-24 bg-gradient-to-b from-white via-white/50 to-transparent mb-8"></div>
          <p className="text-sm md:text-base tracking-[0.2em] font-light leading-loose font-english opacity-90">
            隠すための服選びを、今日で卒業する。<br />
            福岡天神で出逢う、新しいあなたの輪郭。
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
