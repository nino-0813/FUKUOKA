
import React from 'react';
import { COLORS } from '../constants';

const Concept: React.FC = () => {
  return (
    <section id="Concept" className="py-20 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="serif-title text-4xl sm:text-5xl font-bold mb-4" style={{ color: COLORS.main }}>CONCEPT</h2>
        <div className="w-12 h-[1px] bg-gray-400 mx-auto"></div>
      </div>
      
      <div className="text-center space-y-8 text-[#180907] leading-loose sm:text-lg">
        <p className="font-medium text-xl sm:text-2xl">
          二の腕デザイン®︎は 全国でも珍しい<br className="sm:hidden" />『二の腕痩せ専門サロン』です。
        </p>
        
        <p>
          体重は減っても二の腕だけは細くならない…<br />
          というお悩みを解決し、最短・最速で二の腕を激変させるだけでなく、<br />
          二の腕から全身、人生まで激変する健康・美しさをクリエイトしています。
        </p>

        <p>
          二の腕デザイン®︎に関わる全ての方に<br />
          『健康・美しさ・自信を満たし自分を誇りに思える感動』を提供する<br />
          をビジョンに掲げ、全国に二の腕デザイン®︎サロンを展開中。<br />
          <span className="text-gray-500 text-sm">（独立したいエステティシャン募集中）</span>
        </p>

        <p>
          また、二の腕デザイナー®︎という女性の精神的・経済的自立をサポートする働き方<br className="hidden sm:block" />
          『二の腕デザイナー®︎（エステティシャン）スクール』を主宰しています。
        </p>
      </div>
    </section>
  );
};

export default Concept;
