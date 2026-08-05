'use client';

import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '@/constants/portfolio';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
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
    <section
      id="portofolio"
      className={`bg-[#070D18] py-24 transition-all duration-1000 ease-out section-lazy-render relative overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
        }`}
      ref={sectionRef}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-[700px] mx-auto">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-400 block mb-3">
            Rekam Jejak Proyek
          </span>
          <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-white m-0 tracking-tight leading-tight">
            Proyek yang Telah Kami Kerjakan
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
