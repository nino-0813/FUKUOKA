
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, SectionTag, GoldLine } from '../constants';

const BrandStory: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto px-8 pt-8 md:pt-16 pb-0">
      <div className={`max-w-4xl mx-auto flex flex-col items-center text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <SectionTag text="Our Philosophy" />
        </div>
        <h2 className={`serif-title text-2xl md:text-5xl font-bold mb-8 md:mb-12 leading-snug transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          腕は、あなたの<br />
          自信を語るパーツ。
        </h2>
        <div className={`space-y-6 md:space-y-8 text-sm md:text-lg leading-relaxed md:leading-[2.2] text-gray-700 text-center px-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p>
            どんなにメイクを凝らしても、<br className="hidden md:block" />
            どんなに素敵なドレスを纏っても。
          </p>
          <p>
            ふとした瞬間に鏡に映る二の腕のラインが、<br className="hidden md:block" />
            あなたの心を曇らせていませんか？
          </p>
          <p className="text-[#8c6a60] font-bold">
            私たちは知っています。<br />
            そこは、最も変わりにくい場所でありながら、<br />
            最も「変化の喜び」を感じられる場所であることを。
          </p>
          <p>
            ジプソフィルが提供するのは、一時的なケアではありません。<br />
            骨格、筋肉、そしてあなたの生き方に寄り添い、<br />
            一生ものの「自信」を彫り出すプロセスです。
          </p>
        </div>
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <GoldLine />
        </div>
      </div>
    </div>
  );
};

export default BrandStory;
