'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Zap, CheckCircle2 } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tentang" className="py-28 px-6 bg-white relative overflow-hidden section-lazy-render" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        <div 
          className={`grid grid-cols-1 min-[960px]:grid-cols-12 gap-12 min-[960px]:gap-16 items-stretch transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {/* Left Column (7 cols): Main Copy & Highlights */}
          <div className="min-[960px]:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-700 block mb-3">
                Tentang Safha Labs
              </span>
              <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-[#070D18] mb-6 leading-[1.15] tracking-tight">
                Berawal dari Kebutuhan Internal, Berkembang Menjadi Solusi Digital Relevan
              </h2>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-5">
                Safha Labs lahir dari pengamatan langsung terhadap kompleksitas operasional di berbagai sektor bisnis. Kami menyadari bahwa banyak organisasi kesulitan menemukan solusi digital yang benar-benar pas dengan alur kerja mereka, yang sering kali terlalu rumit, terlalu mahal, atau justru terlalu generik.
              </p>
              <p className="text-gray-600 text-[17px] leading-relaxed mb-8">
                Berbekal pengalaman mengembangkan sistem internal dan menangani berbagai proyek kustom, kami memosisikan diri bukan sekadar sebagai vendor perangkat lunak, melainkan sebagai mitra teknologi strategis yang mendengarkan, menganalisis, dan mengeksekusi solusi secara presisi.
              </p>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-slate-100 pt-8 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0 border border-teal-100/80 shadow-xs">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#070D18] text-[15.5px] mb-1 tracking-tight">Fokus pada Relevansi</h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed m-0">Fitur yang dibangun memberikan nilai tambah nyata bagi operasional Anda.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0 border border-amber-100/80 shadow-xs">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#070D18] text-[15.5px] mb-1 tracking-tight">Pengembangan Tepat Guna</h4>
                  <p className="text-gray-600 text-[14px] leading-relaxed m-0">Intuitif dan mudah diadopsi oleh tim Anda tanpa kendala teknis berlebih.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Stacked Cards for Perfect Height Balance */}
          <div className="min-[960px]:col-span-5 flex flex-col justify-between gap-6">
            {/* Top Philosophy Quote Card */}
            <div className="bg-[#070D18] text-white rounded-[28px] p-8 min-[960px]:p-9 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] relative z-10 border border-white/10 overflow-hidden group flex-1 flex flex-col justify-between">
              {/* Subtle background texture */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
              
              <div>
                <div className="inline-block text-amber-400 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  Filosofi Kerja
                </div>
                <blockquote className="text-[1.25rem] min-[960px]:text-[1.35rem] font-serif italic text-white/90 leading-relaxed mb-8 relative z-10 m-0">
                  &ldquo;Teknologi terbaik bukan tentang seberapa rumit fitur yang dibuat, melainkan seberapa sederhana ia menyederhanakan masalah nyata Anda.&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-6 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                  <Users size={18} />
                </div>
                <div>
                  <div className="font-semibold text-white/95 text-[14px]">Tim Safha Labs</div>
                  <div className="text-white/50 text-xs">Pragmatic Software Engineers</div>
                </div>
              </div>
              
              {/* Hover Glow */}
              <div className="absolute -top-[50%] -right-[50%] w-full h-full bg-teal-500/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
            </div>
            
            {/* Bottom Value Metric Card */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-[24px] p-6 flex items-center gap-5 shadow-xs hover:border-teal-500/30 transition-all duration-300">
              <div className="w-11 h-11 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 shrink-0">
                <CheckCircle2 size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-[#070D18] text-[15px] mb-0.5 m-0">100% Solusi Kustom</h4>
                <p className="text-gray-600 text-[13.5px] leading-snug m-0">Tanpa bloatware. Dirancang presisi sesuai alur kerja unik Anda.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
