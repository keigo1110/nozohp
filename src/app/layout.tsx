import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { EffectProvider } from '../components/effect-provider'
import Seo from '../components/Seo'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '覗香（nozokō）| 香りを拡張する - 香りの虫眼鏡',
  description: '覗香（nozokō）は、ものの香りを増幅させる装置です。虫眼鏡で物を大きくして見るように、香りを増幅させることができます。香道の雅なる趣を現代に映し、穏やかなる熱により幽玄の香りを引き出す新たなる花道です。',
  keywords: [
    '覗香', 'nozokō', 'のぞか', '香り', '香り増幅', '香りの虫眼鏡',
    '香道', '和', '日本', 'アート', 'デザイン', '五感', '体験',
    '伝統', 'テクノロジー', '香辛料', '香り体験', '香り装置',
    'S×PARK', 'デジタル学園祭', '4ZIGEN', '東京大学'
  ],
  authors: [
    { name: '岡空来', url: 'https://sites.google.com/view/soraoka/' },
    { name: '金澤政宜', url: 'https://kanassi.info/' },
    { name: '中田裕紀', url: 'https://yuki-nakata.org/' },
    { name: '南田桂吾', url: 'https://keigominamida.com/' },
  ],
  creator: '覗香プロジェクト',
  publisher: '4ZIGEN',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://nozohp.vercel.app/',
    siteName: '覗香（nozokō）| 香りを拡張する',
    title: '覗香（nozokō）| 香りを拡張する - 香りの虫眼鏡',
    description: '覗香（nozokō）は、ものの香りを増幅させる装置です。虫眼鏡で物を大きくして見るように、香りを増幅させることができます。香道の雅なる趣を現代に映し、穏やかなる熱により幽玄の香りを引き出す新たなる花道です。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '覗香（nozokō）- 香りを拡張する装置',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '覗香（nozokō）| 香りを拡張する - 香りの虫眼鏡',
    description: '覗香（nozokō）は、ものの香りを増幅させる装置です。虫眼鏡で物を大きくして見るように、香りを増幅させることができます。',
    images: ['/og-image.jpg'],
    creator: '@4ZIGEN',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://nozohp.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": "覗香（nozokō）",
    "alternateName": "香りの虫眼鏡",
    "description": "覗香（nozokō）は、ものの香りを増幅させる装置です。虫眼鏡で物を大きくして見るように、香りを増幅させることができます。",
    "url": "https://nozohp.vercel.app/",
    "image": "https://nozohp.vercel.app/og-image.jpg",
    "author": [
      {
        "@type": "Person",
        "name": "岡空来",
        "url": "https://sites.google.com/view/soraoka/"
      },
      {
        "@type": "Person",
        "name": "金澤政宜",
        "url": "https://kanassi.info/"
      },
      {
        "@type": "Person",
        "name": "中田裕紀",
        "url": "https://yuki-nakata.org/"
      },
      {
        "@type": "Person",
        "name": "南田桂吾",
        "url": "https://keigominamida.com/"
      }
    ],
    "creator": {
      "@type": "Organization",
      "name": "4ZIGEN",
      "url": "https://nozohp.vercel.app/"
    },
    "award": "S×PARK アワード クリエイティビティ部門 一次審査当選",
    "keywords": "覗香,nozokō,香り,香り増幅,香りの虫眼鏡,香道,香り体験",
    "inLanguage": "ja",
    "dateCreated": "2024",
    "genre": "アート・デザイン・テクノロジー",
    "about": {
      "@type": "Thing",
      "name": "香り体験装置"
    }
  };

  return (
    <html lang="ja">
      <head>
        <link rel="canonical" href="https://nozohp.vercel.app/" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#111111" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={notoSansJP.className}>
        <Seo />
        <EffectProvider>{children}</EffectProvider>
      </body>
    </html>
  )
}

