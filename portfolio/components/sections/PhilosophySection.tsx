'use client'

import { motion } from 'framer-motion'
import { Layers, Shield, Cpu, Users } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'

const pillars = [
  {
    icon: Layers,
    title: 'Systems, Not Features',
    description: 'Every feature lives inside a system. I design for the system — architecture, scalability, long-term maintainability — not just the immediate task.',
    color: '#3b82f6',
  },
  {
    icon: Shield,
    title: 'Security as a Feature',
    description: 'OWASP, SSL pinning, secure storage, threat modeling — not afterthoughts. Security is engineered in from the start.',
    color: '#ef4444',
  },
  {
    icon: Cpu,
    title: 'Platform Thinking',
    description: 'I build platforms that other engineers can build on — SDKs, shared libraries, developer tooling, CI/CD pipelines, and lint rules that scale with teams.',
    color: '#6366f1',
  },
  {
    icon: Users,
    title: 'Business-Aware Engineering',
    description: 'From running a family wholesale business to building fintech apps — I understand what software needs to do for a business. Engineering decisions are business decisions.',
    color: '#10b981',
  },
]

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="section-padding relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%), #0a0e1a`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-8 text-center">
          <SectionHeader
            badge="Engineering Philosophy"
            title="How I Think"
            titleHighlight="About Software"
            align="center"
          />

          {/* Big quote */}
          <motion.blockquote
            className="relative max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="absolute -top-6 -left-4 text-8xl text-blue-500/20 font-serif leading-none select-none">&ldquo;</span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f1f5f9] leading-tight tracking-tight">
              Most developers build <span className="text-[#94a3b8]">features.</span>
              <br />I build <span className="gradient-text">complete systems.</span>
            </p>
            <p className="mt-4 text-[#64748b] text-base sm:text-lg leading-relaxed">
              From architecture and platform tooling to release engineering, security, scalability, analytics, CI/CD, developer experience, and long-term maintainability.
            </p>
          </motion.blockquote>

          {/* The combination */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              'Enterprise Experience',
              'Product Ownership',
              'Mobile Architecture',
              'Business Understanding',
              'AI-Assisted Workflows',
              'Security Mindset',
            ].map((item, i) => (
              <motion.span
                key={item}
                className="px-4 py-2 rounded-xl border border-blue-500/25 bg-blue-500/8 text-blue-300 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.06 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Pillar cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {pillars.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4 hover:border-blue-500/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -6, boxShadow: `0 8px 32px ${p.color}20` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${p.color}18`, border: `1px solid ${p.color}40` }}
                >
                  <Icon size={20} style={{ color: p.color }} />
                </div>
                <h3 className="text-[#f1f5f9] font-semibold text-base leading-snug">{p.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{p.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
