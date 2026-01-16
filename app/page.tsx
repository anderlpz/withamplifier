import Link from 'next/link'
import RevealOnScroll, { RevealStagger } from '@/components/RevealOnScroll'

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero - Lead with substance */}
      <section className="relative section-lg gradient-radial">
        <div className="container-content text-center">
          <RevealOnScroll>
            <h1 className="text-hero md:text-hero-lg text-ink max-w-4xl mx-auto">
              AI that's yours for the making.
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <p className="mt-8 text-body-lg text-ink-slate max-w-2xl mx-auto leading-relaxed">
              A modular AI agent framework. Combine providers, tools, and behaviors 
              into bundles that do real work—then share them back.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <code className="code-block px-6 py-3 text-base">
                pip install amplifier
              </code>
              <Link href="/start" className="btn-secondary">
                How it works
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* How it works - Visual explanation */}
      <section className="section border-t border-canvas-mist">
        <div className="container-content">
          <RevealOnScroll>
            <h2 className="text-title text-ink text-center">Modular by design</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="mt-12 max-w-4xl mx-auto">
              {/* Visual diagram placeholder - will be replaced with actual diagram */}
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <div className="text-2xl mb-3">⚡</div>
                  <h3 className="text-heading text-ink">Providers</h3>
                  <p className="mt-2 text-ink-slate text-sm">
                    Claude, GPT-4, Ollama. Swap without rewriting.
                  </p>
                </div>
                
                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <div className="text-2xl mb-3">🔧</div>
                  <h3 className="text-heading text-ink">Tools</h3>
                  <p className="mt-2 text-ink-slate text-sm">
                    Filesystem, web search, bash, code analysis.
                  </p>
                </div>
                
                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <div className="text-2xl mb-3">🎯</div>
                  <h3 className="text-heading text-ink">Behaviors</h3>
                  <p className="mt-2 text-ink-slate text-sm">
                    Technical writing, code review, security focus.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <svg className="w-8 h-8 text-ink-fog" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </div>
              
              <div className="mt-8 p-8 bg-signal-soft border-2 border-signal rounded-gentle text-center">
                <h3 className="text-heading text-signal">Bundle</h3>
                <p className="mt-2 text-ink-slate">
                  A complete capability. Use it, customize it, share it back.
                </p>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <p className="mt-12 text-center text-ink-slate max-w-2xl mx-auto">
              Change providers without rewriting. Add tools without permission. 
              Your bundle, your rules.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Example bundles */}
      <section className="section bg-canvas-stone">
        <div className="container-content">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Start with these</h2>
            <p className="mt-4 text-ink-slate max-w-2xl">
              Real bundles that do real work. Try them, see how they're built, make them yours.
            </p>
          </RevealOnScroll>

          <RevealStagger className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-canvas p-8 rounded-gentle border border-canvas-mist">
              <h3 className="text-heading text-ink">Documentation</h3>
              <p className="mt-3 text-ink-slate text-sm leading-relaxed">
                Reads your code, writes your docs. READMEs, API references, 
                architecture guides.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">filesystem</span>
                <span className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">web-search</span>
              </div>
              <Link href="/explore" className="mt-6 inline-block text-signal text-sm font-medium link-underline">
                Try it →
              </Link>
            </div>

            <div className="bg-canvas p-8 rounded-gentle border border-canvas-mist">
              <h3 className="text-heading text-ink">Code Reviewer</h3>
              <p className="mt-3 text-ink-slate text-sm leading-relaxed">
                Security vulnerabilities, SOLID violations, best practice 
                checks. Catches what you miss.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">ast-analysis</span>
                <span className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">grep</span>
              </div>
              <Link href="/explore" className="mt-6 inline-block text-signal text-sm font-medium link-underline">
                Try it →
              </Link>
            </div>

            <div className="bg-canvas p-8 rounded-gentle border border-canvas-mist">
              <h3 className="text-heading text-ink">Developer</h3>
              <p className="mt-3 text-ink-slate text-sm leading-relaxed">
                Write, test, debug. Full-stack development with filesystem 
                access and command execution.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">bash</span>
                <span className="px-2 py-1 bg-canvas-stone text-ink-fog text-micro rounded">filesystem</span>
              </div>
              <Link href="/explore" className="mt-6 inline-block text-signal text-sm font-medium link-underline">
                Try it →
              </Link>
            </div>
          </RevealStagger>

          <RevealOnScroll delay={300}>
            <div className="mt-12 text-center">
              <Link href="/explore" className="btn-primary">
                Explore all bundles
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Quick start */}
      <section className="section">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Get running in 60 seconds</h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="mt-10 space-y-4">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ink text-canvas text-sm font-medium flex items-center justify-center">1</span>
                <div className="flex-1">
                  <code className="code-block block w-full">pip install amplifier</code>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ink text-canvas text-sm font-medium flex items-center justify-center">2</span>
                <div className="flex-1">
                  <code className="code-block block w-full">amplifier provider add anthropic</code>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ink text-canvas text-sm font-medium flex items-center justify-center">3</span>
                <div className="flex-1">
                  <code className="code-block block w-full">amplifier run "Document this codebase"</code>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/build" className="btn-primary">
                Full install guide
              </Link>
              <Link 
                href="https://github.com/microsoft/amplifier" 
                className="btn-secondary"
              >
                Documentation
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* The ecosystem */}
      <section className="section border-t border-canvas-mist bg-canvas-stone">
        <div className="container-content text-center">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Built by many, better for everyone</h2>
            <p className="mt-4 text-ink-slate max-w-2xl mx-auto">
              People build bundles for their own needs, then share them back. 
              The more perspectives, the more powerful the ecosystem.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <div className="mt-12">
              <Link href="/explore" className="link-signal link-underline text-lg">
                See what the community is building →
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  )
}
