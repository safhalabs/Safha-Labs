import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import dynamic from 'next/dynamic';
import './globals.css';
import JsonLd from '@/components/layout/JsonLd';

const FloatingWhatsApp = dynamic(() => import('@/components/layout/FloatingWhatsApp'));

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://safhalabs.com'),
  title: {
    default: 'Safha Labs | Jasa Pembuatan Website & CRM Custom Bandung',
    template: '%s | Safha Labs',
  },
  description:
    'Safha Labs adalah software house & mitra teknologi di Bandung. Menyediakan jasa pembuatan website custom, sistem CRM WhatsApp, portal akademik sekolah, dan aplikasi bisnis 100% hak milik.',
  keywords: [
    'Safha Labs',
    'safhalabs',
    'safhalabs.com',
    'jasa pembuatan website bandung',
    'jasa website bandung',
    'software house bandung',
    'crm whatsapp custom',
    'jasa bikin web bandung',
    'portal akademik sekolah',
    'website listing properti',
    'jasa web developer bandung',
    'sistem informasi sekolah',
    'jasa pembuatan web app',
    'web development indonesia',
  ],
  authors: [{ name: 'Safha Labs', url: 'https://safhalabs.com' }],
  creator: 'Safha Labs',
  publisher: 'Safha Labs',
  category: 'technology',
  classification: 'Software House & Web Development Services',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://safhalabs.com',
  },
  openGraph: {
    title: 'Safha Labs | Jasa Pembuatan Website & CRM Custom Bandung',
    description:
      'Mitra teknologi strategis penyedia jasa pembuatan website custom, sistem CRM WhatsApp, portal akademik, dan aplikasi web bisnis di Bandung.',
    url: 'https://safhalabs.com',
    siteName: 'Safha Labs',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safha Labs | Jasa Pembuatan Website & CRM Custom Bandung',
    description:
      'Mitra teknologi strategis penyedia jasa pembuatan website custom, sistem CRM WhatsApp, portal akademik, dan aplikasi web bisnis di Bandung.',
    creator: '@safhalabs',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${ibmPlexMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body suppressHydrationWarning>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
