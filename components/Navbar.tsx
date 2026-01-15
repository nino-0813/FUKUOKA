
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS, COLORS, BRAND } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-start lg:justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[7px] md:text-[10px] tracking-[0.4em] font-black uppercase opacity-50 md:opacity-60" style={{ color: scrolled ? COLORS.text : 'white' }}>
            Premium Atelier
          </span>
          <h1 className="text-[10px] md:text-lg font-black tracking-tighter leading-tight" style={{ color: scrolled ? COLORS.primary : 'white' }}>
            二の腕痩せ専門ジプソフィル®︎<span className="font-light opacity-50 ml-1">FUKUOKA</span>
          </h1>
        </div>

        <div className="hidden lg:flex items-center gap-12">
          {NAV_ITEMS.map(item => (
            <a 
              key={item.id} 
              href={`#${item.id}`} 
              className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-100 transition-opacity ${scrolled ? 'text-[#2a2422] opacity-60' : 'text-white opacity-80'}`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="https://lin.ee/Js14Alx"
            className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-black transition-all ${scrolled ? 'bg-[#2d1b1a] text-white hover:bg-[#8c6a60]' : 'bg-white text-[#2d1b1a] hover:bg-white/80'}`}
          >
            Booking
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
