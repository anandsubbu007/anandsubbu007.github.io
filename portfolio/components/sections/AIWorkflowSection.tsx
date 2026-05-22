'use client'

import { motion } from 'framer-motion'
import { Bot, Code2, MessageSquare, Terminal, Cpu, Workflow } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { aiTools } from '@/lib/data/aiTools'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Bot, Code2, MessageSquare, Terminal, Cpu, Workflow,
}

export function AIWorkflowSection() {
  return (
    <section
      id="ai-workflow"
      className="section-padding relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.06) 0%, transparent 70%), #0a0e1a`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="AI-Assisted Engineering"
          title="Modern"
          titleHighlight="AI Workflows"
          description="I integrate AI tooling into every phase of the engineering lifecycle — from architecture exploration to automated documentation."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiTools.map((tool, i) => {
            const Icon = iconMap[tool.icon] ?? Bot
            return (
              <motion.div
                key={tool.id}
                className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4 hover:border-purple-500/30 transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                whileHover={{ y: -5, boxShadow: `0 8px 32px ${tool.color}20` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mono-text text-sm font-bold"
                    style={{
                      background: `${tool.color}20`,
                      border: `1px solid ${tool.color}40`,
                      color: tool.color,
                    }}
                  >
                    {tool.logoPlaceholder}
                  </div>
                  <div>
                    <h3 className="text-[#f1f5f9] font-bold text-base leading-tight">{tool.name}</h3>
                    <Icon size={12} style={{ color: tool.color }} className="mt-0.5" />
                  </div>
                </div>

                <p className="text-[#64748b] text-sm leading-relaxed">{tool.description}</p>

                <div className="flex flex-wrap gap-2 mt-1">
                  {tool.useCases.map((uc) => (
                    <span
                      key={uc}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-medium border"
                      style={{
                        borderColor: `${tool.color}35`,
                        background: `${tool.color}12`,
                        color: tool.color,
                      }}
                    >
                      {uc}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Workflow diagram */}
        <motion.div
          className="mt-12 glass-card rounded-3xl border border-white/8 p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-6">
            Engineering Workflow with AI
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#94a3b8]">
            {[
              { label: 'Problem', color: '#3b82f6' },
              { label: '→', color: '#475569' },
              { label: 'AI Exploration', color: '#a855f7' },
              { label: '→', color: '#475569' },
              { label: 'Architecture', color: '#6366f1' },
              { label: '→', color: '#475569' },
              { label: 'Implementation', color: '#10b981' },
              { label: '→', color: '#475569' },
              { label: 'Review + Docs', color: '#f59e0b' },
              { label: '→', color: '#475569' },
              { label: 'Ship', color: '#22c55e' },
            ].map(({ label, color }, i) => (
              <span key={i} style={{ color }} className={label === '→' ? '' : 'font-semibold'}>
                {label}
              </span>
            ))}
          </div>
          <p className="text-center text-[#475569] text-xs mt-4">
            AI doesn't replace engineering judgement — it amplifies it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
