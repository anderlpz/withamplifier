'use client'

import { useState } from 'react'
import RevealOnScroll from '@/components/RevealOnScroll'

// Status indicators
const StatusBadge = ({ status }: { status: 'solid' | 'evolving' | 'temporary' }) => {
  const colors = {
    solid: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    evolving: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    temporary: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  }
  const labels = {
    solid: '● Solid',
    evolving: '◐ Evolving',
    temporary: '○ Temporary',
  }
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded border ${colors[status]}`}>
      {labels[status]}
    </span>
  )
}

export default function ContentDraftsPage() {
  const [activeSection, setActiveSection] = useState<'status' | 'messaging' | 'loop'>('status')

  return (
    <div className="pt-16 min-h-screen bg-canvas">
      {/* Navigation */}
      <nav className="sticky top-16 bg-canvas/80 backdrop-blur-md z-40 border-b border-canvas-mist">
        <div className="container-wide py-3">
          <div className="flex gap-2">
            {(['status', 'messaging', 'loop'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSection === section
                    ? 'bg-signal text-white'
                    : 'bg-canvas-stone text-ink-slate hover:bg-canvas-mist'
                }`}
              >
                {section === 'status' && 'Status Section'}
                {section === 'messaging' && 'Cross-Site Messaging'}
                {section === 'loop' && 'Loop Explainer Concept'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Status Section Draft */}
      {activeSection === 'status' && (
        <section className="section">
          <div className="container-reading">
            <RevealOnScroll>
              <p className="text-sm text-signal font-medium uppercase tracking-wider mb-4">
                Draft: Support Page Addition
              </p>
              <h1 className="text-display text-ink mb-8">Status: What to Expect</h1>
              
              <p className="text-body-lg text-ink-slate mb-12">
                Amplifier is actively developed. Some parts are stable foundations you can build on. 
                Others are evolving and will improve. A few are temporary scaffolding that will be replaced.
              </p>
            </RevealOnScroll>

            {/* Solid */}
            <RevealOnScroll delay={100}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <StatusBadge status="solid" />
                  <h2 className="text-title text-ink">Build on these</h2>
                </div>
                <p className="text-ink-slate mb-6">
                  Stable foundations. We won't break them without significant notice and migration paths.
                </p>
                <div className="space-y-4">
                  {[
                    { name: 'Kernel contracts', desc: 'The interfaces between Amplifier core and modules (providers, tools, hooks) are stable. Modules built today will keep working.' },
                    { name: 'Session model', desc: 'How Amplifier manages conversations, context, and state. This is the conceptual core.' },
                    { name: 'Provider architecture', desc: 'Swap LLM backends without changing how you work. Anthropic, OpenAI, Azure, Ollama all plug in the same way.' },
                    { name: 'Tool protocol', desc: 'How tools expose capabilities to agents. The contract is fixed; the catalog keeps growing.' },
                    { name: 'Event system', desc: 'How Amplifier emits what\'s happening. Observable, hookable, stable.' },
                  ].map((item) => (
                    <div key={item.name} className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-gentle">
                      <h3 className="text-subheading text-ink mb-1">{item.name}</h3>
                      <p className="text-sm text-ink-slate">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Evolving */}
            <RevealOnScroll delay={200}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <StatusBadge status="evolving" />
                  <h2 className="text-title text-ink">Works today, improving</h2>
                </div>
                <p className="text-ink-slate mb-6">
                  These work and you can use them, but expect refinements. We're actively improving the experience.
                </p>
                <div className="space-y-4">
                  {[
                    { name: 'Bundle workflows', desc: 'Simpler paths coming. Auto-detection, cleaner syntax, less ceremony.' },
                    { name: 'CLI ergonomics', desc: 'Functional but has rough edges. Smoother workflows and better defaults ahead.' },
                    { name: 'Agent orchestration', desc: 'Works well, patterns still emerging. Moving toward more declarative, clearer delegation.' },
                    { name: 'Recipes', desc: 'Powerful but requires learning. Simpler authoring and better templates coming.' },
                    { name: 'Error messages', desc: 'Sometimes cryptic. Working toward more actionable, context-aware guidance.' },
                  ].map((item) => (
                    <div key={item.name} className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-gentle">
                      <h3 className="text-subheading text-ink mb-1">{item.name}</h3>
                      <p className="text-sm text-ink-slate">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Temporary */}
            <RevealOnScroll delay={300}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <StatusBadge status="temporary" />
                  <h2 className="text-title text-ink">Will be replaced</h2>
                </div>
                <p className="text-ink-slate mb-6">
                  These exist because we needed something working. They're not the long-term answer.
                </p>
                <div className="space-y-4">
                  {[
                    { name: 'Direct bundle manipulation', desc: 'Bundles will move "under the hood." You\'ll interact with modes, profiles, or capabilities instead of raw bundle files.' },
                    { name: 'Current CLI as primary UX', desc: 'The CLI is functional but not the long-term experience. New interfaces are in development.' },
                    { name: 'Manual provider setup', desc: 'Smarter defaults, guided setup, and better auto-detection will make this easier.' },
                  ].map((item) => (
                    <div key={item.name} className="p-4 bg-rose-500/5 border border-rose-500/20 rounded-gentle">
                      <h3 className="text-subheading text-ink mb-1">{item.name}</h3>
                      <p className="text-sm text-ink-slate">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* How to read this */}
            <RevealOnScroll delay={400}>
              <div className="p-6 bg-canvas-stone rounded-gentle">
                <h3 className="text-heading text-ink mb-4">How to read this</h3>
                <ul className="space-y-2 text-ink-slate">
                  <li><span className="text-emerald-400 font-medium">Building a module?</span> Rely on solid contracts — they're stable.</li>
                  <li><span className="text-amber-400 font-medium">Using Amplifier daily?</span> Evolving areas work fine, just expect them to get better.</li>
                  <li><span className="text-rose-400 font-medium">Frustrated by something?</span> Check if it's temporary — it might already be on the replacement list.</li>
                </ul>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Cross-Site Messaging Draft */}
      {activeSection === 'messaging' && (
        <section className="section">
          <div className="container-reading">
            <RevealOnScroll>
              <p className="text-sm text-signal font-medium uppercase tracking-wider mb-4">
                Draft: Homepage Differentiation Section
              </p>
              <h1 className="text-display text-ink mb-8">Enhanced Messaging</h1>
              
              <p className="text-body-lg text-ink-slate mb-12">
                Stronger copy that emphasizes platform value over feature lists.
              </p>
            </RevealOnScroll>

            {/* Current vs Enhanced comparison */}
            <RevealOnScroll delay={100}>
              <h2 className="text-title text-ink mb-6">Differentiation Cards</h2>
              
              <div className="space-y-8 mb-16">
                {/* Card 1: Use any model */}
                <div className="p-6 border border-canvas-mist rounded-gentle">
                  <h3 className="text-heading text-signal mb-4">Use any model</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-ink-slate uppercase tracking-wider mb-2">Current</p>
                      <p className="text-ink-slate italic">
                        "Claude, GPT-4, Gemini, Llama, or your own. Switch with one line. No lock-in, ever."
                      </p>
                    </div>
                    <div className="bg-signal/5 p-4 rounded-gentle border border-signal/20">
                      <p className="text-xs text-signal uppercase tracking-wider mb-2">Enhanced</p>
                      <p className="text-ink">
                        "The model is a component, not a cage. Switch providers without rewriting anything. 
                        Your tools, behaviors, and workflows just work."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: See everything */}
                <div className="p-6 border border-canvas-mist rounded-gentle">
                  <h3 className="text-heading text-signal mb-4">See everything</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-ink-slate uppercase tracking-wider mb-2">Current</p>
                      <p className="text-ink-slate italic">
                        "Every prompt, every decision, every tool call. Nothing hidden. Debug in minutes, not hours."
                      </p>
                    </div>
                    <div className="bg-signal/5 p-4 rounded-gentle border border-signal/20">
                      <p className="text-xs text-signal uppercase tracking-wider mb-2">Enhanced</p>
                      <p className="text-ink">
                        "Watch it think. Every decision logged, every tool call visible. 
                        When something breaks, you know exactly where and why."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3: Own your setup */}
                <div className="p-6 border border-canvas-mist rounded-gentle">
                  <h3 className="text-heading text-signal mb-4">Own your setup</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs text-ink-slate uppercase tracking-wider mb-2">Current</p>
                      <p className="text-ink-slate italic">
                        "Take it anywhere. Modify anything. No vendor lock-in, no hidden dependencies."
                      </p>
                    </div>
                    <div className="bg-signal/5 p-4 rounded-gentle border border-signal/20">
                      <p className="text-xs text-signal uppercase tracking-wider mb-2">Enhanced</p>
                      <p className="text-ink">
                        "Your agent is a file you can read, version, and share. 
                        Not a subscription. Not a black box. Yours."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* New FAQ Items */}
            <RevealOnScroll delay={200}>
              <h2 className="text-title text-ink mb-6">New FAQ Items</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <h3 className="text-heading text-ink mb-3">
                    How is Amplifier different from other AI coding tools?
                  </h3>
                  <p className="text-ink-slate">
                    Most AI tools give you an assistant. Amplifier gives you a platform for building AI-powered workflows. 
                    The difference: you can see how it thinks, swap any component, and compose capabilities like building blocks. 
                    Your setup is a file you own, not a service you rent.
                  </p>
                </div>

                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <h3 className="text-heading text-ink mb-3">
                    Can I build applications with Amplifier?
                  </h3>
                  <p className="text-ink-slate">
                    Yes. Amplifier is designed as a platform, not just a tool. Use recipes to define multi-step workflows. 
                    Compose bundles to package capabilities for specific domains. Deploy agents that handle complex tasks autonomously. 
                    The same primitives you use interactively power full applications.
                  </p>
                </div>

                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <h3 className="text-heading text-ink mb-3">
                    What's the agent loop?
                  </h3>
                  <p className="text-ink-slate">
                    When you give Amplifier a task, it runs a loop: Think (understand what to do) → Act (use tools) → Observe (see results) → Repeat until done. 
                    This loop is visible — you can watch each step, set limits on how many cycles it runs, and intervene when needed. 
                    Understanding the loop helps you work with Amplifier effectively.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Enhanced What makes different */}
            <RevealOnScroll delay={300}>
              <h2 className="text-title text-ink mt-16 mb-6">Enhanced "What makes Amplifier different?"</h2>
              
              <div className="p-6 bg-canvas-stone rounded-gentle">
                <p className="text-ink-slate mb-4">
                  <span className="text-ink font-medium">Current:</span> "Three things. First, it works with any model. Claude, GPT-4, Gemini, Llama, or your own. Switch with one line. Second, you see everything..."
                </p>
                <div className="border-t border-canvas-mist pt-4">
                  <p className="text-ink">
                    <span className="text-signal font-medium">Enhanced:</span> "Unlike tools that give you an AI assistant, Amplifier gives you a platform for building AI-powered tools and workflows. 
                    Three things make this real: First, the model is a component — swap providers without rewriting anything. 
                    Second, you can watch it think — every decision logged, every tool call visible, debug in minutes not hours. 
                    Third, your setup is yours — a file you can read, version, share, and modify. Not a subscription. Not a black box. A platform you own."
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Loop Explainer Concept */}
      {activeSection === 'loop' && (
        <section className="section">
          <div className="container-wide">
            <RevealOnScroll>
              <p className="text-sm text-signal font-medium uppercase tracking-wider mb-4">
                Concept: Visual Storytelling Approach
              </p>
              <h1 className="text-display text-ink mb-8">The Agent Loop</h1>
              
              <p className="text-body-lg text-ink-slate mb-12 max-w-2xl">
                MakingSoftware-style technical diagram showing how Amplifier processes a task.
                This would be an animated, scroll-synced visualization.
              </p>
            </RevealOnScroll>

            {/* Static representation of the loop diagram concept */}
            <RevealOnScroll delay={100}>
              <div className="bg-ink rounded-xl p-8 md:p-12 mb-12">
                <div className="max-w-3xl mx-auto">
                  {/* You prompt */}
                  <div className="text-center mb-8">
                    <div className="inline-block bg-canvas/10 border border-canvas/20 rounded-lg px-6 py-3">
                      <p className="text-sm text-ink-slate uppercase tracking-wider mb-1">You</p>
                      <p className="text-white font-medium">"Fix the login bug"</p>
                    </div>
                    <div className="w-px h-8 bg-gradient-to-b from-canvas/30 to-signal/50 mx-auto mt-4" />
                  </div>

                  {/* The Loop */}
                  <div className="relative border-2 border-signal/30 rounded-2xl p-8 bg-signal/5">
                    <div className="absolute -top-3 left-8 bg-ink px-3 py-1 rounded text-xs text-signal font-medium uppercase tracking-wider">
                      The Loop
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Think */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-xl bg-signal/20 border border-signal/40 flex items-center justify-center mb-4">
                          <span className="text-3xl">🧠</span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">THINK</h3>
                        <p className="text-sm text-ink-slate">
                          LLM processes context, decides what to do next
                        </p>
                      </div>

                      {/* Act */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mb-4">
                          <span className="text-3xl">⚡</span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">ACT</h3>
                        <p className="text-sm text-ink-slate">
                          Tools execute: read files, run commands, search
                        </p>
                      </div>

                      {/* Observe */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mb-4">
                          <span className="text-3xl">👁</span>
                        </div>
                        <h3 className="text-white font-semibold mb-2">OBSERVE</h3>
                        <p className="text-sm text-ink-slate">
                          Results evaluated, decides if more work needed
                        </p>
                      </div>
                    </div>

                    {/* Loop arrow */}
                    <div className="mt-6 flex items-center justify-center gap-4 text-ink-slate">
                      <span className="text-sm">Done?</span>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">YES → Response</span>
                        <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full">NO → Loop back</span>
                      </div>
                    </div>
                  </div>

                  {/* Response */}
                  <div className="text-center mt-8">
                    <div className="w-px h-8 bg-gradient-to-b from-signal/50 to-emerald-500/50 mx-auto mb-4" />
                    <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-6 py-3">
                      <p className="text-sm text-emerald-400 uppercase tracking-wider mb-1">Response</p>
                      <p className="text-white font-medium">"Fixed. The session token validation was missing..."</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Animation notes */}
            <RevealOnScroll delay={200}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <h3 className="text-heading text-ink mb-4">Animation Concept</h3>
                  <ul className="space-y-2 text-ink-slate text-sm">
                    <li>• Scroll-triggered or auto-play animation</li>
                    <li>• Each phase glows as it activates (Signal → Amber → Cyan)</li>
                    <li>• Particles flow along connection paths</li>
                    <li>• Loop arrow animates when repeating</li>
                    <li>• Final "snap" when complete</li>
                  </ul>
                </div>

                <div className="p-6 bg-canvas-stone rounded-gentle">
                  <h3 className="text-heading text-ink mb-4">Implementation Options</h3>
                  <ul className="space-y-2 text-ink-slate text-sm">
                    <li>• <strong>Learn page:</strong> As an HTML deck using amplifier-stories format</li>
                    <li>• <strong>Explore page:</strong> Integrated into bundle demo simulation</li>
                    <li>• <strong>Homepage:</strong> Simplified version in "How it works" section</li>
                    <li>• <strong>All:</strong> Reduced-motion fallback to static diagram</li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            {/* When it acts vs waits */}
            <RevealOnScroll delay={300}>
              <div className="mt-12 p-6 border border-canvas-mist rounded-gentle">
                <h3 className="text-heading text-ink mb-6">When Amplifier Acts vs. Waits</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-subheading text-emerald-400 mb-3">Acts autonomously when:</h4>
                    <ul className="space-y-2 text-ink-slate text-sm">
                      <li>• It has a clear next step</li>
                      <li>• Tools are available and action is safe</li>
                      <li>• It hasn't hit the turn limit</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-subheading text-amber-400 mb-3">Waits for you when:</h4>
                    <ul className="space-y-2 text-ink-slate text-sm">
                      <li>• It needs clarification or a decision</li>
                      <li>• It's completed what it can do</li>
                      <li>• A tool requires your approval</li>
                      <li>• It reaches the turn limit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {/* Footer */}
      <section className="section bg-canvas-stone border-t border-canvas-mist">
        <div className="container-content text-center">
          <p className="text-ink-slate">
            These are draft concepts for review. Content will be integrated into respective pages after approval.
          </p>
        </div>
      </section>
    </div>
  )
}
