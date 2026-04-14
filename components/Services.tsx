'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Lakossági klímaszerelés',
    description: 'Segítünk megtalálni a legoptimálisabb hűtő és fűtő teljesítményű klímát otthonába! Célunk, hogy ez a beruházás hosszú távon szolgálja kényelmét, egy egészséges lakókörnyezetet kialakítva.',
    image: '/images/service-1.jpg',
    href: '#klima',
  },
  {
    title: 'Ipari klímatisztítás',
    description: 'Speciális vegyszeres tisztítás és fertőtlenítés, amely garantálja a higiénikus és hatékony működést gyártócsarnokokban, irodákban és közintézményekben.',
    image: '/images/service-2.jpg',
    href: '#ipari',
  },
  {
    title: 'Cégeknek hőszivattyús megoldás hűtés és fűtés',
    description: 'Kiemelkedő energiahatékonyságú Daikin hőszivattyúk tervezése és kivitelezése. Csökkentse vállalkozása rezsiköltségét fenntartható technológiával.',
    image: '/images/hero-widescreen-4k.png', 
    href: '#hoszivattyu',
  },
  {
    title: 'Azonnali karbantartás',
    description: 'A jól karbantartott eszköz hosszabb ideig, optimális energiafogyasztás mellett üzemel. Rendszeres felülvizsgálattal megelőzzük a váratlan meghibásodásokat.',
    image: '/images/service-3.jpg',
    href: '#karbantartas',
  }
];

export function Services() {
  return (
    <section id="szolg" className="py-32 md:py-40 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-wider uppercase text-sm mb-4 block"
          >
            Szolgáltatásaink
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black text-primary"
          >
            Minden, ami hűtés és fűtés
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 relative bg-white">
                <div className="absolute -top-6 left-8 bg-[#C1272D] text-white px-6 py-2.5 rounded-full shadow-xl z-20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 border-2 border-white/20">
                  <span className="font-black text-xl font-heading leading-none">{idx + 1}</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-primary mt-4 mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <a 
                  href={service.href}
                  className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors uppercase tracking-wide text-sm"
                >
                  Részletek
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Abstract Shape */}
      <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-100 to-transparent z-0 pointer-events-none" />
    </section>
  );
}
