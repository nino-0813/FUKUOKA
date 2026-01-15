
import React from 'react';
import { COLORS, SectionTag } from '../constants';

const FukuokaExperience: React.FC = () => {
  return (
    <div className="container mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1 relative">
        <div className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl">
          <img 
            src="https://ninoude-design.jp/wp-content/uploads/2023/12/topprofile.png" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Fukuoka Studio"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#c5a059] flex items-center justify-center p-8 rounded-full border-8 border-[#f9f6f2] hidden lg:flex">
          <p className="text-white text-[10px] font-bold tracking-[0.2em] text-center leading-relaxed">
            EXPERIENCE THE<br />HIGHEST QUALITY<br />SCULPTING IN FUKUOKA
          </p>
        </div>
      </div>
      
      <div className="order-1 md:order-2 space-y-8">
        <SectionTag text="Fukuoka Experience" />
        <h3 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
          天神の喧騒を離れ、<br />自分と向き合う静寂を。
        </h3>
        <p className="text-lg text-gray-500 leading-[2.2] font-medium">
          福岡店は、ただの施術場所ではありません。<br />
          日常の重荷を下ろし、本来のあなたへと戻るための「聖域」です。<br />
          熟練のデザイナーが、あなたの呼吸に合わせて<br className="hidden md:block" />
          最適なプログラムをその場で紡ぎ出します。
        </p>
        <div className="pt-8 flex gap-12">
          <div>
            <p className="text-3xl font-serif font-bold">100%</p>
            <p className="text-[10px] uppercase font-bold text-gray-400">Personalized</p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold">Privileged</p>
            <p className="text-[10px] uppercase font-bold text-gray-400">Private Suite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FukuokaExperience;
