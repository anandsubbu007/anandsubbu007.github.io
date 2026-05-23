'use client'

import { motion } from 'framer-motion'
import { impactItems } from '@/lib/data/impact'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { CheckCircle, Rocket, Zap, BarChart2, Shield, Package, Star, Users, TrendingUp, GraduationCap, Code2 } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  CheckCircle, Rocket, Zap, BarChart2, Shield, Package, Star, Users, TrendingUp, GraduationCap, Code2,
  TestTube: CheckCircle,
  Crown: Star,
  Download: Zap,
  Globe: BarChart2,
}

const categoryColor: Record<string, string> = {
  performance: '#10b981',
  quality: '#6366f1',
  delivery: '#3b82f6',
  scale: '#f59e0b',
}

export function EngineeringImpactSection() {
  return (
    <section id="impact" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        badge="Engineering Impact"
        title="What I've"
        titleHighlight="Delivered"
        description="Production results across fintech, B2B ecommerce, POS systems, and enterprise mobile platforms."
        align="center"
      />

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {impactItems.map((item, i) => {
          const Icon = iconMap[item.icon] ?? CheckCircle
          const color = categoryColor[item.category] ?? '#3b82f6'
          return (
            <motion.div
              key={item.id}
              className={`glass-card rounded-2xl p-6 border flex gap-4 transition-all duration-300 group cursor-default
                ${item.highlight ? 'border-blue-500/30 hover:border-blue-500/50' : 'border-white/8 hover:border-white/15'}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              whileHover={{ y: -5, boxShadow: `0 8px 32px ${color}20` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${color}18`, border: `1px solid ${color}40` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <div className="font-bold text-[#f1f5f9] text-base mb-1">{item.metric}</div>
                <div className="text-[#64748b] text-sm leading-relaxed">{item.description}</div>
                <div
                  className="mono-text text-[10px] font-semibold tracking-widest uppercase mt-2"
                  style={{ color }}
                >
                  {item.category}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
