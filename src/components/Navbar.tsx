"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0c0e14]/80 backdrop-blur-xl border-b border-zinc-800/60"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        <a
          href="#"
          className="text-[15px] font-medium tracking-tight text-zinc-100 hover:text-white transition-colors"
        >
          Miguel González
        </a>

        <div className="hidden sm:flex items-center gap-8 text-[13px] text-zinc-400">
          <a href="#proyectos" className="hover:text-zinc-100 transition-colors">
            Proyectos
          </a>
          <a href="#tecnologias" className="hover:text-zinc-100 transition-colors">
            Tecnologías
          </a>
          <a
            href="#contacto"
            className="px-4 py-1.5 rounded-full border border-zinc-700 text-zinc-300 hover:border-zinc-500 hover:text-white transition-all"
          >
            Contacto
          </a>
        </div>
      </div>
    </motion.nav>
  );
}