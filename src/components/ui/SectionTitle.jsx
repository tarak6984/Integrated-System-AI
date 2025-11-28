import { motion } from 'framer-motion'

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  gradient = false,
  className = '' 
}) => {
  const containerClasses = centered ? 'text-center' : 'text-left'
  
  // Split title into words for animation
  const words = title.split(' ')
  
  return (
    <motion.div 
      className={`mb-12 md:mb-16 ${containerClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.p 
          className="text-primary-600 font-semibold text-sm md:text-base uppercase tracking-wider mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display ${
          gradient ? 'text-gradient' : 'text-dark-900'
        }`}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            className="inline-block mr-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: 0.2 + (index * 0.1),
              type: "spring",
              stiffness: 100
            }}
          >
            {word}
          </motion.span>
        ))}
      </h2>
    </motion.div>
  )
}

export default SectionTitle
