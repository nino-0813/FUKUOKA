
import React from 'react';
import { THEME } from '../constants';

const SiteFooter: React.FC = () => {
  return (
    <footer className="py-16 border-t border-gray-100">
      <div className="container mx-auto px-8 flex flex-col items-center">
        <h2 className="text-2xl font-black mb-8 tracking-tighter" style={{ color: THEME.primary }}>
          PREMIUM ARM DESIGN
        </h2>
        <div className="flex gap-8 mb-12 text-xs uppercase tracking-widest font-bold opacity-60">
          <a href="#" className="hover:opacity-100">About</a>
          <a href="#" className="hover:opacity-100">Privacy</a>
          <a href="#" className="hover:opacity-100">Terms</a>
        </div>
        <p className="text-[10px] opacity-40 uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Premium Arm Design Fukuoka. All rights preserved.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;
