'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { projects } from '@/lib/data/projects'

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
        {/* GitHub stats */}
        <div className="lg:col-span-2 grid gap-5">
          <motion.div
            className="glass-card rounded-2xl border border-white/8 overflow-hidden p-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="https://github-readme-stats.vercel.app/api?username=anandsubbu007&theme=transparent&hide_border=true&bg_color=0a0e1a00&title_color=60a5fa&text_color=94a3b8&icon_color=6366f1&show_icons=true&count_private=true"
              alt="Anand's GitHub stats"
              width={500}
              height={200}
              unoptimized
              className="w-full rounded-xl"
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
              <Image
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=anandsubbu007&theme=transparent&hide_border=true&bg_color=0a0e1a00&title_color=60a5fa&text_color=94a3b8&layout=compact"
                alt="Top languages"
                width={400}
                height={150}
                unoptimized
                className="w-full rounded-xl"
              />
            </motion.div>

            <motion.div
              className="glass-card rounded-2xl border border-white/8 overflow-hidden p-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="https://github-readme-streak-stats.herokuapp.com?user=anandsubbu007&theme=transparent&hide_border=true&background=0a0e1a00&ring=3b82f6&fire=60a5fa&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=475569&stroke=1f2937"
                alt="GitHub streak"
                width={400}
                height={150}
                unoptimized
                className="w-full rounded-xl"
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
            <Image
              src="https://github-readme-activity-graph.vercel.app/graph?username=anandsubbu007&theme=react-dark&bg_color=0a0e1a&color=60a5fa&line=3b82f6&point=6366f1&hide_border=true"
              alt="GitHub activity graph"
              width={800}
              height={200}
              unoptimized
              className="w-full rounded-xl"
            />
          </motion.div>
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${app.gradientFrom}40, ${app.gradientTo}30)`,
                    border: `1px solid ${app.gradientFrom}40`,
                  }}
                >
                  <span className="mono-text text-[10px] font-bold" style={{ color: app.gradientFrom }}>
                    {app.title.slice(0, 2).toUpperCase()}
                  </span>
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
