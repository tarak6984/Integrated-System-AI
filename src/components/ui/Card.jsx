import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseStyles = 'glassmorphism rounded-2xl shadow-xl shadow-primary-500/20 border-2 border-primary-500/30 overflow-hidden backdrop-blur-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50'
  const classes = `${baseStyles} ${className}`
  
  if (!hover) {
    return (
      <div className={classes} {...props}>
        {children}
      </div>
    )
  }
  
  return (
    <motion.div
      className={classes}
      whileHover={{ 
        y: -8,
        boxShadow: '0 0 30px rgba(0, 191, 255, 0.3), 0 20px 25px -5px rgba(0, 0, 0, 0.5)'
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
