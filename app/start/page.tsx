import Link from 'next/link'
import RevealOnScroll, { RevealStagger } from '@/components/RevealOnScroll'

export default function StartPage() {
  return (
    <div className="pt-16">
      {/* Hero - Direct into what it is */}
      <section className="section gradient-radial">
        <div className="container-reading">
          <RevealOnScroll>
            <h1 className="text-display text-ink">
              Amplifier is a modular AI agent framework.
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <p className="mt-6 text-body-lg text-ink-slate leading-relaxed">
              Built on the Linux kernel philosophy: a tiny, stable core with 
              everything else as swappable modules. Your AI, your way.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* The Problem */}
      <section className="section border-t border-canvas-mist">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">The problem with AI tools today</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="mt-8 space-y-6 text-ink-slate leading-relaxed">
              <p>
                Most AI tools are monolithic. One interface, one set of capabilities, 
                one way of working. You get what they give you.
              </p>
              <p>
                Want to use a different model? Rewrite your integrations. Want to add 
                a new capability? Wait for them to build it. Want to share what you've 
                built? Good luck.
              </p>
              <p className="text-ink font-medium">
                Amplifier is different.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-canvas-stone">
        <div className="container-content">
          <RevealOnScroll>
            <h2 className="text-title text-ink">How Amplifier works</h2>
            <p className="mt-4 text-ink-slate max-w-2xl">
              Everything is a module. Combine them into bundles. Share the bundles.
            </p>
          </RevealOnScroll>

          <RevealStagger className="mt-12 space-y-8">
            {/* Providers */}
            <div className="bg-canvas p-8 rounded-gentle border border-canvas-mist">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-signal-soft flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading text-ink">Providers</h3>
                  <p className="mt-2 text-ink-slate leading-relaxed">
                    The AI models that power your bundles. Claude, GPT-4, Azure OpenAI, 
                    local models via Ollama. Swap between them without changing your 
                    bundle's behavior. The provider is just a plug.
                  </p>
                  <code className="mt-4 code-block inline-block text-sm">
                    amplifier provider add anthropic
                  </code>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="bg-canvas p-8 rounded-gentle border border-canvas-mist">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-signal-soft flex items-center justify-center">
                  <span className="text-2xl">🔧</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading text-ink">Tools</h3>
                  <p className="mt-2 text-ink-slate leading-relaxed">
                    Capabilities the AI can use. Read files, search the web, run bash 
                    commands, analyze code structure. Each tool is independent—mix and 
                    match for your use case. Add tools without asking permission.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">filesystem</span>
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">web-search</span>
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">bash</span>
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">grep</span>
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">ast-analysis</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Behaviors */}
            <div className="bg-canvas p-8 rounded-gentle border border-canvas-mist">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-signal-soft flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading text-ink">Behaviors</h3>
                  <p className="mt-2 text-ink-slate leading-relaxed">
                    How the AI thinks and responds. Technical writing style, security-focused 
                    analysis, constructive code review. Behaviors shape the personality and 
                    approach without changing the underlying capabilities.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">technical-writing</span>
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">security-focused</span>
                    <span className="px-3 py-1 bg-canvas-stone text-ink-slate text-sm rounded">constructive-feedback</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bundles */}
            <div className="bg-signal-soft p-8 rounded-gentle border-2 border-signal">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-signal flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading text-signal">Bundles</h3>
                  <p className="mt-2 text-ink leading-relaxed">
                    Combine providers, tools, and behaviors into a complete capability. 
                    A Documentation bundle includes Claude, filesystem access, web search, 
                    and technical writing behavior. One command to use it. One file to 
                    customize it. One click to share it.
                  </p>
                  <code className="mt-4 code-block inline-block text-sm">
                    amplifier run --bundle documentation "Document this codebase"
                  </code>
                </div>
              </div>
            </div>
          </RevealStagger>
        </div>
      </section>

      {/* The key insight */}
      <section className="section">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">The key insight</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="mt-8 space-y-6 text-ink-slate leading-relaxed">
              <p>
                Bundles are just YAML and markdown. No compilation, no packaging, 
                no app store approval. You can read exactly what a bundle does, 
                change it, and share your version.
              </p>
              <p>
                This means your expertise becomes portable. The way you think about 
                code review, the patterns you look for, the structure you prefer in 
                documentation—all of it can become a bundle that others can use and 
                build on.
              </p>
              <p className="text-ink font-medium">
                Your perspective, amplified.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Agents */}
      <section className="section border-t border-canvas-mist bg-canvas-stone">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Agents: bundles with personality</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="mt-8 space-y-6 text-ink-slate leading-relaxed">
              <p>
                An agent is a bundle tuned for specific work. The Code Reviewer agent 
                knows to look for security vulnerabilities first. The Documentation 
                agent structures content the way technical writers do.
              </p>
              <p>
                Same underlying system, different expertise. You can create agents 
                that embody your own approach—your priorities, your patterns, your 
                judgment calls—and let others benefit from them.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Recipes */}
      <section className="section">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">Recipes: multi-step workflows</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="mt-8 space-y-6 text-ink-slate leading-relaxed">
              <p>
                Some work needs multiple steps. Analyze the codebase, then generate 
                documentation, then create a PR. Recipes chain agents together with 
                context flowing between them.
              </p>
              <p>
                Recipes can pause for human approval at critical points. They can 
                resume if interrupted. They're declarative—describe what you want, 
                not how to do it—and shareable like any other bundle.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={200}>
            <div className="mt-8 p-6 bg-canvas-stone rounded-gentle">
              <p className="text-micro font-medium text-ink-fog uppercase tracking-wider mb-4">
                Example recipe
              </p>
              <pre className="text-sm text-ink-slate font-mono whitespace-pre overflow-x-auto">
{`name: document-and-pr
steps:
  - agent: code-analyzer
    prompt: "Analyze the architecture"
  - agent: documentation
    prompt: "Write docs based on analysis"
    approval: required
  - agent: git-ops
    prompt: "Create PR with the docs"`}
              </pre>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section border-t border-canvas-mist bg-canvas-stone">
        <div className="container-reading">
          <RevealOnScroll>
            <h2 className="text-title text-ink">The philosophy</h2>
          </RevealOnScroll>
          
          <RevealOnScroll delay={100}>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-heading text-ink">Transparent, not magic</h3>
                <p className="mt-3 text-ink-slate leading-relaxed">
                  Every bundle shows its configuration. You see exactly what it includes, 
                  how it works, and how to change it. No black boxes. No mystery.
                </p>
              </div>

              <div>
                <h3 className="text-heading text-ink">Modular by default</h3>
                <p className="mt-3 text-ink-slate leading-relaxed">
                  Change your AI provider without rewriting your bundles. Add tools 
                  without asking permission. Remove what you don't need. Your system, 
                  your rules.
                </p>
              </div>

              <div>
                <h3 className="text-heading text-ink">Community-driven</h3>
                <p className="mt-3 text-ink-slate leading-relaxed">
                  The best bundles come from people solving real problems. Share what 
                  you build. Use what others share. The ecosystem grows because people 
                  contribute back.
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Next steps */}
      <section className="section">
        <div className="container-content">
          <RevealOnScroll>
            <h2 className="text-title text-ink text-center">Ready to try it?</h2>
          </RevealOnScroll>

          <RevealStagger className="mt-12 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/explore" className="card group">
              <h3 className="text-heading text-ink group-hover:text-signal transition-colors duration-300">
                Explore bundles
              </h3>
              <p className="mt-3 text-ink-slate">
                See what's available. Try bundles in the interactive demos. 
                Understand how they work.
              </p>
              <span className="mt-4 inline-block text-signal text-sm font-medium">
                Browse the ecosystem →
              </span>
            </Link>

            <Link href="/build" className="card group">
              <h3 className="text-heading text-ink group-hover:text-signal transition-colors duration-300">
                Install Amplifier
              </h3>
              <p className="mt-3 text-ink-slate">
                Get running in 60 seconds. pip install, add a provider, 
                run your first bundle.
              </p>
              <span className="mt-4 inline-block text-signal text-sm font-medium">
                Get started →
              </span>
            </Link>
          </RevealStagger>
        </div>
      </section>
    </div>
  )
}
