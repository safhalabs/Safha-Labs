'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Process.module.css';
import { MessageCircle, FileSearch, CreditCard, Code, RefreshCw, CheckCircle, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: 'Konsultasi Awal',
    description: 'Diskusi mendalam mengenai kebutuhan, tujuan, dan gambaran fitur yang diinginkan.'
  },
  {
    icon: FileSearch,
    title: 'Scoping & Penawaran Harga',
    description: 'Pemetaan cakupan kerja dan penyusunan harga secara transparan.'
  },
  {
    icon: CreditCard,
    title: 'Pembayaran DP 50%',
    description: 'Pengerjaan resmi dimulai setelah kesepakatan uang muka.'
  },
  {
    icon: Code,
    title: 'Tahap Pengembangan',
    description: 'Proses pembuatan sistem secara custom dengan update laporan berkala ke klien.'
  },
  {
    icon: RefreshCw,
    title: 'Revisi',
    description: 'Kesempatan memberikan umpan balik (maksimal 2x revisi minor gratis).'
  },
  {
    icon: CheckCircle,
    title: 'Pelunasan & Serah Terima',
    description: 'Sisa 50% dibayarkan, hak akses dan source code diserahkan sepenuhnya.'
  },
  {
    icon: ShieldCheck,
    title: 'Dukungan 14 Hari',
    description: 'Masa garansi untuk pendampingan dan perbaikan bug secara gratis.'
  }
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

    const stepElements = containerRef.current?.querySelectorAll(`.${styles.step}`);
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="proses" className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Siklus Kolaborasi</span>
          <h2 className={styles.title}>Tujuh Langkah Menuju Sistem Digital Anda</h2>
        </div>

        <div className={styles.timeline} ref={containerRef}>
          <div className={styles.line}></div>
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isVisible = visibleSteps.includes(index);
            const isOdd = index % 2 === 0; // 0-indexed, so 0 is step 1 (odd)
            
            return (
              <div 
                key={index} 
                className={`${styles.step} ${isVisible ? styles.visible : ''}`}
                data-index={index}
              >
                <div className={styles.stepLeft}>
                  <div className={`${styles.circle} ${isOdd ? styles.amber : styles.teal}`}>
                    {index + 1}
                  </div>
                </div>
                <div className={styles.stepRight}>
                  <div className={styles.iconContainer}>
                    <Icon className={styles.icon} />
                  </div>
                  <div className={styles.content}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
