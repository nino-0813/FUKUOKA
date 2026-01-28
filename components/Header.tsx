
import React, { useState } from 'react';
import { NAVIGATION_LINKS, COLORS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-white py-4'}`}>
      <div className="max-w-[1200px] mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <div className="flex flex-col items-start">
            <span className="text-sm tracking-widest text-gray-500 mb-1">二の腕痩せ専門サロン</span>
            <span className="text-xl sm:text-2xl font-bold tracking-tight" style={{ color: COLORS.main }}>
              二の腕デザイン®︎ <span className="text-lg">福岡店</span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium hover:text-red-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#Contact" 
            className="bg-[#eca6a0] text-white px-6 py-2 rounded-full text-sm font-bold shadow-md hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t">
          <div className="flex flex-col p-6 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium border-b border-gray-100 pb-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#Contact" 
              className="bg-[#eca6a0] text-white text-center py-3 rounded-lg font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              お問い合わせ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
