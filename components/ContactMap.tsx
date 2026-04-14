"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactMap() {
  return (
    <section id="kapcsolat" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-secondary font-black tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Helyszínünk
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black text-primary leading-tight"
          >
            Itt talál meg <span className="text-secondary underline decoration-4 underline-offset-8">minket</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white h-[500px] md:h-[650px] group"
        >
          {/* The Map Background */}
          <iframe
            src="https://maps.google.com/maps?q=SmartAir%20Budapest&t=m&z=15&output=embed&iwloc=near"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="transition-transform duration-[3000ms] group-hover:scale-110"
          ></iframe>

          {/* Floating Glassmorphic Info Card */}
          <div className="absolute inset-x-6 bottom-6 md:inset-x-auto md:left-12 md:bottom-12 z-20">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-primary/90 backdrop-blur-2xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl max-w-md"
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shadow-lg transition-transform group-hover/item:scale-110">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Címünk</h4>
                    <p className="text-white font-medium text-lg leading-tight">
                      1145 Budapest,<br />Erzsébet királyné útja 19.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/item:bg-secondary">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Telefon</h4>
                    <a href="tel:+36202786150" className="text-white font-bold text-xl hover:text-secondary transition-colors">
                      +36 20 278 6150
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/item:bg-secondary">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em] mb-1">E-mail</h4>
                    <a href="mailto:info@smart-air.hu" className="text-white font-bold text-xl hover:text-secondary transition-colors">
                      info@smart-air.hu
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center space-x-4 opacity-70">
                  <Clock className="text-secondary w-5 h-5" />
                  <p className="text-white text-sm font-medium">H-P: 8:00 - 18:00</p>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="mt-10">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=SmartAir+Budapest+Erzsébet+királyné+útja+19"
                  target="_blank"
                  className="w-full inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  Útvonaltervezés
                </a>
              </div>
            </motion.div>
          </div>

          {/* Subtle Overlay Gradients */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-primary/30 to-transparent z-10" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/20 via-transparent to-transparent z-10" />
        </motion.div>
      </div>
    </section>
  );
}
