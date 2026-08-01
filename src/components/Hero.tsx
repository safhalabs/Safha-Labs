'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import styles from './Hero.module.css';

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
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.eyebrow}>Mitra Teknologi Strategis</div>
          <h1 className={styles.title}>
            Mitra Teknologi Anda untuk Digitalisasi yang<br />
            <span className={styles.highlight}>Relevan dan Praktis</span>
          </h1>
          <p className={styles.description}>
            Safha Labs adalah mitra teknologi strategis yang berfokus menyederhanakan kompleksitas operasional bisnis Anda melalui pengembangan CRM dan Website custom, didukung oleh rekam jejak solusi yang teruji di berbagai sektor.
          </p>
          <div className={styles.actions}>
            <a href="https://wa.me/6285117808182?text=Halo%20Safha%20Labs%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20proyek%20saya." target="_blank" rel="noopener noreferrer" className={styles.primaryCta}>
              Konsultasi Kebutuhan Anda
            </a>
            <a href="#layanan" className={styles.secondaryCta}>
              Lihat Layanan
              <ArrowDown size={20} />
            </a>
          </div>
          <div className={styles.tags}>
            <span className={styles.tag}>CRM Custom</span>
            <span className={styles.tag}>Website</span>
            <span className={styles.tag}>Dashboard</span>
            <span className={styles.tag}>Portal Akademik</span>
            <span className={styles.tag}>Properti</span>
          </div>
        </div>
        <div className={`${styles.art} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.dashboardCard}>
            <div className={styles.cardHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.cardTitle}>Performance Overview</div>
            </div>
            <div className={styles.kpiRow}>
              <div className={styles.kpi}>+42% Efisiensi</div>
              <svg className={styles.sparkline} viewBox="0 0 100 20">
                <path d="M0,15 L20,10 L40,12 L60,5 L80,8 L100,2" fill="none" stroke="#0d9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className={styles.chart}>
              <div className={styles.bar} style={{ height: '40%' }}></div>
              <div className={styles.barAlt} style={{ height: '70%' }}></div>
              <div className={styles.bar} style={{ height: '50%' }}></div>
              <div className={styles.barAlt} style={{ height: '90%' }}></div>
              <div className={styles.bar} style={{ height: '60%' }}></div>
              <div className={styles.barAlt} style={{ height: '80%' }}></div>
            </div>
          </div>
          <div className={`${styles.floatingCard} ${styles.card1}`}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLineShort}></div>
          </div>
          <div className={`${styles.floatingCard} ${styles.card2}`}>
            <div className={styles.skeletonCircle}></div>
            <div className={styles.skeletonLineShort}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
