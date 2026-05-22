import Link from 'next/link'
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'
import { GitHubIcon } from '@/components/shared/SocialIcons'

export default function RetailMartCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9]">
      <div
        className="relative overflow-hidden pt-24 pb-16 px-6"
        style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.15) 0%, transparent 70%), #0a0e1a` }}
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-indigo-400 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#f1f5f9] leading-tight mb-4">
            RetailMart<br />
            <span style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              B2B Ecommerce Ecosystem
            </span>
          </h1>
          <p className="text-[#94a3b8] text-xl leading-relaxed max-w-2xl">
            Complete B2B ecommerce ecosystem — buyer + seller dual-app platform with NestJS backend. 1.5 years of full product ownership.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://play.google.com/store/apps/details?id=com.subbu.retailmart_seller" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all">
              <ExternalLink size={15} /> Seller App
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.subbu.retailmart" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/40 bg-indigo-500/10 text-indigo-300 font-semibold text-sm transition-all">
              <ExternalLink size={15} /> Buyer App
            </a>
            <a href="https://github.com/anandsubbu007" target="_blank" rel="noopener noreferrer" // TODO: add specific repo link when available
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-[#94a3b8] font-semibold text-sm transition-all">
              <GitHubIcon size={15} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-sm font-bold">01</span>
            Overview
          </h2>
          <div className="grid sm:grid-cols-4 gap-4 mb-6">
            {[{ l: 'Timeline', v: '1.5 Years', d: 'Full ownership' }, { l: 'Apps', v: '2', d: 'Buyer + Seller' }, { l: 'Backend', v: 'NestJS', d: 'TypeScript API' }, { l: 'Ownership', v: 'Full', d: 'End-to-end product' }].map(({ l, v, d }) => (
              <div key={l} className="glass-card rounded-xl p-4 border border-white/8">
                <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-1">{l}</p>
                <p className="text-[#f1f5f9] font-bold text-xl">{v}</p>
                <p className="text-[#64748b] text-xs">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-[#94a3b8] leading-relaxed">
            RetailMart is a complete B2B ecommerce platform I built and owned for 1.5 years — two Flutter apps (buyer + seller) and a NestJS backend. Full product lifecycle: from architecture design through Play Store deployment and post-launch iterations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-sm font-bold">02</span>
            Architecture
          </h2>
          <div className="space-y-4">
            {[
              { t: 'Melos Monorepo', d: 'Flutter monorepo managed with Melos. Shared packages for auth, networking, models, and UI components across buyer and seller apps.' },
              { t: 'Swagger → Dart Codegen', d: 'NestJS Swagger definitions auto-generate Dart API client code. API changes instantly reflect in the mobile layer — zero manual sync drift.' },
              { t: 'NestJS + PostgreSQL + Redis', d: 'NestJS backend with Prisma ORM, PostgreSQL for data, Redis for caching, and Winston for structured logging. Docker for local dev.' },
              { t: 'Riverpod State Management', d: 'Flutter Riverpod for dependency injection and state. Provider-based architecture with separation of async state, business logic, and UI.' },
              { t: 'Firebase Auth + Social Login', d: 'Firebase authentication for user management. Social login (Google, etc.). JWT passed to NestJS for API authorization.' },
            ].map(({ t, d }) => (
              <div key={t} className="glass-card rounded-xl p-5 border border-white/8">
                <h3 className="text-[#f1f5f9] font-semibold mb-2">{t}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-sm font-bold">03</span>
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {['Flutter / Dart', 'NestJS / TypeScript', 'PostgreSQL', 'Redis', 'Prisma ORM', 'Firebase Auth', 'Melos', 'Riverpod', 'Chopper', 'Docker', 'Swagger Codegen', 'FCM', 'GeoLocation'].map((t) => (
              <span key={t} className="mono-text px-3 py-1.5 rounded-lg border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-xs font-medium">{t}</span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 text-sm font-bold">04</span>
            Engineering Learnings
          </h2>
          <div className="glass-card rounded-2xl p-6 border border-white/8 space-y-3">
            {[
              'Full-stack product ownership at 1 person requires strict API contract discipline — Swagger codegen saved weeks of integration work',
              'Monorepo with Melos dramatically improves code sharing quality and keeps shared packages honest',
              'GeoLocation features need careful battery optimization — continuous location polling kills battery on Android',
              'Backend caching with Redis is mandatory for product listing APIs with heavy filter logic',
              '1.5 years of iteration built intuition for what B2B buyers and sellers actually need vs. what they initially ask for',
            ].map((l, i) => (
              <div key={i} className="flex items-start gap-3 text-[#94a3b8] text-sm">
                <span className="mono-text text-indigo-400 font-bold shrink-0 mt-0.5">0{i + 1}.</span>
                {l}
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-2xl p-6 border border-indigo-500/25 text-center">
          <h3 className="text-[#f1f5f9] font-bold text-lg mb-2">See the Apps Live</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://play.google.com/store/apps/details?id=com.subbu.retailmart_seller" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-sm transition-all">
              <ExternalLink size={16} /> Seller App on Play Store
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.subbu.retailmart" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-indigo-500/40 text-indigo-300 font-semibold text-sm hover:bg-indigo-500/10 transition-all">
              <ExternalLink size={16} /> Buyer App on Play Store
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
