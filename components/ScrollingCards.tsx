'use client'

import { useEffect, useRef } from 'react'

interface Card {
  name: string
  desc: string
  author?: string
}

interface ScrollingCardsProps {
  cards: Card[]
  speed?: number // pixels per second
}

export default function ScrollingCards({ cards, speed = 30 }: ScrollingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const container = containerRef.current
    const scroller = scrollerRef.current
    if (!container || !scroller) return
    
    // Duplicate cards for seamless loop
    const scrollerContent = Array.from(scroller.children)
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement
      duplicatedItem.setAttribute('aria-hidden', 'true')
      scroller.appendChild(duplicatedItem)
    })
    
    // Calculate animation duration based on content width and speed
    const scrollerWidth = scroller.scrollWidth / 2 // Divided by 2 because we duplicated
    const duration = scrollerWidth / speed
    
    scroller.style.setProperty('--scroll-duration', `${duration}s`)
    
    // Start animation
    scroller.classList.add('animate-scroll')
    
    // Pause on hover
    const handleMouseEnter = () => scroller.style.animationPlayState = 'paused'
    const handleMouseLeave = () => scroller.style.animationPlayState = 'running'
    
    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cards, speed])
  
  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden"
      style={{ 
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div 
        ref={scrollerRef}
        className="flex gap-3 lg:gap-4 will-change-transform"
      >
        {cards.map((card, i) => (
          <div
            key={`${card.name}-${i}`}
            className="flex-shrink-0 w-64 p-4 lg:p-5 rounded-xl bg-canvas border border-canvas-mist shadow-soft-sm hover:shadow-soft hover:border-signal-glow transition-all duration-300"
          >
            <div className="font-mono text-sm text-ink font-medium truncate">
              {card.name}
            </div>
            <div className="text-xs text-ink-fog mt-1">{card.desc}</div>
            {card.author && (
              <div className="text-xs text-ink-subtle mt-2 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                {card.author}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .animate-scroll {
          animation: scroll var(--scroll-duration, 40s) linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}
