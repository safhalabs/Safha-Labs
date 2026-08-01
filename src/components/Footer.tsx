'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Mail, AtSign, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <section id="kontak" className={styles.ctaSection}>
        <div className={styles.ctaBg}></div>
        <div className={styles.ctaContainer}>
          <h2 className={styles.ctaTitle}>Ready to Digitize Your Operations?</h2>
          <p className={styles.ctaDesc}>
            Let's build a system that truly follows your team's workflow. Schedule a free consultation and discover how we can streamline your business operations.
          </p>
          <a 
            href="https://wa.me/6285117808182?text=Halo%20Safha%20Labs%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20proyek%20saya." 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Start Your Consultation
          </a>
          <span className={styles.ctaNote}>Free consultation • No commitment required</span>
        </div>
      </section>

      {/* Contact Info Row */}
      <div className={styles.contactContainer}>
        <div className={styles.contactRow}>
          <a href="https://wa.me/6285117808182?text=Halo%20Safha%20Labs%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20proyek%20saya." target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <MessageCircle className={styles.contactIcon} size={20} />
            <span>+62 851-1780-8182</span>
          </a>
          <a href="mailto:hello@safhalabs.id" className={styles.contactItem}>
            <Mail className={styles.contactIcon} size={20} />
            <span>hello@safhalabs.id</span>
          </a>
          <a href="https://instagram.com/safhalabs" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <AtSign className={styles.contactIcon} size={20} />
            <span>@safhalabs</span>
          </a>
          <div className={styles.contactItem}>
            <MapPin className={styles.contactIcon} size={20} />
            <span>Bandung, Jawa Barat, Indonesia</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottomContainer}>
        <div className={styles.bottomRow}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/logo.png" 
              alt="Safha Labs Logo" 
              width={240} 
              height={60} 
              className={styles.footerLogoImage}
            />
          </Link>
          <nav className={styles.navLinks}>
            <Link href="#tentang">About</Link>
            <Link href="#layanan">Services</Link>
            <Link href="#proses">Process</Link>
            <Link href="#portofolio">Portfolio</Link>
            <Link href="#kontak">Contact</Link>
          </nav>
          <div className={styles.copyright}>
            © 2026 Safha Labs. All rights reserved.
          </div>
        </div>
        <div className={styles.crafted}>
          Crafted with precision by Safha Labs
        </div>
      </div>
    </footer>
  );
};

export default Footer;
