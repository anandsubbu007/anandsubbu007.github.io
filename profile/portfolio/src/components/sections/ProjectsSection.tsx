"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Code2, ArrowRight, Star, Lock } from "lucide-react";
import { PROJECTS } from "@/lib/constants";
import Link from "next/link";

function ProjectCard({ project, index, wide = false }: { project: typeof PROJECTS[0]; index: number; wide?: boolean }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`glass-card rounded-2xl overflow-hidden group card-shimmer relative ${wide ? "lg:col-span-2" : ""}`}
      style={{ border: "1px solid rgba(59,130,246,0.1)" }}
    >
      {/* Top gradient bar */}
      <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

      {/* Flagship badge bg glow */}
      {project.id === "vanigam" && (
        <div className="absolute top-0 right-0 w-60 h-60 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", filter: "blur(40px)" }} />
      )}

      <div className="p-7 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex-1">
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <span className="text-xs font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                style={{ background: project.accentColor + "15", color: project.accentColor, border: `1px solid ${project.accentColor}25` }}>
                {project.subtitle}
              </span>
              {project.id === "vanigam" && (
                <span className="flex items-center gap-1 text-xs font-mono text-yellow-400/80">
                  <Star size={10} fill="currentColor" />Flagship
                </span>
              )}
            </div>
            <h3 className="text-xl font-black text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
          </div>
          <div className="flex gap-2 ml-4">
            {"githubUrl" in project && project.githubUrl && (
              <a href={project.githubUrl as string} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <Code2 size={15} style={{ color: "rgba(255,255,255,0.5)" }} />
              </a>
            )}
            {"playStoreUrl" in project && (project.playStoreUrl as string) && (
              <a href={project.playStoreUrl as string} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
                style={{ background: "rgba(59,130,246,0.08)", border: "1px solid rgba(59,130,246,0.2)" }}>
                <ExternalLink size={14} style={{ color: "#60a5fa" }} />
              </a>
            )}
          </div>
        </div>

        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.5)" }}>{project.description}</p>

        {/* Dual play store links */}
        {"playStoreUrls" in project && project.playStoreUrls && (
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              { label: "Seller App", href: (project.playStoreUrls as { seller: string; buyer: string }).seller },
              { label: "Buyer App", href: (project.playStoreUrls as { seller: string; buyer: string }).buyer },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg transition-all"
                style={{ color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <ExternalLink size={11} />{label}
              </a>
            ))}
          </div>
        )}

        {/* Metrics */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.metrics?.map((m) => (
            <span key={m} className="text-xs px-2.5 py-1 rounded-lg font-mono"
              style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.12)", color: "rgba(255,255,255,0.4)" }}>
              {m}
            </span>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((t) => <span key={t} className="tag">{t}</span>)}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.2)" }}>
            {project.architecture}
          </span>
          {"caseStudySlug" in project && project.caseStudySlug && (
            <Link href={`/case-studies/${project.caseStudySlug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold font-mono transition-colors group/link"
              style={{ color: "#60a5fa" }}>
              Case Study
              <ArrowRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section" style={{ background: "linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-base) 100%)" }}>
      <div className="container" ref={ref}>
        <div className="text-center mb-14">
          <motion.span initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} className="section-label mb-4 inline-block">
            // projects
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="section-title mb-3">
            Production systems <span className="gradient-text">showcase</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
            className="text-sm font-mono max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
            Real applications. Real users. Real engineering decisions.
          </motion.p>
        </div>

        {/* Featured */}
        <div className="grid lg:grid-cols-3 gap-5 mb-5">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} wide={p.id === "vanigam"} />
          ))}
        </div>

        {/* Others */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {others.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i + featured.length} />
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }} className="text-center mt-10">
          <a href="https://github.com/anandsubbu007" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-mono transition-all duration-200"
            style={{ color: "rgba(255,255,255,0.45)", border: "1px solid rgba(59,130,246,0.15)", background: "rgba(59,130,246,0.05)" }}>
            <Code2 size={16} />
            All repositories → github.com/anandsubbu007
          </a>
        </motion.div>
      </div>
    </section>
  );
}
