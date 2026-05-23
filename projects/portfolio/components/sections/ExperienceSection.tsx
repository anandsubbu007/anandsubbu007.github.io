'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { experience } from '@/lib/data/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        badge="Career"
        title="Experience"
        titleHighlight="Timeline"
        description="6+ years across fintech, B2B ecommerce, POS systems, enterprise SaaS, and product building."
        align="center"
      />

      <div className="mt-16 relative">
        {/* Vertical line */}
        <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent" />

        <div className="space-y-12">
          {experience.map((entry, i) => (
            <motion.div
              key={entry.id}
              className={`relative flex gap-6 lg:gap-0 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 * i }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 -translate-y-0 flex items-start pt-7">
                <div
                  className="w-4 h-4 rounded-full border-2 border-[#0a0e1a] z-10 shadow-[0_0_12px_currentColor]"
                  style={{
                    background: entry.accentColor,
                    boxShadow: `0 0 12px ${entry.accentColor}`,
                  }}
                >
                  {entry.current && (
                    <span className="absolute inset-0 rounded-full animate-ping" style={{ background: entry.accentColor, opacity: 0.4 }} />
                  )}
                </div>
              </div>

              {/* Card */}
              <div className={`lg:w-[calc(50%-2rem)] ml-14 lg:ml-0 ${i % 2 === 0 ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                <div
                  className="glass-card rounded-2xl p-6 border transition-all duration-300 hover:shadow-[0_0_32px_rgba(59,130,246,0.1)]"
                  style={{ borderColor: entry.current ? `${entry.accentColor}40` : 'rgba(255,255,255,0.08)' }}
                >
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mono-text text-sm font-bold shrink-0"
                      style={{
                        background: `${entry.accentColor}20`,
                        border: `1px solid ${entry.accentColor}40`,
                        color: entry.accentColor,
                      }}
                    >
                      {entry.companyShort}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[#f1f5f9] font-bold text-base">{entry.company}</h3>
                        {entry.current && (
                          <span className="px-2 py-0.5 rounded-full border border-green-500/40 bg-green-500/10 text-green-400 text-[10px] font-semibold mono-text">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-[#94a3b8] text-sm font-medium">{entry.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-[#64748b] mb-4 mono-text">
                    <span>{entry.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={11} /> {entry.location}
                    </span>
                    <span className="capitalize px-2 py-0.5 rounded border border-white/10 bg-white/4">{entry.type}</span>
                  </div>

                  <p className="text-[#94a3b8] text-sm mb-4 leading-relaxed">{entry.description}</p>

                  {/* Key bullets (first 5) */}
                  <ul className="space-y-1.5 mb-4">
                    {entry.bullets.slice(0, 5).map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2.5 text-xs text-[#94a3b8]">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                          style={{ background: entry.accentColor }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Products */}
                  {entry.products && entry.products.length > 0 && (
                    <div className="pt-3 border-t border-white/6">
                      <p className="mono-text text-[9px] text-[#475569] font-semibold tracking-widest uppercase mb-2">Projects</p>
                      <div className="flex flex-wrap gap-1.5">
                        {entry.products.map((p) => (
                          <span key={p} className="text-xs px-2.5 py-1 rounded-lg border border-white/10 text-[#64748b] bg-white/3">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Product links */}
                  {entry.productLinks && entry.productLinks.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {entry.productLinks.map((pl) => (
                        <a
                          key={pl.name}
                          href={pl.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-blue-500/25 text-blue-400 bg-blue-500/8 hover:bg-blue-500/15 transition-all"
                        >
                          {pl.name} <ExternalLink size={10} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
