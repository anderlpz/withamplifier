'use client'

import { useState } from 'react'
import Link from 'next/link'

const bundles = [
  {
    id: 'documentation',
    name: 'Documentation',
    description: 'Creates READMEs, API docs, user guides',
    defaultPrompt: 'Document the architecture of this codebase',
  },
  {
    id: 'code-reviewer',
    name: 'Code Reviewer',
    description: 'Security analysis, best practices review',
    defaultPrompt: 'Review this code for security vulnerabilities',
  },
  {
    id: 'developer',
    name: 'Developer',
    description: 'Full-stack development capabilities',
    defaultPrompt: 'Create a script that analyzes log files',
  },
  {
    id: 'presentation',
    name: 'Presentation Creator',
    description: 'Presentations with research and visuals',
    defaultPrompt: 'Create a technical presentation on our architecture',
  },
]

const bundleYaml: Record<string, string> = {
  documentation: `# Documentation Bundle

bundle:
  name: documentation
  version: 1.0.0

includes:
  - bundle: foundation

tools:
  - filesystem
  - web_search
  - grep
  - glob

behaviors:
  - technical-writing
  - research

context:
  include:
    - docs/README-TEMPLATE.md`,
  'code-reviewer': `# Code Reviewer Bundle

bundle:
  name: code-reviewer
  version: 1.0.0

includes:
  - bundle: foundation

tools:
  - filesystem:read-only
  - grep
  - glob
  - python_check

behaviors:
  - security-review
  - best-practices`,
  developer: `# Developer Bundle

bundle:
  name: developer
  version: 1.0.0

includes:
  - bundle: foundation

tools:
  - filesystem
  - bash
  - grep
  - glob
  - web_search

behaviors:
  - implementation
  - testing`,
  presentation: `# Presentation Creator

bundle:
  name: presentation-creator
  version: 1.0.0

includes:
  - bundle: foundation

tools:
  - web_search
  - filesystem

behaviors:
  - research
  - presentation-design
  - visual-suggestions`,
}

export default function PlaygroundPage() {
  const [selectedBundle, setSelectedBundle] = useState(bundles[0])
  const [prompt, setPrompt] = useState(bundles[0].defaultPrompt)

  const handleBundleChange = (bundleId: string) => {
    const bundle = bundles.find(b => b.id === bundleId)
    if (bundle) {
      setSelectedBundle(bundle)
      setPrompt(bundle.defaultPrompt)
    }
  }

  return (
    <div className="pt-16 min-h-screen bg-canvas">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-display text-ink">Playground</h1>
          <p className="mt-4 text-body-lg text-ink-slate max-w-2xl">
            Explore bundles that do real work. See the configuration. 
            Understand how each one is built.
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Controls */}
          <div className="space-y-8">
            {/* Bundle selector */}
            <div>
              <label className="block text-micro font-medium text-ink-fog uppercase tracking-wider mb-4">
                Select bundle
              </label>
              <div className="grid grid-cols-2 gap-3">
                {bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => handleBundleChange(bundle.id)}
                    className={`p-4 text-left rounded-soft transition-all duration-300 ${
                      selectedBundle.id === bundle.id
                        ? 'bg-ember-soft border-2 border-ember'
                        : 'bg-canvas-stone border-2 border-transparent hover:border-canvas-mist'
                    }`}
                  >
                    <span className={`block font-medium text-sm ${
                      selectedBundle.id === bundle.id ? 'text-ember' : 'text-ink'
                    }`}>
                      {bundle.name}
                    </span>
                    <span className="block text-micro text-ink-fog mt-1">
                      {bundle.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Prompt input */}
            <div>
              <label className="block text-micro font-medium text-ink-fog uppercase tracking-wider mb-4">
                Your prompt
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                rows={4}
                className="w-full px-5 py-4 bg-canvas border-2 border-canvas-mist rounded-soft 
                           focus:outline-none focus:border-ember transition-colors duration-300
                           text-ink placeholder:text-ink-fog resize-none"
                placeholder="What do you want to do?"
              />
            </div>

            {/* Run button */}
            <div className="flex items-center gap-6">
              <button
                className="btn-primary"
                onClick={() => alert('In production, this connects to Amplifier')}
              >
                Run with Amplifier
              </button>
              <span className="text-micro text-ink-fog">
                Requires CLI or Forge
              </span>
            </div>

            {/* Note */}
            <div className="p-6 bg-canvas-stone rounded-soft border border-canvas-mist">
              <p className="text-sm text-ink-slate">
                <strong className="text-ink">Note:</strong> This playground shows bundle 
                structure and configuration. For full execution, install Amplifier locally 
                or use Forge.
              </p>
              <Link
                href="/build"
                className="mt-4 inline-flex text-ember text-sm font-medium link-underline"
              >
                Get started
              </Link>
            </div>
          </div>

          {/* Right: YAML view */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="text-micro font-medium text-ink-fog uppercase tracking-wider">
                Bundle configuration
              </label>
              <span className="text-micro text-ink-fog font-mono">
                {selectedBundle.id}.md
              </span>
            </div>
            <div className="bg-depth-charcoal rounded-soft overflow-hidden shadow-elevate">
              <div className="px-5 py-3 bg-depth-obsidian border-b border-depth-iron flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-depth-iron" />
                <div className="w-3 h-3 rounded-full bg-depth-iron" />
                <div className="w-3 h-3 rounded-full bg-depth-iron" />
              </div>
              <pre className="p-6 text-sm text-[#E8E8E6] font-mono overflow-x-auto leading-relaxed">
                <code>{bundleYaml[selectedBundle.id]}</code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-ink-slate">
              Bundles are YAML + markdown. Combine providers, tools, and behaviors 
              into reusable capabilities you can customize.
            </p>
          </div>
        </div>

        {/* What you're seeing */}
        <section className="mt-24 pt-16 border-t border-canvas-mist">
          <h2 className="text-title text-ink mb-12">What you're seeing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-heading text-ink">Bundle selection</h3>
              <p className="mt-3 text-ink-slate">
                Each bundle is a complete capability. Switch between them to see 
                different configurations and use cases.
              </p>
            </div>
            <div>
              <h3 className="text-heading text-ink">Transparent configuration</h3>
              <p className="mt-3 text-ink-slate">
                The YAML shows exactly what the bundle includes. No black box. 
                You can read, modify, and create your own.
              </p>
            </div>
            <div>
              <h3 className="text-heading text-ink">Real work</h3>
              <p className="mt-3 text-ink-slate">
                These bundles do actual work—create documentation, review code, 
                build presentations. Not toy demos.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
