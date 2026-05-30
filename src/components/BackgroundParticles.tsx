import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  size: number
  vx: number
  vy: number
  opacity: number
  hue: number
  phase: number
}

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null!)
  const stateRef = useRef<{
    ctx: CanvasRenderingContext2D
    particles: Particle[]
    dark: boolean
    w: number
    h: number
    mouseX: number
    mouseY: number
    pointerActive: boolean
    reducedMotion: boolean
  } | null>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const canvasContext = ctx

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const dark = document.documentElement.classList.contains('dark')

    const observer = new MutationObserver(() => {
      if (stateRef.current) {
        stateRef.current.dark = document.documentElement.classList.contains('dark')
      }
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    function createParticles(width: number, height: number) {
      const count = Math.min(96, Math.max(42, Math.floor((width * height) / 18000)))

      return Array.from({ length: count }, () => {
        const x = Math.random() * width
        const y = Math.random() * height

        return {
          x,
          y,
          size: Math.random() * 2.4 + 0.7,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          opacity: Math.random() * 0.32 + 0.18,
          hue: Math.random(),
          phase: Math.random() * Math.PI * 2,
        }
      })
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      canvasContext.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (stateRef.current) {
        stateRef.current.w = width
        stateRef.current.h = height
        stateRef.current.particles = createParticles(width, height)
      }
    }

    const width = window.innerWidth
    const height = window.innerHeight
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvasContext.setTransform(dpr, 0, 0, dpr, 0, 0)

    const particles = createParticles(width, height)

    stateRef.current = {
      ctx: canvasContext,
      particles,
      dark,
      w: width,
      h: height,
      mouseX: width / 2,
      mouseY: height / 2,
      pointerActive: false,
      reducedMotion: motionQuery.matches,
    }

    function handlePointerMove(event: PointerEvent) {
      if (!stateRef.current) return
      stateRef.current.mouseX = event.clientX
      stateRef.current.mouseY = event.clientY
      stateRef.current.pointerActive = true
    }

    function handlePointerLeave() {
      if (stateRef.current) {
        stateRef.current.pointerActive = false
      }
    }

    function handleMotionChange() {
      if (stateRef.current) {
        stateRef.current.reducedMotion = motionQuery.matches
      }
    }

    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    motionQuery.addEventListener('change', handleMotionChange)

    function animate(time = 0) {
      const s = stateRef.current
      if (!s) return

      s.ctx.clearRect(0, 0, s.w, s.h)
      const lineColor = s.dark ? '180, 210, 255' : '30, 60, 85'
      const glowA = s.dark ? '120, 170, 255' : '45, 112, 170'
      const glowB = s.dark ? '215, 235, 255' : '12, 28, 42'
      const speed = s.reducedMotion ? 0.08 : 1

      const halo = s.ctx.createRadialGradient(
        s.w * 0.52,
        s.h * 0.42,
        0,
        s.w * 0.52,
        s.h * 0.42,
        Math.max(s.w, s.h) * 0.72
      )
      halo.addColorStop(0, s.dark ? 'rgba(120,170,255,0.08)' : 'rgba(64,130,175,0.06)')
      halo.addColorStop(0.58, 'rgba(255,255,255,0)')
      s.ctx.fillStyle = halo
      s.ctx.fillRect(0, 0, s.w, s.h)

      for (let i = 0; i < s.particles.length; i += 1) {
        const p = s.particles[i]
        const drift = Math.sin(time * 0.00035 + p.phase) * 0.14 * speed

        if (!s.reducedMotion) {
          p.x += (p.vx + drift) * speed
          p.y += (p.vy + Math.cos(time * 0.00028 + p.phase) * 0.1) * speed

          if (s.pointerActive) {
            const dx = s.mouseX - p.x
            const dy = s.mouseY - p.y
            const distance = Math.hypot(dx, dy)
            if (distance < 170 && distance > 0) {
              const pull = (1 - distance / 170) * 0.018
              p.x += dx * pull
              p.y += dy * pull
            }
          }
        }

        if (p.x < -24) p.x = s.w + 24
        if (p.x > s.w + 24) p.x = -24
        if (p.y < -24) p.y = s.h + 24
        if (p.y > s.h + 24) p.y = -24

        s.ctx.beginPath()
        s.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        s.ctx.fillStyle = `rgba(${p.hue > 0.55 ? glowA : glowB},${p.opacity})`
        s.ctx.shadowBlur = s.dark ? 18 : 12
        s.ctx.shadowColor = `rgba(${glowA},0.35)`
        s.ctx.fill()
        s.ctx.shadowBlur = 0
      }

      for (let i = 0; i < s.particles.length; i += 1) {
        for (let j = i + 1; j < s.particles.length; j += 1) {
          const a = s.particles[i]
          const b = s.particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const distance = Math.hypot(dx, dy)

          if (distance < 122) {
            const alpha = (1 - distance / 122) * (s.dark ? 0.16 : 0.11)
            s.ctx.beginPath()
            s.ctx.moveTo(a.x, a.y)
            s.ctx.lineTo(b.x, b.y)
            s.ctx.strokeStyle = `rgba(${lineColor},${alpha})`
            s.ctx.lineWidth = 0.75
            s.ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      motionQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
