'use client';

import { useEffect, useRef } from 'react';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(`.${styles.reveal}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tentang" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftCol}>
          <span className={`${styles.eyebrow} ${styles.reveal}`}>Tentang Kami</span>
          <h2 className={styles.reveal}>
            Berawal dari Kebutuhan Internal, Berkembang Menjadi Solusi.
          </h2>
        </div>
        <div className={styles.rightCol}>
          <div className={`${styles.textBlock} ${styles.reveal}`}>
            <p>
              Safha Labs berawal dari kebutuhan internal untuk menyederhanakan operasional sehari-hari. Kami mulai dengan membangun CRM WhatsApp dan sistem manajemen klien secara custom menggunakan Google Appscript dan Firebase. Dari keberhasilan optimasi produktivitas ini, layanan kami berekspansi membantu lebih banyak bisnis mendigitalisasi operasional mereka.
            </p>
          </div>
          <div className={`${styles.visionBlock} ${styles.reveal}`}>
            <span className={styles.visionTag}>Visi Kami</span>
            <p>
              Menjadi mitra teknologi yang diandalkan oleh sekolah, tim kerja, dan pelaku bisnis untuk menyederhanakan proses mereka melalui sistem digital yang custom dan mudah dipakai.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
