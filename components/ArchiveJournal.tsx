
import React from 'react';
import { COLORS, SectionTag } from '../constants';

const ARCHIVES = [
  { date: '2024.11', cat: 'Magazine', title: '福岡の「美の聖地」として掲載。' },
  { date: '2024.09', cat: 'Celebrity', title: '著名モデルのボディメイクを担当。' },
  { date: '2024.06', cat: 'Award', title: '年間顧客満足度プラチナ賞受賞。' },
];

const ArchiveJournal: React.FC = () => {
  return (
    <div className="container mx-auto px-8 py-16 md:py-32 border-t border-gray-100" id="journal">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8 text-center md:text-left">
        <div className="w-full md:w-auto">
          <div className="flex justify-center md:justify-start">
            <SectionTag text="The Archives" />
          </div>
          <h3 className="text-2xl md:text-5xl font-serif font-bold mt-4">View All News</h3>
        </div>
      </div>

      <div className="space-y-0">
        {ARCHIVES.map((item, i) => (
          <div key={i} className="group border-b border-gray-100 py-6 md:py-10 flex flex-col md:flex-row md:items-center justify-between hover:bg-white transition-all px-4">
            <div className="flex items-center gap-4 md:gap-12 mb-3 md:mb-0">
              <span className="text-xs md:text-sm font-mono text-gray-400">{item.date}</span>
              <span className="text-[9px] md:text-[10px] font-bold px-2 md:px-3 py-1 bg-[#f9f6f2] text-[#8c6a60] uppercase tracking-widest rounded">{item.cat}</span>
            </div>
            <h4 className="text-base md:text-2xl font-serif font-bold group-hover:text-[#c5a059] transition-colors leading-relaxed">{item.title}</h4>
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
