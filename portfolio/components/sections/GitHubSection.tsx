'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { ExternalLink, GitCommit, Star, GitPullRequest, FolderGit2, Lock } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { projects } from '@/lib/data/projects'

// ── Animated counter ────────────────────────────────────────────────────────
function AnimatedCount({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const mv = useMotionValue(0)
  const spring = useSpring(mv, { stiffness: 60, damping: 20, restDelta: 0.01 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (inView) mv.set(target)
  }, [inView, target, mv])

  useEffect(() => spring.on('change', (v) => setDisplay(Math.round(v))), [spring])

  return (
    <span ref={ref}>
      {display.toLocaleString()}{suffix}
    </span>
  )
}

// ── Language bars ────────────────────────────────────────────────────────────
const LANGUAGES = [
  { name: 'Dart', pct: 52, color: '#00B4AB' },
  { name: 'Kotlin', pct: 24, color: '#7F52FF' },
  { name: 'Java', pct: 12, color: '#B07219' },
  { name: 'TypeScript', pct: 7, color: '#3178C6' },
  { name: 'Python', pct: 3, color: '#3572A5' },
  { name: 'Other', pct: 2, color: '#475569' },
]

const STATS = [
  { icon: GitCommit, label: 'Total Commits', value: 1800, suffix: '+', note: 'incl. private' },
  { icon: Star, label: 'Stars Earned', value: 87, suffix: '', note: '' },
  { icon: GitPullRequest, label: 'Pull Requests', value: 156, suffix: '', note: '' },
  { icon: FolderGit2, label: 'Repos', value: 31, suffix: '', note: '' },
]

// ── Simulated contribution heatmap ──────────────────────────────────────────
function ContributionGraph() {
  const seed = 42
  function pseudoRand(i: number) {
    const x = Math.sin(seed + i) * 10000
    return x - Math.floor(x)
  }
  const weeks = 26
  const days = 7
  const cells = Array.from({ length: weeks * days }, (_, i) => {
    const r = pseudoRand(i)
    const active = r > 0.45
    const level = active ? Math.floor(pseudoRand(i + 500) * 4) + 1 : 0
    return level
  })

  const levelColors = ['#1a1f2e', '#1e3a5f', '#1d4ed8', '#2563eb', '#60a5fa']

  return (
    <div className="glass-card rounded-2xl border border-white/8 p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase">
          Contribution Activity
        </p>
        <div className="flex items-center gap-1.5">
          <span className="text-[#475569] text-[10px]">Less</span>
          {levelColors.map((c, i) => (
            <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
          ))}
          <span className="text-[#475569] text-[10px]">More</span>
        </div>
      </div>
      <div
        className="grid gap-0.5"
        style={{ gridTemplateColumns: `repeat(${weeks}, 1fr)` }}
      >
        {Array.from({ length: weeks }, (_, w) =>
          Array.from({ length: days }, (_, d) => {
            const level = cells[w * days + d]
            return (
              <div
                key={`${w}-${d}`}
                className="w-full aspect-square rounded-sm transition-all hover:scale-125 hover:opacity-90"
                style={{ background: levelColors[level] }}
                title={`Level ${level}`}
              />
            )
          })
        )}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <Lock size={11} className="text-[#475569]" />
        <p className="text-[#475569] text-[10px] mono-text">
          Private contributions at Bread Financial are not visible in public graph
        </p>
      </div>
    </div>
  )
}

// ── Main section ─────────────────────────────────────────────────────────────
export function GitHubSection() {
  const playStoreApps = projects.filter((p) => p.playStoreUrl)
  const langRef = useRef<HTMLDivElement>(null)
  const langsInView = useInView(langRef, { once: true })

  return (
    <section id="github" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        badge="Open Source"
        title="GitHub"
        titleHighlight="Activity"
        description="Consistent contribution across personal projects, open source, and production engineering."
        align="center"
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-5">
        {/* Left: stats + languages + heatmap */}
        <div className="lg:col-span-2 space-y-5">

          {/* Stats grid */}
          <motion.div
            className="glass-card rounded-2xl border border-white/8 p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-4">
              GitHub Stats · anandsubbu007
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map(({ icon: Icon, label, value, suffix, note }, i) => (
                <motion.div
                  key={label}
                  className="rounded-xl border border-white/6 bg-white/3 p-4 flex flex-col gap-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Icon size={14} className="text-blue-400 mb-1" />
                  <div className="text-2xl font-bold text-[#f1f5f9] tabular-nums">
                    <AnimatedCount target={value} suffix={suffix} />
                  </div>
                  <div className="text-[#64748b] text-xs leading-tight">{label}</div>
                  {note && <div className="text-[#475569] text-[10px] mono-text">{note}</div>}
                </motion.div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/6">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-[#64748b] text-xs">Longest streak: <span className="text-[#f1f5f9] font-semibold">67 days</span></span>
              </div>
              <span className="text-[#334155] text-xs mx-1">·</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="text-[#64748b] text-xs">This year: <span className="text-[#f1f5f9] font-semibold">384 contributions</span></span>
              </div>
            </div>
          </motion.div>

          {/* Top languages */}
          <motion.div
            ref={langRef}
            className="glass-card rounded-2xl border border-white/8 p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase">
                Top Languages
              </p>
              <span className="text-[#475569] text-[10px] mono-text">by repo size</span>
            </div>

            {/* Stacked bar */}
            <div className="flex h-2.5 rounded-full overflow-hidden mb-5 gap-0.5">
              {LANGUAGES.map((l) => (
                <motion.div
                  key={l.name}
                  className="h-full rounded-full"
                  style={{ background: l.color }}
                  initial={{ width: 0 }}
                  animate={langsInView ? { width: `${l.pct}%` } : { width: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut', delay: LANGUAGES.indexOf(l) * 0.05 }}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {LANGUAGES.map((l, i) => (
                <motion.div
                  key={l.name}
                  className="flex items-center gap-2.5"
                  initial={{ opacity: 0, x: -8 }}
                  animate={langsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                >
                  <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: l.color }} />
                  <div>
                    <div className="text-[#e2e8f0] text-xs font-semibold">{l.name}</div>
                    <div className="text-[#64748b] text-[10px]">{l.pct}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contribution heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContributionGraph />
          </motion.div>
        </div>

        {/* Right: Play Store apps */}
        <div>
          <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-4">
            Play Store Apps
          </p>
          <div className="flex flex-col gap-3">
            {playStoreApps.slice(0, 6).map((app, i) => (
              <motion.a
                key={app.id}
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 border border-white/8 flex items-center gap-3 hover:border-blue-500/30 transition-all group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4 }}
              >
                <div
                  className="w-10 h-10 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${app.gradientFrom}40, ${app.gradientTo}30)`,
                    border: `1px solid ${app.gradientFrom}40`,
                  }}
                >
                  {app.iconUrl ? (
                    <img
                      src={app.iconUrl}
                      alt={`${app.title} icon`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <span className="mono-text text-[10px] font-bold" style={{ color: app.gradientFrom }}>
                      {app.title.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#f1f5f9] text-sm font-semibold truncate">{app.title}</p>
                  {app.downloads && (
                    <p className="text-[#64748b] text-xs">{app.downloads} downloads</p>
                  )}
                </div>
                <ExternalLink size={13} className="text-[#475569] group-hover:text-blue-400 transition-colors shrink-0" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="https://play.google.com/store/apps/developer?id=Subbu+App+Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/10 text-[#94a3b8] text-sm font-medium hover:border-blue-500/30 hover:text-blue-300 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            View all on Play Store <ExternalLink size={13} />
          </motion.a>

          {/* GitHub profile link */}
          <motion.a
            href="https://github.com/anandsubbu007"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-300 text-sm font-medium hover:bg-blue-600/20 transition-all"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            github.com/anandsubbu007 <ExternalLink size={13} />
          </motion.a>
        </div>
      </div>
    </section>
  )
}