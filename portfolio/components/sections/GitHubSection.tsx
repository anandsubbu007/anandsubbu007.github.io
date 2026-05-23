'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { projects } from '@/lib/data/projects'

// Fallback stats shown when GitHub API images fail to load
function GitHubStatsFallback() {
  const langs = [
    { name: 'Dart', pct: 52, color: '#00B4AB' },
    { name: 'Kotlin', pct: 24, color: '#7F52FF' },
    { name: 'Java', pct: 12, color: '#B07219' },
    { name: 'TypeScript', pct: 7, color: '#3178C6' },
    { name: 'Python', pct: 3, color: '#3572A5' },
    { name: 'Other', pct: 2, color: '#475569' },
  ]
  const stats = [
    { label: 'Total Stars', value: '87' },
    { label: 'Commits (incl. private)', value: '1,800+' },
    { label: 'Pull Requests', value: '156' },
    { label: 'Repos contributed', value: '31' },
  ]
  return (
    <div className="space-y-5">
      {/* Stats grid */}
      <div className="glass-card rounded-2xl border border-white/8 p-5">
        <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-4">GitHub Stats</p>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/6 bg-white/3 p-3">
              <div className="text-xl font-bold text-[#f1f5f9]">{s.value}</div>
              <div className="text-[#64748b] text-xs mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-[#475569] mt-3 mono-text">* Includes private contributions not visible on public profile</p>
      </div>
      {/* Top languages */}
      <div className="glass-card rounded-2xl border border-white/8 p-5">
        <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-4">Top Languages</p>
        <div className="space-y-2.5">
          {langs.map((l) => (
            <div key={l.name}>
              <div className="flex justify-between text-xs mb-1">
                <span style={{ color: l.color }} className="font-semibold">{l.name}</span>
                <span className="text-[#64748b]">{l.pct}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/6">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${l.pct}%`, background: l.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Streak note */}
      <div className="glass-card rounded-2xl border border-white/8 p-5 flex items-center gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-400">67</div>
          <div className="text-[#64748b] text-xs">Longest Streak</div>
        </div>
        <div className="h-10 w-px bg-white/10" />
        <div className="text-center">
          <div className="text-2xl font-bold text-[#f1f5f9]">384</div>
          <div className="text-[#64748b] text-xs">Contributions This Year</div>
        </div>
        <div className="h-10 w-px bg-white/10" />
        <div className="flex-1">
          <p className="text-[#64748b] text-xs leading-relaxed">Most contributions are in private repos at Bread Financial — not reflected in public graph.</p>
        </div>
      </div>
    </div>
  )
}

function GitHubStatImage({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) {
  const [failed, setFailed] = useState(false)
  if (failed) return null
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full rounded-xl"
      onError={() => setFailed(true)}
    />
  )
}

function GitHubStatsSection() {
  const [allFailed, setAllFailed] = useState(false)
  const [failCount, setFailCount] = useState(0)
  const totalImages = 4

  const handleFail = () => {
    const next = failCount + 1
    setFailCount(next)
    if (next >= totalImages) setAllFailed(true)
  }

  if (allFailed) return <GitHubStatsFallback />

  return (
    <div className="space-y-5">
      <motion.div
        className="glass-card rounded-2xl border border-white/8 overflow-hidden p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=anandsubbu007&theme=transparent&hide_border=true&bg_color=0a0e1a00&title_color=60a5fa&text_color=94a3b8&icon_color=6366f1&show_icons=true&count_private=true"
          alt="GitHub stats"
          className="w-full rounded-xl"
          onError={handleFail}
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5">
        <motion.div
          className="glass-card rounded-2xl border border-white/8 overflow-hidden p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=anandsubbu007&theme=transparent&hide_border=true&bg_color=0a0e1a00&title_color=60a5fa&text_color=94a3b8&layout=compact"
            alt="Top languages"
            className="w-full rounded-xl"
            onError={handleFail}
          />
        </motion.div>

        <motion.div
          className="glass-card rounded-2xl border border-white/8 overflow-hidden p-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=anandsubbu007&theme=transparent&hide_border=true&background=0a0e1a00&ring=3b82f6&fire=60a5fa&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=475569&stroke=1f2937"
            alt="GitHub streak"
            className="w-full rounded-xl"
            onError={handleFail}
          />
        </motion.div>
      </div>

      <motion.div
        className="glass-card rounded-2xl border border-white/8 overflow-hidden p-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=anandsubbu007&theme=react-dark&bg_color=0a0e1a&color=60a5fa&line=3b82f6&point=6366f1&hide_border=true"
          alt="GitHub activity graph"
          className="w-full rounded-xl"
          onError={handleFail}
        />
      </motion.div>

      <div className="glass-card rounded-xl border border-white/6 p-4">
        <p className="text-[#64748b] text-xs leading-relaxed">
          <span className="text-blue-400 font-semibold">Note:</span> Most professional work at Bread Financial is in private repositories — public stats underrepresent actual contribution volume. Private commits are counted where GitHub API permits.
        </p>
      </div>
    </div>
  )
}

export function GitHubSection() {
  const playStoreApps = projects.filter((p) => p.playStoreUrl)

  return (
    <section id="github" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        badge="Open Source"
        title="GitHub"
        titleHighlight="Activity"
        description="Consistent contribution across personal projects, open source, and production work."
        align="center"
      />

      <div className="mt-12 grid lg:grid-cols-3 gap-5">
        {/* GitHub stats with fallback */}
        <div className="lg:col-span-2">
          <GitHubStatsSection />
        </div>

        {/* Play Store apps */}
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
        </div>
      </div>
    </section>
  )
}
