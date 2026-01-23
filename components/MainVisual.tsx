
import React from 'react';

const MainVisual: React.FC = () => {
  return (
    <section className="relative w-full pt-[72px]">
      <div className="aspect-[15/6] w-full hidden sm:block relative overflow-hidden">
        <img 
          src="https://ninoude-design.jp/wp-content/uploads/2024/01/二の腕デザインバナー1.jpg" 
          alt="二の腕デザイン 福岡店"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
          {/* Brand Overlay could go here if needed */}
        </div>
      </div>
      
      {/* Mobile Only Banner */}
      <div className="aspect-[4/5] w-full sm:hidden relative overflow-hidden">
        <img 
          src="https://ninoude-design.jp/wp-content/uploads/2024/01/二の腕デザインバナー1SP.jpg" 
          alt="二の腕デザイン 福岡店"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default MainVisual;
