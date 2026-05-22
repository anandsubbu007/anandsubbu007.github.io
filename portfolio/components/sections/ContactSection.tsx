'use client'

import { motion } from 'framer-motion'
import {
  X, Mail, Download, ArrowRight,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon, KaggleIcon, LeetCodeIcon, StackOverflowIcon, MediumIcon } from '@/components/shared/SocialIcons'
import { SectionHeader } from '@/components/shared/SectionHeader'

const contacts = [
  {
    label: 'Email',
    value: 'anandsubbual@gmail.com',
    href: 'mailto:anandsubbual@gmail.com',
    icon: Mail,
    color: '#3b82f6',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/anand-subbu',
    href: 'https://www.linkedin.com/in/anand-subbu',
    icon: LinkedInIcon,
    color: '#0a66c2',
  },
  {
    label: 'GitHub',
    value: 'github.com/anandsubbu007',
    href: 'https://github.com/anandsubbu007',
    icon: GitHubIcon,
    color: '#f1f5f9',
  },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/anandsubbu007', icon: GitHubIcon, color: '#f1f5f9' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anand-subbu', icon: LinkedInIcon, color: '#0a66c2' },
  { label: 'Twitter / X', href: 'https://twitter.com/AL_Anandsubbu', icon: X, color: '#1da1f2' },
  { label: 'Medium', href: 'https://medium.com/@anandsubbu7', icon: MediumIcon, color: '#00ab6c' },
  { label: 'StackOverflow', href: 'https://stackoverflow.com/users/12379401/anand-a-l', icon: StackOverflowIcon, color: '#f48024' },
  { label: 'Kaggle', href: 'https://kaggle.com/anandsubbu007', icon: KaggleIcon, color: '#20beff' },
  { label: 'LeetCode', href: 'https://leetcode.com/Anandsubbu', icon: LeetCodeIcon, color: '#ffa116' },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: `radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%), #0a0e1a`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build"
          titleHighlight="Something"
          description="Open to full-time opportunities, consulting, SDK/Platform engineering projects, and technical advising."
          align="center"
        />

        {/* Availability */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-green-500/30 bg-green-500/8 text-green-400 text-sm font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            Available for opportunities
          </div>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => {
              const Icon = c.icon
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-5 border border-white/8 flex items-center gap-4 hover:border-blue-500/30 transition-all group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4, boxShadow: `0 4px 24px ${c.color}18` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}18`, border: `1px solid ${c.color}35` }}
                  >
                    <Icon size={20} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p className="text-[#64748b] text-xs font-semibold mono-text tracking-wide">{c.label}</p>
                    <p className="text-[#f1f5f9] text-sm font-medium">{c.value}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-[#475569] group-hover:text-blue-400 transition-colors" />
                </motion.a>
              )
            })}

            {/* Open to */}
            <motion.div
              className="glass-card rounded-2xl p-5 border border-white/8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-3">Open to</p>
              <div className="flex flex-wrap gap-2">
                {['Full-time Senior Roles', 'Flutter / Android Engineering', 'SDK & Platform Engineering', 'Fintech Projects', 'Technical Consulting'].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-xl border border-blue-500/25 bg-blue-500/8 text-blue-300 text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Social grid + CTA */}
          <div className="flex flex-col gap-6">
            <motion.div
              className="glass-card rounded-2xl p-6 border border-white/8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-4">Find Me Online</p>
              <div className="grid grid-cols-4 gap-3">
                {socials.map(({ label, href, icon: Icon, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex flex-col items-center gap-2 p-3 rounded-xl border border-white/8 hover:border-blue-500/30 hover:bg-white/5 transition-all group"
                  >
                    <Icon size={20} style={{ color }} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[#475569] text-[9px] font-medium text-center">{label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Resume CTA */}
            <motion.div
              className="glass-card rounded-2xl p-6 border border-blue-500/25 bg-gradient-to-br from-blue-500/8 to-indigo-500/5 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <h3 className="text-[#f1f5f9] font-bold text-lg mb-2">Grab My Resume</h3>
              <p className="text-[#64748b] text-sm mb-5">6+ years of mobile engineering, fintech, SDK development, and platform engineering — in one document.</p>
              <a
                href="/resume.pdf" // TODO: replace with actual resume PDF
                download
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm shadow-[0_0_24px_rgba(59,130,246,0.45)] hover:shadow-[0_0_36px_rgba(59,130,246,0.65)] transition-all duration-200"
              >
                <Download size={16} /> Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
