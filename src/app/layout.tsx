import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HorizonSeaweed - 지평선 김 | 세계 최초 육상 스마트 김양식 지평선 김',
  description: '블록체인 기반 스마트 김양식 플랫폼',
  keywords: '지평선 김, 스마트팜, 김양식, 블록체인, IoT, SEAWEED토큰',
  openGraph: {
    title: 'HorizonSeaweed - 지평선 김 스마트 김양식 플랫폼',
    description: '세계 최초 육상 스마트 김양식 지평선 김',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} bg-dark-400 text-white overflow-x-hidden`}>
        <div className="particle-bg" />
        {children}
      </body>
    </html>
  )
}