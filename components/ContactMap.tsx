"use client";

import { motion } from "framer-motion";

export function ContactMap() {
  return (
    <section id="kapcsolat" className="py-20 bg-[#D4E4E9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-black text-center text-[#004C74] mb-12">
          Kapcsolat
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[2rem] shadow-lg overflow-hidden flex flex-col lg:flex-row p-8 md:p-12 items-center gap-10"
        >
          {/* Info Side */}
          <div className="w-full lg:w-1/2 space-y-10 px-2 md:px-8">
            <div className="flex items-center space-x-6">
              <div className="text-secondary flex-shrink-0">
                <svg viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                  <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
                </svg>
              </div>
              <p className="text-[#004C74] font-medium text-lg lg:text-xl">
                1145 Budapest, Erzsébet királyné útja 19.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-secondary flex-shrink-0">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                </svg>
              </div>
              <a
                href="tel:+36202786150"
                className="text-[#004C74] font-medium text-lg lg:text-xl hover:underline"
              >
                +36 20 278 6150
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-secondary flex-shrink-0">
                <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                </svg>
              </div>
              <a
                href="mailto:info@smart-air.hu"
                className="text-[#004C74] font-medium text-lg lg:text-xl hover:underline"
              >
                info@smart-air.hu
              </a>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-secondary flex-shrink-0">
                <svg viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 fill-current">
                  <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                </svg>
              </div>
              <p className="text-[#004C74] font-medium text-lg lg:text-xl">
                Hétfőtől-péntekig 8:00 - 18:00
              </p>
            </div>
          </div>

          {/* Map Side */}
          <div className="w-full lg:w-1/2 h-[350px] lg:h-[400px] rounded-2xl overflow-hidden border border-slate-200">
            <iframe
              src="https://maps.google.com/maps?q=SmartAir%20Budapest&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
