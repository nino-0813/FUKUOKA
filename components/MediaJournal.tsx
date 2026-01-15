
import React from 'react';
import { THEME, SectionTitle } from '../constants';

const JOURNALS = [
  { title: "Elegant Style Journal", desc: "洗練された大人の美容特集にて、当サロンの独自メソッドが紹介されました。", date: "2024.10" },
  { title: "Premium Body Sculpt", desc: "「二の腕から変える全身美」をテーマに、最先端のボディメイク術として注目。", date: "2024.08" },
  { title: "Local Beauty Fukuoka", desc: "福岡エリアで今行くべき、プライベートサロン・セレクションに選出。", date: "2024.05" },
];

const MediaJournal: React.FC = () => {
  return (
    <section id="journal" className="container mx-auto px-6 py-24">
      <SectionTitle sub="Press & Journal" main="美の基準を塗り替える。" />
      <div className="grid md:grid-cols-3 gap-12">
        {JOURNALS.map((j, i) => (
          <div key={i} className="group cursor-default">
            <div className="border-t border-gray-200 pt-6 group-hover:border-[#d4af37] transition-colors">
              <span className="text-[10px] text-gray-400 font-mono mb-2 block">{j.date}</span>
              <h4 className="text-xl font-serif font-bold mb-3 group-hover:text-[#b5706b] transition-colors">{j.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{j.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaJournal;
