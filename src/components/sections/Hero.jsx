import { motion } from 'framer-motion'
import { ArrowRight, Network, Cpu, Satellite, Sparkles, Brain, Zap } from 'lucide-react'
import { useState } from 'react'
import Button from '../ui/Button'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const floatingIcons = [
    { Icon: Brain, delay: 0, position: 'top-20 left-10', color: 'text-accent-400', rotation: 15 },
    { Icon: Satellite, delay: 0.2, position: 'top-40 right-20', color: 'text-primary-400', rotation: -20 },
    { Icon: Network, delay: 0.4, position: 'bottom-32 left-20', color: 'text-primary-300', rotation: 10 },
    { Icon: Cpu, delay: 0.6, position: 'bottom-40 right-32', color: 'text-accent-300', rotation: -15 },
    { Icon: Sparkles, delay: 0.8, position: 'top-1/3 left-1/4', color: 'text-primary-300', rotation: 25 },
    { Icon: Zap, delay: 1, position: 'bottom-1/3 right-1/4', color: 'text-accent-400', rotation: -10 },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Space background is now global - no local canvas needed */}

      {/* Neural-Starlink Vision Video - OPTIMIZED FOR FAST LOADING */}
      <div className="absolute inset-0 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-50' : 'opacity-0'
          }`}
          style={{ 
            filter: 'blur(0px)',
            imageRendering: 'high-quality',
            WebkitTransform: 'translateZ(0)',
            transform: 'translateZ(0)',
            willChange: 'auto'
          }}
          disablePictureInPicture
          disableRemotePlayback
          webkit-playsinline="true"
        >
          {/* Cloudinary CDN - Optimized with reduced bitrate for faster initial load */}
          <source src="https://res.cloudinary.com/di5dut3x2/video/upload/q_auto:low,f_auto,w_1920,br_1000k,vc_h264/neural-starlink-vision_ifjl2k.mp4" type="video/mp4" />
        </video>
        
        {/* Lighter Gradient Overlays - More Video Visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-transparent to-accent-500/5"></div>
      </div>

      {/* Floating Neural Network Icons */}
      <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
        {floatingIcons.map(({ Icon, delay, position, color, rotation }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} ${color} opacity-20`}
            initial={{ y: 0, opacity: 0.1, rotate: 0 }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.1, 0.3, 0.1],
              rotate: [rotation, rotation + 10, rotation]
            }}
            transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.2, opacity: 0.5 }}
          >
            <Icon size={48} strokeWidth={1.5} className="drop-shadow-[0_0_15px_currentColor]" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 container-custom text-center px-4 pt-20 md:pt-24" style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="space-y-4"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Main Heading - CRISP & CLEAR */}
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="block mb-4">
              <motion.span 
                className="text-white block" 
                style={{ 
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
                  fontWeight: '900',
                  letterSpacing: '-0.02em'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5,
                  ease: "easeInOut"
                }}
              >
                Integrating Industries
              </motion.span>
            </div>
            
            <div className="block">
              <motion.span 
                className="text-gradient-cyber font-black block"
                style={{ 
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
                  letterSpacing: '-0.02em'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: [0, 1, 1],
                  y: [20, 0, 0]
                }}
                transition={{ 
                  duration: 2,
                  delay: 1.5,
                  ease: "easeInOut"
                }}
              >
                With the Power of AI
              </motion.span>
            </div>
          </motion.h1>

          {/* Subtitle - CLEAR & BOLD */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              textShadow: '0 3px 15px rgba(0, 0, 0, 0.9)'
            }}
          >
            Harnessing <span className="text-primary-300 font-black">Artificial Intelligence</span> to Drive Efficiency, 
            Empower <span className="text-accent-300 font-black">Human Capabilities</span>, and Accelerate Innovation
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-6 justify-center items-center pt-6 pb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('services')}
                className="group glassmorphism glow-cyan hover:glow-purple transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Explore Solutions
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="glassmorphism-purple border-2 border-accent-500/50 text-white hover:bg-accent-500/20 transition-all duration-300 group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles size={20} className="animate-pulse group-hover:animate-spin" />
                  Get Started
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-500 to-accent-700 opacity-0 group-hover:opacity-20 transition-opacity"
                  initial={false}
                />
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      {/* Curved Wave Bottom - Positioned After Buttons */}
      <div className="absolute bottom-0 left-0 right-0 z-40 pointer-events-none">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64 C240,96 480,112 720,96 C960,80 1200,32 1440,48 L1440,120 L0,120 Z" 
            fill="#000000"
          />
        </svg>
      </div>
    </section>

    {/* Stats Cards OUTSIDE Hero - Below the Curve */}
    <section className="relative -mt-20 pt-24 pb-16" style={{ background: 'transparent' }}>
      <div className="container-custom px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
            {[
              { 
                icon: Brain, 
                label: 'AI Solutions', 
                value: '100+',
                color: 'cyan',
                description: 'Deployed Worldwide'
              },
              { 
                icon: Network, 
                label: 'Global Reach', 
                value: '50+',
                color: 'purple',
                description: 'Countries Served'
              },
              { 
                icon: Zap, 
                label: 'Human-Centric', 
                value: '100%',
                color: 'cyan',
                description: 'AI Augmentation'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glassmorphism rounded-2xl p-6 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  boxShadow: stat.color === 'cyan' 
                    ? '0 0 30px rgba(0, 191, 255, 0.4)' 
                    : '0 0 30px rgba(168, 102, 255, 0.4)'
                }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className={`p-2.5 rounded-full ${
                    stat.color === 'cyan' 
                      ? 'bg-primary-500/20 text-primary-400' 
                      : 'bg-accent-500/20 text-accent-400'
                  }`}>
                    <stat.icon size={28} strokeWidth={1.5} className="animate-neural-pulse" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-gradient-cyber drop-shadow-lg" style={{
                  textShadow: stat.color === 'cyan' 
                    ? '0 0 30px rgba(0, 191, 255, 0.8)' 
                    : '0 0 30px rgba(168, 102, 255, 0.8)'
                }}>
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-white mb-1.5 drop-shadow-lg" style={{
                  textShadow: '0 2px 8px rgba(0, 0, 0, 1)'
                }}>
                  {stat.label}
                </div>
                <div className="text-sm text-gray-100 font-medium drop-shadow-md" style={{
                  textShadow: '0 2px 6px rgba(0, 0, 0, 0.9)'
                }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex items-start justify-center p-2 glow-cyan bg-black/40 backdrop-blur-sm">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-1.5 h-1.5 bg-primary-400 rounded-full shadow-[0_0_10px_rgba(0,191,255,0.8)]"
                />
              </div>
              <span className="text-xs text-gray-300 uppercase tracking-wider font-medium">Scroll</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero
