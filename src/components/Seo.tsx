'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

export default function Seo() {
  const pathname = usePathname();
  const baseUrl = 'https://nozohp.vercel.app';
  const currentUrl = `${baseUrl}${pathname}`;

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '覗香 (NOZOKA)',
    description: '覗香（のぞか）は、香りを通じて新しい体験を創出するプロジェクトです。伝統的な香りの世界と現代技術を融合させ、五感に訴える新しい体験を提供します。',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    sameAs: [
      'https://4zigenhp.vercel.app/',
    ],
    member: [
      {
        '@type': 'Person',
        name: '岡空来',
        jobTitle: '意匠術師',
      },
      {
        '@type': 'Person',
        name: '金澤政宜',
        jobTitle: '造形術師',
        url: 'https://kanassi.info/',
      },
      {
        '@type': 'Person',
        name: '中田裕紀',
        jobTitle: '発想術師',
        url: 'https://yuki-nakata.org/',
      },
      {
        '@type': 'Person',
        name: '南田桂吾',
        jobTitle: '無形術師',
        url: 'https://keigominamida.com/',
      },
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '覗香 | 香りを拡張する',
    url: baseUrl,
    description: '覗香（のぞか）は、香りを通じて新しい体験を創出するプロジェクトです。伝統的な香りの世界と現代技術を融合させ、五感に訴える新しい体験を提供します。',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'ja-JP',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: baseUrl,
      },
      pathname !== '/' && {
        '@type': 'ListItem',
        position: 2,
        name: 'ページ',
        item: currentUrl,
      },
    ].filter(Boolean),
  };

  return (
    <Script id="schema-org" type="application/ld+json">
      {JSON.stringify([organizationSchema, websiteSchema, breadcrumbSchema])}
    </Script>
  );
}