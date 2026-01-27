
import React from 'react';
import { BRAND, COLORS, NAV_ITEMS } from '../constants';

const SiteFooter = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-white border-t border-gray-100 scroll-fade-up delay-300">
      <div className="container mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="serif-title text-xl font-bold mb-4" style={{ color: COLORS.primary }}>
              二の腕痩せ専門ジプソフィル®︎
            </h3>
            <p className="text-xs tracking-widest uppercase text-gray-500 mb-6">
              {BRAND.branch}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              福岡で出逢う、<br />
              新しいあなたの輪郭。
            </p>
            <a 
              href="https://lin.ee/Js14Alx"
              className="inline-flex items-center gap-2 bg-[#06C755] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#05b34d] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h2.754c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.028 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              LINEで予約
            </a>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-700">
              Navigation
            </h4>
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm text-gray-600 hover:text-[#8c6a60] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-gray-700">
              Contact
            </h4>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <span className="font-semibold">福岡店</span><br />
                福岡県福岡市東区の自宅サロン
              </p>
              <div>
                <p className="font-semibold mb-2">営業時間</p>
                <p className="text-xs leading-relaxed space-y-1">
                  <span className="block">基本：平日・土曜 9:00～18:00</span>
                  <span className="block">お客様のご希望に合わせます</span>
                  <span className="block mt-2">日曜・祝日は別途ご相談</span>
                  <span className="block mt-2 text-[#8c6a60]">時間と曜日の相談はいつでも可能</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} 二の腕痩せ専門ジプソフィル®︎ {BRAND.branch}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-700 transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-gray-700 transition-colors">利用規約</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = 'SiteFooter';

export default SiteFooter;
