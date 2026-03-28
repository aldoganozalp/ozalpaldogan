"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-8 relative inline-block">
              About Me
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></div>
            </h2>
            <p className="text-text-secondary leading-relaxed text-lg">
              I am a 3rd-year student in the English Translation and Interpretation department at Atılım University. 
              My core interests lie in translation technologies, localization, and oral interpretation.
            </p>
            <p className="text-text-secondary leading-relaxed text-lg">
              Through my Erasmus experience at Transilvania University of Braşov, I actively developed my cultural 
              competency and deepened my knowledge of European culture. My ultimate goal is to seamlessly transfer 
              my academic achievements and multicultural communication skills into the professional translation sphere.
            </p>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative h-[500px] w-full max-w-sm mx-auto overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/portre.jpeg"
                alt="Özalp Alpay Aldoğan"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
