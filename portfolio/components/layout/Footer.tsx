import { X, Mail } from 'lucide-react'
import Link from 'next/link'
import { GitHubIcon, LinkedInIcon } from '@/components/shared/SocialIcons'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/anandsubbu007', icon: GitHubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anand-subbu', icon: LinkedInIcon },
  { label: 'Twitter / X', href: 'https://twitter.com/AL_Anandsubbu', icon: X },
  { label: 'Email', href: 'mailto:anandsubbual@gmail.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#0a0e1a]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <span className="mono-text text-white font-bold text-xs">AA</span>
              </div>
              <span className="text-[#f1f5f9] font-semibold text-sm">Anand Alagappan</span>
            </div>
            <p className="text-[#475569] text-xs mt-1 max-w-xs text-center md:text-left">
              Building scalable, secure, and production-grade mobile systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {footerLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 text-[#64748b] hover:text-blue-400 hover:bg-blue-500/10 rounded-xl border border-transparent hover:border-blue-500/25 transition-all duration-200"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
          <span>© {new Date().getFullYear()} Anand Alagappan. All rights reserved.</span>
          <span className="mono-text">Built with Next.js · TypeScript · Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
