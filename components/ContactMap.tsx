"use client";

import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <section id="kapcsolat" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-black tracking-[0.2em] uppercase text-xs mb-3 block"
          >
            Helyszínünk
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-black text-primary leading-tight"
          >
            Itt talál meg <span className="text-secondary">minket</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-4 border-white group"
        >
          {/* The Pure Map */}
          <div className="w-full h-[450px] md:h-[600px]">
            <iframe
              src="https://maps.google.com/maps?q=1142%20Budapest,%20Erzs%C3%A9bet%20kir%C3%A1lyn%C3%A9%20%C3%BAtja%2057-61&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.02) saturate(1.05)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full shadow-inner"
            ></iframe>
          </div>

          {/* Subtle edge treatment */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-2xl md:rounded-3xl" />
        </motion.div>
        
        {/* Simple location pointer hint below map */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-400 font-body text-sm font-medium italic">
            1142 Budapest, Erzsébet királyné útja 57-61
          </p>
        </motion.div>
      </div>
    </section>
  );
}
