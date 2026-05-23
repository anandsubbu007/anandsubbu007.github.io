'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const alignClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[align]

  return (
    <motion.div
      ref={ref}
      className={cn('flex flex-col gap-4', alignClass, className)}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {badge && (
        <span className="mono-text inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-glow-pulse" />
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f1f5f9] leading-tight tracking-tight">
        {titleHighlight ? (
          <>
            {title}{' '}
            <span className="gradient-text">{titleHighlight}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {description && (
        <p className="text-[#94a3b8] text-base sm:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
