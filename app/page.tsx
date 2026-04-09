import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black text-primary mb-6">
              Szolgáltatásaink
            </h2>
            <p className="text-lg text-slate-600">
              Teljes körű légkondícionálási és fűtési megoldások lakossági és ipari ügyfelek részére egyaránt.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Lakossági klímaszerelés", 
                desc: "Egyedi megoldások otthonába a kényelmes mindennapokért. Segítünk megtalálni a leoptimálisabb hűtő és fűtő teljesítményű klímát." 
              },
              { 
                title: "Ipari klimatizálás", 
                desc: "Nagyteljesítményű rendszerek raktárakba, irodákba, csarnokokba. Speciális, energiatakarékos rendszerek." 
              },
              { 
                title: "Hőszivattyú telepítés", 
                desc: "Modern, fenntartható fűtési és hűtési megoldások Daikin technológiával. Akár 70%-kal kevesebb energiafelhasználás." 
              },
              { 
                title: "Karbantartás", 
                desc: "Rendszeres felülvizsgálat és szerviz a hosszú élettartamért. Emlékeztetőt küldünk a karbantartási időpontokról." 
              }
            ].map((service, i) => (
              <div key={i} className="glass p-8 rounded-2xl hover:scale-105 transition-all cursor-default border-primary/5 shadow-xl shadow-primary/5 group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="font-bold text-xl">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.desc}</p>
                <div className="text-secondary font-bold text-sm">Részletek →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary blur-[150px] rounded-full" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-16">
            SMARTAIR – Klíma és hőszivattyú okosan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-black mb-4 text-secondary">Tapasztalat</div>
              <p className="text-white/80 text-lg">Számos elvégzett munka és elégedett ügyfél a hátunk mögött.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-black mb-4 text-secondary">Minőség</div>
              <p className="text-white/80 text-lg">Hivatalos Daikin partnerként csak a legmegbízhatóbb eszközöket telepítjük.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-5xl font-black mb-4 text-secondary">Garancia</div>
              <p className="text-white/80 text-lg">Hosszú távú partnerként tekintünk ügyfeleinkre, bármikor számíthatnak ránk.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Placeholder */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-black text-primary mb-8">Kérjen ajánlatot még ma!</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            Vegye fel velünk a kapcsolatot, és munkatársaink hamarosan keresni fogják egy ingyenes helyszíni felmérés ügyében.
          </p>
          <a
            href="tel:+36206152589"
            className="inline-flex items-center justify-center bg-secondary text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-secondary/20"
          >
            HÍVÁS MOST: +36 20 615 2589
          </a>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-white/60 border-t border-white/5">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded flex items-center justify-center text-white font-bold">S</div>
            <span className="font-heading font-bold text-white text-lg">SMARTAIR</span>
          </div>
          <p>© 2026 SMARTAIR Épületgépészeti Kft. Minden jog fenntartva.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">ÁSZF</a>
            <a href="#" className="hover:text-white transition-colors">Adatvédelem</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
