'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#002B41] pt-24 pb-12 text-slate-300 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-12 xl:gap-20 mb-20">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 lg:pr-6">
            <Link href="/" className="inline-block mb-8 relative h-12 w-60" style={{ filter: 'brightness(0) invert(1)' }}>
              <Image 
                src="/images/logo.png" 
                alt="Smart Air Fehér Logó" 
                fill 
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-[15px] leading-relaxed text-slate-200 mb-8 font-light">
              A legmodernebb, leginnovatívabb technológiákat alkalmazzuk. A hosszú távú, fenntartható megoldásokban hiszünk, hogy épülete mindig a tökéletes komfortot nyújtsa.
            </p>
            <div className="space-y-4 text-sm text-slate-300">
              <a href="tel:+36202786150" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077B6] group-hover:text-white transition-all">
                  <Phone size={16} />
                </span>
                <span className="tracking-wide">+36 20 278 6150</span>
              </a>
              <a href="mailto:info@smart-air.hu" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077B6] group-hover:text-white transition-all">
                  <Mail size={16} />
                </span>
                <span className="tracking-wide">info@smart-air.hu</span>
              </a>
            </div>
          </div>

          {/* Céges adatok */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold font-heading text-lg mb-8 tracking-wide">Céginformációk</h4>
            <ul className="space-y-5 text-[15px] text-slate-200 font-light">
              <li className="flex flex-col space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#0077B6] font-bold">Cég neve</span>
                <span className="text-white">SMARTAIR Épületgépészeti Kft.</span>
              </li>
              <li className="flex flex-col space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#0077B6] font-bold">Székhely</span>
                <span className="text-white">1142 Budapest, Erzsébet királyné útja 57-61.</span>
              </li>
              <li className="border-t border-white/10 pt-4 mt-2 max-w-[90%]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Adószám:</span>
                  <span className="text-white tracking-wide">27941797-2-42</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Cégjegyzékszám:</span>
                  <span className="text-white tracking-wide">01 09 388298</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">F-gáz azonosító:</span>
                  <span className="text-white tracking-wide">1000000044572</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Szolgáltatások */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold font-heading text-lg mb-8 tracking-wide">Szolgáltatások</h4>
            <ul className="space-y-4 text-[15px] font-light">
              <li>
                <Link href="#klima" className="text-slate-200 hover:text-white hover:underline underline-offset-4 transition-all">
                  Lakossági klímaszerelés
                </Link>
              </li>
              <li>
                <Link href="#ipari" className="text-slate-200 hover:text-white hover:underline underline-offset-4 transition-all">
                  Ipari klimatizálás
                </Link>
              </li>
              <li>
                <Link href="#hoszivattyu" className="text-slate-200 hover:text-white hover:underline underline-offset-4 transition-all">
                  Hőszivattyú telepítés
                </Link>
              </li>
              <li>
                <Link href="#karbantartas" className="text-slate-200 hover:text-white hover:underline underline-offset-4 transition-all">
                  Kereskedelem & Karbantartás
                </Link>
              </li>
            </ul>
          </div>

          {/* Jogi info */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold font-heading text-lg mb-8 tracking-wide">Hasznos Linkek</h4>
            <ul className="space-y-4 text-[15px] font-light">
              <li>
                <Link href="#" className="flex items-center space-x-2 text-slate-200 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Általános Szerződési Feltételek</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-slate-200 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Adatvédelmi tájékoztató</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center space-x-2 text-slate-200 hover:text-white transition-colors group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Süti (Cookie) szabályzat</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-light">
          <p>© {new Date().getFullYear()} SMARTAIR Épületgépészeti Kft. Minden jog fenntartva.</p>
          <div className="flex items-center space-x-4 bg-white/5 px-6 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-medium">Daikin hivatalos partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
