
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, SectionTag } from '../constants';

const METHODS = [
  {
    num: '01',
    title: '「華奢見え」への最短ルート',
    desc: '「何をしても細くならなかった」そんな二の腕が、劇的に変化する。鏡を見るたび自信が溢れる、理想のシルエットへ。',
    img: '/images/スクリーンショット 2026-01-15 22.52.29.png'
  },
  {
    num: '02',
    title: '根本からの原因解決',
    desc: 'なぜ二の腕だけ痩せないのか？姿勢やリンパの詰まりなど、あなただけの太る原因を徹底分析し、リバウンドしない身体をつくります。',
    img: '/images/スクリーンショット 2026-01-15 22.52.44.png'
  },
  {
    num: '03',
    title: '一生モノのセルフケア',
    desc: 'サロンの仕上がりをずっとキープ。「自分で自分をデザインする」独自のメソッドをお伝えし、いつまでも美しい二の腕をあなたのものに。',
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
      <div className="mb-12 md:mb-20 text-center">
        <SectionTag text="The Method" />
        <h3 className="text-2xl md:text-5xl font-serif font-bold text-center">最短で、最大の変化を。</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {METHODS.map((m, i) => (
          <div key={i} className="flex flex-col group cursor-default h-full">
            {/* Image Section */}
            <div 
              ref={(el) => (imageRefs.current[i] = el)}
              className="relative aspect-[4/3] mb-6 overflow-hidden rounded-xl shadow-sm bg-white"
            >
              <img 
                src={m.img} 
                className={`w-full h-full object-cover transition-all duration-1000 ${
                  visibleImages.has(i) ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
                alt={m.title} 
              />
            </div>

            {/* Text Box Section */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex-grow border border-[#f9f6f2] flex flex-col justify-center">
              <div className="flex flex-col gap-4">
                <div className="flex items-baseline gap-3 border-b border-[#f9f6f2] pb-4">
                  <span className="text-[#c5a059] font-serif text-3xl font-bold">{m.num}</span>
                  <h4 className="text-xl font-serif font-bold tracking-tight text-[#2a2422]">{m.title}</h4>
                </div>
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium tracking-wide">
                  {m.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodGrid;
