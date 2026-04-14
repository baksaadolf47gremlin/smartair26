'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Wind, Snowflake, Flame } from 'lucide-react';
import { cn } from "@/lib/utils";

const HERO_IMAGE = '/images/hero-1-ultra-sharp.png'; 

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-48 pb-24 overflow-hidden bg-primary shadow-2xl">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-primary/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full"
        >
          <Image
            src={HERO_IMAGE}
            alt="Daikin Prémium Klímatechnika"
            fill
            className="object-cover md:object-center"
            priority
            unoptimized={true}
            style={{ 
              filter: 'contrast(1.15) brightness(0.9) saturate(1.1)',
              imageRendering: 'high-quality'
            }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-10 md:px-20 relative z-20 mt-12">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="flex items-center space-x-4">
              <span className="h-[2px] w-12 bg-secondary shadow-[0_0_10px_rgba(255,82,82,0.5)]" />
              <span className="uppercase tracking-[0.3em] text-white font-black text-xs md:text-sm drop-shadow-sm">
                <span className="text-secondary italic mr-1">Daikin</span> Hivatalos Partner
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] text-white">
              Kompromisszum <br />
              mentes <span className="text-white underline underline-offset-8 decoration-white">teljesítmény.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed font-medium">
              Otthoni kényelem és ipari hatékonyság – mérnöki precizitással. <br className="hidden md:block" /> 
              A Daikin technológia legjava, profi telepítéssel és garanciával.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center bg-secondary text-white px-6 md:px-7 py-2.5 md:py-3 rounded-xl font-bold text-sm hover:bg-[#a12025] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl group overflow-hidden relative"
              >
                <span className="relative z-10">Ingyenes felmérést kérek</span>
                <ChevronRight className="relative z-10 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 text-white px-6 md:px-7 py-2.5 md:py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Szolgáltatásaink
              </a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
