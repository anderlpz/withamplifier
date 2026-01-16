'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useViewportHeight } from '@/hooks/useViewportHeight'
import { HorizontalScroll } from '@/components/HorizontalScroll'
import { CodeBlock } from '@/components/CopyButton'

const highlights = [
  {
    icon: '⚡',
    title: 'Modular',
    description: 'Swap providers, add tools, change behaviors without rewriting code.'
  },
  {
    icon: '🔍',
    title: 'Transparent',
    description: 'See exactly how every bundle works. No black boxes.'
  },
  {
    icon: '📤',
    title: 'Shareable',
    description: 'Your expertise becomes portable. Package it, share it back.'
  },
  {
    icon: '🔓',
    title: 'Your Rules',
    description: 'No permission needed, no lock-in. Your bundle, your terms.'
  },
  {
    icon: '👥',
    title: 'Community',
    description: 'Built by many perspectives. Better for everyone.'
  }
]

const bundles = [
  {
    name: 'Documentation',
    description: 'Reads your code, writes your docs. READMEs, API references, architecture guides.',
    tools: ['filesystem', 'web-search'],
    tag: 'official'
  },
  {
    name: 'Code Reviewer',
    description: 'Security vulnerabilities, SOLID violations, best practices. Catches what you miss.',
    tools: ['ast-analysis', 'grep'],
    tag: 'official'
  },
  {
    name: 'Developer',
    description: 'Write, test, debug. Full-stack development with filesystem and command execution.',
    tools: ['bash', 'filesystem'],
    tag: 'official'
  },
  {
    name: 'Design Intel',
    description: 'Design system architecture, component patterns, responsive strategies.',
    tools: ['analyzer', 'web'],
    tag: 'community'
  },
  {
    name: 'Security Audit',
    description: 'OWASP checks, dependency scanning, vulnerability reports.',
    tools: ['scanner', 'grep'],
    tag: 'community'
  }
]

