
import React from 'react';
import { THEME, GoldLine } from '../constants';

const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 flex flex-col items-center">
      <div className="max-w-3xl text-center">
        <h3 className="serif-title text-3xl md:text-4xl font-bold mb-8 leading-snug">
          二の腕は、あなたの「生き方」を映す場所。
        </h3>
        <GoldLine />
        <div className="space-y-10 text-lg leading-[2] text-[#6b5a59]">
          <p>
            どんなに努力しても変わらなかった「あと数センチ」。<br />
            それは単なる数字ではなく、自分への自信を阻む壁でした。
          </p>
          <p>
            当サロンが提案するのは、単なるエステではありません。<br />
            独自のメソッドで骨格からアプローチし、<br />
            本来あなたが持っていた「しなやかさ」と「美しさ」を彫刻のように引き出します。
          </p>
          <p className="font-bold text-[#2d1b1a]">
            腕が変われば、着たい服が変わり、歩き方が変わり、<br />
            そして明日のあなたがもっと好きになる。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
