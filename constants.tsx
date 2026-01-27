
import React from 'react';

export const BRAND = {
  name: '二の腕デザイン®︎',
  branch: 'FUKUOKA ATELIER',
  concept: 'Silhouette Sculpting',
};

// Added main and pale properties to fix Property access errors in multiple components
export const COLORS = {
  primary: '#8c6a60', // 落ち着いたトープブラウン
  accent: '#c5a059',  // アンティークゴールド
  base: '#f9f6f2',    // サンドベージュ
  text: '#2a2422',    // オフブラック
  line: '#06C755',
  main: '#8c6a60',
  pale: '#fdfdfd',
};

// Added THEME export to fix missing export error in several components
export const THEME = COLORS;

export const NAV_ITEMS = [
  { label: 'Philosophy', id: 'story' },
  { label: 'The Method', id: 'method' },
  { label: 'Fukuoka Experience', id: 'experience' },
  { label: 'Archives', id: 'archives' },
];

// Added NAVIGATION_LINKS to fix missing export error in Header.tsx and Footer.tsx
export const NAVIGATION_LINKS = [
  { name: 'Concept', href: '#story' },
  { name: 'Method', href: '#method' },
  { name: 'Experience', href: '#experience' },
  { name: 'Archives', href: '#archives' },
];

export const SectionTag = ({ text }: { text: string }) => (
  <span className="inline-block text-[10px] tracking-[0.5em] uppercase font-bold text-[#c5a059] mb-4">
    {text}
  </span>
);

// Added SectionTitle component used in MediaJournal.tsx
export const SectionTitle = ({ sub, main }: { sub: string, main: string }) => (
  <div className="text-center mb-16">
    <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#c5a059] block mb-4">{sub}</span>
    <h2 className="text-3xl md:text-5xl font-serif font-bold">{main}</h2>
  </div>
);

export const GoldLine = () => (
  <div className="w-px h-16 bg-gradient-to-b from-[#c5a059] to-transparent mx-auto my-8"></div>
);

// Added GoldDivider used in LineConversion.tsx
export const GoldDivider = () => (
  <div className="w-24 h-px bg-[#c5a059] mx-auto my-8"></div>
);

// Added ArrowIcon used in Message.tsx and NavigationCards.tsx
export const ArrowIcon = () => (
  <svg className="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);
