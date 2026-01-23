
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
    <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ aspectRatio: '16/9' }}>
      {/* Background Visual */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/images/brand-partnership.jpg" 
          className="absolute inset-0 w-full h-full object-contain object-center"
          alt="Brand Partnership"
        />
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
