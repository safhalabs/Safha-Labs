'use client';

import { useEffect, useRef, useState } from 'react';
import { WHY_US_DATA } from '@/constants/whyUs';
import WhyUsCard from './WhyUsCard';

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section id="mengapa" className="bg-slate-50 py-24 px-6 section-lazy-render" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-15">
          <span className="inline-block text-teal-600 font-semibold uppercase tracking-widest text-sm mb-4">
            Mengapa Safha Labs
          </span>
          <h2 className="text-4xl max-[768px]:text-3xl font-bold text-slate-900 m-0">
            Tiga Pilar yang Membedakan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-6">
          {WHY_US_DATA.map((item, index) => (
            <WhyUsCard
              key={item.id}
              item={item}
              isVisible={isVisible}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
