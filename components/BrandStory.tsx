
import React from 'react';
import { COLORS, SectionTag, GoldLine } from '../constants';

const BrandStory: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-32">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <SectionTag text="Our Philosophy" />
        <h2 className="serif-title text-3xl md:text-5xl font-bold mb-12 leading-snug">
          腕は、あなたの<br />
          自信を語るパーツ。
        </h2>
        <div className="space-y-8 text-lg leading-[2.2] text-gray-700">
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
            福岡店が提供するのは、一時的なケアではありません。<br />
            骨格、筋肉、そしてあなたの生き方に寄り添い、<br />
            一生ものの「自信」を彫り出すプロセスです。
          </p>
        </div>
        <GoldLine />
      </div>
    </div>
  );
};

export default BrandStory;
