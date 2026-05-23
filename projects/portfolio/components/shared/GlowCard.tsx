'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  hover?: boolean
  delay?: number
}

export function GlowCard({
  children,
  className,
  glowColor = 'rgba(59,130,246,0.25)',
  hover = true,
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl border border-white/8 glass-card overflow-hidden transition-colors duration-300',
        hover && 'hover:border-blue-500/40 cursor-default',
        className,
      )}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -4,
              boxShadow: `0 0 0 1px rgba(59,130,246,0.35), 0 8px 32px ${glowColor}, 0 0 60px rgba(59,130,246,0.08)`,
            }
          : {}
      }
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
