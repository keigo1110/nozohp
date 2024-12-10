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
        <div className="absolute inset-0 bg-black/10">
          <div className="absolute inset-0 animate-mirage opacity-70"
            style={{
              background: `
                linear-gradient(
                  180deg,
                  transparent 0%,
                  rgba(255, 255, 255, 0.5) 40%,
                  transparent 100%
                )
              `,
              backgroundSize: '100% 200%',
            }}
          />
        </div>
      </div>

      {/* タイトルを右下に配置、位置調整 */}
      <div className="absolute inset-0 flex flex-col items-end justify-end p-8 md:p-16 pb-48 md:pb-56">
        <motion.div
          initial={{ opacity: 0, x: 20, y: 40 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20, y: isVisible ? 0 : 20 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-right"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-[0.5em] mb-8 text-white">
            覗香
          </h1>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-2xl md:text-3xl text-white tracking-[0.25em] font-light"
        >
          〜香りを拡張する〜
        </motion.p>
      </div>

      {/* 波紋パターン */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 text-stone-50" viewBox="0 0 1440 54" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
          />
        </svg>
      </div>
    </section>
  );
}