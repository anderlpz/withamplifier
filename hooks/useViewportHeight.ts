'use client'

import { useEffect } from 'react'

/**
 * Sets a CSS custom property --vh for accurate viewport height on mobile.
 * Mobile browsers have dynamic toolbars that change 100vh meaning.
 * This hook sets --vh to 1% of the actual viewport height.
 * 
 * Usage in CSS:
 * min-height: calc(var(--vh, 1vh) * 100);
 */
export function useViewportHeight() {
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    
    setVH()
    
    // Update on resize and orientation change
    window.addEventListener('resize', setVH)
    window.addEventListener('orientationchange', setVH)
    
    return () => {
      window.removeEventListener('resize', setVH)
      window.removeEventListener('orientationchange', setVH)
    }
  }, [])
}

export default useViewportHeight
