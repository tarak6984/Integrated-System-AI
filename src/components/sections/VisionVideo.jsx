import { motion } from 'framer-motion'

const VisionVideo = () => {

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
              {/* Vimeo Video Embed */}
              <div className="relative aspect-video bg-dark-900">
                <iframe
                  src="https://player.vimeo.com/video/1144819961?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="neural-starlink-vision"
                />
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
