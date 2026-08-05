'use client';

import React from 'react';
import { SERVICES_DATA } from '@/constants/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="layanan" className="bg-white py-24 px-6 section-lazy-render">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16 max-w-[800px] mx-auto">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-700 block mb-3">
            Layanan Utama
          </span>
          <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-[#070D18] m-0 tracking-tight leading-tight">
            Solusi Digital untuk Setiap Kebutuhan Sektor
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[960px]:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
