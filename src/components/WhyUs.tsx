'use client';

import { useEffect, useRef } from 'react';
import { Fingerprint, Handshake, ShieldCheck } from 'lucide-react';
import styles from './WhyUs.module.css';

export default function WhyUs() {
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

    const elements = sectionRef.current?.querySelectorAll(`.${styles.card}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="mengapa" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Mengapa Safha Labs</span>
          <h2>Tiga Pilar yang Membedakan Kami</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={styles.iconContainer}>
              <Fingerprint className={styles.icon} />
            </div>
            <span className={styles.tag}>ANTI-TEMPLATE</span>
            <h3>100% Custom & Tepat Guna</h3>
            <p>
              Kami menolak pendekatan template generik. Setiap baris kode dan sistem dirancang agar relevan dan menyesuaikan diri dengan alur kerja (SOP) nyata bisnis Anda, bukan sebaliknya.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.iconContainer}>
              <Handshake className={styles.icon} />
            </div>
            <span className={styles.tag}>HASSLE-FREE</span>
            <h3>Transparansi Eksekusi</h3>
            <p>
              Kami menerapkan alur kerja yang jelas mulai dari scoping harga di awal, batasan 2x revisi minor gratis, hingga serah terima hak akses dan source code secara penuh setelah proyek lunas.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={styles.iconContainer}>
              <ShieldCheck className={styles.icon} />
            </div>
            <span className={styles.tag}>14 HARI GARANSI</span>
            <h3>Jaminan Kestabilan Pasca-Peluncuran</h3>
            <p>
              Kami tidak lepas tangan setelah proyek selesai. Kami menjamin garansi perbaikan bug gratis selama 14 hari setelah serah terima proyek untuk memastikan transisi sistem berjalan lancar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
