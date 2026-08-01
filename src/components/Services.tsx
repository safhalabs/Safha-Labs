'use client';

import React from 'react';
import styles from './Services.module.css';
import { GraduationCap, Building2, Home, Briefcase } from 'lucide-react';

export default function Services() {
  return (
    <section id="layanan" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Layanan &amp; Solusi Nyata</span>
          <h2 className={styles.title}>Solusi Digital untuk Setiap Kebutuhan Sektor</h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.teal}`}>
              <GraduationCap className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Sistem Pendidikan &amp; Portal Akademik</h3>
            <p className={styles.cardDesc}>
              Kami meringankan beban guru dengan sistem input nilai dan absensi yang praktis, serta menyediakan akun portal terpisah bagi orang tua untuk memantau perkembangan anak secara real-time.
            </p>
            <div className={styles.tags}>
              <span>Input Nilai</span>
              <span>Absensi</span>
              <span>Portal Orang Tua</span>
              <span>PPDB Online</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.amber}`}>
              <Building2 className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Sistem Internal Korporasi</h3>
            <p className={styles.cardSubtitle}>HR, Finance, Marketing</p>
            <p className={styles.cardDesc}>
              Kami menyederhanakan birokrasi tanpa merusak SOP perusahaan. Mulai dari sistem hiring HR yang terhubung ke CRM, manajemen pipeline Marketing, hingga platform pencatatan reimburse yang terstruktur untuk tim Finance.
            </p>
            <div className={styles.tags}>
              <span>HR System</span>
              <span>CRM Pipeline</span>
              <span>Finance Tracker</span>
              <span>Reimburse</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.teal}`}>
              <Home className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Listing Properti &amp; Real Estate</h3>
            <p className={styles.cardDesc}>
              Kami membangun website properti berkinerja tinggi untuk agen freelance hingga developer, dilengkapi filter pencarian spesifik (lokasi, harga, tipe unit) dan galeri visual untuk memaksimalkan tingkat konversi calon pembeli.
            </p>
            <div className={styles.tags}>
              <span>Filter Pencarian</span>
              <span>Galeri Visual</span>
              <span>High Performance</span>
              <span>Listing</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <div className={`${styles.iconWrapper} ${styles.amber}`}>
              <Briefcase className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Solusi UMKM &amp; Tenaga Profesional</h3>
            <p className={styles.cardDesc}>
              Kami memfasilitasi pembuatan landing page dan katalog digital yang terintegrasi langsung dengan WhatsApp untuk mempercepat siklus transaksi UMKM. Selain itu, kami juga membangun website portofolio custom untuk meningkatkan kredibilitas personal branding konsultan atau freelancer.
            </p>
            <div className={styles.tags}>
              <span>Landing Page</span>
              <span>Katalog Digital</span>
              <span>WhatsApp Integration</span>
              <span>Portofolio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
