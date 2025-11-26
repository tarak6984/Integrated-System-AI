import { motion } from 'framer-motion'

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  ...props 
}) => {
  const baseStyles = 'bg-white rounded-2xl shadow-lg border border-dark-100 overflow-hidden'
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
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
