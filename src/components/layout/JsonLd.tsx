import React from 'react';
import { SITE_CONFIG } from '@/constants/site';
import { FAQ_ITEMS } from '@/constants/faq';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    url: 'https://safhalabs.id',
    logo: 'https://safhalabs.id/icon.png',
    image: 'https://safhalabs.id/og-image.jpg',
    description:
      'Mitra teknologi strategis penyedia jasa pembuatan website custom, sistem CRM WhatsApp, portal akademik sekolah, dan sistem internal korporasi di Bandung, Jawa Barat.',
    telephone: SITE_CONFIG.phoneDisplay,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bandung',
      addressRegion: 'Jawa Barat',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -6.9175,
      longitude: 107.6191,
    },
    areaServed: 'ID',
    sameAs: [SITE_CONFIG.instagramUrl],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
