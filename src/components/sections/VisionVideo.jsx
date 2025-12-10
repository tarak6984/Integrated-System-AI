import { motion } from 'framer-motion'
import { Play, Sparkles } from 'lucide-react'

const VisionVideo = () => {
  const videos = [
    {
      id: 1,
      title: 'Neural Starlink Vision',
      description: 'Witness how our Neural AI Systems connect and empower industries worldwide through intelligent automation and data-driven insights',
      videoId: '1144819961',
      highlights: ['Neural Networks', 'Global Integration', 'Data Intelligence'],
      gradient: 'from-primary-500 via-accent-500 to-primary-500'
    },
    {
      id: 2,
      title: 'AI As Teammate',
      description: 'Discover how AI becomes your collaborative partner, augmenting human capabilities and transforming the way teams work together',
      videoId: '1145146496',
      highlights: ['Human-AI Collaboration', 'Team Augmentation', 'Workflow Enhancement'],
      gradient: 'from-accent-500 via-primary-500 to-accent-500'
    }
  ]

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

        {/* Videos Grid - Side by Side on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.2) }}
              className="relative group"
            >
              {/* Glowing Border Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${video.gradient} rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Video Card */}
              <div className="relative glassmorphism rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Title Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-primary-500/30">
                  <Play className="w-4 h-4 text-primary-400" />
                  <span className="text-white font-semibold text-sm">{video.title}</span>
                </div>

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

                {/* Video Description */}
                <div className="p-6 bg-gradient-to-r from-dark-900/95 to-dark-800/95 backdrop-blur-sm border-t border-primary-500/20">
                  <p className="text-white text-sm md:text-base leading-relaxed mb-4">
                    {video.description}
                  </p>
                  
                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {video.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium border border-primary-500/30"
                      >
                        <Sparkles className="w-3 h-3" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
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
