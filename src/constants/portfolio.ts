export interface PortfolioItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  techPills: string[];
  type: 'crm' | 'listing';
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'crm-whatsapp',
    tag: 'INTERNAL SYSTEM',
    title: 'CRM WhatsApp & Manajemen Klien',
    description:
      'Sistem CRM internal yang dibangun menggunakan Google Appscript dan Firebase untuk mengelola komunikasi klien melalui WhatsApp secara terstruktur dan efisien.',
    techPills: ['Google Appscript', 'Firebase', 'WhatsApp API'],
    type: 'crm',
  },
  {
    id: 'properti-listing',
    tag: 'CLIENT PROJECT',
    title: 'Website Listing Agen Properti Freelancer',
    description:
      'Website properti berkinerja tinggi dengan filter pencarian spesifik, galeri visual, dan integrasi kontak langsung untuk memaksimalkan tingkat konversi calon pembeli.',
    techPills: ['Next.js', 'Responsive Design', 'SEO Optimized'],
    type: 'listing',
  },
];
