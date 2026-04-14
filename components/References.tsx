"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const clients = [
  { name: "Duna Twinhouse",        logo: "/logos/ref-DAA91D2F.png",    scale: 1.0 },
  { name: "ibis Styles",           logo: "/logos/ibis-logo.jpg",       scale: 1.0 },
  { name: "SK on Hungary",         logo: "/logos/ref-header-logo.png", scale: 1.2 },
  { name: "Buda Golfzone",         logo: "/logos/buda-golf-klub.png",  scale: 1.2 },
  { name: "H-ION",                 logo: "/logos/hion-logo.png",       scale: 1.4 },
  { name: "Metalloexpert",         logo: "/logos/metalloexpert-logo.png", scale: 1.5 },
  { name: "Mystery Hotel Budapest",logo: "/logos/mystery-hotel-logo.png", scale: 1.3 },
];

const VISIBLE_DESKTOP = 5;
const GAP = 16; // px

// Triplicate for seamless infinite scroll
const allItems = [...clients, ...clients, ...clients];

export function References() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [itemWidth, setItemWidth] = useState(0);
  const [offset, setOffset] = useState(clients.length); // start at middle set
  const [animate, setAnimate] = useState(true);

  /* Measure container → derive item width */
  useEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const visible = window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : VISIBLE_DESKTOP;
      setItemWidth((w - GAP * (visible - 1)) / visible);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* Auto-advance */
  useEffect(() => {
    if (!itemWidth) return;
    const timer = setInterval(() => {
      setAnimate(true);
      setOffset((o) => o + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [itemWidth]);

  /* Seamless loop: jump without animation at boundaries */
  const handleTransitionEnd = useCallback(() => {
    if (offset >= clients.length * 2) {
      setAnimate(false);
      setOffset(clients.length);
    } else if (offset < clients.length) {
      setAnimate(false);
      setOffset(clients.length * 2 - 1);
    }
  }, [offset]);

  /* Re-enable animation after instant jump */
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() =>
        requestAnimationFrame(() => setAnimate(true))
      );
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  const prev = () => { setAnimate(true); setOffset((o) => o - 1); };
  const next = () => { setAnimate(true); setOffset((o) => o + 1); };

  const dotIndex =
    ((offset - clients.length) % clients.length + clients.length) % clients.length;

  const translateX = -(offset * (itemWidth + GAP));

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      id="referenciak"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#0077B6] mb-3">
            Kiket szolgálunk ki
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#004C74] mb-4">
            Referenciák
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Megbízóink között találhatók a legnevesebb hazai vállalatok, szállodák és intézmények.
          </p>
          <div className="mt-5 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-[#004C74] to-[#0077B6]" />
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-10 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-10 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-blue-50 to-transparent" />

          {/* Prev button */}
          <button
            onClick={prev}
            aria-label="Előző"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md hover:bg-[#004C74] hover:border-[#004C74] hover:text-white transition-all duration-200 text-[#004C74]"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Track container */}
          <div ref={containerRef} className="overflow-hidden mx-12">
            {itemWidth > 0 && (
              <div
                className="mix-blend-multiply"
                style={{
                  display: "flex",
                  gap: `${GAP}px`,
                  transform: `translateX(${translateX}px)`,
                  transition: animate ? "transform 600ms ease-in-out" : "none",
                  willChange: "transform",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {allItems.map((client, i) => (
                  <div
                    key={i}
                    style={{ width: `${itemWidth}px`, flexShrink: 0 }}
                  >
                    <div className="group flex items-center justify-center h-48 px-4 transition-all duration-300">
                      <img
                        src={client.logo}
                        alt={client.name}
                        title={client.name}
                        style={{ transform: `scale(${client.scale})` }}
                        className="max-h-24 w-auto max-w-[85%] object-contain transition-all duration-300 hover:scale-[1.1]!"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Next button */}
          <button
            onClick={next}
            aria-label="Következő"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-slate-200 shadow-md hover:bg-[#004C74] hover:border-[#004C74] hover:text-white transition-all duration-200 text-[#004C74]"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setAnimate(true);
                setOffset(clients.length + i);
              }}
              aria-label={`${i + 1}. dia`}
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIndex === i
                  ? "bg-[#004C74] w-6"
                  : "bg-slate-300 w-2 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "150+", label: "Elvégzett projekt" },
            { value: "100%",  label: "Elégedett ügyfél" },
            { value: "7+",   label: "Éves tapasztalat" },
            { value: "24/7", label: "Ügyféltámogatás" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm"
            >
              <p className="text-3xl font-bold text-[#004C74] mb-1">{stat.value}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
