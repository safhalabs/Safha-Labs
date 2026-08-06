'use client';

import React from 'react';
import {
  ArrowRight,
  ArrowDown,
  Target,
  Crown,
  Star,
  CheckCircle2,
  Globe,
  Layout,
  Database,
  Smartphone,
  ShieldCheck,
  Cpu,
  MessageSquare
} from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

// Tech & Services Marquee items preserving Safha Labs domain
const SERVICES_MARQUEE = [
  { name: "CRM Custom", icon: Database },
  { name: "Website Enterprise", icon: Globe },
  { name: "Custom Dashboard", icon: Layout },
  { name: "Portal Akademik", icon: Cpu },
  { name: "Aplikasi Properti", icon: Smartphone },
  { name: "Sistem Kasir (POS)", icon: ShieldCheck },
];

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-gray-900 sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-medium sm:text-xs text-center">{label}</span>
  </div>
);

export default function Hero() {
  return (
    <section className="relative w-full bg-[#FAFAFC] text-gray-900 overflow-hidden font-sans min-h-[100dvh] flex items-center">
      {/* SCOPED ANIMATIONS */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-fade-in {
          animation: fadeSlideIn 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Controlled Soft Ambient Radial Glows */}
      <div className="absolute top-[15%] left-[10%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-teal-400/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[450px] max-h-[450px] bg-amber-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-28 pb-16 sm:px-6 md:pt-36 md:pb-24 lg:px-8 w-full">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-center">

          {/* --- LEFT COLUMN (Safha Labs Copy) --- */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

            {/* Badge (10% Accent) */}
            <div className="animate-fade-in delay-100">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 backdrop-blur-md transition-all hover:bg-amber-500/15">
                <Star className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
                  Custom Web & Software House
                </span>
              </div>
            </div>

            {/* Heading preserving Safha Labs UX Context */}
            <h1
              className="animate-fade-in delay-200 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#070D18]"
            >
              Solusi Digitalisasi Bisnis yang{" "}
              <span className="font-serif italic text-amber-600 font-semibold">
                Relevan dan Praktis
              </span>
            </h1>

            {/* Description preserving Safha Labs UX Context */}
            <p className="animate-fade-in delay-300 max-w-xl text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Kembangkan Website &amp; Sistem CRM custom berkinerja tinggi untuk mengotomatisasi operasional bisnis Anda, <span className="text-gray-900 font-semibold">100% hak milik tanpa biaya sewa vendor</span>.
            </p>

            {/* CTA Buttons preserving Safha Labs links */}
            <div className="animate-fade-in delay-400 flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={SITE_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-amber-600 hover:-translate-y-0.5 active:scale-[0.98] shadow-lg shadow-amber-500/20"
              >
                Konsultasi Kebutuhan Anda
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#layanan"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 active:scale-[0.98] shadow-sm"
              >
                Lihat Layanan
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>

          </div>

          {/* --- RIGHT COLUMN (Glassmorphism Stats Card & Marquee) --- */}
          <div className="lg:col-span-5 space-y-6 lg:mt-0">

            {/* Premium Clean Glassmorphism Trust Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-8 backdrop-blur-xl shadow-xl shadow-gray-200/50">
              {/* Soft Ambient Glow Accent */}
              <div className="absolute -top-12 -right-12 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/20">
                    <Target className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-gray-900">100%</div>
                    <div className="text-sm text-gray-500 font-medium">Solusi Custom &amp; Relevan</div>
                  </div>
                </div>

                {/* Progress Metric */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Efisiensi Operasional Klien</span>
                    <span className="text-amber-600 font-semibold">98% Faster</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div className="h-full w-[98%] rounded-full bg-amber-500" />
                  </div>
                </div>

                <div className="h-px w-full bg-gray-200/80 mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <StatItem value="10+" label="Proyek" />
                  <div className="w-px h-full bg-gray-200/80 mx-auto" />
                  <StatItem value="100%" label="Kualitas" />
                  <div className="w-px h-full bg-gray-200/80 mx-auto" />
                  <StatItem value="14 Hari" label="Garansi" />
                </div>

                {/* Status Badges (Unified Clean Palette) */}
                <div className="mt-8 flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-gray-700">
                    <MessageSquare className="w-3.5 h-3.5 text-amber-600" />
                    KONSULTASI GRATIS
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-amber-700">
                    <Crown className="w-3.5 h-3.5 text-amber-600" />
                    ENTERPRISE READY
                  </div>
                </div>
              </div>
            </div>

            {/* Light Marquee Card */}
            <div className="animate-fade-in delay-500 relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 py-6 backdrop-blur-xl shadow-lg shadow-gray-200/40">
              <h3 className="mb-4 px-6 text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-gray-400" />
                Spesialisasi Software &amp; System
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
                }}
              >
                <div className="animate-marquee flex gap-8 whitespace-nowrap px-4">
                  {[...SERVICES_MARQUEE, ...SERVICES_MARQUEE, ...SERVICES_MARQUEE].map((service, i) => (
                    <div
                      key={i}
                      className="group flex items-center gap-2 text-gray-700 transition-all hover:text-gray-900 cursor-default"
                    >
                      <service.icon className="h-4 h-4 text-gray-400 group-hover:text-amber-600 transition-colors" />
                      <span className="text-sm font-semibold tracking-tight text-gray-800">
                        {service.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
