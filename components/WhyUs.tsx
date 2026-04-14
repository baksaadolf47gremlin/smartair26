'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Settings } from 'lucide-react';

export function WhyUs() {
  return (
    <section className="py-32 md:py-40 bg-primary text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] opacity-[0.03] object-cover" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-24"
        >
          <span className="bg-secondary/20 text-white px-5 py-2.5 rounded-full font-bold text-sm tracking-widest uppercase inline-block mb-8 backdrop-blur-md border border-white/20 shadow-inner">
            Komfort Igényesen
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-10 drop-shadow-sm leading-tight">
            Mert mi csináljuk a legjobban
          </h2>
          <div className="space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-3xl font-heading font-medium leading-[1.3] text-white/95"
            >
              Ha <span className="text-white font-black">gyors és pontos</span> munkavégzést szeretne, ahol a cél egy <span className="border-b-2 border-white/20">energiahatékony</span> és hosszú távon is megbízható rendszer kialakítása, akkor Önnek a <span className="text-white font-black underline decoration-white/30 decoration-4 underline-offset-4">SMARTAIR</span> a partnere.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-px w-32 bg-white/20 mx-auto origin-center" 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 text-lg text-white/80 font-body leading-relaxed text-left">
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
                Ajánlatunk minden esetben <span className="text-secondary font-bold">pontos és átlátható</span>, rejtett költségek nélkül. Így a beruházás költségei tervezhetőek és kiszámíthatóak lesznek az első pillanattól kezdve. Kérdés esetén pedig rekordgyorsasággal reagálunk.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Award className="w-10 h-10 text-secondary" strokeWidth={2} />,
              title: "Tapasztalat és szakértelem",
              desc: "Számos elvégzett munka és elégedett ügyfél a hátunk mögött. Üzleti és lakossági téren is bizonyítottunk."
            },
            {
              icon: <Star className="w-10 h-10 text-secondary" strokeWidth={2} />,
              title: "Prémium minőség",
              desc: "Daikin klímák és hőszivattyúk forgalmazása. Hivatalos partnerként csak a legjobbat adjuk."
            },
            {
              icon: <Settings className="w-10 h-10 text-secondary" strokeWidth={2} />,
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
              className="p-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-black/20">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-white transition-all duration-300 group-hover:translate-x-1">{item.title}</h3>
              <p className="text-white/70 font-body leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
