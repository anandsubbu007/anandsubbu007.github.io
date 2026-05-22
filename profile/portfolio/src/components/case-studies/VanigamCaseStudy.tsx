"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const ARCHITECTURE_LAYERS = [
  {
    layer: "Presentation",
    tech: "Flutter Widgets + BLoC",
    color: "#7C3AED",
    items: ["Screens", "Widgets", "BLoC Events/States"],
  },
  {
    layer: "Domain",
    tech: "Use Cases + Entities",
    color: "#3B82F6",
    items: ["Business Logic", "Entities", "Repository Interfaces"],
  },
  {
    layer: "Data",
    tech: "Repositories + Data Sources",
    color: "#10B981",
    items: ["SQLite (Local)", "PDF Generator", "Data Models"],
  },
];

const MODULES = [
  { name: "billing", desc: "Invoice creation, GST calculation, PDF export" },
  { name: "inventory", desc: "Stock management, categories, stock alerts" },
  { name: "customers", desc: "Customer profiles, history, credit tracking" },
  { name: "reports", desc: "Sales reports, tax summaries, analytics" },
  { name: "settings", desc: "Business config, user management, backup" },
];

const CHALLENGES = [
  {
    title: "Offline-First GST Engine",
    problem:
      "GST calculation requires real-time accuracy without internet dependency for field use.",
    solution:
      "Built a fully offline SQLite-backed GST engine with local tax slab management and sync-ready data models.",
    outcome: "100% offline functionality with accurate GST computation.",
  },
  {
    title: "PDF Generation at Scale",
    problem: "Professional invoice PDFs needed to be generated on-device without cloud dependency.",
    solution:
      "Implemented Flutter PDF package with custom invoice templates, business branding, and efficient rendering pipeline.",
    outcome: "Sub-500ms PDF generation for complex multi-item invoices.",
  },
  {
    title: "State Management Complexity",
    problem:
      "Billing workflows involve multi-step forms, running totals, and complex state transitions.",
    solution:
      "Implemented BLoC pattern with clear event-state contracts, separating UI logic from business rules entirely.",
    outcome: "Predictable, testable state with clean separation of concerns.",
  },
];

export default function VanigamCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-10"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80 font-mono transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-violet-400 tracking-widest uppercase px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20">
              FLAGSHIP PROJECT
            </span>
            <span className="text-xs text-white/25 font-mono">
              Flutter · Clean Architecture · BLoC · SQLite
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Vanigam{" "}
            <span className="gradient-text">GST Billing</span>
          </h1>
          <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
            A production-grade GST billing and business management application
            built with Clean Architecture, BLoC state management, and
            offline-first workflows — serving real businesses across India.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://play.google.com/store/apps/details?id=com.subbu.vanigam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors"
            >
              <ExternalLink size={14} />
              View on Play Store
            </a>
            <a
              href="https://github.com/anandsubbu007/Vanigam-GST_Billing_App"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              <Code2 size={14} />
              View Source
            </a>
          </div>
        </motion.div>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">
            Problem Statement
          </h2>
          <div className="glass rounded-xl p-6 border-l-4 border-violet-500">
            <p className="text-white/60 leading-relaxed">
              Small and medium businesses in India need to manage GST billing,
              inventory, and customer records — but most solutions are expensive
              cloud-dependent SaaS products that don&apos;t work reliably in areas
              with poor connectivity. Business owners needed a production-grade,
              offline-first solution that handles complex GST calculations, generates
              professional invoices, and manages business data reliably.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">
            Architecture Decisions
          </h2>
          <div className="space-y-3">
            {ARCHITECTURE_LAYERS.map((layer) => (
              <div
                key={layer.layer}
                className="glass rounded-xl p-5 flex gap-5 items-start"
              >
                <div
                  className="w-3 h-3 rounded-full mt-1 shrink-0"
                  style={{ background: layer.color }}
                />
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-sm font-bold text-white">
                      {layer.layer} Layer
                    </h3>
                    <span className="text-xs text-white/30 font-mono">
                      {layer.tech}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span key={item} className="tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modules */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">
            Modular Structure
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {MODULES.map((mod) => (
              <div key={mod.name} className="glass rounded-xl p-5">
                <code className="text-violet-400 text-sm font-mono font-bold mb-1 block">
                  /{mod.name}
                </code>
                <p className="text-sm text-white/45">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-6">
            Key Engineering Challenges
          </h2>
          <div className="space-y-5">
            {CHALLENGES.map((c, i) => (
              <div key={c.title} className="glass rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg font-black text-white/10 font-mono">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-bold text-white">{c.title}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-xs text-red-400/70 font-mono mb-1">
                      Problem
                    </p>
                    <p className="text-white/50 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-400/70 font-mono mb-1">
                      Solution
                    </p>
                    <p className="text-white/50 leading-relaxed">
                      {c.solution}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400/70 font-mono mb-1">
                      Outcome
                    </p>
                    <p className="text-white/50 leading-relaxed">
                      {c.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-white mb-4">
            What I Learned
          </h2>
          <div className="glass rounded-xl p-6 space-y-3">
            {[
              "Clean Architecture pays dividends on complex domain logic — the GST engine is easily testable and swappable.",
              "BLoC pattern forces discipline in state transitions — every UI state is a deliberate contract.",
              "Offline-first design from day one is exponentially cheaper than retrofitting it later.",
              "Modularization enables feature velocity without architectural debt accumulation.",
            ].map((l, i) => (
              <div key={i} className="flex gap-3 text-sm text-white/55">
                <span className="text-violet-400/60 font-mono shrink-0">
                  →
                </span>
                {l}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
