'use client';

import { useState, useEffect } from 'react';

export default function Footer() {
    const [year, setYear] = useState(2024); // 初期値はサーバーと同じにする

    useEffect(() => {
      // クライアントサイドでのみ実行
      setYear(new Date().getFullYear());
    }, []);

    return (
      <footer className="bg-stone-800 text-white py-12 relative">
        {/* 和風の波紋パターン */}
        <div className="absolute top-0 left-0 right-0">
          <svg className="w-full h-8 text-stone-50 transform rotate-180" viewBox="0 0 1440 54" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0 22C120 16.7 240 11 480 0.7 720 1 960 11 1200 16.7L1440 22V0H0v22z"
              fillOpacity="0.1"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 装飾的な区切り線 */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-px bg-white/20" />
              <div className="w-2 h-2 rounded-full bg-white/30 mx-4" />
              <div className="w-16 h-px bg-white/20" />
            </div>

            {/* 親サイトへ戻るボタン */}
            <div className="text-center mb-6">
              <a
                href="https://4zigenhp.vercel.app/"
                className="inline-block border border-white/30 px-6 py-2 tracking-widest text-sm hover:bg-white/10 transition-all duration-300 relative group"
              >
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/50 transform -translate-x-1 -translate-y-1"></span>
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/50 transform translate-x-1 -translate-y-1"></span>
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/50 transform -translate-x-1 translate-y-1"></span>
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/50 transform translate-x-1 translate-y-1"></span>
                4ZIGENを覗く
              </a>
            </div>

            {/* フッターコンテンツ */}
            <div className="text-center space-y-4">
              <p className="text-white/80 tracking-[0.2em]">© {year} 覗香</p>
              <p className="text-white/60 text-sm tracking-wider">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }