'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Settings } from 'lucide-react';

export function WhyUs() {
  return (
    <section className="py-40 md:py-56 bg-[#003B5C] text-white relative overflow-hidden">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,119,182,0.08)_0%,_transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] opacity-[0.015] mix-blend-overlay scale-125" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-32 md:mb-48">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-4 bg-white/5 border border-white/10 px-8 py-2.5 rounded-full mb-16"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF5252]" />
              <span className="text-[10px] md:text-xs font-black tracking-[0.4em] uppercase opacity-60">
                Minősített Megoldások
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-20 tracking-tighter leading-[0.9]"
            >
              Mert mi <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30">csináljuk</span> <br className="hidden md:block" /> 
              a legjobban.
            </motion.h2 >

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl lg:text-5xl font-heading font-light leading-[1.7] text-white/80 max-w-5xl mx-auto mb-24"
            >
              Ha <span className="text-white font-black italic tracking-tight">gyors és pontos</span> munkavégzést szeretne, ahol a cél egy <span className="underline decoration-[#FF5252]/60 decoration-1 underline-offset-[16px]">energiahatékony</span> és hosszú távon is megbízható rendszer kialakítása, akkor Önnek a <span className="font-black underline decoration-[#FF5252] decoration-2 underline-offset-[16px]">SMARTAIR</span> a partnere.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.5 }}
              className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-48">
            {[
              {
                title: "Maximális Hatékonyság",
                content: "Hatékony, jól szervezett munkavégzésünk biztosítja, hogy a lehető legkevesebb idő alatt elkészüljön a rendszer. Megtanítjuk hogyan tudja <span class='text-white font-bold'>maximálisan kihasználni</span> a berendezését, legyen szó hőszivattyúról vagy prémium Daikin klímáról.",
              },
              {
                title: "Transzparens Folyamatok",
                content: "Ajánlatunk minden esetben <span class='text-white font-bold'>pontos és átlátható</span>, rejtett költségek nélkül. Így a beruházás költségei tervezhetőek és kiszámíthatóak lesznek az első pillanattól kezdve. Kérdés esetén pedig rekordgyorsasággal reagálunk.",
              }
            ].map((box, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (idx * 0.1) }}
                className="relative"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF5252] mb-8 flex items-center gap-4">
                  <span className="w-12 h-px bg-[#FF5252]/30" /> {box.title}
                </h4>
                <p 
                  className="text-xl md:text-2xl text-white/60 font-body font-light leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: box.content }}
                />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {[
              {
                icon: <Award className="w-8 h-8 text-white" strokeWidth={1} />,
                title: "Tapasztalat és szakértelem",
                desc: "Számos elvégzett munka és elégedett ügyfél a hátunk mögött. Üzleti és lakossági téren is bizonyítottunk."
              },
              {
                icon: <Star className="w-8 h-8 text-white" strokeWidth={1} />,
                title: "Prémium minőség",
                desc: "Daikin klímák és hőszivattyúk forgalmazása. Hivatalos partnerként csak a legjobbat adjuk."
              },
              {
                icon: <Settings className="w-8 h-8 text-white" strokeWidth={1} />,
                title: "Teljes körű szolgáltatás",
                desc: "A tervezéstől a beszerelésig mindent egy kézben tartunk, és karbantartáskor is ott vagyunk."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex flex-col group"
              >
                <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-10 group-hover:bg-white group-hover:border-white transition-all duration-700">
                  <div className="group-hover:text-primary transition-colors duration-700">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-6 text-white">{item.title}</h3>
                <p className="text-white/40 font-body leading-relaxed text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
