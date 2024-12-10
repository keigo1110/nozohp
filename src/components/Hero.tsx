'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/main.jpg"
          alt="覗香"
          className="h-full w-full object-cover brightness-[0.85]"
        />
        {/* 和紙のテクスチャオーバーレイ */}
        <div className="absolute inset-0 bg-[url('/washi-texture.png')] opacity-20 mix-blend-overlay" />

        {/* 墨流しエフェクト */}
        <div className="absolute inset-0 bg-black/10">
          <div
            className="absolute inset-0 animate-sumi opacity-70"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  transparent 0%,
                  rgba(0, 0, 0, 0.1) 40%,
                  transparent 100%
                )
              `,
              backgroundSize: '200% 200%',
            }}
          />
        </div>
      </div>

      {/* メインタイトル */}
      <div className="absolute inset-0 flex flex-col items-end justify-end p-8 md:p-16 pb-48 md:pb-56">
        <motion.div
          initial={{ opacity: 0, x: 20, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20, y: isVisible ? 0 : 20 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-right relative"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-[0.5em] mb-8 text-white">
            覗香
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-3xl text-white tracking-[0.25em] font-light"
        >
          〜香りを拡張する〜
        </motion.p>
      </div>

      {/* 波紋パターン（より和風な曲線） */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-32 text-stone-50" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,32 C320,80 480,0 720,48 C960,96 1120,16 1440,64 L1440,120 L0,120 Z"
            opacity="0.8"
          />
          <path
            fill="currentColor"
            d="M0,48 C320,96 480,16 720,64 C960,112 1120,32 1440,80 L1440,120 L0,120 Z"
            opacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}