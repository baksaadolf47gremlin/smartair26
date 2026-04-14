'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Snowflake, Wrench, Flame } from 'lucide-react';

const features = [
  {
    icon: <Snowflake className="w-8 h-8 text-secondary" />,
    title: 'Lakossági klímaszerelés',
    desc: 'Segítünk megtalálni a legoptimálisabb hűtő és fűtő teljesítményű klímát otthonába, hosszú távú kényelmet és egészséges környezetet biztosítva.'
  },
  {
    icon: <Wrench className="w-8 h-8 text-secondary" />,
    title: 'Ipari klímatisztítás',
    desc: 'Professzionális vegyszeres tisztítás és fertőtlenítés ipari rendszerekhez. Megelőzzük a meghibásodásokat és biztosítjuk a tiszta levegőt.'
  },
  {
    icon: <Flame className="w-8 h-8 text-secondary" />,
    title: 'Cégeknek hőszivattyús megoldás hűtés és fűtés',
    desc: 'A Daikin hőszivattyú technológia akár 70%-kal kevesebb energiát fogyaszt, fenntartható megoldást nyújtva irodák és ipari létesítmények számára.'
  }
];

export function Features() {
  return (
    <section className="py-32 md:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black text-primary mb-6"
          >
            SMARTAIR – klíma és hőszivattyú okosan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed font-body"
          >
            Csak a legmodernebb, leginnovatívabb technológiákat és eszközöket alkalmazzuk, a hosszú távú, fenntartható megoldásokban hiszünk. Minden épület egyedi, ezért egyedi megoldásokat is igényelnek!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="glass p-10 rounded-2xl border-t border-l border-white/50 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 font-heading">{item.title}</h3>
              <p className="text-slate-600 font-body leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-white z-0" />
    </section>
  );
}
