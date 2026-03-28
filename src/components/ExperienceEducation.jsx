"use client";

import { motion } from "framer-motion";

const education = [
  {
    institution: "Atılım University",
    degree: "English Translation and Interpretation",
    period: "2023 - 2027",
    gpa: "3.55/4.00",
    description: "Specializing in linguistics and translation. Key courses include Oral Interpretation, International Politics, General Translation, European Culture and Institutions, and Translation Theory.",
  },
  {
    institution: "Transilvania University of Braşov",
    degree: "Faculty of Letters (Erasmus+)",
    period: "2024 - 2025",
    gpa: null,
    description: "Participated in the Erasmus+ Student Mobility program for a semester. Developed English communication skills in a multicultural environment and expanded knowledge of European culture.",
  },
];

export default function ExperienceEducation() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary mb-16 text-center">
            Education & Experience
          </h2>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-accent/40 before:to-transparent">
            {education.map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-base bg-accent shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10"></div>
                
                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6"
                >
                  <div className="flex flex-col mb-4">
                    <span className="text-accent text-sm font-semibold tracking-wider">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mt-1">
                      {item.institution}
                    </h3>
                    <h4 className="text-text-secondary font-medium mt-1">
                      {item.degree}
                    </h4>
                  </div>
                  {item.gpa && (
                    <div className="mb-3 inline-block px-3 py-1 bg-surface-hover text-accent text-xs font-bold rounded-full border border-accent/20">
                      GPA: {item.gpa}
                    </div>
                  )}
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
