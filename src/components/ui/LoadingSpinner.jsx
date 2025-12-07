import { motion } from 'framer-motion'

const LoadingSpinner = ({ size = 'md', color = 'cyan' }) => {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  }

  const colors = {
    cyan: 'border-primary-500',
    purple: 'border-accent-500',
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizes[size]} rounded-full border-4 ${colors[color]} border-t-transparent`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

export default LoadingSpinner
