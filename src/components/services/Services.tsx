'use client';

import React from 'react';
import { SERVICES_DATA } from '@/constants/services';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section id="layanan" className="bg-slate-100/70 py-24 px-6 section-lazy-render">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
            Layanan &amp; Solusi Nyata
          </span>
          <h2 className="text-3xl max-[768px]:text-2xl font-bold text-slate-900 m-0">
            Solusi Digital untuk Setiap Kebutuhan Sektor
          </h2>
        </div>

        <div className="grid grid-cols-1 min-[769px]:grid-cols-2 gap-6">
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
