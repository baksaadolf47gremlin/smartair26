'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

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
      <motion.header
        initial={false}
        animate={{
          height: scrolled ? 70 : 100,
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
          marginTop: scrolled ? 16 : 0,
          width: scrolled ? '95%' : '100%',
          borderRadius: scrolled ? 24 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className={cn(
          'fixed top-0 left-1/2 -translate-x-1/2 z-50 flex items-center px-6 md:px-12 transition-all',
          scrolled ? 'border border-white/20 backdrop-blur-xl shadow-2xl' : ''
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="relative flex items-center h-10 w-44 md:w-52 group">
            <motion.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              className="relative h-full w-full p-2 transition-all duration-300"
            >
              {/* Solid White Logo (Initial) - Using filter on color logo */}
              <motion.div
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
                  priority
                />
              </motion.div>

              {/* Colored Logo (Scrolled) */}
              <motion.div
                animate={{ opacity: scrolled ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/logo.png"
                  alt="Smart Air Logo Color"
                  fill
                  className="object-contain object-left px-2"
                  priority
                />
              </motion.div>
            </motion.div>
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
                <Phone size={18} strokeWidth={3} />
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
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
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
              <X size={40} />
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
                <Phone size={24} />
                <span>+36 20 615 2589</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

