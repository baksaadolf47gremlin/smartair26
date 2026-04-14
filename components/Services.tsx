'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Lakossági klíma-szerelés',
    description: 'Segítünk megtalálni a legoptimálisabb hűtő és fűtő teljesítményű klímát otthonába! Az a célunk, hogy ez a beruházás hosszú távon szolgálja Ön és családja kényelmét, hozzájárulva egy egészséges, kellemes lakókörnyezet kialakításához.',
    image: '/images/service-1.jpg',
    href: '#kapcsolat',
  },
  {
    title: 'Ipari klimatizálás cégeknek',
    description: 'Az ipari légkondícionálás olyan speciális, energiatakarékos rendszereket foglal magában, amelyek célja, hogy biztosítsák a megfelelő hőmérsékletet, páratartalmat és légminőséget a gyártócsarnokokban, raktárakban, irodaházakban és egyéb nagy területű környezetekben.',
    image: '/images/service-2.jpg',
    href: '#kapcsolat',
  },
  {
    title: 'Hőszivattyú - modern hűtés-fűtés',
    description: 'A hőszivattyú a modern fűtési és hűtési rendszerek csúcstechnológiája. A Daikin hőszivattyú működése akár 70%-kal kevesebb energiát vesz igénybe, mint a hagyományos fűtési rendszerek. A rendszer tökéletes megtervezése és telepítése szakértelmet kíván.',
    image: '/images/hero-1-ultra-sharp.png', 
    href: '#kapcsolat',
  }
];

export function Services() {
  return (
    <section id="szolg" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-secondary font-black tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Szolgáltatásaink
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-black text-primary"
          >
            SMARTAIR - klíma és hőszivattyú okosan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 mt-6 text-lg max-w-3xl mx-auto"
          >
            Csak a legmodernebb, leginnovatívabb technológiákat és eszközöket alkalmazzuk, a hosszú távú, fenntartható megoldásokban hiszünk. Minden épület egyedi, ezért egyedi megoldásokat is igényelnek!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold font-heading text-primary mb-4 group-hover:text-secondary transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm flex-grow">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a 
                    href={service.href}
                    className="inline-flex items-center text-secondary font-bold hover:gap-3 transition-all uppercase tracking-widest text-[10px]"
                  >
                    Ez érdekel!
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
