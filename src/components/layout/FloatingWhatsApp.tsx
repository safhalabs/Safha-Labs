'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/constants/site';

const FloatingWhatsApp = () => {
  return (
    <a
      href={SITE_CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi via WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle size={28} className="fill-white stroke-none" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-medium text-sm pl-0 group-hover:pl-2">
        Konsultasi Proyek
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
