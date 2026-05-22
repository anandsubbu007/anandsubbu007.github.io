"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const HIGHLIGHTS = [
  {
    area: "SDK Development",
    color: "#EF4444",
    items: [
      "Native Android SDK for core banking components",
      "Flutter plugin wrapping native SDK",
      "WebView rendering SDK with custom JS bridge",
      "Internal tooling libraries for developer efficiency",
    ],
  },
  {
    area: "Platform Integrations",
    color: "#F59E0B",
    items: [
      "Okta authentication integration",
      "Adobe Analytics event tracking",
      "Adobe Assurance for QA debugging",
      "Medallia customer feedback SDK",
      "Decibel analytics integration",
    ],
  },
  {
    area: "Engineering Quality",
    color: "#10B981",
    items: [
      "Monorepo migration and management",
      "Custom lint rules for code quality",
      "Unit + integration + widget testing",
      "80%+ test coverage across modules",
    ],
  },
  {
    area: "CI/CD & Release",
    color: "#3B82F6",
    items: [
      "Jenkins pipeline engineering",
      "Automated release workflows",
      "40% faster deployment cycles",
      "Release engineering and management",
    ],
  },
];

const METRICS = [
  { value: "30%", label: "Fewer Code Issues", color: "#7C3AED" },
  { value: "25%", label: "Performance Improvement", color: "#EF4444" },
  { value: "40%", label: "Faster Deployments", color: "#F59E0B" },
  { value: "80%+", label: "Test Coverage", color: "#10B981" },
];

export default function BreadCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 font-mono transition-colors">
            <ArrowLeft size={14} />Back to Projects
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-orange-400 tracking-widest uppercase px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              ENTERPRISE — FINTECH GRADE
            </span>
            <span className="text-xs text-white/25 font-mono">High-level overview only</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Bread Financial <span className="gradient-text">Engineering</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
            Senior Mobile Engineer at a fintech company — leading SDK development,
            platform integrations, CI/CD engineering, mobile security hardening,
            and release management at enterprise scale.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 text-white text-sm font-medium transition-colors">
            <ExternalLink size={14} />Bread Mobile App
          </a>
        </motion.div>

        <div className="glass rounded-xl p-5 mb-10 border border-amber-500/15 bg-amber-500/3">
          <p className="text-sm text-amber-400/70 font-mono">⚠ Note: This overview is intentionally high-level. No confidential implementation details, internal APIs, or proprietary code is disclosed.</p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Engineering Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {METRICS.map((m) => (
              <div key={m.label} className="glass rounded-xl p-5 text-center">
                <div className="text-3xl font-black mb-1" style={{ color: m.color }}>{m.value}</div>
                <div className="text-xs text-white/35 font-mono">{m.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Work Areas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((area) => (
              <div key={area.area} className="glass rounded-xl p-6" style={{ borderLeft: `3px solid ${area.color}` }}>
                <h3 className="text-sm font-bold mb-3" style={{ color: area.color }}>{area.area}</h3>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="text-sm text-white/45 flex gap-2">
                      <span style={{ color: area.color + "80" }}>·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Key Learnings</h2>
          <div className="glass rounded-xl p-6 space-y-3">
            {[
              "Enterprise mobile engineering demands a different rigor — every SDK change has downstream impact across teams.",
              "Security is not optional in fintech — OWASP, SSL pinning, and secure storage are engineering baselines, not additions.",
              "CI/CD is a product — treating the pipeline as a first-class system dramatically improves team velocity.",
              "Monorepo migrations require careful change management — the tooling investment pays off long-term.",
            ].map((l, i) => (
              <div key={i} className="flex gap-3 text-sm text-white/55">
                <span className="text-orange-400/60 font-mono shrink-0">→</span>{l}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
