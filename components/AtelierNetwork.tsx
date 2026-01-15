
import React from 'react';
import { THEME } from '../constants';

const AtelierNetwork: React.FC = () => {
  return (
    <div className="container mx-auto px-8">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-1">
          <h2 className="text-xs tracking-[0.5em] text-[#d4af37] uppercase mb-4">Our Network</h2>
          <h3 className="text-4xl font-bold serif-title mb-8">全国の拠点</h3>
          <p className="text-sm opacity-60 leading-relaxed">
            確かな技術と美学を共有するアトリエが、全国に広がっています。
            ここ福岡店から、新しい歴史が始まります。
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
            {["東京 麻布本店", "横浜", "千葉", "浦安", "仙台", "静岡", "愛知", "大阪", "京都", "奈良", "広島", "高知", "福岡"].map(loc => (
              <div key={loc} className={`pb-2 border-b border-white/10 ${loc === '福岡' ? 'text-[#d4af37] font-bold' : 'opacity-80'}`}>
                {loc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtelierNetwork;
