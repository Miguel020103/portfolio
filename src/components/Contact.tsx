"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const email = "mifagohu82@gmail.com";
  const [copied, setCopied] = useState(false);
  const whatsappNumber = "573107787674";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <section id="contacto" className="py-28 px-6 border-t border-zinc-800/50">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold text-zinc-50 tracking-tight mb-4"
        >
          ¿Trabajamos juntos?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-zinc-400 text-[15px] mb-10 max-w-md mx-auto"
        >
          Abierto a nuevas oportunidades y proyectos interesantes.
        </motion.p>

        {/* Correo visible */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="text-zinc-300 text-base mb-8"
        >
          {email}
        </motion.p>

        {/* Botones */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap"
        >
          <button
            onClick={handleCopy}
            className="px-6 py-2.5 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-lg hover:bg-white transition-colors"
          >
            {copied ? "¡Correo copiado!" : "Copiar correo"}
          </button>

          {whatsappNumber ? (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-colors"
            >
              WhatsApp
            </a>
          ) : (
            <button
              className="px-6 py-2.5 border border-zinc-700 text-zinc-500 text-sm font-medium rounded-lg cursor-not-allowed opacity-60"
              disabled
            >
              WhatsApp
            </button>
          )}

          <a
            href="https://github.com/Miguel020103"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-lg hover:border-zinc-500 hover:text-zinc-100 transition-colors"
          >
            Ver GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}