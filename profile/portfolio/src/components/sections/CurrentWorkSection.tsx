"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Shield, Zap, Code2, GitBranch, BarChart3, Settings } from "lucide-react";

const WORK = [
  { icon: Code2, title: "SDK Development", desc: "Native Android SDK + Flutter plugin development for core banking", color: "#3b82f6" },
  { icon: Shield, title: "Platform Integrations", desc: "Okta auth, Adobe Analytics, Assurance, Medallia, Decibel", color: "#ef4444" },
  { icon: Zap, title: "Performance +25%", desc: "Startup optimization, rendering tuning, memory management", color: "#f59e0b" },
  { icon: GitBranch, title: "CI/CD Pipelines", desc: "Jenkins pipelines, 40% faster deployments, release automation", color: "#10b981" },
  { icon: BarChart3, title: "Quality Engineering", desc: "80%+ test coverage, custom lint rules, monorepo migration", color: "#3b82f6" },
  { icon: Settings, title: "Mobile Architecture", desc: "Modular architecture, WebView SDK, developer tooling", color: "#22d3ee" },
];

const METRICS = [
  { value: "30%", label: "Fewer Code Issues", color: "#a78bfa" },
  { value: "25%", label: "Performance Boost", color: "#3b82f6" },
  { value: "40%", label: "Faster Deploys", color: "#22d3ee" },
  { value: "80%+", label: "Test Coverage", color: "#10b981" },
];

export default function CurrentWorkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>
      <div className="container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <div>
            <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
              // current work
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
              Senior Engineer @{" "}<span className="gradient-text">Bread Financial</span>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Building fintech-grade mobile experiences at enterprise scale — SDK development, platform integrations, CI/CD, security hardening, and release engineering.
          </motion.p>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {METRICS.map((m, i) => (
            <motion.div key={m.label} initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ delay: 0.15 + i * 0.07 }}
              className="metric-card text-center"
              style={{ borderColor: m.color + "30" }}
            >
              <div className="text-3xl font-black mb-1" style={{ color: m.color }}>{m.value}</div>
              <div className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>{m.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Work grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {WORK.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.07 }}
                className="glass rounded-2xl p-6 glass-hover card-shimmer group gradient-border"
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: item.color + "15", border: `1px solid ${item.color}25` }}>
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.7 }} className="mt-8">
          <a href="https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono px-4 py-2.5 rounded-xl transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <ExternalLink size={14} />
            Bread Mobile App on Play Store — high-level overview only
          </a>
        </motion.div>
      </div>
    </section>
  );
}
