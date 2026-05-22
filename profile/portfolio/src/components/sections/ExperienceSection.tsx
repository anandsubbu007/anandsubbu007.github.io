"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section" style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)" }}>
      <div className="container" ref={ref}>
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // experience
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Career <span className="gradient-text">timeline</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.05) 100%)", transform: "translateX(-50%)" }} />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.13 }}
                className={`relative flex flex-col md:flex-row gap-0 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8 z-10">
                  <div className="w-4 h-4 rounded-full"
                    style={{ background: exp.color, border: "2px solid #030712", boxShadow: `0 0 12px ${exp.color}60` }}>
                  </div>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:mr-10" : "md:ml-10"}`}>
                  <div className="glass-card rounded-2xl p-6 card-shimmer relative overflow-hidden"
                    style={{ borderLeft: `3px solid ${exp.color}` }}>
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(90deg, ${exp.color}50, transparent)` }} />
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                        style={{ background: exp.color + "18", border: `1px solid ${exp.color}25` }}>
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="text-base font-black text-white">{exp.company}</h3>
                        <p className="text-sm font-semibold" style={{ color: exp.color }}>{exp.role}</p>
                        <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>{exp.period}</span>
                          <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                            style={{ background: exp.color + "12", color: exp.color, border: `1px solid ${exp.color}20` }}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>{exp.description}</p>

                    <ul className="space-y-1.5 mb-4">
                      {exp.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="text-xs flex items-center gap-2" style={{ color: "rgba(255,255,255,0.35)" }}>
                          <span className="w-1 h-1 rounded-full shrink-0" style={{ background: exp.color + "80" }} />{h}
                        </li>
                      ))}
                      {exp.highlights.length > 4 && (
                        <li className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>+{exp.highlights.length - 4} more</li>
                      )}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
