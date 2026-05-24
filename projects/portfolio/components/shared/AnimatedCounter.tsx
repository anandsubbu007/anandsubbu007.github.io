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

function getStartValue(target: number) {
  if (target <= 0) return 0
  if (target <= 10) return Math.max(1, target - 1)
  return Math.max(1, Math.floor(target * 0.9))
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 900,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(() => getStartValue(value))
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const startedRef = useRef(false)

  useEffect(() => {
    setCount(getStartValue(value))
    startedRef.current = false
  }, [value])

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    const start = getStartValue(value)
    const end = value
    const startTime = performance.now()

    setCount(start)

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
