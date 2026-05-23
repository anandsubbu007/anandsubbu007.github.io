'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { GitHubIcon, LinkedInIcon } from '@/components/shared/SocialIcons'
import { assetPath } from '@/lib/assetPath'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tech', href: '#tech-stack' },
  { label: 'Work', href: '#current-work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docH > 0 ? (window.scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 z-[100] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        className={`fixed top-2 left-0 right-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div
          className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 ${
            scrolled
              ? 'border-blue-500/25 bg-[#0a0e1a]/85 backdrop-blur-xl shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
              : 'border-transparent bg-transparent backdrop-blur-none'
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-9 h-9 rounded-xl overflow-hidden ring-2 ring-blue-500/50 group-hover:ring-blue-400/80 shadow-[0_0_16px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_24px_rgba(59,130,246,0.65)] transition-all duration-300">
              <img
                src={assetPath("/images/profile/avatar.jpg")}
                alt="Anand Alagappan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const t = e.currentTarget
                  t.style.display = 'none'
                  const fb = t.nextElementSibling as HTMLElement | null
                  if (fb) fb.style.display = 'flex'
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-500 items-center justify-center hidden">
                <span className="mono-text text-white font-bold text-sm">AA</span>
              </div>
            </div>
            <span className="hidden sm:block text-[#f1f5f9] font-semibold text-sm tracking-wide">
              Anand Alagappan<span className="text-blue-400">.</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3.5 py-2 text-sm text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/anandsubbu007"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 rounded-lg transition-all duration-200"
              aria-label="GitHub"
            >
              <GitHubIcon size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/anand-subbu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 rounded-lg transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={17} />
            </a>
            <a
              href="https://drive.google.com/file/d/1A9VdrfQ2UyKTQxZ3Mz4p89OE7s5NT01T/view?usp=sharing"
              download
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-xl bg-blue-500 hover:bg-blue-400 text-white shadow-[0_0_16px_rgba(59,130,246,0.4)] hover:shadow-[0_0_24px_rgba(59,130,246,0.6)] transition-all duration-200"
            >
              Resume
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 text-[#94a3b8] hover:text-[#f1f5f9] rounded-lg hover:bg-white/5 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="md:hidden mt-2 rounded-2xl border border-blue-500/20 bg-[#0a0e1a]/95 backdrop-blur-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
            >
              <div className="flex flex-col p-3 gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="text-left px-4 py-3 text-sm text-[#94a3b8] hover:text-[#f1f5f9] hover:bg-white/5 rounded-xl transition-all font-medium"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="h-px bg-white/8 my-1" />
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-xl transition-all"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
