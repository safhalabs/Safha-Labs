import { Fingerprint, Handshake, ShieldCheck, LucideIcon } from 'lucide-react';

export interface WhyUsItem {
  id: string;
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  variant: 'card1' | 'card2' | 'card3';
}

export const WHY_US_DATA: WhyUsItem[] = [
  {
    id: 'custom',
    icon: Fingerprint,
    tag: 'ANTI-TEMPLATE',
    title: '100% Custom & Tepat Guna',
    description:
      'Kami menolak pendekatan template generik. Setiap baris kode dan sistem dirancang agar relevan dan menyesuaikan diri dengan alur kerja (SOP) nyata bisnis Anda, bukan sebaliknya.',
    variant: 'card1',
  },
  {
    id: 'hassle-free',
    icon: Handshake,
    tag: 'HASSLE-FREE',
    title: 'Transparansi Eksekusi',
    description:
      'Kami menerapkan alur kerja yang jelas mulai dari scoping harga di awal, batasan 2x revisi minor gratis, hingga serah terima hak akses dan source code secara penuh setelah proyek lunas.',
    variant: 'card2',
  },
  {
    id: 'garansi',
    icon: ShieldCheck,
    tag: '14 HARI GARANSI',
    title: 'Jaminan Kestabilan Pasca-Peluncuran',
    description:
      'Kami tidak lepas tangan setelah proyek selesai. Kami menjamin garansi perbaikan bug gratis selama 14 hari setelah serah terima proyek untuk memastikan transisi sistem berjalan lancar.',
    variant: 'card3',
  },
];
