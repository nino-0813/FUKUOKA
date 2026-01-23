
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, SectionTag } from '../constants';

const FukuokaExperience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-8 grid md:grid-cols-2 gap-24 items-center">
      <div className="order-2 md:order-1 relative">
        <div 
          ref={imgRef}
          className="aspect-[4/5] bg-gray-200 overflow-hidden rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl"
        >
          <img 
            src="/images/4932433C-D1C2-4AD4-B8FF-F026644FBC1A.png" 
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isVisible ? 'grayscale-0' : 'grayscale'
            }`}
            alt="Owner emi"
          />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white flex items-center justify-center p-3 rounded-full border-8 border-[#f9f6f2] shadow-2xl hidden lg:flex overflow-hidden">
          <img 
            src="/images/diploma.png" 
            className="w-full h-full object-contain rounded-full"
            alt="Diploma Certificate"
          />
        </div>
      </div>
      
      <div className="order-1 md:order-2 space-y-8 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <SectionTag text="Owner's Story" />
        </div>
        <h3 className="serif-title text-2xl md:text-5xl font-bold leading-snug mb-8 md:mb-0">
          同じ悩みを抱えた<br />私だから、伝えたい。
        </h3>
        <div className="space-y-4 md:space-y-6 text-sm md:text-lg leading-relaxed md:leading-[2.2] text-gray-700 text-center px-4 md:px-0">
          <div className="md:hidden">
            <p className="mb-4 font-medium">
              はじめまして。emi（エミ）と申します。
            </p>
            <p className="mb-4 font-medium">
              私は3人の子供を育てるシングルマザーです。<br />
              一人で子育てを頑張ると覚悟を決めた時、<br />
              子供はまだ小さく、フルタイムのパートで<br />
              精いっぱいでした。
            </p>
            <p className="mb-4 font-medium">
              収入は14万円。自分のために割く時間も、<br />
              美容にかけるお金もありませんでした。
            </p>
            <p className="text-[#8c6a60] font-bold mb-4">
              それでも、たくさんのことを学び、<br />
              やりたいことを見つけていきました。
            </p>
            <p className="mb-4 font-medium">
              子育てが落ち着き、久しぶりに見た写真や鏡に<br />
              写る自分の姿。そこに映っていたのは、<br />
              太い二の腕でした。筋トレをしても変わらず、<br />
              ノースリーブが似合わず、本当に着たい服が着られない。<br />
              ずっとコンプレックスでした。
            </p>
            <p className="text-[#8c6a60] font-bold mb-4">
              そんな私が、Yukiko代表の技術に出会い、<br />
              感動と希望を手にしました。
            </p>
            <p className="font-medium">
              同じ悩みを抱えた私だからこそ、<br />
              あなたの気持ちに寄り添い、本当の変化を<br />
              一緒に実現したい。<br />
              それが、私の使命です。
            </p>
          </div>
          <div className="hidden md:block">
            <p>
              はじめまして。emi（エミ）と申します。<br />
              私は3人の子供を育てるシングルマザーです。一人で子育てを頑張ると覚悟を決めた時、子供はまだ小さく、フルタイムのパートで精いっぱいでした。収入は14万円。自分のために割く時間も、美容にかけるお金もありませんでした。
            </p>
            <p className="text-[#8c6a60] font-bold">
              それでも、たくさんのことを学び、やりたいことを見つけていきました。
            </p>
            <p>
              子育てが落ち着き、久しぶりに見た写真や鏡に写る自分の姿。そこに映っていたのは、太い二の腕でした。筋トレをしても変わらず、ノースリーブが似合わず、本当に着たい服が着られない。ずっとコンプレックスでした。
            </p>
            <p className="text-[#8c6a60] font-bold">
              そんな私が、Yukiko代表の技術に出会い、感動と希望を手にしました。
            </p>
            <p>
              同じ悩みを抱えた私だからこそ、あなたの気持ちに寄り添い、本当の変化を一緒に実現したい。それが、私の使命です。
            </p>
          </div>
        </div>
        <div className="pt-8 flex items-center justify-center md:justify-start gap-4">
          <div className="w-16 h-px bg-[#c5a059]"></div>
          <p className="text-sm font-bold text-[#8c6a60] tracking-widest">emi</p>
        </div>
      </div>
    </div>
  );
};

export default FukuokaExperience;
