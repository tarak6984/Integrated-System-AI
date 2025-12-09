import { useEffect, useRef } from 'react'

const PlanetarySystem = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Galaxy and planetary system
    // Move the planetary system to bottom right to avoid text collision
    const centerX = canvas.width * 0.85  // 85% to the right
    const centerY = canvas.height * 0.7   // 70% down

    // Stars for galaxy background - evenly distributed across entire screen
    const createStars = () => {
      const stars = []
      const numStars = 40  // Very minimal stars for ultra-clean look
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5,
          opacity: Math.random() * 0.7 + 0.3,  // Min 0.3 opacity
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          growing: Math.random() > 0.5
        })
      }
      return stars
    }
    
    let stars = createStars()

    // Planets orbiting Earth - Premium minimalist colors
    const planets = [
      {
        name: 'Inner',
        distance: 50,
        radius: 3,
        speed: 0.02,
        angle: 0,
        color: '#3b82f6', // Clean Blue
        glowColor: 'rgba(59, 130, 246, 0.4)',
        orbitColor: 'rgba(59, 130, 246, 0.15)'
      },
      {
        name: 'Mid-1',
        distance: 80,
        radius: 4,
        speed: 0.015,
        angle: Math.PI / 3,
        color: '#60a5fa', // Lighter Blue
        glowColor: 'rgba(96, 165, 250, 0.4)',
        orbitColor: 'rgba(96, 165, 250, 0.15)'
      },
      {
        name: 'Mid-2',
        distance: 110,
        radius: 3.5,
        speed: 0.012,
        angle: Math.PI / 2,
        color: '#93c5fd', // Soft Blue
        glowColor: 'rgba(147, 197, 253, 0.4)',
        orbitColor: 'rgba(147, 197, 253, 0.15)'
      },
      {
        name: 'Outer',
        distance: 140,
        radius: 5,
        speed: 0.008,
        angle: Math.PI,
        color: '#2563eb', // Royal Blue
        glowColor: 'rgba(37, 99, 235, 0.4)',
        orbitColor: 'rgba(37, 99, 235, 0.15)'
      }
    ]

    // Galaxy spiral - DISABLED to avoid curved lines interfering with text
    const galaxyParticles = []

    let animationFrameId

    const animate = () => {
      // Clear with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw background stars
      stars.forEach(star => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()

        // Twinkle effect
        if (star.growing) {
          star.opacity += star.twinkleSpeed
          if (star.opacity >= 1) star.growing = false
        } else {
          star.opacity -= star.twinkleSpeed
          if (star.opacity <= 0.2) star.growing = true
        }
      })

      // Galaxy spiral - DISABLED (no curved lines)

      // Draw orbit paths
      planets.forEach(planet => {
        ctx.strokeStyle = planet.orbitColor
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(centerX, centerY, planet.distance, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw Earth at center
      const earthRadius = 12
      // Earth glow - Premium blue
      const earthGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, earthRadius * 2)
      earthGradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)')
      earthGradient.addColorStop(0.5, 'rgba(37, 99, 235, 0.15)')
      earthGradient.addColorStop(1, 'rgba(37, 99, 235, 0)')
      ctx.fillStyle = earthGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, earthRadius * 2, 0, Math.PI * 2)
      ctx.fill()

      // Earth sphere - Elegant blue gradient
      const gradient = ctx.createRadialGradient(
        centerX - earthRadius * 0.3,
        centerY - earthRadius * 0.3,
        earthRadius * 0.1,
        centerX,
        centerY,
        earthRadius
      )
      gradient.addColorStop(0, '#93c5fd')
      gradient.addColorStop(0.5, '#60a5fa')
      gradient.addColorStop(1, '#3b82f6')
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, earthRadius, 0, Math.PI * 2)
      ctx.fill()

      // Earth ring effect - Subtle blue
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.25)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, earthRadius + 5, 0, Math.PI * 2)
      ctx.stroke()

      // Draw and animate planets
      planets.forEach(planet => {
        planet.angle += planet.speed

        const x = centerX + Math.cos(planet.angle) * planet.distance
        const y = centerY + Math.sin(planet.angle) * planet.distance

        // Planet glow
        const glowGradient = ctx.createRadialGradient(x, y, 0, x, y, planet.radius * 3)
        glowGradient.addColorStop(0, planet.glowColor)
        glowGradient.addColorStop(1, 'transparent')
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(x, y, planet.radius * 3, 0, Math.PI * 2)
        ctx.fill()

        // Planet body
        const planetGradient = ctx.createRadialGradient(
          x - planet.radius * 0.3,
          y - planet.radius * 0.3,
          0,
          x,
          y,
          planet.radius
        )
        planetGradient.addColorStop(0, planet.color)
        planetGradient.addColorStop(1, planet.color + '99')
        ctx.fillStyle = planetGradient
        ctx.beginPath()
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2)
        ctx.fill()

        // Connection line to Earth
        ctx.strokeStyle = `${planet.color}22`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.stroke()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recreate stars on resize to fill new canvas size
      stars = createStars()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 0, 
        background: 'radial-gradient(ellipse at center, rgba(15, 23, 42, 1) 0%, rgba(0, 0, 0, 1) 100%)',
      }}
    />
  )
}

export default PlanetarySystem
