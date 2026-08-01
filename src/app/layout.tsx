import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import JsonLd from '@/components/layout/JsonLd';

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
  metadataBase: new URL('https://safhalabs.id'),
  title: {
    default: 'Safha Labs — Jasa Pembuatan Website & CRM Custom Bandung',
    template: '%s | Safha Labs',
  },
  description:
    'Safha Labs adalah mitra teknologi strategis penyedia jasa pembuatan website custom, sistem CRM WhatsApp, portal akademik sekolah, dan sistem internal korporasi di Bandung.',
  keywords: [
    'safha labs',
    'jasa pembuatan website bandung',
    'crm whatsapp custom',
    'portal akademik sekolah',
    'website listing properti',
    'jasa web developer bandung',
    'sistem informasi sekolah',
    'web development indonesia',
  ],
  authors: [{ name: 'Safha Labs', url: 'https://safhalabs.id' }],
  creator: 'Safha Labs',
  publisher: 'Safha Labs',
  icons: {
    icon: '/favicon.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://safhalabs.id',
  },
  openGraph: {
    title: 'Safha Labs — Jasa Pembuatan Website & CRM Custom Bandung',
    description:
      'Mitra teknologi strategis untuk pembuatan CRM WhatsApp custom, portal akademik, dan website bisnis.',
    url: 'https://safhalabs.id',
    siteName: 'Safha Labs',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Safha Labs — Jasa Pembuatan Website & CRM Custom Bandung',
    description:
      'Mitra teknologi strategis untuk pembuatan CRM WhatsApp custom, portal akademik, dan website bisnis.',
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
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
