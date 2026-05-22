"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ARCHITECTURE = [
  {
    app: "Seller App",
    color: "#059669",
    features: [
      "Product listing & inventory management",
      "Order management & fulfillment",
      "Pricing & discount configuration",
      "Sales analytics dashboard",
      "Buyer communication",
    ],
  },
  {
    app: "Buyer App",
    color: "#3B82F6",
    features: [
      "Product browsing & search",
      "Cart & checkout workflows",
      "Order tracking",
      "Buyer-seller messaging",
      "Repeat order management",
    ],
  },
];

const CHALLENGES = [
  {
    title: "Dual-App State Synchronization",
    desc: "Seller inventory changes must reflect instantly in buyer app. Implemented Firebase real-time sync with optimistic UI updates and conflict resolution.",
  },
  {
    title: "Complex Order Workflow",
    desc: "B2B orders involve approval flows, partial shipments, and credit terms. Modeled as a state machine with clear transition guards.",
  },
  {
    title: "Role-Based Architecture",
    desc: "Seller and buyer flows share some screens but have fundamentally different data access. Built a role-aware routing and permission system.",
  },
  {
    title: "Offline Resilience",
    desc: "Field sales agents need the seller app to work offline. Implemented local-first data with background sync on reconnection.",
  },
];

export default function RetailMartCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-10">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 font-mono transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              MOST COMPLEX — 1.5 YEARS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            RetailMart <span className="gradient-text">Ecosystem</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
            A complete B2B ecommerce dual-app ecosystem — separate Seller and
            Buyer applications — built over 1.5 years of continuous development
            and product ownership.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="https://play.google.com/store/apps/details?id=com.subbu.retailmart_seller" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition-colors">
              <ExternalLink size={14} />Seller App
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.subbu.retailmart&hl=en_IN" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white/60 hover:text-white text-sm font-medium transition-colors">
              <ExternalLink size={14} />Buyer App
            </a>
          </div>
        </motion.div>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Problem Statement</h2>
          <div className="glass rounded-xl p-6 border-l-4 border-emerald-500">
            <p className="text-white/60 leading-relaxed">
              B2B wholesale markets in India operate with complex order workflows,
              credit-based purchasing, and multi-vendor dynamics. Existing solutions
              either target B2C or are too rigid for wholesale workflows. The goal
              was to build a complete two-sided marketplace — sellers managing
              inventory and orders, buyers browsing and placing bulk orders — with
              real-time synchronization and production reliability.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Dual-App Architecture</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ARCHITECTURE.map((app) => (
              <div key={app.app} className="glass rounded-xl p-6" style={{ borderLeft: `3px solid ${app.color}` }}>
                <h3 className="text-base font-bold mb-3" style={{ color: app.color }}>{app.app}</h3>
                <ul className="space-y-2">
                  {app.features.map((f) => (
                    <li key={f} className="text-sm text-white/50 flex gap-2">
                      <span style={{ color: app.color + "80" }}>·</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {["Flutter", "NestJS Backend", "Firebase Realtime DB", "Firebase Auth", "REST APIs", "MVVM", "Clean Architecture", "Role-based Auth", "Offline Sync"].map(t => (
              <span key={t} className="tag text-sm px-3 py-1.5">{t}</span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">Key Engineering Challenges</h2>
          <div className="space-y-4">
            {CHALLENGES.map((c, i) => (
              <div key={c.title} className="glass rounded-xl p-5">
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400/30 font-black font-mono text-lg shrink-0">0{i + 1}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{c.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">What 1.5 Years Taught Me</h2>
          <div className="glass rounded-xl p-6 space-y-3">
            {[
              "Long-term product ownership changes how you make architectural decisions — you optimize for maintainability over cleverness.",
              "Two-sided marketplaces require careful API design from day one — shared endpoints cause version drift problems.",
              "Real-time sync is a feature that must be designed for from the schema level, not retrofitted.",
              "Production ownership means being on-call for your own decisions — it creates great accountability.",
            ].map((l, i) => (
              <div key={i} className="flex gap-3 text-sm text-white/55">
                <span className="text-emerald-400/60 font-mono shrink-0">→</span>{l}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
