"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export default function TechStackSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const categories = Object.keys(TECH_STACK);
  const [active, setActive] = useState(categories[0]);
  const items = TECH_STACK[active as keyof typeof TECH_STACK];

  return (
    <section id="stack" className="section" style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)" }}>
      <div className="container" ref={ref}>
        <div className="text-center mb-12">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // tech stack
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Tools of the <span className="gradient-text">trade</span>
          </motion.h2>
        </div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2.5 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              style={active === cat ? {
                background: "linear-gradient(135deg, #2563eb, #0ea5e9)",
                color: "white",
                boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
              } : {
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3.5"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: i * 0.035 }}
              className="glass rounded-2xl p-5 text-center group glass-hover card-shimmer cursor-default relative overflow-hidden"
            >
              {/* Hover color glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${item.color}18 0%, transparent 70%)` }}
              />
              <div className="relative">
                <div className="text-2xl mb-3">{item.icon}</div>
                <p className="text-xs font-semibold leading-tight group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {item.name}
                </p>
                <div className="w-1.5 h-1.5 rounded-full mx-auto mt-2.5 group-hover:opacity-100 opacity-40 transition-opacity"
                  style={{ background: item.color }} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
