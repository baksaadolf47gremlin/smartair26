'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';
import { PhoneCall, MapPin, FileSignature, Settings, GraduationCap, PenTool } from 'lucide-react';
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    title: '1. Kapcsolat-felvétel',
    desc: 'Vegye fel velünk a kapcsolatot, hogy röviden átbeszélhessük melyik szolgáltatásunkra van szüksége, illetve, hogy időpontot egyeztessünk egy helyszíni felmérésre.'
  },
  {
    icon: <MapPin className="w-6 h-6 text-white" />,
    title: '2. Helyszíni felmérés',
    desc: 'Az ingyenes helyszíni felmérés kulcsfontosságú, hogy pontos árajánlatot tudjunk adni, minden fontos paraméter ismeretében.'
  },
  {
    icon: <FileSignature className="w-6 h-6 text-white" />,
    title: '3. Árajánlat-készítés és szerződés-kötés',
    desc: 'A részletes és precíz árajánlat tartalmazza a berendezés és a szükséges szerelvények árát, a telepítés költségeit és időtartamát. Nem lesznek rejtett, utólagos költségek! Amennyiben árajánlatunk elnyerte tetszését, úgy megkötjük a szerződést, amelyben megállapodunk a kezdési időpontról is.'
  },
  {
    icon: <Settings className="w-6 h-6 text-white" />,
    title: '4. Telepítés és üzembe helyezés',
    desc: 'Otthonában vagy telephelyén telepítjük az Ön által kiválasztott Daikin berendezést, majd üzembe helyezzük és leteszteljük.'
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-white" />,
    title: '5. Átadás és oktatás',
    desc: 'A megfelelően beüzemelt rendszert és berendezést átadjuk, illetve elmagyarázzuk hogyan tudja a legmagasabb hatásfokkal működtetni. Megválaszoljuk az esetlegesen felmerülő kérdéseit.'
  },
  {
    icon: <PenTool className="w-6 h-6 text-white" />,
    title: '6. Ügyfél-támogatás és karbantartás',
    desc: 'Az optimális működés érdekében javasoljuk a rendszer rendszeres karbantartását. Szolgáltatásunk része, hogy emlékeztetőt küldünk a karbantartási időpontokról, és gyorsan reagálunk, ha esetleg probléma merülne fel.'
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
      {/* Premium CTA Reworked - Pro Proportions & Visuals */}
      <div className="relative py-16 md:py-24 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-1.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#001a2c]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] md:rounded-[5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-11 items-center">
              {/* Left Content Column */}
              <div className="lg:col-span-6 p-10 md:p-16 lg:p-24 z-10">
                <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  <span className="text-white/60 text-[10px] font-black tracking-[0.3em] uppercase">Helyszíni Felmérés</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-8 leading-[1.05] text-white tracking-tight">
                  Tervezzük meg együtt <br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">klímarendszerét!</span>
                </h2>
                
                <p className="text-lg md:text-xl text-white/60 font-body leading-relaxed max-w-xl mb-12">
                  Szakértő kollégáink évtizedes tapasztalattal segítenek a legmegfelelőbb és leginkább energiatakarékos megoldás kiválasztásában.
                </p>

                <div className="flex flex-wrap gap-10 mb-14">
                  {[
                    "Mérnöki precizitás",
                    "Daikin szakértelem"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-white/80 text-sm font-bold tracking-wider uppercase">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="flex">
                  <a href="#kapcsolat" className="group relative inline-flex items-center justify-center bg-secondary text-white px-12 py-5 rounded-2xl font-black text-base hover:bg-white hover:text-primary transition-all duration-500 overflow-hidden">
                    <span className="relative z-10 flex items-center gap-4 uppercase tracking-widest">
                      Ajánlatot kérek
                      <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              {/* Right Visual Column - Pro Gallery Layout */}
              <div className="lg:col-span-5 relative h-full min-h-[500px] hidden lg:flex items-center p-12 lg:pr-20">
                <div className="grid grid-cols-2 gap-6 w-full max-w-[440px] h-[440px]">
                  {/* Image 1: Survey/Planning */}
                  <motion.div 
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl h-[90%]"
                  >
                    <Image src="/images/workflow-1.jpg" alt="Műszaki felmérés" fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                  </motion.div>
                  
                  {/* Image 2: Installation/Professionalism */}
                  <motion.div 
                    initial={{ y: -40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl h-[90%] mt-auto"
                  >
                    <Image src="/images/workflow-3.jpg" alt="Professzionális kivitelezés" fill className="object-cover" />
                    <div className="absolute inset-0 bg-primary/10" />
                  </motion.div>
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
        viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className={cn(
          "hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-secondary z-0",
          align === 'right' ? "left-full w-16 md:w-32 lg:w-40 origin-left" : "right-full w-16 md:w-32 lg:w-40 origin-right"
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
