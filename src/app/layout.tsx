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
  title: '覗香 | 香りを拡張する',
  description: '覗香（のぞか）は、香りを通じて新しい体験を創出するプロジェクトです。伝統的な香りの世界と現代技術を融合させ、五感に訴える新しい体験を提供します。',
  keywords: ['覗香', 'のぞか', '香り', '和', '日本', 'アート', 'デザイン', '五感', '体験', '伝統', 'テクノロジー'],
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
    siteName: '覗香 | 香りを拡張する',
    title: '覗香 | 香りを拡張する',
    description: '覗香（のぞか）は、香りを通じて新しい体験を創出するプロジェクトです。伝統的な香りの世界と現代技術を融合させ、五感に訴える新しい体験を提供します。',
    images: [
      {
        url: '/og-image.jpg', // OGP画像を追加する必要があります
        width: 1200,
        height: 630,
        alt: '覗香プロジェクト',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '覗香 | 香りを拡張する',
    description: '覗香（のぞか）は、香りを通じて新しい体験を創出するプロジェクトです。',
    images: ['/og-image.jpg'], // Twitter Card用画像
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="canonical" href="https://nozohp.vercel.app/" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#111111" />
      </head>
      <body className={notoSansJP.className}>
        <Seo />
        <EffectProvider>{children}</EffectProvider>
      </body>
    </html>
  )
}

