
import React from 'react';
import { COLORS, SectionTag } from '../constants';

const ARCHIVES = [
  { date: '2024.11', cat: 'Magazine', title: '福岡の「美の聖地」として掲載。' },
  { date: '2024.09', cat: 'Celebrity', title: '著名モデルのボディメイクを担当。' },
  { date: '2024.06', cat: 'Award', title: '年間顧客満足度プラチナ賞受賞。' },
];

const ArchiveJournal: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-32 border-t border-gray-100" id="journal">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <SectionTag text="The Archives" />
          <h3 className="text-3xl md:text-5xl font-serif font-bold">積み重ねた信頼の記録。</h3>
        </div>
        <p className="text-xs tracking-widest font-bold opacity-40 uppercase">View All News</p>
      </div>

      <div className="space-y-0">
        {ARCHIVES.map((item, i) => (
          <div key={i} className="group border-b border-gray-100 py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-white transition-all px-4">
            <div className="flex items-center gap-12 mb-4 md:mb-0">
              <span className="text-sm font-mono text-gray-400">{item.date}</span>
              <span className="text-[10px] font-bold px-3 py-1 bg-[#f9f6f2] text-[#8c6a60] uppercase tracking-widest">{item.cat}</span>
            </div>
            <h4 className="text-xl md:text-2xl font-serif font-bold group-hover:text-[#c5a059] transition-colors">{item.title}</h4>
            <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveJournal;
