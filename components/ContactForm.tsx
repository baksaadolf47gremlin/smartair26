'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactForm() {
  return (
    <section id="kapcsolat" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
          
          {/* Contact Info Side */}
          <div className="lg:w-2/5 md:w-full bg-primary p-12 text-white relative overflow-hidden">
            
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-black mb-4">Kapcsolat</h2>
              <p className="text-white/80 font-body mb-12">
                Vegye fel velünk a kapcsolatot, hogy egyeztessünk egy ingyenes helyszíni felmérést!
              </p>

              <div className="space-y-8">
                <div className="flex items-start space-x-4 group cursor-default">
                  <div className="bg-white shadow-lg p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Címünk</h4>
                    <p className="text-white/80 font-body">1145 Budapest,<br />Erzsébet királyné útja 19.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-white shadow-lg p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Telefonszám</h4>
                    <a href="tel:+36206152589" className="text-white/80 font-body hover:text-white transition-colors block">+36 20 615 2589</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-white shadow-lg p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a href="mailto:info@smart-air.hu" className="text-white/80 font-body hover:text-white transition-colors">info@smart-air.hu</a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group cursor-default">
                  <div className="bg-white shadow-lg p-3 rounded-full shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Nyitvatartás</h4>
                    <p className="text-white/80 font-body">Hétfőtől-Péntekig<br />8:00 - 18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 w-full p-12">
            <h2 className="text-3xl font-heading font-black text-primary mb-8">Írjon nekünk</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Név</label>
                  <input id="name" type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" placeholder="Teljes név" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Telefonszám</label>
                  <input id="phone" type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" placeholder="+36 20 123 4567" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">E-mail cím (nem kötelező)</label>
                <input id="email" type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body" placeholder="email@pelda.hu" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Üzenet / Érdeklődés tárgya</label>
                <textarea id="message" rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-body resize-none" placeholder="Miben segíthetünk?" required></textarea>
              </div>

              <div className="flex items-start space-x-3 mb-6">
                <input type="checkbox" id="privacy" className="mt-1.5 accent-secondary" required />
                <label htmlFor="privacy" className="text-sm text-slate-500 leading-relaxed">
                  Elolvastam és elfogadom az <a href="#" className="text-primary font-bold hover:underline">Adatkezelési tájékoztatót</a>.
                </label>
              </div>

              <button type="submit" className="w-full md:w-auto inline-flex justify-center bg-primary text-white font-bold text-sm md:text-base px-6 md:px-8 py-3 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer">
                Ajánlatkérés küldése
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
