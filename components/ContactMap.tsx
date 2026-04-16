"use client";

import React, { useRef } from 'react';
import { m, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactMap() {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: "200px" });

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden" id="kapcsolat">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-black tracking-[0.2em] uppercase text-xs mb-3 block">
            Helyszín
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-black text-primary">
            Hol talál meg <span className="text-secondary">minket?</span>
          </h2>
        </m.div>

        <div 
          ref={mapRef}
          className="w-full max-w-5xl mx-auto h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50 relative bg-slate-100"
        >
          {isInView ? (
            <iframe
              title="Smart Air Budapest Székhely"
              src="https://maps.google.com/maps?q=1142%20Budapest,%20Erzs%C3%A9bet%20kir%C3%A1lyn%C3%A9%20%C3%BAtja%2057-61&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.02) saturate(1.05)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full shadow-inner"
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="animate-pulse flex flex-col items-center gap-4">
                <MapPin className="w-12 h-12 text-slate-300" />
                <span className="text-slate-400 font-medium">Térkép betöltése...</span>
              </div>
            </div>
          )}
        </div>

        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-slate-500 font-body text-lg font-semibold">
            1142 Budapest, Erzsébet királyné útja 57-61
          </p>
        </m.div>
      </div>
    </section>
  );
}
