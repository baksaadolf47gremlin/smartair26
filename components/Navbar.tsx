'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Lakossági klíma', href: '#residential' },
  { name: 'Ipari klíma', href: '#industrial' },
  { name: 'Hőszivattyú', href: '#heatpump' },
  { name: 'Karbantartás', href: '#maintenance' },
  { name: 'Rólunk', href: '#about' },
  { name: 'Kapcsolat', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 flex items-center justify-center rounded-lg bg-primary overflow-hidden">
               <span className="text-white font-bold text-2xl">S</span>
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-primary">
              SMARTAIR
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+36206152589"
              className="flex items-center space-x-2 bg-secondary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95"
            >
              <Phone size={16} />
              <span>+36 20 615 2589</span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 top-[64px] z-40 bg-background/95 backdrop-blur-md transition-transform duration-300 lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold text-foreground"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="tel:+36206152589"
            className="flex items-center space-x-3 bg-secondary text-white px-8 py-4 rounded-full text-lg font-bold"
          >
            <Phone size={20} />
            <span>Kapcsolat</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
