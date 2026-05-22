"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const IMPACTS = [
  { title: "Production Mobile Platforms", desc: "Built and maintained apps used by real businesses across fintech, ecommerce, and billing.", metric: "Multiple domains", color: "#3b82f6" },
  { title: "B2B Ecommerce Ecosystem", desc: "Scalable dual-app B2B ecosystem (buyer + seller) built over 1.5 years of continuous ownership.", metric: "1.5 years ownership", color: "#10b981" },
  { title: "Fintech-Grade Mobile", desc: "Shipped enterprise fintech experiences — security, compliance, analytics, and scale at Bread Financial.", metric: "Enterprise scale", color: "#ef4444" },
  { title: "SDK & Tooling Systems", desc: "Built internal SDKs, WebView rendering engines, custom lint tools, and productivity tooling.", metric: "Internal platforms", color: "#f59e0b" },
  { title: "CI/CD & Release Engineering", desc: "Improved pipelines achieving 40% faster deployments and automated release processes.", metric: "40% faster", color: "#3b82f6" },
  { title: "Cross-Domain Engineering", desc: "Architecture, testing, security, analytics, performance, release — true end-to-end ownership.", metric: "Full lifecycle", color: "#22d3ee" },
  { title: "Active Production Apps", desc: "LendWise (50+ daily business users), Product Catalogue (10K+ downloads) — real users, long-term maintenance.", metric: "10K+ downloads", color: "#10b981" },
];

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="section" style={{ background: "linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)" }}>
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // engineering impact
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Real systems, <span className="gradient-text">real impact</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {IMPACTS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="flex gap-4 glass rounded-2xl p-6 glass-hover group card-shimmer"
            >
              <div className="shrink-0 mt-0.5">
                <CheckCircle2 size={22} style={{ color: item.color }} className="group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="flex items-center flex-wrap gap-3 mb-2">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full"
                    style={{ background: item.color + "15", color: item.color, border: `1px solid ${item.color}25` }}>
                    {item.metric}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
