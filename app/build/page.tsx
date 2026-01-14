import Link from 'next/link'
import RevealOnScroll, { RevealStagger } from '@/components/RevealOnScroll'

export default function BuildPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section gradient-radial">
        <div className="container-content">
          <RevealOnScroll>
            <h1 className="text-display text-ink max-w-3xl">
              Start building
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <p className="mt-6 text-body-lg text-ink-slate max-w-2xl">
              Two ways to work with Amplifier. Same capabilities, different interfaces. 
              Choose what fits your workflow.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Two paths */}
      <section className="section border-t border-canvas-mist">
        <div className="container-content">
          <RevealStagger className="grid md:grid-cols-2 gap-8">
            {/* Forge */}
            <div className="card">
              <span className="text-micro font-medium text-ember uppercase tracking-wider">
                Visual Interface
              </span>
              <h2 className="mt-4 text-title text-ink">Forge</h2>
              <p className="mt-4 text-ink-slate leading-relaxed">
                The visual interface for Amplifier. Workspace management, guided learning, 
                community browser—all in a desktop application.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Visual workspace management</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">AI-guided learning paths</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Community bundle browser</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ember mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Session history and management</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-canvas-mist">
                <Link href="#" className="btn-primary">
                  Download Forge
                </Link>
                <p className="mt-3 text-micro text-ink-fog">
                  Available for macOS, Windows, and Linux
                </p>
              </div>
            </div>

            {/* CLI */}
            <div className="card">
              <span className="text-micro font-medium text-ink-fog uppercase tracking-wider">
                Terminal Interface
              </span>
              <h2 className="mt-4 text-title text-ink">CLI</h2>
              <p className="mt-4 text-ink-slate leading-relaxed">
                The terminal interface. Fast, scriptable, powerful. Full Amplifier 
                capabilities from your command line.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink-fog mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Full Amplifier capabilities</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink-fog mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Scriptable and automatable</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink-fog mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Direct filesystem access</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-ink-fog mt-2.5 flex-shrink-0" />
                  <span className="text-ink-slate">Recipe execution</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-canvas-mist">
                <code className="code-block block">
                  pip install amplifier
                </code>
                <p className="mt-3 text-micro text-ink-fog">
                  Requires Python 3.10+
                </p>
              </div>
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* Quick start */}
      <section className="section bg-canvas-stone">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Quick start</h2>
            <p className="mt-4 text-ink-slate">
              Get running in minutes with the CLI.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="mt-12 space-y-6">
              <div className="bg-canvas p-6 rounded-gentle border border-canvas-mist">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ember text-white text-sm font-medium flex items-center justify-center">
                    1
                  </span>
                  <span className="text-subheading text-ink">Install</span>
                </div>
                <code className="code-block block">pip install amplifier</code>
              </div>

              <div className="bg-canvas p-6 rounded-gentle border border-canvas-mist">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ember text-white text-sm font-medium flex items-center justify-center">
                    2
                  </span>
                  <span className="text-subheading text-ink">Configure provider</span>
                </div>
                <code className="code-block block">amplifier provider add anthropic</code>
              </div>

              <div className="bg-canvas p-6 rounded-gentle border border-canvas-mist">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-8 h-8 rounded-full bg-ember text-white text-sm font-medium flex items-center justify-center">
                    3
                  </span>
                  <span className="text-subheading text-ink">Run</span>
                </div>
                <code className="code-block block">amplifier run "Hello, what can you help me with?"</code>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Documentation */}
      <section className="section">
        <div className="container-content text-center">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Go deeper</h2>
            <p className="mt-4 text-ink-slate max-w-xl mx-auto">
              Full documentation, API reference, and examples on GitHub.
            </p>
            <Link
              href="https://github.com/microsoft/amplifier"
              className="mt-8 btn-secondary inline-flex"
            >
              View documentation
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
