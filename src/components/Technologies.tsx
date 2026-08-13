"use client";

import { motion } from "framer-motion";

const technologies = {
  "Frontend Web": ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  Mobile: ["Flutter", "Dart"],
  "Estado y almacenamiento": ["Context API", "Shared Preferences", "Hive"],
  Herramientas: ["Git", "GitHub", "Vercel", "VS Code"],
};

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 px-6 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-zinc-50 tracking-tight mb-12"
        >
          Tecnologías
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {Object.entries(technologies).map(([category, techs], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900/60 text-zinc-300 text-[13px] border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
