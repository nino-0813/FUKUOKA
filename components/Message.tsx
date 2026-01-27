
import React from 'react';
import { COLORS, ArrowIcon } from '../constants';

const Message: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="md:w-1/2 overflow-hidden">
        <img 
          src="https://ninoude-design.jp/wp-content/uploads/2023/12/topprofile.png" 
          alt="Yukiiko"
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="md:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
        <h2 className="serif-title text-3xl font-bold mb-8 border-b pb-4" style={{ color: COLORS.main, borderColor: COLORS.pale }}>MESSAGE</h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>はじめまして！<strong>Yukiiko（ユキコ）</strong>と申します！</p>
          <p>
            二の腕痩せに特化したエステ『二の腕デザイン®︎』の開発を行い、現在はエステサロンの経営やエステティシャンの育成などを行なっています。
          </p>
          <p>
            収入が<strong>4万円</strong>のパート歯科衛生士…<br />
            好きな服どころかスーパーの特売でも買うか悩む…<br />
            家事と育児で<strong>自分の生き方が分からない…</strong><br />
            そんな生活が嫌で私も<strong>エステティシャンになりました！</strong>
          </p>
        </div>

        <div className="mt-12 text-right">
          <p className="text-xs text-gray-500">Yllmiera合同会社 代表</p>
          <p className="text-xl font-bold">Yukiiko（ユキコ）</p>
          <p className="text-xs text-gray-500 mt-2">
            二の腕痩せ専門サロン 二の腕デザイン®メソッド考案<br />
            代表セラピスト / 二の腕デザイン®アカデミー主宰
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <a href="#" className="text-sm font-medium hover:underline flex items-center group">
            詳しいプロフィールはこちら
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Message;
