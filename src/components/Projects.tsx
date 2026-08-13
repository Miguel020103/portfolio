"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Moda Urbana",
    description:
      "E-commerce de ropa minimalista orientado a moda urbana. Catálogo con filtros, carrito persistente, checkout simulado, autenticación de usuarios y panel de administración.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Auth.js"],
    demo: "https://ecomerce-ropa.vercel.app",
  },
  {
    title: "MIRRA — Mis Registros Académicos",
    description:
      "Aplicación Flutter para el seguimiento académico universitario. Gestión de materias, malla curricular, historial, estadísticas de avance y módulo asistente Turing.",
    tech: ["Flutter", "Dart", "Shared Preferences", "Hive"],
    demo: "https://mirra-demo-two.vercel.app",
  },
  {
    title: "MI CAJA — Contabilidad para Conductores",
    description:
      "Aplicación en desarrollo para conductores de InDrive. Registro rápido de ingresos y gastos, control por jornadas y cálculo de ganancia neta. Orientada al uso diario en la calle.",
    tech: ["Flutter", "Dart", "Hive", "Google Fonts"],
    demo: "https://mi-caja-demo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-50 tracking-tight mb-3">
            Proyectos
          </h2>
          <p className="text-zinc-400 text-[15px] max-w-lg">
            Algunos de los proyectos en los que he trabajado recientemente.
          </p>
        </motion.div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700/80 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-medium text-zinc-100 mb-2 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-zinc-400 leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-800/80 text-zinc-400 border border-zinc-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-indigo-300 transition-colors mt-1 sm:mt-0"
                >
                  Ver demo
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}