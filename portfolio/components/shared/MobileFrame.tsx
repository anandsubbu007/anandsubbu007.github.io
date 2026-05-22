interface MobileFrameProps {
  gradientFrom?: string
  gradientTo?: string
  title?: string
  className?: string
}

export function MobileFrame({
  gradientFrom = '#2563eb',
  gradientTo = '#6366f1',
  title = 'App',
  className = '',
}: MobileFrameProps) {
  const id = `grad-${title.replace(/\s/g, '-').toLowerCase()}`
  return (
    <svg
      viewBox="0 0 200 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label={`${title} mobile mockup`}
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradientFrom} />
          <stop offset="100%" stopColor={gradientTo} />
        </linearGradient>
        <clipPath id={`clip-${id}`}>
          <rect x="8" y="8" width="184" height="384" rx="28" />
        </clipPath>
      </defs>
      {/* Phone outer shell */}
      <rect x="2" y="2" width="196" height="396" rx="34" fill="#0f1629" stroke="rgba(59,130,246,0.4)" strokeWidth="2" />
      {/* Screen background */}
      <rect x="8" y="8" width="184" height="384" rx="28" fill={`url(#${id})`} fillOpacity="0.15" />
      {/* App content placeholder */}
      <rect x="8" y="8" width="184" height="384" rx="28" fill="#0a0e1a" clipPath={`url(#clip-${id})`} />
      {/* Notch */}
      <rect x="70" y="16" width="60" height="8" rx="4" fill="#1f2937" />
      {/* Status bar dots */}
      <circle cx="160" cy="20" r="3" fill={gradientFrom} opacity="0.8" />
      <circle cx="172" cy="20" r="3" fill={gradientFrom} opacity="0.5" />
      {/* Header bar */}
      <rect x="16" y="36" width="168" height="40" rx="10" fill={gradientFrom} fillOpacity="0.2" />
      <rect x="24" y="48" width="60" height="8" rx="4" fill={gradientFrom} fillOpacity="0.6" />
      <circle cx="168" cy="52" r="12" fill={gradientFrom} fillOpacity="0.3" />
      {/* Content cards */}
      <rect x="16" y="88" width="168" height="60" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
      <circle cx="36" cy="118" r="12" fill={gradientFrom} fillOpacity="0.5" />
      <rect x="56" y="108" width="80" height="8" rx="4" fill="rgba(255,255,255,0.2)" />
      <rect x="56" y="122" width="56" height="6" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="148" y="112" width="24" height="12" rx="6" fill={gradientTo} fillOpacity="0.4" />

      <rect x="16" y="160" width="76" height="76" rx="12" fill={gradientFrom} fillOpacity="0.15" stroke="rgba(255,255,255,0.06)" />
      <rect x="108" y="160" width="76" height="76" rx="12" fill={gradientTo} fillOpacity="0.15" stroke="rgba(255,255,255,0.06)" />
      <rect x="30" y="190" width="48" height="6" rx="3" fill={gradientFrom} fillOpacity="0.5" />
      <rect x="30" y="202" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
      <rect x="122" y="190" width="48" height="6" rx="3" fill={gradientTo} fillOpacity="0.5" />
      <rect x="122" y="202" width="32" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />

      <rect x="16" y="250" width="168" height="8" rx="4" fill="rgba(255,255,255,0.06)" />
      <rect x="16" y="268" width="168" height="44" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
      <rect x="24" y="280" width="100" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
      <rect x="24" y="292" width="64" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />

      <rect x="16" y="326" width="168" height="44" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" />
      <rect x="24" y="338" width="80" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="24" y="350" width="48" height="5" rx="2.5" fill="rgba(255,255,255,0.07)" />

      {/* Home indicator */}
      <rect x="70" y="382" width="60" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
    </svg>
  )
}
