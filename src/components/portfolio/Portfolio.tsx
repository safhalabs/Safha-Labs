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
      className={`bg-[#0A1628] py-24 transition-all duration-800 ease-out section-lazy-render ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
      }`}
      ref={sectionRef}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 text-sm font-semibold uppercase tracking-widest block mb-4">
            Rekam Jejak
          </span>
          <h2 className="text-white text-4xl max-[900px]:text-3xl font-serif font-normal leading-tight">
            Proyek yang Telah Kami Kerjakan
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[901px]:grid-cols-2 gap-7">
          {PORTFOLIO_DATA.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
