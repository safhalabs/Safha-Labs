'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';
import HeroDashboardCard from './HeroDashboardCard';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="min-h-[calc(100vh-72px)] flex items-center relative overflow-hidden bg-[radial-gradient(circle_at_15%_30%,rgba(13,148,136,0.08)_0%,transparent_40%),radial-gradient(circle_at_85%_70%,rgba(245,158,11,0.08)_0%,transparent_40%),#f9fafb] px-8 py-16"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[901px]:grid-cols-[1.1fr_1fr] gap-16 items-center w-full">
        <div 
          className={`transition-all duration-800 ease-out max-[900px]:text-center ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'
          }`}
        >
          <div className="inline-block text-sm font-semibold uppercase tracking-wider text-teal-700 mb-4 px-3 py-1 bg-teal-600/10 rounded-full">
            Mitra Teknologi Strategis
          </div>
          <h1 className="text-[3.5rem] max-[1024px]:text-[3rem] max-[640px]:text-[2.25rem] leading-[1.1] font-extrabold text-gray-900 mb-6 tracking-[-0.02em]">
            Mitra Teknologi Anda untuk Digitalisasi yang<br />
            <span className="font-serif italic font-bold text-amber-600">Relevan dan Praktis</span>
          </h1>
          <p className="text-lg leading-[1.6] text-gray-600 mb-10 max-w-[90%] max-[900px]:max-w-full max-[900px]:mx-auto">
            Safha Labs adalah mitra teknologi strategis yang berfokus menyederhanakan kompleksitas operasional bisnis Anda melalui pengembangan CRM dan Website custom, didukung oleh rekam jejak solusi yang teruji di berbagai sektor.
          </p>
          <div className="flex flex-wrap gap-4 mb-12 max-[900px]:justify-center max-[640px]:flex-col max-[640px]:w-full">
            <a 
              href={SITE_CONFIG.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-amber-500 text-white px-7 py-[0.875rem] rounded-full font-semibold text-lg no-underline transition-all duration-300 shadow-[0_4px_6px_-1px_rgba(245,158,11,0.2),0_2px_4px_-1px_rgba(245,158,11,0.1)] hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-[0_10px_15px_-3px_rgba(245,158,11,0.3),0_4px_6px_-2px_rgba(245,158,11,0.15)] max-[640px]:w-full"
            >
              Konsultasi Kebutuhan Anda
            </a>
            <a 
              href="#layanan" 
              className="inline-flex items-center justify-center gap-2 bg-transparent text-gray-700 px-7 py-[0.875rem] rounded-full font-semibold text-lg no-underline transition-all duration-300 border border-gray-300 hover:bg-gray-100 hover:-translate-y-0.5 max-[640px]:w-full"
            >
              Lihat Layanan
              <ArrowDown size={20} />
            </a>
          </div>
          <div className="flex flex-wrap gap-3 max-[900px]:justify-center">
            <span className="text-sm font-medium text-gray-600 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-300/50">CRM Custom</span>
            <span className="text-sm font-medium text-gray-600 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-300/50">Website</span>
            <span className="text-sm font-medium text-gray-600 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-300/50">Dashboard</span>
            <span className="text-sm font-medium text-gray-600 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-300/50">Portal Akademik</span>
            <span className="text-sm font-medium text-gray-600 px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-300/50">Properti</span>
          </div>
        </div>

        <div 
          className={`relative w-full h-full min-h-[400px] max-[900px]:min-h-[350px] max-[900px]:max-w-[500px] max-[900px]:mx-auto max-[640px]:min-h-[280px] transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-5'
          }`}
        >
          <HeroDashboardCard />

          <div className="absolute bottom-[5%] -left-[5%] w-[200px] h-[120px] bg-white/90 backdrop-blur-md rounded-[16px] p-5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-white/50 z-5 max-[640px]:hidden animate-[floatAlt_7s_ease-in-out_infinite_1s]">
            <div className="h-3 bg-gray-200 rounded-[6px] w-full mb-3"></div>
            <div className="h-3 bg-gray-200 rounded-[6px] w-[60%]"></div>
          </div>
          <div className="absolute top-[15%] -right-[10%] w-[160px] h-[100px] bg-white/90 backdrop-blur-md rounded-[16px] p-5 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-white/50 z-5 max-[640px]:hidden animate-[float_8s_ease-in-out_infinite_2s]">
            <div className="w-8 h-8 rounded-full bg-gray-200 mb-3"></div>
            <div className="h-3 bg-gray-200 rounded-[6px] w-[60%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
