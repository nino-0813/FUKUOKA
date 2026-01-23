
import React from 'react';
import { COLORS, SectionTag } from '../constants';

const LineCtaSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-5xl mx-auto bg-pink-50 rounded-3xl md:rounded-[4rem] overflow-hidden shadow-2xl border border-pink-100 flex flex-col md:flex-row">
        {/* Left: Visual */}
        <div className="md:w-1/2 relative h-48 md:h-auto bg-pink-50">
          <img 
            src="/images/rogo.png" 
            className="absolute inset-0 w-full h-full object-contain"
            style={{ imageRendering: 'high-quality' }}
            alt="CTA Visual"
            loading="eager"
            onError={(e) => {
              // Fallback to original image if rogo.png doesn't exist
              e.currentTarget.src = "/images/スクリーンショット 2026-01-15 23.13.29.png";
            }}
          />
        </div>

        {/* Right: CTA */}
        <div className="md:w-1/2 p-6 md:p-20 flex flex-col justify-center bg-pink-50 text-center md:text-left" style={{ color: COLORS.text }}>
          <div className="flex justify-center md:justify-start mb-4">
            <SectionTag text="Call to Action" />
          </div>
          <h3 className="text-2xl md:text-5xl font-serif font-bold mb-6 md:mb-8 leading-tight">
            その迷いを、<br />
            美しさへの確信へ。
          </h3>
          <p className="text-xs md:text-sm leading-relaxed mb-8 md:mb-12 opacity-70 px-2 md:px-0">
            「本当に私でも変われる？」<br />
            そんな不安こそ、LINEで投げかけてください。<br />
            福岡店限定のカウンセリング特典をご用意してお待ちしております。
          </p>

          <a 
            href="https://lin.ee/Js14Alx"
            className="relative overflow-hidden group flex items-center justify-between bg-gradient-to-br from-[#06C755] via-[#05b34d] to-[#04a044] text-white transition-all duration-500 px-6 md:px-10 py-5 md:py-7 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-[0_20px_40px_rgba(6,199,85,0.4)] hover:-translate-y-2 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #06C755 0%, #05b34d 50%, #04a044 100%)',
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-4 flex-1">
              {/* LINE Icon */}
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="white">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h2.754c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.028 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
              </div>
              
              {/* Text */}
              <div className="flex-1">
                <p className="font-english text-[9px] md:text-[10px] font-bold opacity-95 uppercase tracking-widest mb-1.5">Reserve on LINE</p>
                <p className="text-base md:text-lg font-black tracking-wide leading-tight">LINEで無料AI診断<br />無料相談</p>
              </div>
            </div>
            
            {/* Arrow Icon */}
            <div className="relative z-10 bg-white/20 backdrop-blur-sm p-2.5 rounded-full group-hover:bg-white/30 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LineCtaSection;
