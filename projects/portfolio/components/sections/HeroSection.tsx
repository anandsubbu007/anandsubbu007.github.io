'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronDown, Download, ArrowRight, Mail, X,
} from 'lucide-react'
import { GitHubIcon, LinkedInIcon, KaggleIcon, LeetCodeIcon, StackOverflowIcon, MediumIcon } from '@/components/shared/SocialIcons'
import { ParticleCanvas } from '@/components/shared/ParticleCanvas'
import { profile } from '@/lib/data/profile'
import { assetPath } from '@/lib/assetPath'

const ROLES = [
  'Flutter Architect',
  'Android Platform Engineer',
  'SDK Builder',
  'Fintech Engineer',
  'Mobile Security Engineer',
]

const SOCIAL = [
  { label: 'GitHub', href: 'https://github.com/anandsubbu007', icon: GitHubIcon, color: '#f1f5f9' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anand-subbu', icon: LinkedInIcon, color: '#0a66c2' },
  { label: 'Medium', href: 'https://medium.com/@anandsubbu7', icon: MediumIcon, color: '#00ab6c' },
  { label: 'StackOverflow', href: 'https://stackoverflow.com/users/12379401/anand-a-l', icon: StackOverflowIcon, color: '#f48024' },
  { label: 'Twitter / X', href: 'https://twitter.com/AL_Anandsubbu', icon: X, color: '#1da1f2' },
  { label: 'Kaggle', href: 'https://kaggle.com/anandsubbu007', icon: KaggleIcon, color: '#20beff' },
  { label: 'LeetCode', href: 'https://leetcode.com/Anandsubbu', icon: LeetCodeIcon, color: '#ffa116' },
]

// Tech orbit badges around avatar
const ORBIT_BADGES = [
  { label: 'Flutter', angle: 0, color: '#54c5f8' },
  { label: 'Android', angle: 60, color: '#3ddc84' },
  { label: 'Kotlin', angle: 120, color: '#7f6ec3' },
  { label: 'SDK', angle: 180, color: '#f59e0b' },
  { label: 'Fintech', angle: 240, color: '#10b981' },
  { label: 'Security', angle: 300, color: '#ef4444' },
]

function OrbitalBadge({ label, angle, color }: { label: string; angle: number; color: string }) {
  const rad = (angle * Math.PI) / 180
  const r = 130
  const x = Math.cos(rad) * r
  const y = Math.sin(rad) * r
  return (
    <motion.div
      className="absolute mono-text text-[10px] font-semibold px-2 py-1 rounded-lg border"
      style={{
        left: '50%',
        top: '50%',
        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        borderColor: `${color}50`,
        background: `${color}18`,
        color,
      }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 2.5 + Math.random(), repeat: Infinity, delay: angle / 120 }}
    >
      {label}
    </motion.div>
  )
}

