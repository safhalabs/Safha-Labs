import React from 'react';
import { SITE_CONFIG } from '@/constants/site';
import { FAQ_ITEMS } from '@/constants/faq';

export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://safhalabs.com/#organization',
    name: SITE_CONFIG.name,
    legalName: 'Safha Labs',
    alternateName: ['Safha Labs Bandung', 'safhalabs.com', 'safhalabs'],
    url: 'https://safhalabs.com',
    logo: 'https://safhalabs.com/logo.svg',
    image: 'https://safhalabs.com/opengraph-image',
    description:
      'Safha Labs adalah software house & mitra teknologi terpercaya penyedia jasa pembuatan website custom, sistem CRM WhatsApp, portal akademik sekolah, aplikasi web bisnis, dan sistem internal di Bandung, Jawa Barat.',
    telephone: SITE_CONFIG.phoneDisplay,
    email: SITE_CONFIG.email,
    priceRange: '$$',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
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
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'Indonesia',
      },
      {
        '@type': 'City',
        name: 'Bandung',
      },
    ],
    knowsAbout: [
      'Jasa Pembuatan Website',
      'Web Development',
      'Sistem CRM WhatsApp Custom',
      'Portal Akademik Sekolah',
      'Sistem Kasir POS',
      'Website Listing Properti',
      'Software House Bandung',
      'Next.js',
      'React',
      'TypeScript',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Pengembangan Software & Website Safha Labs',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Pembuatan Website Custom & Landing Page',
            description:
              'Website profesional cepat, responsif, modern, dan SEO-friendly.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sistem CRM WhatsApp Terintegrasi',
            description:
              'Otomatisasi follow-up, broadcast pesan, manajemen prospek, dan customer service.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Portal Akademik & Sistem Sekolah',
            description:
              'Manajemen nilai, absensi, pembayaran SPP, dan laporan perkembangan siswa.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Aplikasi Properti & Sistem Internal Bisnis',
            description:
              'Platform listing properti terintegrasi dan sistem dashboard operasional kustom.',
          },
        },
      ],
    },
    sameAs: [SITE_CONFIG.instagramUrl, SITE_CONFIG.whatsappUrl],
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://safhalabs.com/#website',
    url: 'https://safhalabs.com',
    name: 'Safha Labs',
    alternateName: 'safhalabs.com',
    publisher: {
      '@id': 'https://safhalabs.com/#organization',
    },
    inLanguage: 'id-ID',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://safhalabs.com',
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
