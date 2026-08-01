'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Portfolio.module.css';

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
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Rekam Jejak</span>
          <h2 className={styles.title}>Proyek yang Telah Kami Kerjakan</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.tag}>INTERNAL SYSTEM</span>
              <h3 className={styles.cardTitle}>CRM WhatsApp & Manajemen Klien</h3>
              <p className={styles.cardDesc}>
                Sistem CRM internal yang dibangun menggunakan Google Appscript dan Firebase untuk mengelola komunikasi klien melalui WhatsApp secara terstruktur dan efisien.
              </p>
              <div className={styles.techPills}>
                <span className={styles.pill}>Google Appscript</span>
                <span className={styles.pill}>Firebase</span>
                <span className={styles.pill}>WhatsApp API</span>
              </div>
            </div>
            <div className={styles.mockupArea}>
              <div className={styles.mockupDashboard}>
                <div className={styles.mockupSidebar}></div>
                <div className={styles.mockupMain}>
                  <div className={styles.mockupCards}>
                    <div className={styles.mockupCard}></div>
                    <div className={styles.mockupCard}></div>
                    <div className={styles.mockupCard}></div>
                  </div>
                  <div className={styles.mockupChart}>
                    <div className={styles.chartBar} style={{height: '40%'}}></div>
                    <div className={styles.chartBar} style={{height: '70%'}}></div>
                    <div className={styles.chartBar} style={{height: '50%'}}></div>
                    <div className={styles.chartBar} style={{height: '90%'}}></div>
                    <div className={styles.chartBar} style={{height: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.tag}>CLIENT PROJECT</span>
              <h3 className={styles.cardTitle}>Website Listing Agen Properti Freelancer</h3>
              <p className={styles.cardDesc}>
                Website properti berkinerja tinggi dengan filter pencarian spesifik, galeri visual, dan integrasi kontak langsung untuk memaksimalkan tingkat konversi calon pembeli.
              </p>
              <div className={styles.techPills}>
                <span className={styles.pill}>Next.js</span>
                <span className={styles.pill}>Responsive Design</span>
                <span className={styles.pill}>SEO Optimized</span>
              </div>
            </div>
            <div className={styles.mockupArea}>
              <div className={styles.mockupListing}>
                <div className={styles.mockupFilter}></div>
                <div className={styles.mockupGrid}>
                  <div className={styles.listingCard}>
                    <div className={styles.listingImg}></div>
                    <div className={styles.listingText}></div>
                  </div>
                  <div className={styles.listingCard}>
                    <div className={styles.listingImg}></div>
                    <div className={styles.listingText}></div>
                  </div>
                  <div className={styles.listingCard}>
                    <div className={styles.listingImg}></div>
                    <div className={styles.listingText}></div>
                  </div>
                  <div className={styles.listingCard}>
                    <div className={styles.listingImg}></div>
                    <div className={styles.listingText}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
