'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Settings } from 'lucide-react';

export function WhyUs() {
  return (
    <section className="py-32 md:py-40 bg-[#003B5C] text-white relative overflow-hidden">
      {/* Premium Background Depth */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,119,182,0.1)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full mb-10 shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5252] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase opacity-70">
              Komfort Igényesen
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-10 leading-tight">
            Mert mi csináljuk a legjobban
          </h2>
          <div className="space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl lg:text-4xl font-heading font-light leading-[1.6] text-white/90"
            >
              Ha <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#FF5252] to-[#FF8A80] font-black italic">gyors és pontos</span> munkavégzést szeretne, ahol a cél egy <span className="italic font-medium text-white">energiahatékony</span> és hosszú távon is megbízható rendszer kialakítása, akkor Önnek a <span className="text-white font-black underline decoration-[#FF5252] decoration-2 underline-offset-[12px]">SMARTAIR</span> a partnere.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-px w-32 bg-gradient-to-r from-transparent via-[#FF5252] to-transparent mx-auto opacity-40" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg md:text-xl text-white/70 font-body leading-relaxed text-left max-w-4xl mx-auto">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Hatékony, jól szervezett munkavégzésünk biztosítja, hogy a lehető legkevesebb idő alatt elkészüljön a rendszer. Megtanítjuk Önt hogyan tudja <span className="text-white font-bold italic">maximálisan kihasználni</span> a berendezését, legyen szó hőszivattyúról vagy prémium Daikin klímáról.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                Ajánlatunk minden esetben <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5252] to-[#FF8A80] font-bold">pontos és átlátható</span>, rejtett költségek nélkül. Így a beruházás költségei tervezhetőek és kiszámíthatóak lesznek az első pillanattól kezdve. Kérdés esetén pedig rekordgyorsasággal reagálunk.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              id: "01",
              icon: <Award className="w-10 h-10 text-[#FF5252]" strokeWidth={1.5} />,
              title: "Tapasztalat és szakértelem",
              desc: "Számos elvégzett munka és elégedett ügyfél a hátunk mögött. Üzleti és lakossági téren is bizonyítottunk."
            },
            {
              id: "02",
              icon: <Star className="w-10 h-10 text-[#FF5252]" strokeWidth={1.5} />,
              title: "Prémium minőség",
              desc: "Daikin klímák és hőszivattyúk forgalmazása. Hivatalos partnerként csak a legjobbat adjuk."
            },
            {
              id: "03",
              icon: <Settings className="w-10 h-10 text-[#FF5252]" strokeWidth={1.5} />,
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
              className="group relative p-10 rounded-[2.5rem] bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-[#FF5252]/50 hover:bg-white/[0.08] hover:-translate-y-3 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-[#FF5252]/15"
            >
              {/* Background Numbering */}
              <span className="absolute -bottom-4 -right-2 text-9xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#FF5252]/10 transition-colors duration-700 font-heading">
                {item.id}
              </span>

              {/* Dynamic Top Edge Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF5252]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              {/* Internal Glow Source */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.05)_0%,_transparent_70%)]" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-3xl mx-auto mb-10 flex items-center justify-center group-hover:from-[#FF5252] group-hover:to-[#FF8A80] group-hover:border-[#FF5252] transition-all duration-700 shadow-xl relative">
                  {/* Base Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-[#FF5252]/5 opacity-100 group-hover:opacity-0 transition-opacity duration-700" />
                  
                  <div className="relative z-10 group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-heading mb-6 text-white text-center group-hover:translate-y-[-2px] transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-white/50 font-body leading-relaxed text-center text-base group-hover:text-white/80 transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
