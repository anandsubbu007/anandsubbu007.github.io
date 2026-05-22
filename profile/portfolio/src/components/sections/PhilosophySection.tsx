"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const POINTS = [
  { icon: "🏛️", title: "Architecture First", desc: "Every system designed for scale before a single line is written." },
  { icon: "🔒", title: "Security by Default", desc: "OWASP, SSL pinning, secure storage — engineering baselines, not add-ons." },
  { icon: "⚡", title: "Performance as Product", desc: "100ms improvements are features. Startup, rendering, memory — all optimized." },
  { icon: "🔄", title: "Full Ownership", desc: "CI/CD, release engineering, analytics, observability — I own the whole lifecycle." },
  { icon: "🤖", title: "AI-Augmented Velocity", desc: "Claude, Copilot, Cursor — AI tools as force multipliers for engineering quality." },
  { icon: "📐", title: "Systems Thinking", desc: "Monorepos, SDK design, modular architecture — I think in systems, not features." },
];

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="philosophy" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="container relative" ref={ref}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // engineering philosophy
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title mb-6">
            Most developers build{" "}
            <span className="gradient-text-blue">features.</span>
            <br />I build <span className="gradient-text">complete systems.</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            From architecture and platform tooling to release engineering, security, scalability, analytics, CI/CD,
            developer experience, and long-term maintainability.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="glass rounded-2xl p-7 glass-hover card-shimmer group gradient-border cursor-default"
            >
              <div className="text-3xl mb-5">{point.icon}</div>
              <h3 className="text-base font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">{point.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
