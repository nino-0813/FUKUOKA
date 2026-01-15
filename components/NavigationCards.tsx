
import React from 'react';
import { ArrowIcon } from '../constants';

const CARDS = [
  {
    title: '二の腕デザイン®エステについて',
    image: 'https://ninoude-design.jp/wp-content/uploads/2023/12/エステ.png',
    link: '#',
  },
  {
    title: '二の腕デザイン®アカデミーについて',
    image: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー2.png',
    link: '#',
  },
  {
    title: 'Online Store',
    image: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー4.png',
    link: '#',
  },
  {
    title: '全国サロン一覧',
    image: 'https://ninoude-design.jp/wp-content/uploads/2023/12/topバナー3.png',
    link: '#',
  },
];

const NavigationCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {CARDS.map((card, idx) => (
        <div key={idx} className="group cursor-pointer">
          <div className="overflow-hidden rounded-lg shadow-md mb-4 bg-gray-100 aspect-video">
            <img 
              src={card.image} 
              alt={card.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <a href={card.link} className="flex items-center justify-end text-[#e24c64] font-medium border border-[#e24c64] rounded-full px-6 py-2 transition-colors hover:bg-[#e24c64] hover:text-white">
            <span className="text-sm">{card.title}</span>
            <ArrowIcon />
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavigationCards;
