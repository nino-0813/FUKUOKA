
import React from 'react';
import { THEME, GoldDivider } from '../constants';

const LineConversion: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-white rounded-[4rem] p-12 md:p-32 text-center shadow-2xl relative overflow-hidden border border-gray-50">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#d4af37] via-[#b5706b] to-[#d4af37]"></div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
            鏡を見るのが楽しみになる、<br />そんな明日を始めませんか。
          </h3>
          <GoldDivider />
          <p className="text-[#6b5a59] mb-12 leading-relaxed text-lg">
            公式LINEでは、福岡店の最新空き状況や、<br className="hidden md:block" />
            自宅でできる美腕ケア動画を特別にプレゼントしています。
          </p>
          
          <div className="space-y-6">
            <a 
              href="https://lin.ee/Js14Alx" 
              className="inline-flex items-center gap-4 bg-[#06C755] text-white px-16 py-7 rounded-full text-2xl font-black shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              LINEで無料相談・予約
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              ※ご予約は24時間承っております
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineConversion;
