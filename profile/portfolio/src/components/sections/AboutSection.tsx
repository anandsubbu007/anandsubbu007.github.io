"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "@/lib/constants";

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="metric-card text-center group"
    >
      <div className="text-3xl md:text-4xl font-black mb-1.5 gradient-text-blue">{value}</div>
      <div className="text-xs font-mono tracking-wide" style={{ color: "rgba(255,255,255,0.4)" }}>{label}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" style={{ background: "linear-gradient(180deg, var(--bg-base) 0%, var(--bg-surface) 100%)" }}>
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center mb-16">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              className="section-label mb-4 inline-block"
            >
              // about me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="section-title mb-6"
            >
              I build{" "}
              <span className="gradient-text">complete systems,</span>
              <br />not just features.
            </motion.h2>
            <div className="space-y-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              {[
                "With 6+ years in mobile engineering, I've moved from shipping features to owning entire mobile platforms — architecture, security, CI/CD, analytics, release engineering, and developer experience.",
                "At Bread Financial, I lead native Android SDK development, Flutter applications, Okta, Adobe Analytics, Medallia integrations, monorepo migrations, CI/CD pipelines, and mobile security hardening.",
                "Through freelance work, I've built real production systems like Vanigam GST Billing and the RetailMart B2B ecosystem — products real businesses rely on daily.",
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-base leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {["Architecture", "Scalability", "Security", "Ownership", "Platform Eng", "AI-Assisted Dev"].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </motion.div>
          </div>

          {/* Right — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-4"
          >
            {/* Profile card */}
            <div
              className="glass-card rounded-2xl p-8 card-shimmer relative overflow-hidden"
              style={{ boxShadow: "0 0 60px rgba(37,99,235,0.1)" }}
            >
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center text-3xl"
                  style={{ background: "linear-gradient(135deg, rgba(37,99,235,0.3), rgba(6,182,212,0.2))", border: "1px solid rgba(59,130,246,0.3)" }}>
                  👨‍💻
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Anand Alagappan</h3>
                <p className="text-sm font-mono mb-5" style={{ color: "#60a5fa" }}>Senior Mobile Systems Engineer</p>
                <div className="space-y-3">
                  {[
                    { label: "Currently at", value: "Bread Financial" },
                    { label: "Specialization", value: "Flutter · Android · Fintech" },
                    { label: "Domains", value: "Platform · SDK · Security" },
                    { label: "Location", value: "India 🇮🇳" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="text-xs font-mono w-24 shrink-0 mt-0.5" style={{ color: "rgba(255,255,255,0.25)" }}>{label}</span>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div
              className="rounded-xl p-5 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(6,182,212,0.05))",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              <div className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
                style={{ background: "linear-gradient(180deg, #3b82f6, #22d3ee)" }} />
              <p className="text-sm leading-relaxed italic pl-3" style={{ color: "rgba(255,255,255,0.55)" }}>
                &ldquo;I don&apos;t just build features — I build complete systems. From architecture planning and SDK development to CI/CD pipelines, security hardening, and release engineering, I take full ownership of mobile platforms end-to-end.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((stat, i) => (
            <AnimatedStat key={stat.label} value={stat.value} label={stat.label} delay={0.08 * i} />
          ))}
        </div>
      </div>
    </section>
  );
}
