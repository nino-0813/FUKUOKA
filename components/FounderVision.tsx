
import React from 'react';
import { THEME } from '../constants';

const FounderVision: React.FC = () => {
  return (
    <div className="container mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-full h-full border border-[#d4af37] z-0"></div>
        <img 
          src="https://ninoude-design.jp/wp-content/uploads/2023/12/topprofile.png" 
          alt="Founder" 
          className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
        />
      </div>
      <div className="space-y-8">
        <h4 className="text-xs tracking-[0.4em] uppercase font-bold text-[#d4af37]">Founder's Vision</h4>
        <h3 className="text-4xl font-bold serif-title leading-tight">
          「自分らしく、凛と生きる」<br />
          女性たちを増やしたい。
        </h3>
        <div className="text-[#6b5a59] leading-relaxed space-y-6">
          <p>
            かつて、私も一人の歯科衛生士として、自分の可能性を模索していました。<br />
            理想の自分と、変われない現実。その隙間を埋めてくれたのがエステの力でした。
          </p>
          <p>
            福岡の皆様に、私が人生を変えたこの「感動」を届けたい。<br />
            技術は手段、目的はあなたの「自律」と「輝き」です。
          </p>
        </div>
        <div className="pt-6 border-t border-gray-100 italic font-medium">
          <p className="text-xl">Yukiiko</p>
          <p className="text-sm opacity-60">Creator of Premium Arm Design Method</p>
        </div>
      </div>
    </div>
  );
};

export default FounderVision;
