'use client'

import { useEffect } from 'react'
import { useViewportHeight } from '@/hooks/useViewportHeight'
import { CodeBlock } from '@/components/CopyButton'

export default function PlatformPage() {
  useViewportHeight()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    )
    document.querySelectorAll('.reveal, .reveal-stagger, .reveal-scale').forEach(el => {
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="pt-16">

      {/* ===================== SECTION 1: HERO ===================== */}
      <section data-section="hero" data-theme="light"
        className="section-feature section-light-glow"
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container-default text-center">
          <h1 className="reveal text-display-xl font-heading text-ink"
            style={{ textWrap: 'balance' as const }}>
            Power your AI experiences<br />with Amplifier
          </h1>
          <p className="reveal text-body-large text-ink-slate max-w-2xl mx-auto mt-6"
            style={{ transitionDelay: '0.05s' }}>
            The modular engine behind intelligent apps, agents, and workflows — not just another CLI.
          </p>
          <div className="reveal mt-10" style={{ transitionDelay: '0.1s' }}>
            <CodeBlock code="pip install amplifier" className="max-w-md mx-auto" />
            <a href="https://github.com/microsoft/amplifier"
              className="inline-flex items-center gap-2 text-signal mt-4 text-body font-medium hover:underline"
              target="_blank" rel="noopener noreferrer">
              View on GitHub
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION 2: THREE PILLAR CARDS ===================== */}
      <section data-section="pillars" data-theme="light"
        className="section-stone"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-wide">
          <div className="reveal-stagger grid md:grid-cols-3 gap-8">

            {/* Card 1: Power anything */}
            <div className="p-8 rounded-2xl bg-canvas border border-canvas-mist" style={{ transitionDelay: '0.05s' }}>
              <div style={{ height: 64, marginBottom: 24 }}>
                <svg width="160" height="64" viewBox="0 0 160 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Five modality icons */}
                  <rect x="10" y="8" width="16" height="20" rx="2" stroke="#10B981" strokeWidth="1.5" fill="none" />
                  <line x1="14" y1="14" x2="22" y2="14" stroke="#10B981" strokeWidth="1.2" />
                  <line x1="14" y1="18" x2="20" y2="18" stroke="#10B981" strokeWidth="1.2" />
                  <line x1="14" y1="22" x2="22" y2="22" stroke="#10B981" strokeWidth="1.2" />

                  <rect x="42" y="10" width="3" height="16" rx="1.5" fill="#06B6D4" opacity="0.6" />
                  <rect x="48" y="6" width="3" height="24" rx="1.5" fill="#06B6D4" />
                  <rect x="54" y="12" width="3" height="12" rx="1.5" fill="#06B6D4" opacity="0.8" />
                  <rect x="60" y="8" width="3" height="20" rx="1.5" fill="#06B6D4" opacity="0.5" />

                  <ellipse cx="83" cy="18" rx="10" ry="8" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
                  <circle cx="83" cy="18" r="3" fill="#F59E0B" opacity="0.4" />

                  <path d="M112 10l4 8-4 8 4 8" stroke="#F97316" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                  <rect x="132" y="8" width="18" height="14" rx="7" stroke="#5B4DE3" strokeWidth="1.5" fill="none" />
                  <rect x="136" y="22" width="10" height="8" rx="5" stroke="#5B4DE3" strokeWidth="1.5" fill="none" />

                  {/* Convergence lines */}
                  <line x1="18" y1="32" x2="80" y2="58" stroke="url(#conv1)" strokeWidth="0.8" />
                  <line x1="50" y1="34" x2="80" y2="58" stroke="url(#conv2)" strokeWidth="0.8" />
                  <line x1="83" y1="30" x2="80" y2="58" stroke="url(#conv3)" strokeWidth="0.8" />
                  <line x1="114" y1="34" x2="80" y2="58" stroke="url(#conv4)" strokeWidth="0.8" />
                  <line x1="141" y1="32" x2="80" y2="58" stroke="url(#conv5)" strokeWidth="0.8" />
                  <circle cx="80" cy="58" r="3" fill="#5B4DE3" />

                  <defs>
                    <linearGradient id="conv1" x1="18" y1="32" x2="80" y2="58"><stop stopColor="#10B981" stopOpacity="0.6" /><stop offset="1" stopColor="#5B4DE3" stopOpacity="0.8" /></linearGradient>
                    <linearGradient id="conv2" x1="50" y1="34" x2="80" y2="58"><stop stopColor="#06B6D4" stopOpacity="0.6" /><stop offset="1" stopColor="#5B4DE3" stopOpacity="0.8" /></linearGradient>
                    <linearGradient id="conv3" x1="83" y1="30" x2="80" y2="58"><stop stopColor="#F59E0B" stopOpacity="0.6" /><stop offset="1" stopColor="#5B4DE3" stopOpacity="0.8" /></linearGradient>
                    <linearGradient id="conv4" x1="114" y1="34" x2="80" y2="58"><stop stopColor="#F97316" stopOpacity="0.6" /><stop offset="1" stopColor="#5B4DE3" stopOpacity="0.8" /></linearGradient>
                    <linearGradient id="conv5" x1="141" y1="32" x2="80" y2="58"><stop stopColor="#5B4DE3" stopOpacity="0.6" /><stop offset="1" stopColor="#5B4DE3" stopOpacity="0.8" /></linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-title font-heading text-ink">Power anything</h3>
              <p className="text-body text-ink-slate mt-3">
                Amplifier powers the intelligence underneath — documents, transcripts, images, events, conversations. Your app decides the shape.
              </p>
            </div>

            {/* Card 2: Any model, your choice */}
            <div className="p-8 rounded-2xl bg-canvas border border-canvas-mist" style={{ transitionDelay: '0.1s' }}>
              <div style={{ height: 64, marginBottom: 24 }}>
                <svg width="120" height="64" viewBox="0 0 120 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 2x2 provider grid */}
                  <rect x="8" y="4" width="44" height="22" rx="6" fill="rgba(217,119,6,0.08)" stroke="rgba(217,119,6,0.2)" strokeWidth="1" />
                  <rect x="8" y="4" width="4" height="22" rx="2" fill="#D97706" />

                  <rect x="60" y="4" width="44" height="22" rx="6" fill="rgba(16,185,129,0.1)" stroke="rgba(16,185,129,0.2)" strokeWidth="1" />
                  <rect x="60" y="4" width="4" height="22" rx="2" fill="#10B981" />

                  <rect x="8" y="34" width="44" height="22" rx="6" fill="rgba(59,130,246,0.08)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                  <rect x="8" y="34" width="4" height="22" rx="2" fill="#3B82F6" />

                  <rect x="60" y="34" width="44" height="22" rx="6" fill="rgba(139,92,246,0.12)" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
                  <rect x="60" y="34" width="4" height="22" rx="2" fill="#8B5CF6" />
                  {/* Brighter active glow on the purple node */}
                  <rect x="60" y="34" width="44" height="22" rx="6" fill="rgba(139,92,246,0.06)" />

                  {/* Dashed connection lines */}
                  <line x1="52" y1="15" x2="60" y2="15" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="52" y1="45" x2="60" y2="45" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="30" y1="26" x2="30" y2="34" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="82" y1="26" x2="82" y2="34" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              </div>
              <h3 className="text-title font-heading text-ink">Any model, your choice</h3>
              <p className="text-body text-ink-slate mt-3">
                Use frontier models, budget models, or local. Route each task to the right one. Mix hosted and local providers. Switch with one line in your config.
              </p>
            </div>

            {/* Card 3: Build with power, run affordably */}
            <div className="p-8 rounded-2xl bg-canvas border border-canvas-mist" style={{ transitionDelay: '0.15s' }}>
              <div style={{ height: 64, marginBottom: 24 }}>
                <svg width="160" height="64" viewBox="0 0 160 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left: BUILD — three stacked bars */}
                  <text x="30" y="10" fill="#8B5CF6" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="600">BUILD</text>
                  <rect x="6" y="16" width="48" height="10" rx="5" fill="#8B5CF6" opacity="1" />
                  <rect x="6" y="30" width="48" height="10" rx="5" fill="#8B5CF6" opacity="0.6" />
                  <rect x="6" y="44" width="48" height="10" rx="5" fill="#8B5CF6" opacity="0.3" />

                  {/* Divider */}
                  <line x1="80" y1="8" x2="80" y2="58" stroke="url(#divGrad)" strokeWidth="1" />
                  <defs>
                    <linearGradient id="divGrad" x1="80" y1="8" x2="80" y2="58" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#8B5CF6" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#8B5CF6" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#10B981" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Right: RUN — one thin bar */}
                  <text x="125" y="10" fill="#10B981" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="600">RUN</text>
                  <rect x="100" y="28" width="50" height="8" rx="4" fill="#10B981" />
                </svg>
              </div>
              <h3 className="text-title font-heading text-ink">Build with power, run affordably</h3>
              <p className="text-body text-ink-slate mt-3">
                Develop with the best models to get things right. Deploy what you built on smaller, cheaper, local models. The intelligence lives in what you&apos;ve composed, not in one expensive API call.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SECTION 3: WHAT THIS POWERS ===================== */}
      <section data-section="experiences" data-theme="dark"
        className="section-feature section-dark"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-wide">
          <h2 className="reveal text-headline font-heading text-white text-center"
            style={{ textWrap: 'balance' as const }}>
            One engine. Any shape.
          </h2>
          <p className="reveal text-body-large text-center max-w-2xl mx-auto mt-4"
            style={{ color: 'rgba(255,255,255,0.6)', transitionDelay: '0.05s' }}>
            The same bundle pattern powers radically different experiences. Here&apos;s what people are building.
          </p>

          <div className="reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

            {/* Experience 1: Document Processing */}
            <div className="benefit-card" style={{ transitionDelay: '0.05s' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(16,185,129,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke="#10B981" strokeWidth="1.5" /><line x1="8" y1="8" x2="16" y2="8" stroke="#10B981" strokeWidth="1.2" /><line x1="8" y1="12" x2="14" y2="12" stroke="#10B981" strokeWidth="1.2" /><line x1="8" y1="16" x2="16" y2="16" stroke="#10B981" strokeWidth="1.2" /></svg>
              </div>
              <p className="text-body font-heading font-semibold text-white">Document Processing</p>
              <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>PDFs, contracts, reports</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '8px 0' }}><path d="M3 8h10m-3-3l3 3-3 3" stroke="#10B981" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="text-caption font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Extracted insights &amp; structured data</p>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 9999, fontSize: 11, background: 'rgba(16,185,129,0.12)', color: '#059669' }}>Per-Request</span>
              </div>
            </div>

            {/* Experience 2: Transcript Intelligence */}
            <div className="benefit-card" style={{ transitionDelay: '0.1s' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(6,182,212,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="8" width="3" height="10" rx="1.5" fill="#06B6D4" opacity="0.6" /><rect x="8" y="4" width="3" height="18" rx="1.5" fill="#06B6D4" /><rect x="13" y="6" width="3" height="14" rx="1.5" fill="#06B6D4" opacity="0.8" /><rect x="18" y="9" width="3" height="8" rx="1.5" fill="#06B6D4" opacity="0.5" /></svg>
              </div>
              <p className="text-body font-heading font-semibold text-white">Transcript Intelligence</p>
              <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Recordings &amp; call transcripts</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '8px 0' }}><path d="M3 8h10m-3-3l3 3-3 3" stroke="#06B6D4" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="text-caption font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Decisions, action items &amp; summaries</p>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 9999, fontSize: 11, background: 'rgba(16,185,129,0.12)', color: '#059669' }}>Per-Request</span>
              </div>
            </div>

            {/* Experience 3: Visual Interpretation */}
            <div className="benefit-card" style={{ transitionDelay: '0.15s' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(245,158,11,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#F59E0B" strokeWidth="1.5" /><circle cx="12" cy="12" r="3" stroke="#F59E0B" strokeWidth="1.5" /><circle cx="12" cy="12" r="1" fill="#F59E0B" /></svg>
              </div>
              <p className="text-body font-heading font-semibold text-white">Visual Interpretation</p>
              <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Screenshots, diagrams &amp; photos</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '8px 0' }}><path d="M3 8h10m-3-3l3 3-3 3" stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="text-caption font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Descriptions, data &amp; triggered actions</p>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 9999, fontSize: 11, background: 'rgba(16,185,129,0.12)', color: '#059669' }}>Per-Request</span>
              </div>
            </div>

            {/* Experience 4: Conversational Agent */}
            <div className="benefit-card" style={{ transitionDelay: '0.2s' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(91,77,227,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="14" height="10" rx="5" stroke="#5B4DE3" strokeWidth="1.5" /><rect x="8" y="10" width="14" height="10" rx="5" stroke="#5B4DE3" strokeWidth="1.5" /></svg>
              </div>
              <p className="text-body font-heading font-semibold text-white">Conversational Agent</p>
              <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Chat messages &amp; queries</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '8px 0' }}><path d="M3 8h10m-3-3l3 3-3 3" stroke="#5B4DE3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="text-caption font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Context-aware responses with tool use</p>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 9999, fontSize: 11, background: 'rgba(91,77,227,0.12)', color: '#7B6FF0' }}>Per-Conversation</span>
              </div>
            </div>

            {/* Experience 5: Personal AI Assistant */}
            <div className="benefit-card" style={{ transitionDelay: '0.25s' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(244,63,94,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="#F43F5E" strokeWidth="1.5" /><circle cx="12" cy="4" r="1.5" fill="#F43F5E" opacity="0.6" /><circle cx="19" cy="8" r="1.5" fill="#F43F5E" opacity="0.6" /><circle cx="19" cy="16" r="1.5" fill="#F43F5E" opacity="0.6" /><circle cx="12" cy="20" r="1.5" fill="#F43F5E" opacity="0.6" /><circle cx="5" cy="16" r="1.5" fill="#F43F5E" opacity="0.6" /><circle cx="5" cy="8" r="1.5" fill="#F43F5E" opacity="0.6" /><line x1="12" y1="9" x2="12" y2="5.5" stroke="#F43F5E" strokeWidth="0.8" opacity="0.4" /><line x1="14.6" y1="10" x2="17.5" y2="8" stroke="#F43F5E" strokeWidth="0.8" opacity="0.4" /><line x1="14.6" y1="14" x2="17.5" y2="16" stroke="#F43F5E" strokeWidth="0.8" opacity="0.4" /><line x1="12" y1="15" x2="12" y2="18.5" stroke="#F43F5E" strokeWidth="0.8" opacity="0.4" /><line x1="9.4" y1="14" x2="6.5" y2="16" stroke="#F43F5E" strokeWidth="0.8" opacity="0.4" /><line x1="9.4" y1="10" x2="6.5" y2="8" stroke="#F43F5E" strokeWidth="0.8" opacity="0.4" /></svg>
              </div>
              <p className="text-body font-heading font-semibold text-white">Personal AI Assistant</p>
              <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Ongoing interaction over time</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '8px 0' }}><path d="M3 8h10m-3-3l3 3-3 3" stroke="#F43F5E" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="text-caption font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Compound intelligence that grows</p>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 9999, fontSize: 11, background: 'rgba(244,63,94,0.12)', color: '#FB7185' }}>Singleton</span>
              </div>
            </div>

            {/* Experience 6: Event-Driven Automation */}
            <div className="benefit-card" style={{ transitionDelay: '0.3s' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(249,115,22,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-2 8 9-12h-7l2-8z" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <p className="text-body font-heading font-semibold text-white">Event-Driven Automation</p>
              <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>Webhooks, schedules &amp; system signals</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ margin: '8px 0' }}><path d="M3 8h10m-3-3l3 3-3 3" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <p className="text-caption font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Automated intelligent responses</p>
              <div style={{ marginTop: 12 }}>
                <span style={{ display: 'inline-block', padding: '2px 8px', borderRadius: 9999, fontSize: 11, background: 'rgba(16,185,129,0.12)', color: '#059669' }}>Per-Request</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ===================== SECTION 4: DEV EXPERIENCE ===================== */}
      <section data-section="dev-experience" data-theme="light"
        className="section-feature section-light-glow"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-default">
          <h2 className="reveal text-headline font-heading text-ink"
            style={{ textWrap: 'balance' as const }}>
            What you build with
          </h2>
          <p className="reveal text-body-large text-ink-slate max-w-2xl mt-4"
            style={{ transitionDelay: '0.05s' }}>
            A bundle is a declarative file that defines your AI experience. Providers, tools, behaviors — declare what you want, swap what you need.
          </p>

          <div className="reveal flex flex-col lg:flex-row gap-12 lg:gap-16 mt-12"
            style={{ transitionDelay: '0.1s' }}>
            {/* Left column: YAML code block (60%) */}
            <div className="lg:w-3/5 min-w-0">
              <CodeBlock
                code={`name: my-assistant

providers:
  - module: provider-anthropic
    config:
      model: claude-sonnet-4-5

tools:
  - module: tool-filesystem
  - module: tool-web-search
  - module: tool-bash

behaviors:
  - source: "@foundation:coding"
  - source: "@foundation:agents"

hooks:
  - module: hooks-approval`}
                className="max-w-xl"
              />
            </div>

            {/* Right column: Annotation cards (40%) */}
            <div className="lg:w-2/5 flex flex-col gap-4 justify-center">
              <div className="p-4 rounded-xl bg-canvas-stone/50"
                style={{ borderLeft: '3px solid #5B4DE3' }}>
                <p className="text-caption font-heading font-semibold text-ink">Your models</p>
                <p className="text-caption text-ink-slate mt-1">
                  Choose Anthropic, OpenAI, local, or your own. Change one line to switch.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-canvas-stone/50"
                style={{ borderLeft: '3px solid #10B981' }}>
                <p className="text-caption font-heading font-semibold text-ink">Your tools</p>
                <p className="text-caption text-ink-slate mt-1">
                  File access, web search, code execution — or write custom tools.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-canvas-stone/50"
                style={{ borderLeft: '3px solid #F59E0B' }}>
                <p className="text-caption font-heading font-semibold text-ink">Shared capabilities</p>
                <p className="text-caption text-ink-slate mt-1">
                  Pull in community behaviors. Your teammate&apos;s setup, one line away.
                </p>
              </div>
            </div>
          </div>

          <p className="reveal text-body text-ink-fog mt-8 text-center italic"
            style={{ transitionDelay: '0.15s' }}>
            Change one line, different provider. That&apos;s composability.
          </p>
        </div>
      </section>

      {/* ===================== SECTION 5: FROM BUNDLE TO APP ===================== */}
      <section data-section="bundle-to-app" data-theme="dark"
        className="section-dark-gradient"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>

        {/* Movement A: The Path (Four Steps) */}
        <div className="container-default text-center">
          <h2 className="reveal text-headline font-heading text-white"
            style={{ textWrap: 'balance' as const }}>
            From declaration to running app
          </h2>
          <p className="reveal text-body-large mt-4"
            style={{ color: 'rgba(255,255,255,0.6)', transitionDelay: '0.05s' }}>
            Four steps. Your app and Amplifier meet at a clean boundary.
          </p>

          <div className="reveal-stagger grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { num: '1', name: 'Declare', desc: 'Bundle defines intelligence — models, tools, behaviors' },
              { num: '2', name: 'Prepare', desc: 'Load bundle once at startup. Expensive, do it once.' },
              { num: '3', name: 'Create', desc: 'One session per interaction. Cheap and fast.' },
              { num: '4', name: 'Execute', desc: 'Send input, get output. Your app decides what\u2019s next.' },
            ].map((step) => (
              <div key={step.num} className="benefit-card text-center relative overflow-hidden"
                style={{ transitionDelay: `${Number(step.num) * 0.05}s` }}>
                <span className="text-display font-heading"
                  style={{
                    color: 'rgba(91,77,227,0.15)',
                    position: 'absolute',
                    top: 8,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    lineHeight: 1,
                    pointerEvents: 'none',
                  }}>
                  {step.num}
                </span>
                <div style={{ position: 'relative', paddingTop: 48 }}>
                  <p className="text-body font-heading font-semibold text-white">{step.name}</p>
                  <p className="text-caption mt-2" style={{ color: 'rgba(255,255,255,0.45)' }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Movement B: The Boundary Diagram */}
        <div className="container-wide" style={{ marginTop: 80 }}>
          <div className="reveal-scale">
            <svg
              viewBox="0 0 800 320"
              className="w-full max-w-4xl mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Architecture diagram showing Your App connected to Amplifier through a Session boundary"
            >
              <defs>
                <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="purpleGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5B4DE3" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#5B4DE3" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="amberGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.04" />
                </linearGradient>
              </defs>

              {/* LEFT BOX: Your App */}
              <rect x="20" y="20" width="280" height="280" rx="16" fill="url(#blueGlow)" stroke="rgba(59,130,246,0.25)" strokeWidth="1" />
              <text x="160" y="52" textAnchor="middle" fill="#3B82F6" fontSize="14" fontFamily="Syne, sans-serif" fontWeight="700">Your App</text>

              {/* App items */}
              {[
                { y: 80, icon: 'M4 2h8l4 4v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z', label: 'Web routes' },
                { y: 116, icon: 'M13 2L4 14h7l-2 8 9-12h-7l2-8z', label: 'Event listeners' },
                { y: 152, icon: 'M3 7h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm0 0l3-4h12l3 4', label: 'File processors' },
                { y: 188, icon: 'M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z', label: 'Slack handlers' },
                { y: 224, icon: 'M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2', label: 'Audio pipelines' },
                { y: 260, icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Scheduled jobs' },
              ].map((item, i) => (
                <g key={i}>
                  <g transform={`translate(52, ${item.y - 8})`}>
                    <path d={item.icon} stroke="rgba(59,130,246,0.5)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="scale(0.7)" />
                  </g>
                  <text x="80" y={item.y + 4} fill="rgba(255,255,255,0.55)" fontSize="12" fontFamily="Epilogue, sans-serif">{item.label}</text>
                </g>
              ))}

              {/* CENTER: Session Bridge */}
              <rect x="330" y="110" width="140" height="100" rx="12" fill="url(#amberGlow)" stroke="rgba(245,158,11,0.35)" strokeWidth="1" />
              <text x="400" y="148" textAnchor="middle" fill="#F59E0B" fontSize="14" fontFamily="Syne, sans-serif" fontWeight="700">Session</text>
              <text x="400" y="170" textAnchor="middle" fill="rgba(245,158,11,0.5)" fontSize="10" fontFamily="Epilogue, sans-serif">The clean boundary</text>

              {/* Bidirectional arrows */}
              <path d="M370 190 l-8 -4 v8 z" fill="rgba(245,158,11,0.4)" />
              <line x1="374" y1="190" x2="426" y2="190" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
              <path d="M430 190 l8 -4 v8 z" fill="rgba(245,158,11,0.4)" />

              {/* Connection lines: App to Session */}
              <line x1="300" y1="160" x2="330" y2="160" stroke="rgba(59,130,246,0.2)" strokeWidth="1" strokeDasharray="4 3" />

              {/* Connection lines: Session to Amplifier */}
              <line x1="470" y1="160" x2="500" y2="160" stroke="rgba(91,77,227,0.2)" strokeWidth="1" strokeDasharray="4 3" />

              {/* Animated particles through session bridge */}
              <circle r="3" fill="#3B82F6" opacity="0.7">
                <animateMotion dur="3s" repeatCount="indefinite" path="M300,160 L500,160" />
              </circle>
              <circle r="3" fill="#5B4DE3" opacity="0.7">
                <animateMotion dur="3s" repeatCount="indefinite" path="M500,160 L300,160" />
              </circle>

              {/* RIGHT BOX: Amplifier */}
              <rect x="500" y="20" width="280" height="280" rx="16" fill="url(#purpleGlow)" stroke="rgba(91,77,227,0.25)" strokeWidth="1" />
              <text x="640" y="52" textAnchor="middle" fill="#5B4DE3" fontSize="14" fontFamily="Syne, sans-serif" fontWeight="700">Amplifier</text>

              {/* Amplifier items */}
              {[
                { y: 80, label: 'Models & providers' },
                { y: 116, label: 'Tool dispatch' },
                { y: 152, label: 'Orchestrator loop' },
                { y: 188, label: 'Context management' },
                { y: 224, label: 'Hook system' },
              ].map((item, i) => (
                <g key={i}>
                  <circle cx="540" cy={item.y} r="4" fill="rgba(91,77,227,0.3)" stroke="rgba(91,77,227,0.5)" strokeWidth="0.8" />
                  <text x="556" y={item.y + 4} fill="rgba(255,255,255,0.55)" fontSize="12" fontFamily="Epilogue, sans-serif">{item.label}</text>
                </g>
              ))}
            </svg>

            <p className="text-caption text-center mt-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Your app creates a Session. Amplifier handles everything on the other side.
            </p>
          </div>
        </div>

        {/* Movement C: Session Patterns */}
        <div className="container-default" style={{ marginTop: 80 }}>
          <h3 className="reveal text-title font-heading text-white text-center">
            Which pattern fits your app?
          </h3>

          <div className="reveal-stagger space-y-3 mt-8">
            {[
              { name: 'Per-Request', app: 'REST API or webhook handler', how: 'Create session, execute, discard. Seconds.' },
              { name: 'Per-Conversation', app: 'Chat bot or messaging app', how: 'One session per thread. Minutes to hours.' },
              { name: 'Singleton', app: 'Personal AI assistant', how: 'One persistent session. Days to weeks.' },
              { name: 'Voice Bridge', app: 'Voice assistant with tools', how: 'Voice handles audio; Amplifier handles reasoning.' },
              { name: 'Multi-Session', app: 'Multi-user or multi-persona', how: 'Route to different bundles per user or context.' },
            ].map((pattern, i) => (
              <div key={pattern.name}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-xl"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transitionDelay: `${(i + 1) * 0.05}s`,
                }}>
                <span className="font-mono text-signal-light font-medium text-body shrink-0 sm:w-44">{pattern.name}</span>
                <span className="text-caption text-white sm:flex-1">{pattern.app}</span>
                <span className="text-caption sm:text-right shrink-0" style={{ color: 'rgba(255,255,255,0.45)' }}>{pattern.how}</span>
              </div>
            ))}
          </div>

          <p className="reveal text-caption text-center mt-8 italic"
            style={{ color: 'rgba(255,255,255,0.4)', transitionDelay: '0.1s' }}>
            Pick the pattern that matches your app. The bundle stays the same — only session management changes.
          </p>
        </div>
      </section>

      {/* ===================== SECTION 6: GET STARTED ===================== */}
      <section data-section="get-started" data-theme="dark"
        className="section-feature section-dark"
        style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <div className="container-narrow text-center">
          <h2 className="reveal text-headline font-heading text-white">
            Start building
          </h2>

          <div className="reveal-stagger space-y-3 max-w-md mx-auto mt-10">
            {[
              'pip install amplifier',
              'amplifier init my-assistant',
              'amplifier run',
            ].map((cmd, i) => (
              <div key={cmd}
                className="rounded-xl px-6 py-4 text-left font-mono text-body text-white"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transitionDelay: `${(i + 1) * 0.05}s`,
                }}>
                {cmd}
              </div>
            ))}
          </div>

          <div className="reveal flex flex-wrap justify-center gap-x-8 gap-y-3 mt-10"
            style={{ transitionDelay: '0.1s' }}>
            <a href="https://github.com/microsoft/amplifier#application-integration"
              className="text-signal-light text-caption font-medium hover:underline"
              target="_blank" rel="noopener noreferrer">
              Application Integration Guide →
            </a>
            <a href="https://github.com/microsoft/amplifier#architecture"
              className="text-signal-light text-caption font-medium hover:underline"
              target="_blank" rel="noopener noreferrer">
              Architecture Deep-Dive →
            </a>
            <a href="https://github.com/microsoft/amplifier#examples"
              className="text-signal-light text-caption font-medium hover:underline"
              target="_blank" rel="noopener noreferrer">
              Working Examples →
            </a>
          </div>

          <div className="reveal mt-8" style={{ transitionDelay: '0.15s' }}>
            <a href="https://github.com/microsoft/amplifier"
              className="btn-apple"
              target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}