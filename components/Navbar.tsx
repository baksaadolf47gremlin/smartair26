'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { m, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Klíma', href: '/klima' },
  { name: 'Hőszivattyú', href: '/hoszivattyu' },
  { name: 'Karbantartás', href: '/karbantartas' },
  { name: 'Rólunk', href: '/rolunk' },
  { name: 'Kapcsolat', href: '/#kapcsolat' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed left-1/2 -translate-x-1/2 z-50 flex items-center px-6 md:px-12 transition-all duration-500 ease-in-out',
          scrolled 
            ? 'top-4 w-[95%] h-[70px] bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl rounded-[24px]' 
            : 'top-0 w-full h-[100px] bg-transparent'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" aria-label="Smart Air Főoldal" className="relative flex items-center h-10 w-44 md:w-52 group">
            <m.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              className="relative h-full w-full p-2 transition-all duration-300"
            >
              {/* Solid White Logo (Initial) - Using filter on color logo */}
              <m.div
                animate={{ opacity: scrolled ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
                style={{ filter: 'brightness(0) invert(1)' }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Smart Air Logo Solid White"
                  fill
                  className="object-contain object-left px-2"
                />
              </m.div>

              {/* Colored Logo (Scrolled) */}
              <m.div
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="Smart Air Logo Color"
                  fill
                  className="object-contain object-left px-2"
                />
              </m.div>
            </m.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative text-[12px] md:text-[13px] uppercase tracking-[0.2em] font-black transition-all duration-300 group px-5 py-2.5 rounded-full",
                  scrolled 
                    ? "text-primary/70 hover:text-white hover:bg-secondary hover:shadow-lg" 
                    : "text-white hover:text-primary hover:bg-white hover:shadow-2xl hover:scale-105"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

            <div className="hidden lg:flex items-center">
              <a
                href="tel:+36206152589"
                className={cn(
                  "flex items-center space-x-3 px-7 py-3 rounded-2xl text-sm font-black transition-all duration-300 active:scale-95",
                  scrolled 
                    ? "bg-secondary text-white hover:bg-secondary/90" 
                    : "bg-white text-primary hover:bg-slate-50"
                )}
              >
                <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>+36 20 615 2589</span>
              </a>
            </div>

          {/* Mobile Toggle */}
          <button
            className={cn(
              "lg:hidden focus:outline-none transition-colors",
              scrolled ? "text-primary" : "text-white"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col justify-center items-center lg:hidden"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-primary"
            >
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <div className="flex flex-col items-center space-y-10 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-4xl font-black text-primary uppercase tracking-tighter hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+36206152589"
                className="flex items-center space-x-3 bg-secondary text-white px-10 py-5 rounded-full text-xl font-black shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.81 12.81 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
                <span>+36 20 615 2589</span>
              </a>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
