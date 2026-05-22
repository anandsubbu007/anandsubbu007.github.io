"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AI_TOOLS } from "@/lib/constants";

const WORKFLOWS = [
  { step: "01", title: "Architecture Exploration", desc: "Use Claude to explore tradeoffs, compare patterns, and stress-test system designs before a single line is written." },
  { step: "02", title: "Rapid Prototyping", desc: "Cursor + Copilot for rapid scaffolding, boilerplate acceleration, and test case generation — 3x productivity." },
  { step: "03", title: "Refactoring at Scale", desc: "AI-assisted codebase-wide refactoring, pattern recognition, and technical debt reduction across large codebases." },
  { step: "04", title: "Documentation Automation", desc: "Architecture docs, API specs, code comments, and ADRs — maintaining documentation quality at engineering velocity." },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai" className="section relative overflow-hidden" style={{ background: "linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      <div className="container relative" ref={ref}>
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // ai-assisted engineering
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title mb-4">
            Engineering at the{" "}<span className="gradient-text">speed of thought</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            AI tools as force multipliers — not shortcuts. The goal: ship production-grade systems faster without compromising engineering standards.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Tools */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>Tools in my workflow</h3>
            <div className="space-y-3.5">
              {AI_TOOLS.map((tool, i) => (
                <motion.div key={tool.name}
                  initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="flex gap-4 glass rounded-2xl p-5 glass-hover group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: tool.color + "15", border: `1px solid ${tool.color}20` }}>
                    {tool.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-0.5 group-hover:text-blue-300 transition-colors">{tool.name}</p>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{tool.use}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Workflows */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>How I use AI</h3>
            <div className="space-y-6">
              {WORKFLOWS.map((w, i) => (
                <motion.div key={w.step}
                  initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.09 }}
                  className="flex gap-5"
                >
                  <div className="text-3xl font-black font-mono shrink-0 w-10 leading-none" style={{ color: "rgba(59,130,246,0.15)" }}>{w.step}</div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{w.title}</h4>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }}
              className="mt-8 rounded-2xl p-5 relative overflow-hidden"
              style={{ background: "rgba(99,102,241,0.06)", border: "1px solid rgba(99,102,241,0.15)" }}>
              <div className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)" }} />
              <p className="text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                &ldquo;AI tools don&apos;t replace engineering judgment — they amplify it. I use AI to move faster on the knowable so I can focus deeper on the complex.&rdquo;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
