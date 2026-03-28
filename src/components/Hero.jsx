"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl text-center space-y-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h2 className="text-accent font-medium tracking-wide uppercase">
            Translator & Linguist
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary">
            Özalp Alpay <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">Aldoğan</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
        >
          Translation Student at Atılım University, focused on translation technologies, localization, and oral interpretation. Transforming cultural nuances into global understanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4 justify-center items-center pt-8"
        >
          <a
            href="mailto:aldoganozalp@gmail.com"
            className="bg-accent text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-lg shadow-accent-glow"
          >
            Get in Touch
          </a>
          <a
            href="/cv.pdf"
            download
            className="glass px-8 py-3 rounded-full font-medium text-text-primary hover:bg-surface-hover transition-colors border border-white/10"
          >
            Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
