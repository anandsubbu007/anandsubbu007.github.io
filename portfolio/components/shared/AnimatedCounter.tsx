'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const start = 0
    const end = value
    const startTime = performance.now()

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOut(progress)
      setCount(Math.round(start + (end - start) * easedProgress))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}
