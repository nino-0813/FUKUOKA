
import React from 'react';
import { COLORS } from '../constants';

const NEWS_ITEMS = [
  {
    title: "紗栄子さんがご来店くださいました。大人気雑誌 『Otona sweet 』に東京麻布本店 NINO TOKYOが掲載！！",
    image: "https://ninoude-design.jp/wp-content/uploads/2024/10/紗栄子さん.jpg",
  },
  {
    title: "福王寺あやのさん♡ がご来店くださいました。（オーダーメイド施術プログラム）",
    image: "https://ninoude-design.jp/wp-content/uploads/2024/10/福王寺あやのさん.jpg",
  },
  {
    title: "ともさかりえさんがご来店くださいました。（オーダーメイド施術＋ボディハーブピーリング）",
    image: "https://ninoude-design.jp/wp-content/uploads/2024/10/ともさかりえさん.jpg",
  },
  {
    title: "大島まいさん（元AKB） がご来店くださいました。上半身集中プログラムを体験。",
    image: "https://ninoude-design.jp/wp-content/uploads/2024/10/大島まいさん.jpg",
  },
  {
    title: "守屋茜さん（元欅坂） がご来店くださいました。オーダーメイド施術を体感。",
    image: "https://ninoude-design.jp/wp-content/uploads/2024/10/守屋茜さん.jpg",
  }
];

const News: React.FC = () => {
  return (
    <div>
      <h2 className="serif-title text-4xl font-bold mb-16 text-center" style={{ color: COLORS.main }}>NEWS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS_ITEMS.map((item, idx) => (
          <div key={idx} className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="p-5 bg-gray-50 flex-1">
              <p className="text-sm font-medium leading-relaxed text-gray-700 italic border-l-2 pl-4" style={{ borderColor: COLORS.main }}>
                {item.title}
              </p>
            </div>
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={item.image} 
                alt="Celebrity Guest"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
