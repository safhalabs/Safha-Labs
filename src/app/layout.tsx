import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Safha Labs — Mitra Teknologi untuk Digitalisasi Bisnis',
  description:
    'Safha Labs adalah mitra teknologi strategis yang berfokus menyederhanakan kompleksitas operasional bisnis Anda melalui pengembangan CRM dan Website custom, didukung oleh rekam jejak solusi yang teruji di berbagai sektor.',
  keywords: ['safha labs', 'web development', 'CRM', 'digitalisasi bisnis', 'website custom', 'Indonesia'],
  openGraph: {
    title: 'Safha Labs — Mitra Teknologi untuk Digitalisasi Bisnis',
    description: 'Mitra teknologi strategis untuk CRM dan Website custom.',
    type: 'website',
    locale: 'id_ID',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${ibmPlexMono.variable}`}>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
