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
    <section id="mengapa" className="bg-[#FAFAFC] py-24 px-6 section-lazy-render" ref={sectionRef}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-700 block mb-3">
            Keunggulan Safha Labs
          </span>
          <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-[#070D18] m-0 tracking-tight leading-tight">
            Tiga Pilar yang Membedakan Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-3 gap-6">
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
