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
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] border border-[#25D366]/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group animate-[float_4s_ease-in-out_infinite] hover:animate-none"
    >
      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <MessageCircle size={28} className="fill-white stroke-none relative z-10" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] font-medium text-[15px] pl-0 group-hover:pl-3 relative z-10">
        Konsultasi Proyek
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
