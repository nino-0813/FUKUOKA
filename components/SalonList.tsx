
import React from 'react';
import { COLORS } from '../constants';

const LOCATIONS = [
  "東京（麻布本店）",
  "神奈川（横浜）",
  "千葉サロン（浦安）",
  "千葉サロン（鎌ケ谷）",
  "宮城サロン（仙台）",
  "静岡サロン（静岡市）",
  "静岡清水サロン（清水）",
  "愛知サロン（刈谷）",
  "長野サロン",
  "石川サロン",
  "大阪サロン（萱島）",
  "大阪南サロン（堺駅）",
  "大阪サロン（新大阪）",
  "大阪サロン（心斎橋）",
  "京都サロン（京都駅前）",
  "京都城陽サロン",
  "奈良サロン",
  "岡山サロン",
  "広島サロン",
  "高知サロン",
  "福岡サロン (福岡店)"
];

const SalonList: React.FC = () => {
  return (
    <div>
      <h2 className="serif-title text-4xl font-bold mb-12 text-center" style={{ color: COLORS.main }}>Salon List</h2>
      
      <div className="bg-[#fdfdfd] p-8 sm:p-12 border-l-8 rounded-r-2xl shadow-inner" style={{ borderColor: COLORS.main }}>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 list-none">
          {LOCATIONS.map((loc, idx) => (
            <li key={idx} className={`flex items-center gap-3 py-2 border-b border-dashed border-gray-200 last:border-none ${loc.includes('福岡') ? 'text-[#e24c64] font-bold' : 'text-gray-600'}`}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: loc.includes('福岡') ? COLORS.accent : COLORS.main }}></span>
              {loc}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mt-8 text-sm text-gray-500 leading-relaxed">
        <p>＊これまでに都内各地サロンを紹介していましたが、全ての皆様に【麻布本店】で本物の施術を体感頂けます。</p>
        <p>＊場所や距離などのご事情がある場合には本部からFCサロンをご紹介させて頂きます。</p>
      </div>
    </div>
  );
};

export default SalonList;
