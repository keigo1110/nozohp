'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState(false);
  const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const images = [
    { src: '/main.jpg', alt: '覗香 - メインビジュアル' },
    { src: '/main2.JPG', alt: '覗香 - 新バージョン' }
  ];

  // 自動切り替えの間隔（ミリ秒）
  const AUTO_PLAY_INTERVAL = 10000; // 10秒
  const PAUSE_DURATION = 10000; // 手動操作後の一時停止時間（10秒）

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 自動切り替え機能
  useEffect(() => {
    if (isAutoPlayPaused) {
      return; // 一時停止中は自動切り替えしない
    }

    const startAutoPlay = () => {
      autoPlayTimeoutRef.current = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, AUTO_PLAY_INTERVAL);
    };

    startAutoPlay();

    return () => {
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
    };
  }, [currentImageIndex, isAutoPlayPaused, images.length]);

  const handleImageChange = (index: number) => {
    setCurrentImageIndex(index);

    // 手動操作時に自動切り替えを一時停止
    setIsAutoPlayPaused(true);

    // 既存のタイマーをクリア
    if (autoPlayTimeoutRef.current) {
      clearTimeout(autoPlayTimeoutRef.current);
    }
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }

    // 一定時間後に自動切り替えを再開
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoPlayPaused(false);
    }, PAUSE_DURATION);
  };

  return (
    <section className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="h-full w-full object-cover brightness-[0.85]"
            initial={{
              scale: 1.1,
              filter: 'blur(8px)',
              opacity: 0.7
            }}
            animate={{
              scale: 1,
              filter: 'blur(0px)',
              opacity: 1
            }}
            exit={{
              scale: 0.95,
              filter: 'blur(6px)',
              opacity: 0.8
            }}
            transition={{
              duration: 2.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 1.8 },
              scale: { duration: 2.2 },
              filter: { duration: 2.0 }
            }}
          />
        </AnimatePresence>

        {/* 香りらしいもやもやエフェクト */}
        <motion.div
          key={`scent-effect-${currentImageIndex}`}
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent animate-pulse" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
                radial-gradient(circle at 70% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
                radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)
              `,
              animation: 'scentDrift 8s ease-in-out infinite'
            }}
          />
        </motion.div>

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

      {/* 画像切り替えボタン */}
      <div className="absolute top-8 right-8 z-10">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleImageChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentImageIndex === index
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`画像${index + 1}に切り替え`}
            />
          ))}
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

      <style jsx>{`
        @keyframes scentDrift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          25% {
            transform: translate(-10px, -5px) scale(1.05);
            opacity: 0.4;
          }
          50% {
            transform: translate(5px, -10px) scale(1.1);
            opacity: 0.5;
          }
          75% {
            transform: translate(-5px, 5px) scale(1.05);
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}