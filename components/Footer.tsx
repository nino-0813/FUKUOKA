
import React from 'react';
import { COLORS, NAVIGATION_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fcf4f4] pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Navigation Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg border-b-2 inline-block mb-4" style={{ borderColor: COLORS.main }}>Menu</h3>
          <ul className="space-y-2">
            {NAVIGATION_LINKS.map(link => (
              <li key={link.name}>
                <a href={link.href} className="text-gray-600 hover:text-red-400 transition-colors">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg border-b-2 inline-block mb-4" style={{ borderColor: COLORS.main }}>Guide</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-red-400 transition-colors">会社概要</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-400 transition-colors">特定商取引法に基づく表記</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-400 transition-colors">プライバシーポリシー</a></li>
            <li><a href="#" className="text-gray-600 hover:text-red-400 transition-colors">お問い合わせ</a></li>
          </ul>
        </div>

        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-end">
          <img 
            src="https://ninoude-design.jp/wp-content/uploads/2023/12/ロゴ２.png" 
            alt="二の腕デザイン Logo" 
            className="w-48 mb-6"
          />
          <div className="flex space-x-4">
             {/* SNS Icons */}
             {['Instagram', 'Line', 'Facebook'].map(sns => (
               <a key={sns} href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:scale-110 transition-transform">
                 <span className="text-xs text-gray-400">{sns[0]}</span>
               </a>
             ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center border-t border-gray-200 pt-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} 二の腕痩せ専門サロン 二の腕デザイン®︎ 福岡店. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
