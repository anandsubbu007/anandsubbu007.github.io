'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { TechBadge } from '@/components/shared/TechBadge'
import { techStack } from '@/lib/data/techStack'

export function TechStackSection() {
  const [activeId, setActiveId] = useState(techStack[0].id)
  const active = techStack.find((c) => c.id === activeId) ?? techStack[0]

  return (
    <section id="tech-stack" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        badge="Tech Stack"
        title="Engineering"
        titleHighlight="Toolkit"
        description="7 years of tools, frameworks, and patterns refined across fintech, B2B, POS, and enterprise domains."
        align="center"
      />

      <div className="mt-12">
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {techStack.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                activeId === cat.id
                  ? 'border-blue-500/60 bg-blue-500/15 text-blue-300 shadow-[0_0_16px_rgba(59,130,246,0.25)]'
                  : 'border-white/8 text-[#64748b] hover:text-[#94a3b8] hover:border-white/15 hover:bg-white/3'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Badge grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-2">
              <p className="text-[#64748b] text-sm">{active.description}</p>
            </div>

            {/* Expert tier */}
            {active.items.some((i) => i.level === 'expert') && (
              <div>
                <p className="mono-text text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-3">Expert</p>
                <div className="flex flex-wrap gap-2.5">
                  {active.items
                    .filter((i) => i.level === 'expert')
                    .map((item, idx) => (
                      <TechBadge
                        key={item.name}
                        name={item.name}
                        level={item.level}
                        accentColor={active.accentColor}
                        delay={idx * 0.04}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Advanced tier */}
            {active.items.some((i) => i.level === 'advanced') && (
              <div>
                <p className="mono-text text-[10px] text-indigo-400 font-semibold tracking-widest uppercase mb-3">Advanced</p>
                <div className="flex flex-wrap gap-2.5">
                  {active.items
                    .filter((i) => i.level === 'advanced')
                    .map((item, idx) => (
                      <TechBadge
                        key={item.name}
                        name={item.name}
                        level={item.level}
                        delay={idx * 0.04}
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Intermediate tier */}
            {active.items.some((i) => i.level === 'intermediate') && (
              <div>
                <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-3">Familiar</p>
                <div className="flex flex-wrap gap-2.5">
                  {active.items
                    .filter((i) => i.level === 'intermediate')
                    .map((item, idx) => (
                      <TechBadge
                        key={item.name}
                        name={item.name}
                        level={item.level}
                        delay={idx * 0.04}
                      />
                    ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* All categories overview strip */}
      <motion.div
        className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {techStack.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveId(cat.id)}
            className="glass-card rounded-xl p-3 border border-white/6 flex flex-col items-center gap-2 hover:border-blue-500/30 transition-all duration-200 group"
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: cat.accentColor, boxShadow: `0 0 8px ${cat.accentColor}` }}
            />
            <span className="mono-text text-[10px] text-[#64748b] group-hover:text-[#94a3b8] text-center leading-tight">{cat.name}</span>
            <span className="text-[10px] text-[#475569]">{cat.items.length} skills</span>
          </button>
        ))}
      </motion.div>
    </section>
  )
}
