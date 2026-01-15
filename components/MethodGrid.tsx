
import React from 'react';
import { COLORS, SectionTag } from '../constants';

const METHODS = [
  {
    num: '01',
    title: 'Sculpting',
    desc: '独自の圧とリズムで、癒着した筋膜を解き放ち、本来の細さを復元します。',
    img: 'https://ninoude-design.jp/wp-content/uploads/2023/12/エステ.png'
  },
  {
    num: '02',
    title: 'Education',
    desc: 'なぜ太くなったのか？その根本原因を知り、リバウンドのない身体へと導きます。',
    img: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー2.png'
  },
  {
    num: '03',
    title: 'Self-Care',
    desc: 'サロンの感動を日常に。自宅で「自分で自分をデザインする」術をお伝えします。',
    img: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー4.png'
  }
];

const MethodGrid: React.FC = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="mb-20 text-center md:text-left">
        <SectionTag text="The Method" />
        <h3 className="text-3xl md:text-5xl font-serif font-bold">最短で、最大の変化を。</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        {METHODS.map((m, i) => (
          <div key={i} className="group cursor-default">
            <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-gray-100">
              <img 
                src={m.img} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                alt={m.title} 
              />
              <span className="absolute top-6 left-6 text-5xl font-serif font-black text-white/40">{m.num}</span>
            </div>
            <h4 className="text-2xl font-serif font-bold mb-4 tracking-tight">{m.title}</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodGrid;
