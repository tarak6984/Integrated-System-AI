import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'
import { useState, useRef } from 'react'

const VisionVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent pointer-events-none" />
      
      <div className="container-custom px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="text-gradient-cyber">Our Vision</span>
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Experience the future of AI integration across global industries
            </motion.p>
          </div>

          {/* Video Container */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Video Wrapper */}
            <div className="relative glassmorphism rounded-2xl overflow-hidden shadow-2xl">
              {/* Video Element */}
              <div className="relative aspect-video bg-dark-900 cursor-pointer" onClick={handleVideoClick}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop
                  muted={isMuted}
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/neural-starlink-vision.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Overlay - Only shows when paused */}
                {!isPlaying && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-dark-900/60 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.button
                      onClick={togglePlay}
                      className="p-4 rounded-full bg-primary-500/30 border-2 border-primary-400 hover:bg-primary-500/50 transition-all duration-300 glow-cyan"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={36} className="text-primary-300 ml-1" />
                    </motion.button>
                  </motion.div>
                )}

                {/* Volume Control */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleMute()
                  }}
                  className="absolute bottom-4 right-4 p-3 rounded-full bg-dark-900/90 border border-primary-400/30 hover:bg-primary-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? (
                    <VolumeX size={20} className="text-gray-400" />
                  ) : (
                    <Volume2 size={20} className="text-primary-400" />
                  )}
                </motion.button>
              </div>

              {/* Video Caption/Description */}
              <div className="p-6 bg-gradient-to-r from-dark-900/95 to-dark-800/95 backdrop-blur-sm border-t border-primary-500/20">
                <p className="text-white text-center text-sm md:text-base">
                  Witness how our <span className="text-primary-400 font-semibold">Neural AI Systems</span> connect 
                  and empower industries worldwide through <span className="text-accent-400 font-semibold">intelligent automation</span> and 
                  <span className="text-primary-400 font-semibold"> data-driven insights</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}

export default VisionVideo
