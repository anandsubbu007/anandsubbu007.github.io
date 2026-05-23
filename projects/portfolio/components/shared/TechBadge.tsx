'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TechBadgeProps {
  name: string
  level?: 'expert' | 'advanced' | 'intermediate'
  category?: string
  accentColor?: string
  className?: string
  delay?: number
}

const levelColors = {
  expert: 'border-blue-500/50 bg-blue-500/10 text-blue-300',
  advanced: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300',
  intermediate: 'border-slate-500/40 bg-slate-500/8 text-slate-300',
}

export function TechBadge({
  name,
  level = 'advanced',
  accentColor,
  className,
  delay = 0,
}: TechBadgeProps) {
  return (
    <motion.span
      className={cn(
        'mono-text inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium tracking-wide transition-all duration-200 cursor-default',
        levelColors[level],
        'hover:scale-105 hover:shadow-[0_0_16px_rgba(59,130,246,0.35)]',
        className,
      )}
      style={accentColor ? { borderColor: `${accentColor}50`, color: accentColor } : {}}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.08 }}
    >
      {level === 'expert' && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      )}
      {name}
    </motion.span>
  )
}
