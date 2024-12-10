import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import { EffectProvider } from '../components/effect-provider'

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: '覗香 - 香りを拡張する',
  description: '覗香プロジェクト公式サイト',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <EffectProvider>{children}</EffectProvider>
      </body>
    </html>
  )
}

