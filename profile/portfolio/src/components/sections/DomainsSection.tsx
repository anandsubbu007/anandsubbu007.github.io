"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DOMAINS } from "@/lib/constants";

export default function DomainsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="domains" className="section relative overflow-hidden">
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // engineering domains
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title">
            Areas of deep <span className="gradient-text">expertise</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DOMAINS.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.08 }}
              className="glass-card rounded-2xl p-7 glass-hover group card-shimmer relative overflow-hidden cursor-default"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${domain.color}, transparent)` }} />
              {/* BG glow on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle, ${domain.color}12 0%, transparent 70%)`, filter: "blur(30px)", transform: "translate(30%, -30%)" }} />

              <div className="relative">
                <div className="text-3xl mb-5">{domain.icon}</div>
                <div className="h-px w-10 mb-4 rounded-full" style={{ background: domain.color }} />
                <h3 className="text-base font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">{domain.title}</h3>
                <ul className="space-y-2.5">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                      <span className="w-1 h-1 rounded-full shrink-0" style={{ background: domain.color + "90" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
