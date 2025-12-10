import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const VisionVideo = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const videos = [
    {
      id: 1,
      title: 'Neural Starlink Vision',
      description: 'Connecting industries worldwide through intelligent automation',
      videoId: '1144819961',
      gradient: 'from-primary-500 via-accent-500 to-primary-500'
    },
    {
      id: 2,
      title: 'AI As Teammate',
      description: 'Augmenting human capabilities through collaborative AI',
      videoId: '1145146496',
      gradient: 'from-accent-500 via-primary-500 to-accent-500'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/20 to-transparent pointer-events-none" />

      <div className="container-custom px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient-cyber">Our Vision in Action</span>
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

        {/* Video Carousel - Peek Style */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glassmorphism border border-primary-500/30 flex items-center justify-center text-white hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glassmorphism border border-primary-500/30 flex items-center justify-center text-white hover:bg-primary-500/20 transition-all duration-300 hover:scale-110"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container with Peek Effect */}
          <div className="relative overflow-visible px-12">
            <div className="flex items-center justify-center gap-6">
              {videos.map((video, index) => {
                const isCurrent = index === currentSlide
                const isNext = index === (currentSlide + 1) % videos.length
                const isPrev = index === (currentSlide - 1 + videos.length) % videos.length

                // Only show current and adjacent videos
                if (!isCurrent && !isNext && !isPrev) return null

                return (
                  <motion.div
                    key={video.id}
                    initial={false}
                    animate={{
                      scale: isCurrent ? 1 : 0.75,
                      opacity: isCurrent ? 1 : 0.4,
                      x: isCurrent ? 0 : isNext ? '85%' : '-85%',
                      zIndex: isCurrent ? 10 : 1
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1]
                    }}
                    className={`${isCurrent ? 'relative w-full max-w-4xl' : 'absolute w-full max-w-4xl'}`}
                    style={{
                      pointerEvents: isCurrent ? 'auto' : 'none'
                    }}
                  >
                    {/* Glowing Border Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${video.gradient} rounded-2xl ${isCurrent ? 'opacity-75 blur-lg' : 'opacity-30 blur-md'} transition-opacity duration-500`} />

                    {/* Video Card */}
                    <div className="relative glassmorphism rounded-2xl overflow-hidden shadow-2xl">
                      {/* Video Title Badge */}
                      {isCurrent && (
                        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary-500/30">
                          <Play className="w-4 h-4 text-primary-400" />
                          <span className="text-white font-semibold text-sm">{video.title}</span>
                        </div>
                      )}

                      {/* Vimeo Video Embed */}
                      <div className="relative aspect-video bg-dark-900">
                        <iframe
                          src={`https://player.vimeo.com/video/${video.videoId}?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0`}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          title={video.title}
                        />
                      </div>

                      {/* Video Description - Only show on current */}
                      {isCurrent && (
                        <div className="p-6 bg-gradient-to-r from-dark-900/95 to-dark-800/95 backdrop-blur-sm border-t border-primary-500/20">
                          <p className="text-white text-xs md:text-sm leading-relaxed">
                            {video.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Circular Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentSlide
                  ? 'w-3 h-3 bg-gradient-to-r from-primary-500 to-accent-500'
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism-purple p-8 rounded-2xl border-2 border-accent-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/90 text-base md:text-lg">
              See how our AI solutions can revolutionize your operations and empower your team
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  )
}

export default VisionVideo
