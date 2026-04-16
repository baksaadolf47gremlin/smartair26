'use client';

import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';
import { cn } from "@/lib/utils";

const HERO_IMAGE = '/images/hero-1.jpg'; 

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-primary shadow-2xl">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-primary/20 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
        <div className="w-full h-full overflow-hidden">
          <Image
            src={HERO_IMAGE}
            alt="Daikin Prémium Klímatechnika"
            fill
            className="object-cover md:object-center animate-subtle-zoom contrast-125 brightness-90 saturate-110"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+pVPQAIXwMsS67xTQAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      <div className="container mx-auto px-10 md:px-20 relative z-20 mt-6 lg:mt-0">
        <div className="max-w-2xl">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <span className="h-1 w-8 bg-[#FF4D4D] rounded-full shadow-[0_0_12px_rgba(255,77,77,0.6)]" />
              <span className="uppercase tracking-[0.2em] text-white font-black text-[10px] md:text-xs">
                <span className="text-[#FF4D4D] mr-1">Daikin</span> Hivatalos Partner
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] text-white">
              Kompromisszum-mentes <br />
              <span className="text-white">megoldások - Precizitás</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
              Daikin hőszivattyúk és hűtő-fűtő klímák forgalmazásával, beszerelésével, valamint karbantartásával és javításával foglalkozunk, professzionális szolgáltatásokat nyújtva lakossági és vállalati ügyfeleknek egyaránt. Otthonát, telephelyét fenntarthatóvá, energiatakarékossá, kényelmesebbé tesszük.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a
                href="#kapcsolat"
                className="inline-flex items-center justify-center bg-secondary text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-bold text-sm hover:bg-[#a12025] transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl group overflow-hidden relative"
              >
                <span className="relative z-10">Erre van szükségem!</span>
                <svg
                  className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/20 text-white px-6 md:px-7 py-2.5 md:py-3 rounded-xl font-bold text-sm hover:bg-white/10 transition-all hover:-translate-y-0.5"
              >
                Szolgáltatásaink
              </a>
            </div>
          </m.div>
        </div>
      </div>

    </section>
  );
}
