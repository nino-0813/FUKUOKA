
import React from 'react';
import { COLORS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="w-full">
      <h2 className="serif-title text-4xl font-bold mb-12 text-center" style={{ color: COLORS.main }}>BLOG</h2>
      
      <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-lg mx-auto max-w-[800px]">
        <iframe 
          title="Ameba Blog"
          className="w-full h-[400px] border-none"
          src="https://ameblo.jp/etoile373/"
          sandbox="allow-same-origin allow-scripts allow-top-navigation"
        ></iframe>
      </div>
      
      <div className="mt-8">
        <a 
          href="https://ameblo.jp/etoile373/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-[#e24c64] transition-colors font-medium"
        >
          アメブロで記事をもっと見る →
        </a>
      </div>
    </div>
  );
};

export default Blog;
