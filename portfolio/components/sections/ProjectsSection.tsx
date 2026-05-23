'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Star, ArrowRight } from 'lucide-react'
import { GitHubIcon } from '@/components/shared/SocialIcons'
import Link from 'next/link'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { MobileFrame } from '@/components/shared/MobileFrame'
import { projects } from '@/lib/data/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        badge="Production Systems"
        title="Featured"
        titleHighlight="Projects"
        description="Real apps. Real users. Real business workflows — not side projects or tutorials."
        align="center"
      />

      <div className="mt-12 space-y-10">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            className={`glass-card rounded-3xl border overflow-hidden transition-all duration-300 group
              ${project.flagship ? 'border-blue-500/35' : 'border-white/8 hover:border-blue-500/20'}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.05 * i }}
          >
            <div
              className={`grid ${i % 2 === 0 ? 'lg:grid-cols-[280px_1fr]' : 'lg:grid-cols-[1fr_280px]'} gap-0 min-h-[340px]`}
            >
              {/* Project visual — icon or screenshot */}
              <div
                className={`flex items-center justify-center p-8 relative ${i % 2 !== 0 ? 'lg:order-last' : ''}`}
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}18 0%, ${project.gradientTo}10 100%)`,
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                  borderLeft: i % 2 !== 0 ? '1px solid rgba(255,255,255,0.06)' : undefined,
                }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                  className="flex flex-col items-center gap-4"
                >
                  {project.iconUrl ? (
                    <div
                      className="w-28 h-28 rounded-3xl overflow-hidden shadow-2xl"
                      style={{ boxShadow: `0 20px 60px ${project.gradientFrom}50` }}
                    >
                      <img
                        src={project.iconUrl}
                        alt={`${project.title} icon`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-32">
                      <MobileFrame
                        gradientFrom={project.gradientFrom}
                        gradientTo={project.gradientTo}
                        title={project.title}
                        className="w-full drop-shadow-2xl"
                      />
                    </div>
                  )}
                  {project.screenshotUrl && (
                    <div className="w-36 rounded-2xl overflow-hidden shadow-xl opacity-80"
                      style={{ boxShadow: `0 8px 32px ${project.gradientFrom}30` }}>
                      <img
                        src={project.screenshotUrl}
                        alt={`${project.title} screenshot`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-7 lg:p-9 flex flex-col justify-between gap-6">
                <div>
                  {/* Title row */}
                  <div className="flex flex-wrap items-start gap-3 mb-4">
                    <div className="flex-1">
                      {project.flagship && (
                        <div className="flex items-center gap-2 mb-2">
                          <Star size={12} className="text-yellow-400 fill-yellow-400" />
                          <span className="mono-text text-yellow-400 text-[10px] font-bold tracking-widest uppercase">
                            Flagship Project
                          </span>
                        </div>
                      )}
                      <h3 className="text-[#f1f5f9] font-bold text-2xl leading-tight">{project.title}</h3>
                      <p className="text-[#64748b] text-sm mt-1 mono-text">{project.subtitle}</p>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold border"
                      style={{
                        borderColor: `${project.gradientFrom}50`,
                        background: `${project.gradientFrom}15`,
                        color: project.gradientFrom,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{project.description}</p>

                  {/* Highlights */}
                  <ul className="grid sm:grid-cols-2 gap-2 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: project.gradientFrom }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="mono-text px-2.5 py-1 rounded-lg border border-white/10 text-[#94a3b8] text-xs bg-white/3"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action row */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/6">
                  {project.playStoreUrl && (
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                      style={{
                        background: `${project.gradientFrom}18`,
                        border: `1px solid ${project.gradientFrom}40`,
                        color: project.gradientFrom,
                      }}
                    >
                      <ExternalLink size={14} /> Play Store
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-[#94a3b8] text-sm font-semibold hover:border-white/20 hover:text-[#f1f5f9] hover:bg-white/5 transition-all"
                    >
                      <GitHubIcon size={14} /> GitHub
                    </a>
                  )}
                  {project.caseStudySlug && (
                    <Link
                      href={`/case-studies/${project.caseStudySlug}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-indigo-500/30 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all"
                    >
                      Case Study <ArrowRight size={14} />
                    </Link>
                  )}
                  {project.downloads && (
                    <span className="px-3 py-2 rounded-xl border border-white/8 text-[#64748b] text-xs font-medium mono-text">
                      {project.downloads} downloads
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