// Avatar — uses actual photo, falls back to SVG illustration
function AvatarImage() {
  const [useSvg, setUseSvg] = useState(false)
  return (
    <>
      {!useSvg ? (
        <img
          src={assetPath("/images/profile/avatar_with_mac.png")}
          alt="Anand Alagappan"
          className="w-full h-full object-cover object-top"
          onError={() => setUseSvg(true)}
        />
      ) : (
        <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="100" cy="110" r="90" fill="url(#avatarGrad)" opacity="0.15" />
          <rect x="83" y="155" width="34" height="30" rx="6" fill="#c4956a" />
          <rect x="30" y="180" width="140" height="60" rx="20" fill="#1e3a5f" />
          <rect x="30" y="180" width="140" height="20" rx="12" fill="#1d4ed8" opacity="0.6" />
          <ellipse cx="100" cy="110" rx="52" ry="58" fill="#c4956a" />
          <path d="M48 90 Q48 48 100 46 Q152 48 152 90 L148 85 Q140 50 100 52 Q60 50 52 85Z" fill="#1a1a1a" />
          <ellipse cx="100" cy="155" rx="30" ry="12" fill="#5a3a1a" opacity="0.55" />
          <ellipse cx="78" cy="148" rx="14" ry="8" fill="#5a3a1a" opacity="0.45" />
          <ellipse cx="122" cy="148" rx="14" ry="8" fill="#5a3a1a" opacity="0.45" />
          <ellipse cx="100" cy="142" rx="16" ry="4" fill="#3a2010" opacity="0.45" />
          <ellipse cx="80" cy="105" rx="9" ry="7" fill="white" />
          <ellipse cx="120" cy="105" rx="9" ry="7" fill="white" />
          <circle cx="81" cy="106" r="5" fill="#2c1810" />
          <circle cx="121" cy="106" r="5" fill="#2c1810" />
          <circle cx="83" cy="104" r="1.5" fill="white" />
          <circle cx="123" cy="104" r="1.5" fill="white" />
          <rect x="68" y="98" width="22" height="16" rx="7" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
          <rect x="110" y="98" width="22" height="16" rx="7" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
          <line x1="90" y1="104" x2="110" y2="104" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="46" y1="102" x2="68" y2="104" stroke="#1a1a1a" strokeWidth="2" />
          <line x1="132" y1="104" x2="154" y2="102" stroke="#1a1a1a" strokeWidth="2" />
          <path d="M86 132 Q100 142 114 132" stroke="#8b5e3c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <ellipse cx="48" cy="112" rx="8" ry="12" fill="#c4956a" />
          <ellipse cx="152" cy="112" rx="8" ry="12" fill="#c4956a" />
          <defs>
            <radialGradient id="avatarGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </radialGradient>
          </defs>
        </svg>
      )}
    </>
  )
}

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [])

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="hero">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, rgba(59,130,246,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 60%, rgba(99,102,241,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 50% 100%, rgba(59,130,246,0.06) 0%, transparent 70%),
            #0a0e1a
          `,
        }}
      />

      {/* Particle canvas */}
      <div className="absolute inset-0 z-0">
        <ParticleCanvas className="w-full h-full" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left — text content */}
          <div className="flex flex-col gap-6">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold mono-text">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                Available for opportunities
              </span>
            </motion.div>

            {/* Pre-title code label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="mono-text text-blue-400 text-sm font-medium tracking-wide">
                {'< Senior Mobile Systems Engineer />'}
              </span>
            </motion.div>

            {/* Main name */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#f1f5f9] leading-[1.08] tracking-tight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Anand
              <br />
              <span className="gradient-text">Alagappan</span>
            </motion.h1>

            {/* Animated role */}
            <motion.div
              className="flex items-center gap-3 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-[#64748b] text-lg font-medium">I build as</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  className="text-blue-400 text-lg font-semibold mono-text"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-[#94a3b8] text-base sm:text-lg leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Building scalable mobile platforms, SDKs, and production-grade fintech applications with focus on architecture, performance, security, and developer experience.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              className="flex flex-wrap gap-3 pt-1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm shadow-[0_0_24px_rgba(59,130,246,0.45)] hover:shadow-[0_0_36px_rgba(59,130,246,0.65)] transition-all duration-200"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-500/40 hover:border-blue-500/70 text-blue-300 hover:text-blue-200 font-semibold text-sm hover:bg-blue-500/10 transition-all duration-200"
              >
                <Download size={16} /> Resume
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-[#94a3b8] hover:text-[#f1f5f9] font-semibold text-sm hover:bg-white/5 transition-all duration-200"
              >
                <Mail size={16} /> Contact
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              className="flex flex-wrap gap-2 pt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {SOCIAL.map(({ label, href, icon: Icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="p-2.5 rounded-xl border border-white/8 hover:border-blue-500/30 text-[#64748b] hover:text-[#f1f5f9] hover:bg-white/5 transition-all duration-200 group"
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — avatar */}
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.92, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar orb */}
            <div className="relative flex items-center justify-center" style={{ width: 320, height: 320 }}>
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-indigo-500/15 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Glow ring */}
              <motion.div
                className="absolute inset-8 rounded-full shadow-[0_0_60px_rgba(59,130,246,0.35)]"
                animate={{ boxShadow: ['0 0 40px rgba(59,130,246,0.3)', '0 0 80px rgba(59,130,246,0.5)', '0 0 40px rgba(59,130,246,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Avatar container — wider rect for photo with Mac */}
              <motion.div
                className="relative w-55 h-55 rounded-full overflow-hidden border-2 border-blue-500/40 shadow-[0_0_40px_rgba(59,130,246,0.4)] bg-gradient-to-br from-[#0f1629] to-[#111827]"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <AvatarImage />
              </motion.div>

              {/* Orbital tech badges */}
              {ORBIT_BADGES.map((b) => (
                <OrbitalBadge key={b.label} {...b} />
              ))}
            </div>

            {/* Stats pill */}
            <motion.div
              className="glass-card border border-blue-500/25 rounded-2xl px-6 py-4 flex gap-6 divide-x divide-white/8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { v: '6+', l: 'Years' },
                { v: '10M+', l: 'Impact' },
                { v: '5+', l: 'Domains' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center px-4 first:pl-0 last:pr-0">
                  <span className="text-xl font-bold text-[#f1f5f9]">{v}</span>
                  <span className="text-[#64748b] text-xs font-medium">{l}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#475569] cursor-pointer"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs mono-text">scroll</span>
        <ChevronDown size={18} />
      </motion.div>
    </section>
  )
}
