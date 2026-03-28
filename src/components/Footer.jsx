"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 px-6 border-t border-white/5 relative bg-base">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Ready to Translate Ideas?
          </h2>
          <p className="text-text-secondary text-lg max-w-lg mx-auto">
            Whether it's localization, technical translation, or oral interpretation, let's break language barriers together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="mailto:aldoganozalp@gmail.com"
              className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(139,92,246,0.3)] w-full sm:w-auto"
            >
              aldoganozalp@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/özalp-aldoğan/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass rounded-full font-medium text-text-primary hover:bg-surface-hover border border-white/5 transition-colors w-full sm:w-auto"
            >
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-white/5 text-text-muted flex justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Özalp Alpay Aldoğan</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-accent transition-colors">
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
