import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_LINKS } from '@/constants/site';

const Footer = () => {
  return (
    <footer className="bg-[#09090B] text-white pt-32 pb-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex justify-between items-end max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-10 pb-24 border-b border-white/5">
          <div className="max-w-[700px]">
            <span className="inline-block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-400 bg-teal-400/10 px-3 py-1.5 rounded-full border border-teal-400/20 backdrop-blur-sm mb-6">
              Siap Bermitra?
            </span>
            <h2 className="text-white text-[2.75rem] max-[960px]:text-4xl max-[640px]:text-3xl font-bold leading-tight m-0 tracking-tight">
              Mari diskusikan proyek sistem atau website Anda.
            </h2>
          </div>

          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-[17px] px-8 py-4.5 rounded-full transition-all duration-300 shadow-[0_4px_10px_rgba(245,158,11,0.2)] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(245,158,11,0.3)] active:scale-[0.98] group"
          >
            Konsultasi Sekarang
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-4 gap-12 min-[960px]:gap-16 py-20 border-b border-white/5">
          <div className="min-[960px]:col-span-1">
            <Link href="/" className="inline-block mb-8 transition-transform duration-300 hover:scale-105 active:scale-95">
              <Image
                src="/logo.svg"
                alt={SITE_CONFIG.name}
                width={160}
                height={40}
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-slate-400 text-[15.5px] leading-relaxed m-0">
              Mitra teknologi strategis yang berfokus menyederhanakan operasional bisnis melalui CRM dan Website custom.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[15px] font-semibold tracking-wide mb-8 m-0 uppercase opacity-90">Navigasi</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-amber-500 transition-colors duration-300 text-[15.5px] no-underline flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-amber-500 transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[15px] font-semibold tracking-wide mb-8 m-0 uppercase opacity-90">Solusi Utama</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {['CRM WhatsApp Custom', 'Portal Akademik & Sekolah', 'Website Listing Properti', 'Internal HR & Finance System', 'Website Landing Page'].map((sol, idx) => (
                <li key={idx} className="text-slate-400 text-[15.5px] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                  {sol}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[15px] font-semibold tracking-wide mb-8 m-0 uppercase opacity-90">Kontak &amp; Lokasi</h4>
            <ul className="list-none p-0 m-0 flex flex-col gap-5 text-slate-400 text-[15.5px]">
              <li className="flex items-start gap-3.5 group">
                <MapPin className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors shrink-0 mt-0.5" />
                <span className="group-hover:text-slate-300 transition-colors">{SITE_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-3.5 group">
                <Phone className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors shrink-0" />
                <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors no-underline">
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3.5 group">
                <Mail className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-slate-400 hover:text-amber-500 transition-colors no-underline">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex justify-between items-center max-[640px]:flex-col max-[640px]:gap-4 text-slate-500 text-[14px]">
          <p className="m-0">&copy; {new Date().getFullYear()} Safha Labs. All rights reserved.</p>
          <div className="flex gap-8">
            <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors no-underline">
              Instagram
            </a>
            <a href={SITE_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors no-underline">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
