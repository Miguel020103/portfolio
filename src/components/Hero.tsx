"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Fondo tecnológico limpio */}
      <div className="absolute inset-0 z-0">
        {/* Color base */}
        <div className="absolute inset-0 bg-[#0c0e14]" />

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #818cf8 1px, transparent 1px),
              linear-gradient(to bottom, #818cf8 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Glow superior izquierdo */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

        {/* Glow inferior derecho */}
        <div className="absolute -bottom-40 -right-32 w-[450px] h-[450px] bg-violet-600/8 rounded-full blur-[110px]" />

        {/* Línea decorativa horizontal sutil */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-700/40 to-transparent" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-400/90 mb-5"
        >
          Desarrollador Frontend
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold text-zinc-50 mb-6 tracking-tight leading-[1.15]"
        >
          Miguel González
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Creo productos digitales funcionales con interfaces limpias y orientadas
          al usuario. Especializado en{" "}
          <span className="text-zinc-200">React</span>,{" "}
          <span className="text-zinc-200">Next.js</span> y{" "}
          <span className="text-zinc-200">Flutter</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#proyectos"
            className="px-6 py-2.5 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-lg hover:bg-white transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contacto"
            className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Contactar
          </a>
        </motion.div>
      </div>
    </section>
  );
}