
import React from 'react';
import { THEME } from '../constants';

const SERVICES = [
  { title: 'The Esthetic', label: '究極の造形美', img: 'https://ninoude-design.jp/wp-content/uploads/2023/12/エステ.png' },
  { title: 'The Academy', label: 'プロを目指す', img: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー2.png' },
  { title: 'The Store', label: 'ホームケアの極意', img: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー4.png' },
];

const ServiceOverview: React.FC = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="text-center mb-20">
        <h2 className="text-sm tracking-[0.5em] text-[#d4af37] uppercase mb-4">Services</h2>
        <h3 className="text-4xl font-bold serif-title">美しさの多面体。</h3>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-12">
        {SERVICES.map((s, i) => (
          <div key={i} className="group overflow-hidden">
            <div className="aspect-[4/5] overflow-hidden mb-6 relative">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all"></div>
            </div>
            <h4 className="text-2xl font-bold serif-title mb-2 tracking-tight">{s.title}</h4>
            <p className="text-xs text-[#d4af37] font-bold tracking-[0.2em]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceOverview;
