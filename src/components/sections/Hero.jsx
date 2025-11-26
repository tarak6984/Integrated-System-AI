import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import Button from '../ui/Button'

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, position: 'top-20 left-10' },
    { Icon: Zap, delay: 0.2, position: 'top-40 right-20' },
    { Icon: Globe, delay: 0.4, position: 'bottom-32 left-20' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900/60 via-primary-900/50 to-dark-800/60 z-10"></div>
        {/* Fallback background while video loads */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900 to-dark-800"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-70' : 'opacity-0'
          }`}
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position} text-primary-300 opacity-20`}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 pt-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-primary-300 animate-pulse" />
            <span className="text-sm font-semibold text-white text-shadow">
              Pioneering AI Innovation
            </span>
          </motion.div>

          {/* Main Heading with Animated Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-display text-white mb-6 leading-tight text-shadow-lg"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              Integrating Industries
            </motion.span>
            {' '}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="inline-block"
            >
              with the
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
              className="inline-block bg-gradient-to-r from-cyan-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent font-extrabold"
              style={{ textShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
            >
              Power of AI
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed text-shadow"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              Harnessing Artificial Intelligence to{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="text-cyan-300 font-bold"
            >
              Drive Efficiency
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              ,{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="text-pink-300 font-bold"
            >
              Empower Workforces
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              , and{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.8 }}
              className="text-cyan-300 font-bold"
            >
              Accelerate Innovation
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.9 }}
            >
              .
            </motion.span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="lg" href="#contact" className="group shadow-lg">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="primary" size="lg" href="#services" className="group shadow-lg">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { label: 'AI Solutions', value: 'Integrated' },
              { label: 'Global Reach', value: 'Expanding' },
              { label: 'Human-Centric', value: 'Approach' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.3 + (index * 0.1) }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/15 backdrop-blur-md rounded-xl p-8 border border-white/30 shadow-2xl"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 + (index * 0.1) }}
                  className="text-4xl font-extrabold text-cyan-400 mb-3"
                >
                  {stat.value}
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.5 + (index * 0.1) }}
                  className="text-lg font-bold text-cyan-300"
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
