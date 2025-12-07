import { useEffect, useRef } from 'react'

const SpaceBackground = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = document.documentElement.scrollHeight

    // Star field with network nodes
    const stars = []
    const nodeStars = []
    const numStars = 500  // Increased slightly from 400 for richer star field
    const numNodes = 30   // Increased slightly from 25 for more connections

    // Create regular twinkling stars
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        growing: Math.random() > 0.5
      })
    }

    // Create network node stars (larger, connected)
    for (let i = 0; i < numNodes; i++) {
      nodeStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 2,
        pulsePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? 'cyan' : 'purple'
      })
    }

    let animationFrameId

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connection lines between nearby node stars (neural network effect)
      for (let i = 0; i < nodeStars.length; i++) {
        for (let j = i + 1; j < nodeStars.length; j++) {
          const dx = nodeStars[i].x - nodeStars[j].x
          const dy = nodeStars[i].y - nodeStars[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 300) {
            const opacity = (1 - distance / 300) * 0.3
            ctx.strokeStyle = nodeStars[i].color === 'cyan' 
              ? `rgba(0, 191, 255, ${opacity})` 
              : `rgba(168, 102, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(nodeStars[i].x, nodeStars[i].y)
            ctx.lineTo(nodeStars[j].x, nodeStars[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw regular stars with twinkle
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

      // Draw network node stars with pulse
      nodeStars.forEach(node => {
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5
        const glowSize = node.radius + pulse * 10
        
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize)
        if (node.color === 'cyan') {
          gradient.addColorStop(0, `rgba(0, 191, 255, ${0.8 * pulse})`)
          gradient.addColorStop(0.5, `rgba(0, 191, 255, ${0.3 * pulse})`)
          gradient.addColorStop(1, 'rgba(0, 191, 255, 0)')
        } else {
          gradient.addColorStop(0, `rgba(168, 102, 255, ${0.8 * pulse})`)
          gradient.addColorStop(0.5, `rgba(168, 102, 255, ${0.3 * pulse})`)
          gradient.addColorStop(1, 'rgba(168, 102, 255, 0)')
        }
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        // Core star
        ctx.fillStyle = node.color === 'cyan' ? '#00bfff' : '#a866ff'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()

        node.pulsePhase += 0.02
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleResize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none"
      style={{ 
        zIndex: 0, 
        background: '#000000',
        minHeight: '100vh'
      }}
    />
  )
}

export default SpaceBackground
