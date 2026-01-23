
import React from 'react';
import { SectionTag } from '../constants';

const LineCtaSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* Text Content */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <SectionTag text="Call to Action" />
          </div>
          <h3 className="serif-title text-2xl md:text-5xl font-bold mb-8 md:mb-12 leading-snug">
            その迷いを、<br />
            美しさへの確信へ。
          </h3>
          <p className="text-sm md:text-lg leading-relaxed md:leading-[2.2] text-gray-700 mb-4 md:mb-6 px-2 md:px-0">
            「本当に私でも変われる？」<br />
            そんな不安こそ、LINEで投げかけてください。<br />
            ジプソフィル限定のカウンセリング特典をご用意してお待ちしております。
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <a 
            href="https://lin.ee/HFOKlurh"
            className="block max-w-md md:max-w-lg w-full"
          >
            <img 
              src="/images/line-cta-banner.png" 
              className="w-full h-auto object-contain"
              alt="LINE友達募集"
              loading="eager"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LineCtaSection;
