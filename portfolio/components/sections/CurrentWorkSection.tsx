'use client'

import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle, ChevronRight } from 'lucide-react'
import { SectionHeader } from '@/components/shared/SectionHeader'
import { breadFinancial } from '@/lib/data/breadFinancial'

export function CurrentWorkSection() {
  return (
    <section
      id="current-work"
      className="section-padding relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 70% 50% at 50% 50%, rgba(59,130,246,0.06) 0%, transparent 70%), #0a0e1a`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Currently"
          title="Building at"
          titleHighlight="Bread Financial"
          description="Senior Software Engineer — powering iOS & Android fintech apps used by millions of customers across the US."
          align="center"
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Metrics column */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {breadFinancial.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                className="glass-card rounded-2xl p-5 border border-white/8 flex flex-col gap-2 hover:border-blue-500/30 transition-all"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -3, boxShadow: '0 8px 32px rgba(59,130,246,0.15)' }}
              >
                <div className="text-3xl font-bold text-[#f1f5f9]">{m.value}</div>
                <div className="text-blue-400 font-semibold text-sm">{m.label}</div>
                <div className="text-[#64748b] text-xs">{m.description}</div>
              </motion.div>
            ))}
          </div>

          {/* Work bullets */}
          <div className="lg:col-span-2 space-y-3">
            <motion.div
              className="glass-card rounded-2xl p-6 border border-white/8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                      <span className="mono-text text-white font-bold text-sm">BF</span>
                    </div>
                    <div>
                      <h3 className="text-[#f1f5f9] font-bold text-lg">Bread Financial</h3>
                      <p className="mono-text text-blue-400 text-xs">Sept 2023 – Present · Bengaluru</p>
                    </div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold mono-text">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                  </span>
                  Current Role
                </span>
              </div>

              <ul className="space-y-2.5">
                {breadFinancial.currentWork.map((bullet, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-[#94a3b8] text-sm"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.06 }}
                  >
                    <CheckCircle size={15} className="text-blue-400 mt-0.5 shrink-0" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>

              {/* Products */}
              <div className="mt-6 pt-5 border-t border-white/6">
                <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-3">Products</p>
                <div className="flex flex-wrap gap-3">
                  {breadFinancial.products.map((p) => (
                    <a
                      key={p.name}
                      href={p.url || undefined}
                      target={p.url ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-blue-500/25 bg-blue-500/8 text-blue-300 text-sm font-medium hover:bg-blue-500/15 hover:border-blue-500/50 transition-all"
                    >
                      {p.name} {p.url && <ExternalLink size={12} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Key Technical Highlights */}
            {breadFinancial.highlights && (
              <motion.div
                className="glass-card rounded-2xl p-5 border border-blue-500/20 bg-blue-500/3"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <p className="mono-text text-[10px] text-blue-400 font-semibold tracking-widest uppercase mb-4">Technical Highlights</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {breadFinancial.highlights.map((h, i) => (
                    <motion.div
                      key={h.title}
                      className="rounded-xl p-4 border border-white/6 bg-white/3 hover:border-blue-500/30 transition-all"
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.35 + i * 0.08 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <ChevronRight size={13} className="text-blue-400 shrink-0" />
                        <span className="text-[#f1f5f9] font-semibold text-sm">{h.title}</span>
                      </div>
                      <p className="text-[#64748b] text-xs leading-relaxed pl-5">{h.detail}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tech used */}
            <motion.div
              className="glass-card rounded-2xl p-5 border border-white/8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-3">Tech at Bread Financial</p>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'Kotlin', 'Android SDK', 'iOS SDK', 'Jenkins', 'Okta', 'GoRouter', 'OWASP', 'JWT', 'OAuth2', 'Fastlane', 'Adobe Analytics', 'Medallia', 'Fraudnet'].map((t) => (
                  <span key={t} className="mono-text px-2.5 py-1 rounded-lg border border-white/10 text-[#94a3b8] text-xs bg-white/3">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
