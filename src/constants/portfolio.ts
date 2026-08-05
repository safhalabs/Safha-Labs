export interface PortfolioItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  techPills: string[];
  type?: 'crm' | 'website' | 'listing';
  image?: string;
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'travel-mozaik',
    tag: 'CLIENT PROJECT',
    title: 'Website Landing Page Travel Umrah & Haji (Mozaik Travel Bandung)',
    description:
      'Landing page profesional yang dirancang untuk meningkatkan kepercayaan calon jamaah, menampilkan informasi paket secara jelas, serta memudahkan konsultasi dan pemesanan melalui WhatsApp.',
    techPills: ['Next.js', 'Tailwind CSS', 'SEO Optimized', 'Responsive Design'],
    image: '/portofolio/travel-mozaik-bandung.png',
    type: 'website',
  },
  {
    id: 'crm-whatsapp',
    tag: 'INTERNAL SYSTEM',
    title: 'CRM WhatsApp & Manajemen Klien',
    description:
      'Sistem CRM berbasis web untuk mengelola data klien, memantau status proyek, menyimpan riwayat komunikasi, dan meningkatkan efisiensi pengelolaan pelanggan dalam satu dashboard.',
    techPills: ['Google Apps Script', 'Firebase', 'WhatsApp API'],
    type: 'crm',
  },
];