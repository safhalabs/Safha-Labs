import { GraduationCap, Building2, Home, Briefcase, LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  accentColor: 'teal' | 'amber';
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'pendidikan',
    icon: GraduationCap,
    title: 'Sistem Pendidikan & Portal Akademik',
    description:
      'Kami meringankan beban guru dengan sistem input nilai dan absensi yang praktis, serta menyediakan akun portal terpisah bagi orang tua untuk memantau perkembangan anak secara real-time.',
    tags: ['Input Nilai', 'Absensi', 'Portal Orang Tua', 'PPDB Online'],
    accentColor: 'teal',
  },
  {
    id: 'korporasi',
    icon: Building2,
    title: 'Sistem Internal Korporasi',
    subtitle: 'HR, Finance, Marketing',
    description:
      'Kami menyederhanakan birokrasi tanpa merusak SOP perusahaan. Mulai dari sistem hiring HR yang terhubung ke CRM, manajemen pipeline Marketing, hingga platform pencatatan reimburse yang terstruktur untuk tim Finance.',
    tags: ['HR System', 'CRM Pipeline', 'Finance Tracker', 'Reimburse'],
    accentColor: 'amber',
  },
  {
    id: 'properti',
    icon: Home,
    title: 'Listing Properti & Real Estate',
    description:
      'Kami membangun website properti berkinerja tinggi untuk agen freelance hingga developer, dilengkapi filter pencarian spesifik (lokasi, harga, tipe unit) dan galeri visual untuk memaksimalkan tingkat konversi calon pembeli.',
    tags: ['Filter Pencarian', 'Galeri Visual', 'High Performance', 'Listing'],
    accentColor: 'teal',
  },
  {
    id: 'umkm',
    icon: Briefcase,
    title: 'Solusi UMKM & Tenaga Profesional',
    description:
      'Kami memfasilitasi pembuatan landing page dan katalog digital yang terintegrasi langsung dengan WhatsApp untuk mempercepat siklus transaksi UMKM. Selain itu, kami juga membangun website portofolio custom untuk meningkatkan kredibilitas personal branding konsultan atau freelancer.',
    tags: ['Landing Page', 'Katalog Digital', 'WhatsApp Integration', 'Portofolio'],
    accentColor: 'amber',
  },
];
