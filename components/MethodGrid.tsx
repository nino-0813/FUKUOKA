
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, SectionTag } from '../constants';

const METHODS = [
  {
    num: '01',
    title: 'Sculpting',
    desc: '鏡に映る自分が、日々変わっていく。その変化を、あなた自身が実感できる瞬間を。',
    img: '/images/スクリーンショット 2026-01-15 22.52.29.png'
  },
  {
    num: '02',
    title: 'Education',
    desc: 'なぜ太くなったのか？その根本原因を知り、リバウンドのない身体へと導きます。',
    img: '/images/スクリーンショット 2026-01-15 22.52.44.png'
  },
  {
    num: '03',
    title: 'Self-Care',
    desc: 'サロンの感動を日常に。自宅で「自分で自分をデザインする」術をお伝えします。',
    img: '/images/スクリーンショット 2026-01-15 22.52.56.png'
  }
];

const MethodGrid: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="container mx-auto px-8">
      <div className="mb-20 text-center">
        <SectionTag text="The Method" />
        <h3 className="text-3xl md:text-5xl font-serif font-bold">最短で、最大の変化を。</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-16">
        {METHODS.map((m, i) => (
          <div key={i} className="group cursor-default">
            <div 
              ref={(el) => (imageRefs.current[i] = el)}
              className="relative aspect-[4/3] mb-8 overflow-hidden bg-gray-100 rounded-lg"
            >
              <img 
                src={m.img} 
                className={`w-full h-full object-contain transition-all duration-1000 ${
                  visibleImages.has(i) ? 'grayscale-0' : 'grayscale'
                }`}
                alt={m.title} 
              />
              <span className="absolute top-4 left-4 text-4xl font-serif font-black text-white/40">{m.num}</span>
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
