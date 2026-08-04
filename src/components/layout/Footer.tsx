import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_LINKS } from '@/constants/site';

const Footer = () => {
  return (
    <footer className="bg-[#0A1628] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-end max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-8 pb-20 border-b border-white/10">
          <div className="max-w-[600px]">
            <span className="text-amber-500 font-mono text-sm uppercase tracking-widest block mb-4">
              Siap Bermitra?
            </span>
            <h2 className="text-white text-5xl max-[900px]:text-4xl max-[640px]:text-3xl font-serif font-normal leading-tight m-0">
              Mari diskusikan proyek sistem atau website Anda.
            </h2>
          </div>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg shadow-amber-500/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/30 group"
          >
            Konsultasi Sekarang
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 min-[901px]:grid-cols-4 gap-12 py-16 border-b border-white/10">
          <div className="min-[901px]:col-span-1">
            <Link href="/" className="inline-block mb-6 transition-transform duration-200 hover:scale-105">
              <Image
                src="/logo.svg"
                alt={SITE_CONFIG.name}
                width={160}
                height={40}
                className="h-9 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed m-0">
              Mitra teknologi strategis yang berfokus menyederhanakan operasional bisnis melalui CRM dan Website custom.
            </p>
          </div>

          <div>
            <h4 className="text-white text-base font-semibold mb-6 m-0">Navigasi</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-500 transition-colors text-[15px] no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base font-semibold mb-6 m-0">Solusi Utama</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-3 text-slate-400 text-[15px]">
              <li>CRM WhatsApp Custom</li>
              <li>Portal Akademik &amp; Sekolah</li>
              <li>Website Listing Properti</li>
              <li>Internal HR &amp; Finance System</li>
              <li>Landing Page UMKM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-base font-semibold mb-6 m-0">Kontak &amp; Lokasi</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-4 text-slate-400 text-[15px]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors no-underline">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-400 hover:text-amber-500 transition-colors no-underline">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center max-[640px]:flex-col max-[640px]:gap-4 text-slate-500 text-sm">
          <p className="m-0">&copy; {new Date().getFullYear()} Safha Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors no-underline">
              Instagram
            </a>
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-500 transition-colors no-underline">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
