'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { PhoneCall, MapPin, FileSignature, Settings, GraduationCap, PenTool } from 'lucide-react';
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    title: '1. Kapcsolatfelvétel',
    desc: 'Vegye fel velünk a kapcsolatot, hogy röviden átbeszélhessük melyik szolgáltatásunkra van szüksége, illetve, hogy időpontot egyeztessük egy helyszíni felmérésre.'
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: '2. Helyszíni felmérés',
    desc: 'Az ingyenes helyszíni felmérés kulcsfontosságú, hogy pontos árajánlatot tudjunk adni, minden fontos paraméter ismeretében.'
  },
  {
    icon: <FileSignature className="w-6 h-6 text-white" />,
    title: '3. Árajánlat készítés és szerződéskötés',
    desc: 'A részletes és precíz árajánlat tartalmazza a berendezés és a szükséges szerelvények árát, a telepítés költségeit és időtartamát. Nem lesznek rejtett, utólagos költségek!'
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: '4. Telepítés és üzembe helyezés',
    desc: 'Otthonában vagy telephelyén telepítjük az Ön által kiválasztott Daikin berendezést, majd üzembe helyezzük és leteszteljük.'
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: '5. Átadás és oktatás',
    desc: 'A megfelelően beüzemelt rendszert és berendezést átadjuk, illetve elmagyarázzuk hogyan tudja a legmagasabb hatásfokkal működtetni.'
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: '6. Ügyféltámogatás és karbantartás',
    desc: 'Az optimális működés érdekében javasoljuk a rendszer rendszeres karbantartását. Szolgáltatásunk része, hogy emlékeztetőt küldünk.'
  }
];

const workflowImages = [
  '/images/workflow-1.jpg',
  '/images/workflow-2.jpg',
  '/images/workflow-3.jpg'
];

export function Workflow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="bg-slate-50 relative overflow-hidden" id="folyamat">
      {/* Premium Pre-workflow CTA - Compact & Filled */}
      <div className="relative py-10 md:py-14 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 to-[#002f48]" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-black/40 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-6 md:p-8 lg:p-10 lg:pr-10 z-10 relative">
                <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                  </span>
                  <span className="text-white/60 text-[9px] font-black tracking-[0.3em] uppercase">Ingyenes Felmérés</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-black mb-4 leading-[1.1] text-white tracking-tight">
                  Tervezzük meg együtt <br /> 
                  <span className="text-white/40">klímarendszerét!</span>
                </h2>
                
                <p className="text-base md:text-lg text-white/70 font-body leading-relaxed max-w-lg mb-6">
                  Szakértő kollégáink évtizedes tapasztalattal segítenek a legmegfelelőbb megoldás kiválasztásában.
                </p>

                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
                  {[
                    "Mérnöki precizitás",
                    "Hivatalos garancia",
                    "Daikin szakértelem"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <div className="w-1 h-1 rounded-full bg-secondary" />
                      <span className="text-white/60 text-[9px] font-bold uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex">
                  <a href="#kapcsolat" className="group relative inline-flex items-center justify-center bg-secondary text-white px-8 py-3 rounded-xl font-black text-sm hover:bg-white hover:text-primary transition-all duration-500 shadow-xl overflow-hidden uppercase tracking-widest">
                    <span className="relative z-10 flex items-center gap-3">
                      Ajánlatkérés
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-full min-h-[300px] lg:min-h-[400px] hidden lg:flex items-center justify-center p-6">
                <div className="relative w-full h-[260px] max-w-[420px]">
                  {/* Primary Image */}
                  <div className="absolute top-10 right-0 w-[80%] aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-0">
                    <Image src="/images/workflow-2.jpg" alt="Professzionális munka" fill className="object-cover" />
                  </div>
                  
                  {/* Secondary Image */}
                  <div className="absolute top-0 left-0 w-[65%] aspect-square rounded-2xl overflow-hidden border border-white/20 shadow-2xl z-10">
                    <Image src="/images/hero-1.jpg" alt="Klímarendszer" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-32 md:py-48 container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-secondary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
            Hogyan dolgozunk?
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-6xl font-heading font-black text-primary mb-8">
            Az ajánlatkérés <span className="text-secondary">folyamata</span>
          </motion.h2>
          <p className="text-xl text-slate-600 font-body leading-relaxed">
            Egy átlátható, zökkenőmentes folyamat a kapcsolatfelvételtől az évekkel későbbi karbantartásig.
          </p>
        </div>

        <div ref={containerRef} className="max-w-6xl mx-auto relative">
          {/* Vertical Spine */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 z-0">
            <div className="absolute inset-0 bg-slate-200" />
            <motion.div style={{ scaleY }} className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary origin-top" />
          </div>

          <div className="space-y-32 md:space-y-48">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative">
               <div className="space-y-12 md:space-y-20 order-2 md:order-1">
                 {steps.slice(0, 2).map((step, idx) => (
                   <div key={idx} className="relative group">
                     <PhaseCard step={step} align="right" />
                   </div>
                 ))}
               </div>
               <div className="order-1 md:order-2">
                 <PhaseImage src={workflowImages[0]} index={1} />
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative">
               <div className="order-1">
                  <PhaseImage src={workflowImages[1]} index={2} />
               </div>
               <div className="space-y-12 md:space-y-20 order-2">
                 {steps.slice(2, 4).map((step, idx) => (
                   <div key={idx} className="relative group">
                     <PhaseCard step={step} align="left" />
                   </div>
                 ))}
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center relative">
               <div className="space-y-12 md:space-y-20 order-2 md:order-1">
                 {steps.slice(4, 6).map((step, idx) => (
                   <div key={idx} className="relative group">
                     <PhaseCard step={step} align="right" />
                   </div>
                 ))}
               </div>
               <div className="order-1 md:order-2">
                 <PhaseImage src={workflowImages[2]} index={3} />
               </div>
            </div>
          </div>
        </div>
        
        <div className="mt-32 text-center">
          <a href="#kapcsolat" className="inline-flex items-center justify-center bg-primary text-white px-8 md:px-10 py-3.5 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95 duration-300">
            Kezdjük el a közös munkát!
          </a>
        </div>
      </div>
    </section>
  );
}

function PhaseCard({ step, align }: { step: any, align: 'left' | 'right' }) {
  return (
    <div className="relative">
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-48% 0px -48% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-secondary z-0",
          align === 'right' ? "left-full w-12 lg:w-24 origin-right" : "right-full w-12 lg:w-24 origin-left"
        )}
      />

      <motion.div
        initial={{ opacity: 0, x: align === 'right' ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-500 relative z-10 flex gap-6 items-start group"
      >
        <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 text-white">
          {step.icon}
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-black font-heading text-primary mb-3 group-hover:text-secondary transition-colors">
            {step.title}
          </h3>
          <p className="text-slate-600 font-body leading-relaxed text-base md:text-lg">
            {step.desc}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function PhaseImage({ src, index }: { src: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative aspect-[4/3] md:aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-2xl"
    >
      <Image src={src} alt="Smart Air Workflow" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
        <span className="text-white text-3xl font-black font-heading opacity-50">{index}</span>
      </div>
    </motion.div>
  );
}
