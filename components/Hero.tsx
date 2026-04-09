'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Using the generated image path (placeholder for now, will replace with correct one)
const HERO_IMAGE = '/modern_interior_ac.png'; 

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <Image
          src={HERO_IMAGE}
          alt="Modern Interior with Air Conditioning"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase mb-6">
              Daikin Hivatalos Partner
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-black leading-tight mb-6 text-primary">
              Kompromisszum-mentes <br />
              <span className="text-secondary">megoldások</span> – Precizitás
            </h1>
            <p className="text-xl text-foreground/80 mb-10 max-w-xl leading-relaxed">
              Daikin hőszivattyúk és hűtő-fűtő klímák forgalmazásával, beszerelésével és karbantartásával foglalkozunk. Tegye otthonát fenntarthatóvá és kényelmesebbé szakembereinkkel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 group"
              >
                Ingyenes felmérést kérek
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/50 backdrop-blur-md border border-primary/20 text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/80 transition-all"
              >
                Szolgáltatásaink
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full -mr-20 -mb-20 animate-pulse" />
    </section>
  );
}
