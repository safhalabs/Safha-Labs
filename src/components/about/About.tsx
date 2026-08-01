'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Target, Users, Zap } from 'lucide-react';

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
    <section id="tentang" className="py-24 px-8 bg-white relative overflow-hidden section-lazy-render" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        <div 
          className={`grid grid-cols-1 min-[901px]:grid-cols-2 gap-16 items-center transition-all duration-800 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <div>
            <div className="inline-block text-sm font-semibold uppercase tracking-wider text-amber-700 mb-4 px-3 py-1 bg-amber-500/10 rounded-full">
              Tentang Kami
            </div>
            <h2 className="text-4xl max-[1024px]:text-3xl max-[640px]:text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Berawal dari Kebutuhan Internal, Berkembang Menjadi Solusi Digital Relevan
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Safha Labs lahir dari pengamatan langsung terhadap kompleksitas operasional di berbagai sektor bisnis. Kami menyadari bahwa banyak organisasi kesulitan menemukan solusi digital yang benar-benar pas dengan alur kerja mereka—sering kali terlalu rumit, terlalu mahal, atau justru terlalu generik.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Berbekal pengalaman mengembangkan sistem internal dan menangani berbagai proyek kustom, kami memosisikan diri bukan sekadar sebagai vendor perangkat lunak, melainkan sebagai mitra teknologi strategis yang mendengarkan, menganalisis, dan mengeksekusi solusi secara presisi.
            </p>
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-600/10 flex items-center justify-center text-teal-700 shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base mb-1">Fokus pada Relevansi</h4>
                  <p className="text-gray-600 text-sm m-0">Kami hanya membangun fitur yang memberikan nilai tambah nyata bagi operasional Anda.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                  <Zap size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-base mb-1">Pengembangan Tepat Guna</h4>
                  <p className="text-gray-600 text-sm m-0">Sistem dirancang intuitif sehingga mudah diadopsi oleh tim Anda tanpa kendala teknis berlebih.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-900 text-white rounded-3xl p-10 shadow-2xl relative z-10 border border-slate-800">
              <div className="inline-block text-amber-500 font-mono text-sm uppercase tracking-wider mb-6">
                Filosofi Kerja Kami
              </div>
              <blockquote className="text-2xl max-[640px]:text-xl font-serif italic text-slate-200 leading-snug mb-8">
                &ldquo;Teknologi terbaik bukan tentang seberapa rumit fitur yang dibuat, melainkan seberapa sederhana ia menyederhanakan masalah nyata Anda.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-500">
                  <Users size={24} />
                </div>
                <div>
                  <div className="font-semibold text-white">Tim Safha Labs</div>
                  <div className="text-slate-400 text-sm">Pragmatic Software Engineers</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-dashed border-gray-200 rounded-3xl -z-0 hidden min-[641px]:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
