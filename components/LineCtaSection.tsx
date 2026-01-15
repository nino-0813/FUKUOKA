
import React from 'react';
import { COLORS, SectionTag } from '../constants';

const LineCtaSection: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-pink-50 rounded-[4rem] overflow-hidden shadow-2xl border border-pink-100 flex flex-col md:flex-row">
        {/* Left: Visual */}
        <div className="md:w-1/2 relative h-64 md:h-auto bg-pink-50">
          <img 
            src="/images/スクリーンショット 2026-01-15 23.13.29.png" 
            className="absolute inset-0 w-full h-full object-contain"
            style={{ imageRendering: 'high-quality' }}
            alt="CTA Visual"
            loading="eager"
          />
        </div>

        {/* Right: CTA */}
        <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-pink-50" style={{ color: COLORS.text }}>
          <SectionTag text="Call to Action" />
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            その迷いを、<br />
            美しさへの確信へ。
          </h3>
          <p className="text-sm leading-relaxed mb-12 opacity-70">
            「本当に私でも変われる？」<br />
            そんな不安こそ、LINEで投げかけてください。<br />
            福岡店限定のカウンセリング特典をご用意してお待ちしております。
          </p>

          <a 
            href="https://lin.ee/Js14Alx"
            className="shiny-btn flex items-center justify-between bg-gradient-to-r from-[#06C755] to-[#05b34d] hover:to-[#04a044] text-white transition-all duration-500 px-8 py-6 rounded-2xl group shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="text-left">
              <p className="font-english text-[10px] font-bold opacity-90 uppercase tracking-widest mb-1">Reserve on LINE</p>
              <p className="text-lg font-black tracking-wide">LINEで無料AI診断<br />無料相談</p>
            </div>
            <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LineCtaSection;
