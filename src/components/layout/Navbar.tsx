'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG, NAV_LINKS } from '@/constants/site';

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
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1100px] rounded-full transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] max-[860px]:w-[92%] ${isScrolled
          ? 'top-4 bg-white/85 backdrop-blur-xl shadow-lg border border-slate-300/80'
          : 'top-6 bg-white/60 backdrop-blur-md border border-white/50 shadow-sm'
        }`}
    >
      <div className="px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 no-underline transition-transform duration-200 hover:scale-105">
          <Image
            src="/logo.svg"
            alt={SITE_CONFIG.name}
            width={160}
            height={40}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden min-[861px]:flex items-center gap-8 bg-white/50 px-6 py-2 rounded-full">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-700 font-medium text-[0.95rem] transition-colors duration-200 hover:text-teal-600 after:content-[''] after:absolute after:w-full after:h-[2px] after:-bottom-1 after:left-0 after:bg-teal-600 after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden min-[861px]:flex items-center">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-amber-500 text-white px-5 py-2 rounded-full font-semibold text-[0.95rem] no-underline transition-all duration-300 shadow-md shadow-amber-500/20 hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-500/30"
          >
            Mulai Proyek
          </a>
        </div>

        <button
          className="min-[861px]:hidden bg-transparent border-0 text-gray-900 cursor-pointer p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-[85px] left-[5%] w-[90%] rounded-3xl bg-white/98 backdrop-blur-xl shadow-2xl flex flex-col p-8 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-40 ${isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-5'
          }`}
      >
        <div className="flex flex-col gap-6 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl font-semibold text-gray-900 no-underline transition-colors duration-200 hover:text-teal-600"
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center bg-amber-500 text-white px-8 py-3 rounded-full font-semibold text-lg no-underline w-full text-center hover:bg-amber-600"
          >
            Mulai Proyek
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
