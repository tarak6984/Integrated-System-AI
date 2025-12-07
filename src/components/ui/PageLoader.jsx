import { motion } from 'framer-motion'
import { Loader2, Sparkles } from 'lucide-react'

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-space">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Loader content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="relative mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-24 h-24 border-4 border-primary-500/30 border-t-primary-500 rounded-full"></div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-10 h-10 text-primary-400" />
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-2xl font-bold text-gradient-cyber mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Loading
        </motion.h2>
        <p className="text-gray-400 text-sm">Initializing AI systems...</p>
      </div>
    </motion.div>
  )
}

export default PageLoader
