"use client";

import { motion } from "framer-motion";

const skillsData = {
  "Languages": [
    { name: "Turkish", level: "Native" },
    { name: "English", level: "C1" },
    { name: "French", level: "B1" },
  ],
  "Expertise": [
    "Technical Translation",
    "Legal Translation",
    "Oral Interpretation",
    "Text Editing",
    "Teamwork"
  ],
  "Tools": [
    "SDL Trados",
    "Phrase",
    "Office Suite (Word, Excel, PPT)",
    "Computer-Aided Translation"
  ],
  "Hobbies": [
    "Dubbing",
    "Photography",
    "Video/Image Editing",
    "Motorcycles"
  ]
};

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-4">
            Skills & Competencies
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A blend of linguistic proficiency, technical tools comprehension, and specialized translation expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skillsData).map(([category, items], idx) => (
            <motion.div
              key={category}
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="glass p-8 rounded-2xl relative"
            >
              <div className="absolute top-0 left-8 -translate-y-1/2 px-4 py-1 bg-accent text-white font-bold rounded-full text-sm shadow-lg shadow-accent-glow">
                {category}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={item}
                    className="group"
                  >
                    {typeof skill === 'string' ? (
                      <span className="inline-block px-4 py-2 bg-surface text-text-primary border border-white/5 rounded-lg text-sm transition-all duration-300 ease-in-out hover:bg-surface-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:relative hover:z-10 cursor-default">
                        {skill}
                      </span>
                    ) : (
                      <span className="inline-block px-4 py-2 bg-surface text-text-primary border border-white/5 rounded-lg text-sm transition-all duration-300 ease-in-out hover:bg-surface-hover hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:relative hover:z-10 cursor-default">
                        {skill.name} <span className="text-accent font-semibold ml-2 text-xs">{skill.level}</span>
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
