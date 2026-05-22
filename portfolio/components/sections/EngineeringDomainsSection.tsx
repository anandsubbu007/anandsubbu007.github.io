'use client'

import { motion } from 'framer-motion'
import {
  Smartphone, Package, CreditCard, Shield, Zap, Brain,
} from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { domains } from '@/lib/data/domains'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  Smartphone, Package, CreditCard, Shield, Zap, Brain,
}

export function EngineeringDomainsSection() {
  return (
    <section
      id="domains"
      className="section-padding relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.06) 0%, transparent 70%), #0a0e1a`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Engineering Domains"
          title="What I"
          titleHighlight="Specialize In"
          description="From mobile platform architecture to fintech security — six deep specialization areas built through production experience."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => {
            const Icon = iconMap[domain.icon] ?? Smartphone
            return (
              <motion.div
                key={domain.id}
                className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-4 hover:border-blue-500/25 transition-all duration-300 group cursor-default"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                whileHover={{ y: -6, boxShadow: `0 12px 48px ${domain.accentColor}18` }}
              >
                {/* Gradient overlay top */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `linear-gradient(135deg, ${domain.accentColor}08 0%, transparent 60%)` }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center relative"
                  style={{
                    background: `${domain.accentColor}18`,
                    border: `1px solid ${domain.accentColor}40`,
                    boxShadow: `0 0 16px ${domain.accentColor}20`,
                  }}
                >
                  <Icon size={22} style={{ color: domain.accentColor }} />
                </div>

                <div>
                  <h3 className="text-[#f1f5f9] font-bold text-lg leading-snug">{domain.title}</h3>
                  <p className="text-[#64748b] text-sm mt-1 leading-relaxed">{domain.description}</p>
                </div>

                <ul className="space-y-2 mt-1">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-[#94a3b8]">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: domain.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-auto h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${domain.accentColor}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
