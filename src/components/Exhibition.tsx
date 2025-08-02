'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Exhibition() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const exhibitionData = {
    title: 'デジタル学園祭2025',
    subtitle: 'S×PARK アワード',
    videoUrl: 'https://www.youtube.com/watch?v=VuCaQJFx2BU',
    sparkUrl: 'https://www.spark-awards.com/'
  };

  return (
    <section id="exhibition" className="py-24 bg-stone-100 relative" aria-labelledby="exhibition-heading">
      {/* 香りらしい背景エフェクト */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, 20, -10, 0],
            y: [0, -15, 10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-yellow-200/15 to-amber-200/15 rounded-full blur-2xl"
          animate={{
            x: [0, -15, 10, 0],
            y: [0, 20, -10, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 id="exhibition-heading" className="text-3xl md:text-4xl font-medium tracking-[0.25em] mb-4">
            <span className="relative inline-block">
              展示録
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-stone-400" />
            </span>
          </h2>
          <p className="text-stone-600 tracking-[0.1em] text-lg max-w-2xl mx-auto">
            覗香の展示体験をご紹介
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* メインコンテンツ */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            {/* 左側：動画 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-medium tracking-[0.2em] mb-2">
                    {exhibitionData.title}
                  </h3>
                  <p className="text-xl text-amber-700 tracking-[0.15em] font-medium">
                    {exhibitionData.subtitle}
                  </p>
                </div>

                {/* 公式サイトリンク - より控えめなデザイン */}
                <a
                  href={exhibitionData.sparkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 text-sm border border-stone-300 text-stone-600 tracking-[0.1em] hover:bg-stone-50 hover:border-stone-400 transition-all duration-300 rounded-md group"
                >
                  <span className="mr-2">公式サイト</span>
                  <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* YouTube動画の埋め込み */}
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-black">
                <iframe
                  src="https://www.youtube.com/embed/VuCaQJFx2BU"
                  title="覗香 展示体験動画"
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* 覗香の説明文 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-lg border border-stone-200/50 relative overflow-hidden"
              >
                {/* 香りらしい装飾要素 */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                  <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-stone-300" />
                </div>

                <div className="space-y-4">
                  <div className="space-y-1 text-stone-700 leading-relaxed tracking-[0.05em] text-sm">
                    <p>
                    覗香（nozokō）は、ものの香りを増幅させる装置です。
                    </p>
                    <p>
                      虫眼鏡でものを大きくして見るように、香りを増幅させることができます。
                    </p>
                  </div>
                </div>

                {/* 香りらしい微細なアニメーション */}
                <motion.div
                  className="absolute bottom-2 left-2 w-2 h-2 bg-amber-300/30 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* 右側：画像ギャラリー */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 flex flex-col"
            >
              {/* あたためる素材の画像 */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/spark1.JPG"
                  alt="あたためる素材の展示"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-5 left-4 text-white">
                  <p className="text-sm tracking-[0.1em] font-medium">あたためる素材</p>
                </div>
              </motion.div>

              {/* 実際に嗅いでいる画像 */}
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <img
                  src="/spark2.png"
                  alt="実際に嗅いでいる体験"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm tracking-[0.1em] font-medium">香りの体験</p>
                </div>
              </motion.div>

              {/* 右側の空白調整用のスペーサー */}
              <div className="flex-1 min-h-[120px]"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}