export default function Home() {
  useViewportHeight()
  
  return (
    <div className="pt-16">
      {/* Section 1: Hero */}
      <section className="section-full px-6 gradient-radial relative">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-hero xl:text-hero-lg text-ink font-heading leading-tight">
            AI that's yours for the making.
          </h1>
          
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-body-lg text-ink-slate max-w-2xl mx-auto">
            A modular AI agent framework. Combine providers, tools, and behaviors 
            into bundles that do real work—then share them back.
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 scroll-hint">
          <span className="text-micro text-ink-fog">Scroll to explore</span>
          <svg className="w-5 h-5 text-ink-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Section 2: Quick Highlights */}
      <section className="section-full px-0 sm:px-6 py-16 border-t border-canvas-mist">
        <div className="text-center px-6 mb-8 sm:mb-12">
          <h2 className="text-title text-ink">What makes it different</h2>
        </div>
        
        {/* Mobile: Horizontal scroll carousel */}
        <div className="sm:hidden">
          <HorizontalScroll showIndicators={true}>
            {highlights.map((item, i) => (
              <div 
                key={i}
                className="highlight-card w-[280px]"
              >
                <div className="highlight-card-icon text-xl">{item.icon}</div>
                <h3 className="text-heading text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-slate">{item.description}</p>
              </div>
            ))}
          </HorizontalScroll>
        </div>
        
        {/* Desktop: Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {highlights.map((item, i) => (
            <div 
              key={i}
              className="highlight-card"
            >
              <div className="highlight-card-icon text-xl">{item.icon}</div>
              <h3 className="text-heading text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink-slate">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: The Problem */}
      <section className="section-full section-dark px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Visual: Closed box */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 border-4 border-ink-fog rounded-lg opacity-50" />
            <div className="absolute inset-2 border-2 border-ink-fog rounded opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">🔒</span>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-title text-canvas leading-tight">
            Most AI tools are closed boxes.
          </h2>
          
          <p className="mt-6 text-canvas-mist max-w-lg mx-auto">
            One interface. One set of capabilities. One way of working.
            Want different? Too bad.
          </p>
          
          <ul className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center text-canvas-stone text-sm">
            <li className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No control
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No visibility
            </li>
            <li className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              No ownership
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: How It Works */}
      <section className="section-full px-6 py-16 border-t border-canvas-mist">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-title text-ink text-center mb-12">How Amplifier works</h2>
          
          {/* Mobile: Vertical stepped flow */}
          <div className="sm:hidden space-y-4">
            <div className="diagram-node p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">⚡</span>
                <h3 className="text-heading text-ink">Providers</h3>
              </div>
              <p className="text-sm text-ink-slate">Claude, GPT-4, Ollama, local models</p>
            </div>
            
            <div className="flex justify-center">
              <svg className="w-6 h-6 text-ink-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <div className="diagram-node p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🔧</span>
                <h3 className="text-heading text-ink">Tools</h3>
              </div>
              <p className="text-sm text-ink-slate">Filesystem, bash, grep, web search</p>
            </div>
            
            <div className="flex justify-center">
              <svg className="w-6 h-6 text-ink-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <div className="diagram-node p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🎯</span>
                <h3 className="text-heading text-ink">Behaviors</h3>
              </div>
              <p className="text-sm text-ink-slate">Technical writing, code review, security focus</p>
            </div>
            
            <div className="flex justify-center">
              <svg className="w-6 h-6 text-ink-fog" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            <div className="p-6 bg-signal-soft border-2 border-signal rounded-gentle text-center">
              <h3 className="text-heading text-signal">Bundle</h3>
              <p className="mt-2 text-ink-slate text-sm">A complete capability. Use it, customize it, share it.</p>
            </div>
          </div>
          
          {/* Desktop: Horizontal diagram */}
          <div className="hidden sm:block">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="diagram-node p-6">
                <div className="text-2xl mb-3">⚡</div>
                <h3 className="text-heading text-ink">Providers</h3>
                <p className="mt-2 text-ink-slate text-sm">Claude, GPT-4, Ollama</p>
              </div>
              
              <div className="diagram-node p-6">
                <div className="text-2xl mb-3">🔧</div>
                <h3 className="text-heading text-ink">Tools</h3>
                <p className="mt-2 text-ink-slate text-sm">Filesystem, web, bash</p>
              </div>
              
              <div className="diagram-node p-6">
                <div className="text-2xl mb-3">🎯</div>
                <h3 className="text-heading text-ink">Behaviors</h3>
                <p className="mt-2 text-ink-slate text-sm">Code review, docs</p>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <svg className="w-8 h-8 text-ink-fog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
            
            <div className="mt-8 p-8 bg-signal-soft border-2 border-signal rounded-gentle text-center max-w-md mx-auto">
              <h3 className="text-heading text-signal">Bundle</h3>
              <p className="mt-2 text-ink-slate">
                A complete capability. Use it, customize it, share it back.
              </p>
            </div>
          </div>
          
          <p className="mt-12 text-center text-ink-slate max-w-xl mx-auto">
            Change providers without rewriting. Add tools without permission. 
            Your bundle, your rules.
          </p>
        </div>
      </section>

      {/* Section 5: See It Run */}
      <section className="section-full px-4 sm:px-6 py-16 bg-canvas-stone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-title text-ink text-center mb-8">See it in action</h2>
          
          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot active" />
              </div>
              <span className="terminal-label">execution</span>
            </div>
            <div className="terminal-body terminal-responsive whitespace-pre overflow-x-auto">
{`$ amplifier run "Document this codebase"

→ Loading bundle: documentation-writer
→ Provider: claude-sonnet-4-20250514
→ Tools: filesystem, grep, web-search

◐ Reading project structure...
✓ Found 47 source files
◐ Analyzing architecture...
✓ Identified 12 modules
◐ Writing documentation...
✓ README.md created
✓ API.md created
✓ ARCHITECTURE.md created

✓ Documentation complete (3 files, 2,847 words)`}
            </div>
          </div>
          
          <p className="mt-6 text-center text-ink-slate text-sm">
            This is what a real execution looks like. No simulation.
          </p>
          
          <div className="mt-8 text-center">
            <Link href="/explore" className="link-signal link-underline">
              Explore more bundles →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: The Ecosystem */}
      <section className="section-full px-0 sm:px-6 py-16 border-t border-canvas-mist overflow-hidden">
        <div className="px-6 mb-8">
          <h2 className="text-title text-ink">Built by many, better for everyone</h2>
          <p className="mt-4 text-ink-slate max-w-2xl">
            People build bundles for their own needs, then share them back. 
            The more perspectives, the richer the ecosystem.
          </p>
        </div>
        
        <HorizontalScroll showIndicators={true} className="mb-8">
          {bundles.map((bundle, i) => (
            <div key={i} className="bundle-card">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-heading text-ink">{bundle.name}</h3>
                <span className="bundle-card-tag">{bundle.tag}</span>
              </div>
              <p className="text-ink-slate text-sm leading-relaxed">
                {bundle.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {bundle.tools.map((tool, j) => (
                  <span key={j} className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">
                    {tool}
                  </span>
                ))}
              </div>
              <Link href="/explore" className="mt-4 inline-block text-signal text-sm font-medium link-underline">
                Try it →
              </Link>
            </div>
          ))}
          
          {/* "See more" card */}
          <div className="bundle-card flex items-center justify-center bg-canvas-stone border-dashed">
            <Link href="/explore" className="text-signal font-medium flex items-center gap-2">
              See all bundles
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </HorizontalScroll>
        
        <div className="px-6 text-center">
          <Link href="/explore" className="btn-primary">
            Explore the ecosystem
          </Link>
        </div>
      </section>

      {/* Section 7: Get Started */}
      <section className="section-full px-6 py-16 bg-canvas-stone">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-title text-ink mb-4">Get started</h2>
          <p className="text-ink-slate mb-8">Ready to build?</p>
          
          <CodeBlock code="pip install amplifier" className="mb-8" />
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/build" className="btn-primary flex-1">
              Quick Start Guide
            </Link>
            <Link 
              href="https://github.com/microsoft/amplifier" 
              className="btn-secondary flex-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </Link>
          </div>
          
          <p className="mt-8 text-sm text-ink-fog">
            Questions?{' '}
            <Link href="/support" className="link-signal">
              Get support
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
