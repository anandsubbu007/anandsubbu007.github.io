import Link from 'next/link'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function LendWiseCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9]">
      <div className="relative overflow-hidden pt-24 pb-16 px-6"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.12) 0%, transparent 70%), #0a0e1a` }}>
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-emerald-400 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] leading-tight mb-4">
            LendWise<br />
            <span style={{ background: 'linear-gradient(135deg, #10b981, #34d399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Business Lending App
            </span>
          </h1>
          <p className="text-[#94a3b8] text-xl leading-relaxed max-w-2xl">
            A production business lending application actively used by real businesses for financial workflows and lending operations.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://play.google.com/store/apps/details?id=com.subbu.lend_wise" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all">
              <ExternalLink size={15} /> Play Store
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-sm font-bold">01</span>
            Overview
          </h2>
          <p className="text-[#94a3b8] leading-relaxed">
            LendWise is a business lending management application designed to simplify lending workflows for small lending businesses. The app handles borrower management, loan tracking, repayment schedules, and financial reporting — all with a focus on operational reliability and secure data handling.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-sm font-bold">02</span>
            Key Engineering Focus
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { t: 'Financial Data Integrity', d: 'All financial calculations verified with double-precision arithmetic and server-side validation' },
              { t: 'Secure Storage', d: 'Sensitive borrower and financial data encrypted at rest using platform secure storage' },
              { t: 'Offline Reliability', d: 'Core lending workflows operate without internet, synced when connected' },
              { t: 'Audit Trails', d: 'Immutable transaction logs for all financial operations — critical for lending businesses' },
            ].map(({ t, d }) => (
              <div key={t} className="glass-card rounded-xl p-5 border border-emerald-500/15">
                <h3 className="text-[#f1f5f9] font-semibold mb-2">{t}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-4 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-sm font-bold">03</span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {['Flutter / Dart', 'Firebase', 'Secure Storage', 'SQLite', 'BLoC', 'Play Store'].map((t) => (
              <span key={t} className="mono-text px-3 py-1.5 rounded-lg border border-emerald-500/25 bg-emerald-500/8 text-emerald-300 text-xs font-medium">{t}</span>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-6 border border-emerald-500/25 text-center">
          <h3 className="text-[#f1f5f9] font-bold text-lg mb-2">View on Play Store</h3>
          <a href="https://play.google.com/store/apps/details?id=com.subbu.lend_wise" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all">
            <ExternalLink size={16} /> Open Play Store
          </a>
        </section>
      </div>
    </main>
  )
}
