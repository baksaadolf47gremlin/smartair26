'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Database,
  Mail,
  Star,
  Search,
  PhoneCall,
  UserCheck,
  Smartphone,
  ArrowLeft,
  Lock,
} from 'lucide-react';

const upcomingFeatures = [
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Adatgyűjtő rendszer',
    desc: 'Automatizált lead-gyűjtés és ügyfélkezelés.',
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: 'Email marketing',
    desc: 'Célzott kampányok és automatikus hírlevelek.',
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: 'Google értékelés gyűjtés',
    desc: 'Több és jobb visszajelzés, automatikusan.',
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: 'Jobb SEO',
    desc: 'Magasabb helyezés, több organikus látogató.',
  },
  {
    icon: <PhoneCall className="w-5 h-5" />,
    title: 'Missed call textback',
    desc: 'SMS visszaigazolás minden kihagyott hívásra.',
  },
  {
    icon: <UserCheck className="w-5 h-5" />,
    title: 'Ügyfél utánkövetés',
    desc: 'Automatikus követés a lezárt ajánlatok után.',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: 'Egyedi telefonos applikáció',
    desc: 'Kövesd nyomon céged fejlődését bárhonnan.',
  },
];

interface ComingSoonProps {
  pageTitle: string;
}

export function ComingSoon({ pageTitle }: ComingSoonProps) {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-24"
      style={{ background: 'linear-gradient(135deg, #000d1a 0%, #001f35 40%, #0a0a0a 100%)' }}
    >

      {/* Strong diagonal color split */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left vivid red zone */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(193,39,45,0.35) 0%, transparent 70%)' }}
        />
        {/* Bottom-right vivid blue zone */}
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,119,182,0.3) 0%, transparent 70%)' }}
        />
        {/* Center subtle glow to blend zones */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(0,43,65,0.6) 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Top edge red line accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C1272D] to-transparent opacity-80" />
      {/* Bottom edge blue line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0077B6] to-transparent opacity-60" />

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center">

        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Vissza a főoldalra
          </Link>
        </motion.div>

        {/* Lock badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full mb-10"
        >
          <Lock className="w-4 h-4 text-[#C1272D]" />
          <span className="text-white/60 text-xs font-black tracking-[0.2em] uppercase">
            {pageTitle} — Fejlesztés alatt
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-heading font-black text-white leading-[1.05] mb-6"
        >
          Hamarosan{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C1272D] to-[#FF6B6B]">
            elérhető
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-20"
        >
          Ez az oldal fejlesztés alatt áll. A további tartalmak a megbízásunk után válnak elérhetővé — sok más izgalmas funkcióval együtt:
        </motion.p>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {upcomingFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.07 }}
              className="group bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-2xl p-5 text-left transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#C1272D] flex items-center justify-center text-white mb-4 shadow-lg shadow-[#C1272D]/30 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-white font-bold text-sm mb-1.5 leading-tight">
                {feature.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/#kapcsolat"
            className="inline-flex items-center justify-center bg-[#C1272D] hover:bg-[#a12025] text-white px-8 py-3.5 rounded-xl font-black text-sm tracking-wider uppercase transition-all hover:-translate-y-0.5 shadow-lg shadow-[#C1272D]/20"
          >
            Kapcsolat felvétel
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-3.5 rounded-xl font-black text-sm tracking-wider uppercase transition-all"
          >
            Főoldal
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
