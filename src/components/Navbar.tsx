'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <span className={styles.logoText}>Safha</span>
          <span className={styles.logoItalic}>Labs</span>
        </Link>

        <div className={styles.desktopNav}>
          <Link href="#tentang" className={styles.navLink}>Tentang</Link>
          <Link href="#layanan" className={styles.navLink}>Layanan</Link>
          <Link href="#proses" className={styles.navLink}>Proses</Link>
          <Link href="#portofolio" className={styles.navLink}>Portofolio</Link>
          <Link href="#kontak" className={styles.navLink}>Kontak</Link>
        </div>

        <div className={styles.desktopActions}>
          <a href="https://wa.me/6285117808182?text=Halo%20Safha%20Labs%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20proyek%20saya." target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Mulai Proyek
          </a>
        </div>

        <button className={styles.mobileMenuButton} onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <div className={styles.mobileNavLinks}>
          <Link href="#tentang" className={styles.mobileNavLink} onClick={toggleMenu}>Tentang</Link>
          <Link href="#layanan" className={styles.mobileNavLink} onClick={toggleMenu}>Layanan</Link>
          <Link href="#proses" className={styles.mobileNavLink} onClick={toggleMenu}>Proses</Link>
          <Link href="#portofolio" className={styles.mobileNavLink} onClick={toggleMenu}>Portofolio</Link>
          <Link href="#kontak" className={styles.mobileNavLink} onClick={toggleMenu}>Kontak</Link>
          <a href="https://wa.me/6285117808182?text=Halo%20Safha%20Labs%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20proyek%20saya." target="_blank" rel="noopener noreferrer" className={styles.mobileCtaButton}>
            Mulai Proyek
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
