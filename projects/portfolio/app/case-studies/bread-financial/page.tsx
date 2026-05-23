import Link from 'next/link'
import { ArrowLeft, ExternalLink, Lock } from 'lucide-react'

export default function BreadFinancialCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9]">
      <div className="relative overflow-hidden pt-24 pb-16 px-6"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%), #0a0e1a` }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-blue-400 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <div className="flex items-center gap-2 mb-4">
            <span className="mono-text px-3 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-bold">
              Enterprise · Current Role
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/8 text-yellow-400 text-xs font-semibold mono-text">
              <Lock size={10} /> Confidential
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] leading-tight mb-4">
            Bread Financial<br />
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Platform Engineering
            </span>
          </h1>
          <p className="text-[#94a3b8] text-xl leading-relaxed max-w-2xl">
            High-level overview of enterprise mobile platform engineering at a US fintech company. Specific product details are confidential.
          </p>
          <div className="mt-8">
            <a href="https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all">
              <ExternalLink size={15} /> Bread Mobile App — Play Store
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-12">

        {/* Confidentiality notice */}
        <div className="flex items-start gap-3 p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5">
          <Lock size={18} className="text-yellow-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-400 font-semibold text-sm mb-1">Confidential Product Details</p>
            <p className="text-[#64748b] text-sm leading-relaxed">
              Bread Financial is a publicly traded US fintech company. Specific technical implementations, architectural decisions, and product details are confidential. This overview covers publicly visible engineering scope and impact metrics only.
            </p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">01</span>
            Role & Scope
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { l: 'Company', v: 'Bread Financial (US Fintech)' },
              { l: 'Role', v: 'Senior Software Engineer' },
              { l: 'Period', v: 'Sept 2023 – Present (2+ years)' },
              { l: 'Location', v: 'Bengaluru, India (Remote)' },
            ].map(({ l, v }) => (
              <div key={l} className="glass-card rounded-xl p-4 border border-white/8">
                <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-1">{l}</p>
                <p className="text-[#f1f5f9] font-semibold text-sm">{v}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">02</span>
            Engineering Scope (Public)
          </h2>
          <div className="space-y-3">
            {[
              { area: 'Native Android SDK', scope: 'Built and maintained SDK for seamless integration into partner applications' },
              { area: 'Flutter Mobile App', scope: 'Feature development, optimization, and quality improvements on the main consumer app' },
              { area: 'CI/CD Engineering', scope: 'Jenkins pipeline setup and optimization — reduced deployment time by 40%' },
              { area: 'Custom Lint Tooling', scope: 'Built custom lint rules package — reduced code quality issues by 30%' },
              { area: 'Mobile Security', scope: 'OWASP MASVS compliance, SSL pinning, vulnerability remediation (Ostorlab)' },
              { area: 'Authentication', scope: 'Okta SDK integration for JWT/OAuth secure authentication flows' },
              { area: 'Testing Infrastructure', scope: 'Unit, UI, and integration tests achieving 80%+ coverage' },
              { area: 'Developer Mentoring', scope: 'Mentored junior engineers and QA through code reviews and KT sessions' },
            ].map(({ area, scope }) => (
              <div key={area} className="glass-card rounded-xl p-5 border border-white/8 flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                <div>
                  <h3 className="text-[#f1f5f9] font-semibold text-sm">{area}</h3>
                  <p className="text-[#64748b] text-xs mt-0.5 leading-relaxed">{scope}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">03</span>
            Impact Metrics
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: '-40%', l: 'Deploy Time', c: '#3b82f6' },
              { v: '+25%', l: 'Performance', c: '#10b981' },
              { v: '+30%', l: 'Code Quality', c: '#6366f1' },
              { v: '80%+', l: 'Test Coverage', c: '#f59e0b' },
            ].map(({ v, l, c }) => (
              <div key={l} className="glass-card rounded-xl p-5 border border-white/8 text-center">
                <p className="text-3xl font-bold" style={{ color: c }}>{v}</p>
                <p className="text-[#64748b] text-xs mt-1">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-6 border border-blue-500/25 text-center">
          <h3 className="text-[#f1f5f9] font-bold text-lg mb-2">View the App</h3>
          <p className="text-[#64748b] text-sm mb-5">The Bread Mobile App is publicly available on the Google Play Store.</p>
          <a href="https://play.google.com/store/apps/details?id=com.lonoperationsllc.breadmobile" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all">
            <ExternalLink size={16} /> Bread Mobile App
          </a>
        </section>
      </div>
    </main>
  )
}
