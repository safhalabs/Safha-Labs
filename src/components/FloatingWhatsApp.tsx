import React from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './FloatingWhatsApp.module.css';

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/6285117808182?text=Halo%20Safha%20Labs%2C%20saya%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20mengenai%20proyek%20saya."
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatingButton}
      aria-label="Chat di WhatsApp"
    >
      <MessageCircle size={28} className={styles.icon} />
      <span className={styles.tooltip}>Hubungi Kami</span>
    </a>
  );
};

export default FloatingWhatsApp;
