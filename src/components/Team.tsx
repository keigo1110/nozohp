'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Team() {
  const members = [
    {
      name: '岡空来',
      role: '意匠術師',
      portfolio: '#'
    },
    {
      name: '金澤政宜',
      role: '造形術師',
      portfolio: 'https://kanassi.info/'
    },
    {
      name: '中田裕紀',
      role: '発想術師',
      portfolio: 'https://yuki-nakata.org/'
    },
    {
      name: '南田桂吾',
      role: '無形術師',
      portfolio: 'https://keigominamida.com/'
    },
  ];

  const [displayMembers, setDisplayMembers] = useState(members);

  useEffect(() => {
    // クライアントサイドでのみシャッフルを実行
    setDisplayMembers([...members].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <section id="team" className="py-24 bg-stone-50 relative" aria-labelledby="team-heading" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="覗香" />
      <meta itemProp="description" content="覗香（のぞか）プロジェクトの制作者チーム" />

      {/* 背景の和風パターン */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-100/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-stone-100/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <h2 id="team-heading" className="mb-16 text-3xl md:text-4xl font-medium text-center tracking-[0.25em] relative">
          <span className="relative inline-block">
            制作者
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-px bg-stone-400" />
          </span>
        </h2>

        <div className="max-w-6xl mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12" role="list">
            {displayMembers.map((member, index) => (
              <li key={member.name} itemScope itemType="https://schema.org/Person" itemProp="member">
                <meta itemProp="name" content={member.name} />
                <meta itemProp="jobTitle" content={member.role} />
                {member.portfolio !== '#' && <meta itemProp="url" content={member.portfolio} />}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <a
                    href={member.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label={`${member.name}のポートフォリオを見る`}
                  >
                    <div className="bg-white p-8 md:p-10 shadow-md relative overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                      {/* 和風の装飾コーナー */}
                      <div className="absolute top-0 left-0 w-16 h-16" aria-hidden="true">
                        <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-stone-300 transition-colors duration-300 group-hover:border-stone-400" />
                        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-stone-200 transition-colors duration-300 group-hover:border-stone-300" />
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16" aria-hidden="true">
                        <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-stone-300 transition-colors duration-300 group-hover:border-stone-400" />
                        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-stone-200 transition-colors duration-300 group-hover:border-stone-300" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-16 h-16" aria-hidden="true">
                        <div className="absolute bottom-0 left-0 w-full h-full border-b-2 border-l-2 border-stone-300 transition-colors duration-300 group-hover:border-stone-400" />
                        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-stone-200 transition-colors duration-300 group-hover:border-stone-300" />
                      </div>
                      <div className="absolute bottom-0 right-0 w-16 h-16" aria-hidden="true">
                        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-stone-300 transition-colors duration-300 group-hover:border-stone-400" />
                        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-stone-200 transition-colors duration-300 group-hover:border-stone-300" />
                      </div>

                      {/* 墨流れエフェクト */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/10 via-transparent to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
                      </div>

                      {/* 縦書きコンテンツ */}
                      <div className="writing-vertical min-h-[14rem] flex flex-col items-center justify-center w-full relative">
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                          <h3 className="text-xl font-medium tracking-[0.2em] relative text-center">
                            {member.name}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-px bg-stone-300 scale-0 group-hover:scale-100 transition-transform duration-300" aria-hidden="true" />
                          </h3>
                          <p className="text-stone-600 tracking-[0.2em] text-base group-hover:text-stone-800 transition-colors duration-300">
                            {member.role}
                          </p>
                        </div>
                      </div>

                      {/* クリック可能の表示 */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true">
                        <div className="text-stone-400 text-xs tracking-wider flex items-center">
                          <span className="mr-1">制作者を見る</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}