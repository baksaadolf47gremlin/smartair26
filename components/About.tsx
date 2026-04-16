'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
  return (
    <section className="pb-24 md:pb-40 bg-white relative overflow-hidden" id="rolunk">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Headline Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 pt-24 md:pt-40"
          >
            <div className="sticky top-28 h-full flex flex-col">
              <div className="flex-grow-0">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
                  Filozófiánk
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-primary leading-[1.1] mb-8">
                  Több, mint szakma. <br/> <span className="text-slate-300">Hivatás.</span>
                </h2>
                
                {/* Subtle line decoration */}
                <div className="h-[2px] w-16 bg-secondary mb-8" />
                
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <div className="text-3xl font-black text-primary font-heading mb-1">10+</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Év Tapasztalat</div>
                   </div>
                   <div>
                      <div className="text-3xl font-black text-primary font-heading mb-1">100%</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Daikin Minőség</div>
                   </div>
                </div>
              </div>

              {/* Spacing the Visual Anchor and Checklist to reach the bottom */}
              <div className="flex-grow flex flex-col justify-end gap-8 pb-2">
                <div className="relative group rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl shadow-slate-200/40 mt-10">
                  <div className="aspect-[4/3] relative">
                    <Image 
                      src="/daikin_about.png" 
                      alt="Profi Daikin Telepítés" 
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                  
                  {/* Refined Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 flex items-center gap-4 transition-all duration-500 group-hover:bottom-8">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-0.5">Szakértelem</div>
                      <div className="text-white text-sm font-bold tracking-wide">Minősített Kivitelezés</div>
                    </div>
                  </div>
                </div>

                {/* Trust Points - Refined Spacing */}
                <ul className="space-y-6 pl-2">
                  {[
                    "Precíziós, tiszta munkavégzés",
                    "Hivatalos garancialevél minden eszközre",
                    "Díjmentes utólagos tanácsadás"
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-center gap-5 text-slate-500 font-medium text-base group/item cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary ring-4 ring-secondary/10 transition-all duration-300 group-hover/item:ring-secondary/20" />
                      <span className="transition-colors duration-300 group-hover/item:text-primary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Editorial Text Flow Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7 pt-24 md:pt-40"
          >
            <div className="prose prose-lg md:prose-xl prose-slate max-w-none text-slate-600 font-body leading-relaxed">
              
              <p className="mt-0 text-2xl md:text-3xl text-primary font-semibold leading-snug mb-10 pb-10 border-b border-slate-100">
                A magas minőségű Daikin hűtő-fűtő klímák, valamint hőszivattyúk forgalmazásával és beszerelésével foglalkozunk, professzionális szolgáltatásokat nyújtva lakossági és vállalati ügyfeleknek egyaránt.
              </p>
              
              <p className="mb-6">
                Csak a legmodernebb, leginnovatívabb technológiákat és eszközöket alkalmazzuk, a hosszú távú, fenntartható megoldásokban hiszünk. Minden épület egyedi, ezért egyedi megoldásokat is igényelnek! Segítünk megtalálni a leoptimálisabb hűtő és fűtő teljesítményű klímát otthonába! Az a célunk, hogy ez a beruházás hosszú távon szolgálja Ön és családja kényelmét, hozzájárulva egy egészséges, kellemes lakókörnyezet kialakításához.
              </p>

              <p className="mb-10">
                Ha gyors és pontos munkavégzést szeretne, ahol a cél az energiatakarékosság és a problémamentes működés, akkor válassza a SMARTAIR teljeskörű szolgáltatásait, és a magas minőségű Daikin termékeket!
              </p>

              <div className="pl-6 md:pl-10 border-l-[3px] border-secondary mb-10 py-2">
                <p className="text-lg md:text-xl italic text-slate-700 font-medium my-0">
                  Csapatunk számos sikeres hőszivattyú és hűtő-fűtő klíma berendezés telepítését tudhatja maga mögött. Megannyi elégedett SMARTAIR ügyféllel a hátunk mögött, hosszú évek tapasztalatával találjuk meg Önnek is a megfelelő megoldásokat.
                </p>
              </div>

              <p>
                A már sokszor bizonyított, rendkívül megbízható Daikin új generációs termékeit forgalmazzuk – a fenntartható jövőért dolgozunk, a jelenben. A tervezéstől a beszerelésig mindent egy kézben tartunk, de ott vagyunk akkor is, ha karbantartási munkálatokról, vagy javításról van szó.
              </p>

              <p>
                Mi ügyfeleinkre hosszú távú partnerként tekintünk, bármikor számíthatnak ránk, elérhetőek vagyunk. Korszerű, energiatakarékos megoldásokat kínálunk otthona, vagy telephelye számára a Daikin hivatalos partnereiként.
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
