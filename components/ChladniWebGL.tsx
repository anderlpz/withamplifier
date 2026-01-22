'use client'

import { useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { SECTION_PATTERNS, type PatternConfig } from '@/lib/chladni'

// Import shaders as raw strings
import vertexShader from '@/shaders/chladni.vert'
import fragmentShader from '@/shaders/chladni.frag'

interface SectionConfig {
  id: string
  pattern: PatternConfig
  isDark: boolean
}

const SECTION_CONFIGS: SectionConfig[] = [
  { id: 'hero', pattern: SECTION_PATTERNS.hero, isDark: false },
  { id: 'problem', pattern: SECTION_PATTERNS.hero, isDark: true }, // Scatter effect
  { id: 'differentiation', pattern: SECTION_PATTERNS.differentiation, isDark: true },
  { id: 'platform', pattern: SECTION_PATTERNS.platform, isDark: false },
  { id: 'demo', pattern: SECTION_PATTERNS.demo, isDark: false },
  { id: 'bundles', pattern: SECTION_PATTERNS.bundles, isDark: false },
  { id: 'impact', pattern: SECTION_PATTERNS.impact, isDark: true },
  { id: 'contrast', pattern: SECTION_PATTERNS.contrast, isDark: false },
  { id: 'ecosystem', pattern: SECTION_PATTERNS.ecosystem, isDark: false },
  { id: 'cta', pattern: SECTION_PATTERNS.cta, isDark: true },
]

interface ChladniWebGLProps {
  className?: string
}

export default function ChladniWebGL({ className = '' }: ChladniWebGLProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null)
  const particlesRef = useRef<THREE.Points | null>(null)
  const materialRef = useRef<THREE.ShaderMaterial | null>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef<{ x: number; y: number } | null>(null)
  
  // Pattern state
  const currentPatternRef = useRef({ n: 1, m: 2 })
  const targetPatternRef = useRef({ n: 1, m: 2 })
  const transitionRef = useRef(0) // Start at 0 for hero entrance
  const currentColorRef = useRef('#6366F1')
  const currentOpacityRef = useRef(0.3)
  const heroEntranceRef = useRef(true) // Flag for hero entrance animation
  
  // Performance detection
  const isMobileRef = useRef(false)

  // Initialize Three.js scene
  useEffect(() => {
    if (!containerRef.current) return

    isMobileRef.current = window.innerWidth < 768
    const particleCount = isMobileRef.current ? 5000 : 10000

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup (orthographic for 2D plane)
    const aspect = window.innerWidth / window.innerHeight
    const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 10)
    camera.position.z = 1
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: false // Not needed for 1px points
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Generate particle positions and velocities
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      // Random positions in -1 to 1 range
      positions[i3] = (Math.random() - 0.5) * 2
      positions[i3 + 1] = (Math.random() - 0.5) * 2
      positions[i3 + 2] = 0
      
      // Zero initial velocity
      velocities[i3] = 0
      velocities[i3 + 1] = 0
      velocities[i3 + 2] = 0
    }

    // Create geometry
    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))

    // Create shader material
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uN1: { value: currentPatternRef.current.n },
        uM1: { value: currentPatternRef.current.m },
        uN2: { value: targetPatternRef.current.n },
        uM2: { value: targetPatternRef.current.m },
        uTransition: { value: 0 },
        uForceStrength: { value: isMobileRef.current ? 1.5 : 2.5 },
        uDamping: { value: isMobileRef.current ? 0.95 : 0.92 },
        uMouse: { value: new THREE.Vector2(-10, -10) }, // Off-screen initially
        uMouseRadius: { value: 0.12 },
        uMouseForce: { value: 0.015 },
        uChaos: { value: 0 },
        uColor: { value: new THREE.Color(currentColorRef.current) },
        uOpacity: { value: currentOpacityRef.current },
        uGlowIntensity: { value: 0.5 }
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
    materialRef.current = material

    // Create points
    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particlesRef.current = particles

    // Handle resize
    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight
      if (cameraRef.current) {
        cameraRef.current.left = -aspect
        cameraRef.current.right = aspect
        cameraRef.current.updateProjectionMatrix()
      }
      if (rendererRef.current) {
        rendererRef.current.setSize(window.innerWidth, window.innerHeight)
      }
      isMobileRef.current = window.innerWidth < 768
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      geometry.dispose()
      material.dispose()
    }
  }, [])

  // Set up section observers
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          const sectionId = entry.target.getAttribute('data-section')
          const config = SECTION_CONFIGS.find(s => s.id === sectionId)
          
          if (config && materialRef.current) {
            // Update pattern transition
            currentPatternRef.current = { ...targetPatternRef.current }
            targetPatternRef.current = config.pattern.params
            transitionRef.current = 0
            
            // Special case: problem section gets scatter effect
            if (sectionId === 'problem') {
              materialRef.current.uniforms.uForceStrength.value = 0.5 // Weak force = scatter
              materialRef.current.uniforms.uChaos.value = 0.3 // Add randomness
            } else {
              materialRef.current.uniforms.uForceStrength.value = isMobileRef.current ? 1.5 : 2.5
              materialRef.current.uniforms.uChaos.value = 0
            }
            
            // Update colors
            currentColorRef.current = config.pattern.color
            currentOpacityRef.current = config.pattern.opacity
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, {
      threshold: [0.3, 0.5, 0.7],
      rootMargin: '-10% 0px -10% 0px'
    })

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Mouse tracking (low priority, can be disabled)
  useEffect(() => {
    if (isMobileRef.current) return // Skip on mobile

    const handleMouseMove = (e: MouseEvent) => {
      if (!materialRef.current) return
      
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      
      // Convert to 0-1 normalized space
      materialRef.current.uniforms.uMouse.value.set(
        (x + 1) / 2,
        (y + 1) / 2
      )
    }

    const handleMouseLeave = () => {
      if (!materialRef.current) return
      materialRef.current.uniforms.uMouse.value.set(-10, -10)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  // Animation loop
  const animate = useCallback(() => {
    if (!sceneRef.current || !cameraRef.current || !rendererRef.current || !materialRef.current) {
      return
    }

    // Update time
    const time = performance.now() * 0.001
    materialRef.current.uniforms.uTime.value = time

    // Hero entrance: transition from 0 to 1 over 2 seconds
    if (heroEntranceRef.current) {
      transitionRef.current += 0.016 / 2 // 2 second entrance
      if (transitionRef.current >= 1) {
        transitionRef.current = 1
        heroEntranceRef.current = false
      }
    } else {
      // Regular transitions between sections
      if (transitionRef.current < 1) {
        transitionRef.current = Math.min(transitionRef.current + 0.016 * 0.7, 1)
      }
    }

    // Update uniforms
    materialRef.current.uniforms.uN1.value = currentPatternRef.current.n
    materialRef.current.uniforms.uM1.value = currentPatternRef.current.m
    materialRef.current.uniforms.uN2.value = targetPatternRef.current.n
    materialRef.current.uniforms.uM2.value = targetPatternRef.current.m
    materialRef.current.uniforms.uTransition.value = transitionRef.current
    
    // Update color and opacity smoothly
    materialRef.current.uniforms.uColor.value.lerp(
      new THREE.Color(currentColorRef.current),
      0.05
    )
    materialRef.current.uniforms.uOpacity.value += 
      (currentOpacityRef.current - materialRef.current.uniforms.uOpacity.value) * 0.05

    // Chaos during early transitions
    if (transitionRef.current < 0.3) {
      materialRef.current.uniforms.uChaos.value = 0.3 - transitionRef.current
    } else {
      materialRef.current.uniforms.uChaos.value = 0
    }

    // Render
    rendererRef.current.render(sceneRef.current, cameraRef.current)
    
    animationRef.current = requestAnimationFrame(animate)
  }, [])

  // Start animation
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [animate])

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
