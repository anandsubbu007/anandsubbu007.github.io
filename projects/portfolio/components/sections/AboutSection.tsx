'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { AnimatedCounter } from '@/components/shared/AnimatedCounter'
import { stats } from '@/lib/data/stats'
import { profile } from '@/lib/data/profile'

export function AboutSection() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Bio */}
        <div>
          <SectionHeader
            badge="About Me"
            title="Systems Engineer"
            titleHighlight="by Mindset"
            description=""
            align="left"
          />

          <div className="mt-8 space-y-5">
            {profile.bio.map((para, i) => (
              <motion.p
                key={i}
                className="text-[#94a3b8] text-base leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Transition story */}
          <motion.div
            className="mt-8 p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mono-text text-blue-400 text-xs font-semibold tracking-widest uppercase mb-2">Career Transition</p>
            <p className="text-[#f1f5f9] text-sm font-medium">
              Mechanical Engineering → Self-taught Software Engineer
            </p>
            <p className="text-[#64748b] text-sm mt-1">
              B.E. Mechanical, Anna University (2019) · Real-world problem-solving in our family B2B wholesale business taught me to think in systems — that mindset powers every line of code I write.
            </p>
          </motion.div>

          {/* Mission / Vision */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              { label: 'Mission', text: profile.mission },
              { label: 'Vision', text: profile.vision },
            ].map(({ label, text }, i) => (
              <motion.div
                key={label}
                className="p-4 rounded-xl border border-white/8 bg-white/3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              >
                <p className="mono-text text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-1.5">{label}</p>
                <p className="text-[#94a3b8] text-xs leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Animated stats */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.id}
                className="glass-card rounded-2xl p-6 border border-white/8 flex flex-col gap-2 group hover:border-blue-500/40 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, boxShadow: `0 8px 32px ${stat.color}20` }}
              >
                <div className="text-4xl font-bold text-[#f1f5f9]">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-sm font-semibold" style={{ color: stat.color }}>
                  {stat.label}
                </div>
                <div className="text-[#64748b] text-xs">{stat.description}</div>
                <div className="mt-1 h-0.5 rounded-full bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${stat.color}, transparent)` }} />
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="mt-6 p-5 rounded-2xl border border-white/8 bg-white/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-3">Certifications</p>
            <div className="flex flex-wrap gap-2">
              {['Blockchain Technologies (Coursera)', 'OWASP Top 10 (LinkedIn)', 'Applied Data Science', 'Big Data Foundations'].map((cert) => (
                <span key={cert} className="text-xs px-2.5 py-1 rounded-lg border border-white/10 text-[#94a3b8] bg-white/3">
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
