"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Mail, Code2, ArrowRight, AtSign, Link2, Globe } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const CONTACT_LINKS = [
  { label: "Email", value: "anandsubbu007@gmail.com", href: "mailto:anandsubbu007@gmail.com", icon: Mail, color: "#a78bfa", highlight: false },
  { label: "GitHub", value: "anandsubbu007", href: SOCIAL_LINKS.github, icon: Code2, color: "#6366f1", highlight: false },
  { label: "Twitter / X", value: "@AL_Anandsubbu", href: SOCIAL_LINKS.twitter, icon: AtSign, color: "#60a5fa", highlight: false },
  { label: "Stack Overflow", value: "anand-a-l", href: SOCIAL_LINKS.stackoverflow, icon: Globe, color: "#f48024", highlight: false },
  { label: "Medium", value: "@anandsubbu7", href: SOCIAL_LINKS.medium, icon: ExternalLink, color: "#10b981", highlight: false },
  { label: "LeetCode", value: "Anandsubbu", href: SOCIAL_LINKS.leetcode, icon: Code2, color: "#ffa116", highlight: false },
  { label: "Kaggle", value: "anandsubbu007", href: SOCIAL_LINKS.kaggle, icon: Globe, color: "#20beff", highlight: false },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      </div>

      <div className="container relative" ref={ref}>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // contact
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title mb-5">
            Let&apos;s build something{" "}<span className="gradient-text">remarkable</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Open to senior mobile engineering roles, consulting, SDK development, and platform engineering opportunities.
          </motion.p>
        </div>

        {/* ★★★ LinkedIn — FEATURED / HIGHLIGHTED ★★★ */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.25 }}
          className="max-w-lg mx-auto mb-8"
        >
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-card rounded-2xl p-6 flex items-center gap-5 group transition-all duration-300 block"
            style={{ textDecoration: "none" }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-2xl"
              style={{
                background: "linear-gradient(135deg, #0A66C2, #0ea5e9)",
                boxShadow: "0 8px 32px rgba(10,102,194,0.4)",
              }}>
              <Link2 size={26} style={{ color: "white" }} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-base font-black text-white group-hover:text-blue-300 transition-colors">Connect on LinkedIn</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(10,102,194,0.2)", color: "#60a5fa", border: "1px solid rgba(10,102,194,0.3)" }}>
                  Preferred
                </span>
              </div>
              <p className="text-sm font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>linkedin.com/in/anand-subbu</p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                Best way to reach me for opportunities &amp; collaboration
              </p>
            </div>
            <ArrowRight size={20} style={{ color: "#60a5fa" }} className="group-hover:translate-x-1 transition-transform shrink-0" />
          </a>
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a href="mailto:anandsubbu007@gmail.com" className="hero-cta-primary inline-flex items-center gap-2">
            <Mail size={17} />Send an Email
          </a>
          <a href="/resume.pdf" target="_blank" className="hero-cta-secondary inline-flex items-center gap-2">
            Download Resume<ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Other links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-4xl mx-auto">
          {CONTACT_LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.05 }}
                className="glass rounded-2xl p-4 glass-hover group flex flex-col items-center gap-2.5 text-center card-shimmer"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: link.color + "15", border: `1px solid ${link.color}20` }}>
                  <Icon size={17} style={{ color: link.color }} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white group-hover:text-blue-300 transition-colors">{link.label}</p>
                  <p className="text-xs font-mono truncate max-w-[110px]" style={{ color: "rgba(255,255,255,0.3)" }}>{link.value}</p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.9 }} className="text-center mt-8">
          <a href={SOCIAL_LINKS.githubOrg} target="_blank" rel="noopener noreferrer"
            className="text-xs font-mono transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}>
            Also: github.com/Subbu-App-Tech
          </a>
        </motion.div>
      </div>
    </section>
  );
}
