'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  MessageCircle,
  FileSearch,
  CreditCard,
  Code,
  RefreshCw,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import ProcessStepItem from './ProcessStepItem';

const steps = [
  {
    icon: MessageCircle,
    title: 'Konsultasi Awal',
    description: 'Diskusi mendalam mengenai kebutuhan, tujuan, dan gambaran fitur yang diinginkan.',
  },
  {
    icon: FileSearch,
    title: 'Scoping & Penawaran Harga',
    description: 'Pemetaan cakupan kerja dan penyusunan harga secara transparan.',
  },
  {
    icon: CreditCard,
    title: 'Pembayaran DP 50%',
    description: 'Pengerjaan resmi dimulai setelah kesepakatan uang muka.',
  },
  {
    icon: Code,
    title: 'Tahap Pengembangan',
    description: 'Proses pembuatan sistem secara custom dengan update laporan berkala ke klien.',
  },
  {
    icon: RefreshCw,
    title: 'Revisi',
    description: 'Kesempatan memberikan umpan balik (maksimal 2x revisi minor gratis).',
  },
  {
    icon: CheckCircle,
    title: 'Pelunasan & Serah Terima',
    description: 'Sisa 50% dibayarkan, hak akses dan source code diserahkan sepenuhnya.',
  },
  {
    icon: ShieldCheck,
    title: 'Dukungan 14 Hari',
    description: 'Masa garansi untuk pendampingan dan perbaikan bug secara gratis.',
  },
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleSteps((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    const stepElements = containerRef.current?.querySelectorAll('[data-index]');
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proses" className="bg-[#FAFAFC] py-24 px-6 section-lazy-render">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-20 max-w-[700px] mx-auto">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.18em] text-amber-700 block mb-3">
            Metodologi Kerja
          </span>
          <h2 className="text-[2.25rem] min-[960px]:text-[2.75rem] font-bold text-[#070D18] m-0 tracking-tight leading-tight">
            Tujuh Langkah Menuju Sistem Digital Anda
          </h2>
        </div>

        <div className="relative pl-[22px] max-[640px]:pl-0" ref={containerRef}>
          <div className="absolute top-0 bottom-0 left-[44px] max-[640px]:left-[22px] w-[2px] bg-slate-200 z-1"></div>
          {steps.map((step, index) => {
            const isVisible = visibleSteps.includes(index);
            const isOdd = index % 2 === 0;

            return (
              <ProcessStepItem
                key={index}
                stepNumber={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isVisible={isVisible}
                isOdd={isOdd}
                dataIndex={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
