import Link from 'next/link'
import { ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react'
import { GitHubIcon } from '@/components/shared/SocialIcons'

export default function VanigamCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0a0e1a] text-[#f1f5f9]">
      {/* Header */}
      <div
        className="relative overflow-hidden pt-24 pb-16 px-6"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 70%), #0a0e1a`,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-[#64748b] hover:text-blue-400 text-sm font-medium mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="mono-text px-3 py-1.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase">
              ★ Flagship Project
            </span>
            <span className="mono-text px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs font-semibold">
              Production
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f1f5f9] leading-tight mb-4">
            Vanigam<br />
            <span style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              GST Billing App
            </span>
          </h1>
          <p className="text-[#94a3b8] text-xl leading-relaxed max-w-2xl">
            A complex GST billing and business management application built with scalable Flutter architecture and offline-first workflows — adopted by real B2B businesses.
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href="https://play.google.com/store/apps/details?id=com.subbu.vanigam" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
              <ExternalLink size={15} /> Play Store
            </a>
            <a href="https://github.com/anandsubbu007/Vanigam-GST_Billing_App" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-[#94a3b8] hover:text-[#f1f5f9] hover:border-white/25 font-semibold text-sm transition-all">
              <GitHubIcon size={15} /> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">

        {/* Overview */}
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">01</span>
            Overview
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { label: 'Timeline', value: '1 Year', desc: 'Solo development' },
              { label: 'Platform', value: 'Multi', desc: 'Android + Windows + iOS' },
              { label: 'Status', value: 'Production', desc: 'Real business users' },
            ].map(({ label, value, desc }) => (
              <div key={label} className="glass-card rounded-xl p-5 border border-white/8">
                <p className="mono-text text-[10px] text-[#64748b] font-semibold tracking-widest uppercase mb-1">{label}</p>
                <p className="text-[#f1f5f9] font-bold text-xl">{value}</p>
                <p className="text-[#64748b] text-xs">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-[#94a3b8] leading-relaxed">
            Vanigam is a full-featured GST billing and business management system built specifically for Indian B2B sellers — distributors, wholesalers, and small businesses. Designed for real-world business complexity: multi-party transactions, inventory tracking, GST filing, offline-first operations, and cross-device data sync.
          </p>
        </section>

        {/* Problem Statement */}
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">02</span>
            Problem Statement
          </h2>
          <div className="glass-card rounded-2xl p-6 border border-blue-500/20 bg-blue-500/5">
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Small B2B businesses in India need GST-compliant billing but existing solutions are either too expensive (enterprise ERP), too simple (basic invoice apps), or not designed for distributor-wholesaler workflows. Many businesses still rely on paper or Excel.
            </p>
            <ul className="space-y-2">
              {[
                'No affordable offline-capable GST billing app for small distributors',
                'Existing apps lacked multi-platform support (counter + mobile for field reps)',
                'TCP-based local sync needed for shops with unreliable internet',
                'GST report generation for filing missing from most affordable options',
              ].map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-[#94a3b8]">
                  <CheckCircle size={14} className="text-blue-400 mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Architecture */}
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">03</span>
            Architecture Decisions
          </h2>
          <div className="space-y-4">
            {[
              {
                title: 'Offline-First Architecture',
                desc: 'All core features (billing, inventory, customer lookup) work without internet. Data is stored locally in SQLite/Isar and synced to Firebase when connected. This was non-negotiable for shops with unreliable connectivity.',
              },
              {
                title: 'TCP Local Sync',
                desc: 'Field sales reps create orders on Android mobile; the Windows desktop app approves and generates invoices. A TCP socket connection over local WiFi enables data transfer without internet dependency.',
              },
              {
                title: 'Multi-Platform Flutter',
                desc: 'Single codebase targets Android, iOS, and Windows. Platform-specific code isolated using conditional imports and abstract interface patterns.',
              },
              {
                title: 'PDF Generation Pipeline',
                desc: 'Custom PDF generation for GST invoices using the pdf package. Template system allows businesses to customize their invoice layout, colors, and branding.',
              },
              {
                title: 'State Management with BLoC',
                desc: 'BLoC pattern for all business logic. Clear separation between UI, business rules, and data layers. Each feature (billing, inventory, reports) has its own BLoC.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="glass-card rounded-xl p-5 border border-white/8">
                <h3 className="text-[#f1f5f9] font-semibold mb-2">{title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">04</span>
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {['Flutter / Dart', 'Firebase Firestore', 'Firebase Auth', 'SQLite / Isar', 'BLoC', 'pdf package', 'TCP Sockets', 'GitHub Actions', 'Play Store', 'Windows Desktop'].map((t) => (
              <span key={t} className="mono-text px-3 py-1.5 rounded-lg border border-blue-500/25 bg-blue-500/8 text-blue-300 text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">05</span>
            Key Features
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { f: 'GST Invoice Generation', d: 'GST-compliant PDF invoices with custom templates and branding' },
              { f: 'Offline-First Billing', d: 'Full billing workflow works without internet connection' },
              { f: 'Credit/Debit Management', d: 'Track party-wise outstanding amounts and payment history' },
              { f: 'GST Report Filing', d: 'Generate GST reports in standard formats for filing' },
              { f: 'Sales & Purchase Reports', d: 'Dynamic chart and PDF reports for business analytics' },
              { f: 'Inventory Management', d: 'Product tracking with reorder suggestions and stock alerts' },
              { f: 'TCP Local Sync', d: 'Transfer data between devices over local network without internet' },
              { f: 'Sales Order Workflow', d: 'Field reps create orders on mobile; approved on desktop' },
            ].map(({ f, d }) => (
              <div key={f} className="glass-card rounded-xl p-4 border border-white/8">
                <h3 className="text-[#f1f5f9] font-semibold text-sm mb-1">{f}</h3>
                <p className="text-[#64748b] text-xs leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Learnings */}
        <section>
          <h2 className="text-2xl font-bold text-[#f1f5f9] mb-6 flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400 text-sm font-bold">06</span>
            Engineering Learnings
          </h2>
          <div className="glass-card rounded-2xl p-6 border border-white/8 space-y-3">
            {[
              'Offline-first is not just about caching — it requires conflict resolution, sync queuing, and failure recovery design',
              'Local network TCP sync is a practical solution when internet connectivity is unreliable in target markets',
              'PDF generation at scale requires layout engine understanding — Flutter pdf package has quirks with dynamic content',
              'Multi-platform Flutter (Android + Windows) requires careful platform abstraction from day one',
              'Real business users find the edge cases that tests miss — post-launch support shaped the architecture significantly',
            ].map((l, i) => (
              <div key={i} className="flex items-start gap-3 text-[#94a3b8] text-sm">
                <span className="mono-text text-blue-400 font-bold shrink-0 mt-0.5">0{i + 1}.</span>
                {l}
              </div>
            ))}
          </div>
        </section>

        {/* View more */}
        <section className="glass-card rounded-2xl p-6 border border-blue-500/25 text-center">
          <h3 className="text-[#f1f5f9] font-bold text-lg mb-2">Explore the Full Code</h3>
          <p className="text-[#64748b] text-sm mb-5">The full codebase including architecture, state management, and PDF generation is available on GitHub.</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://github.com/anandsubbu007/Vanigam-GST_Billing_App" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-[#94a3b8] hover:text-[#f1f5f9] hover:border-white/25 font-semibold text-sm transition-all">
              <GitHubIcon size={16} /> View Full GitHub README
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.subbu.vanigam" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm transition-all">
              <ExternalLink size={16} /> Play Store Listing
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
