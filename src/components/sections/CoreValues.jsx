import { motion } from 'framer-motion'
import { Users, TrendingUp, Lightbulb, BarChart3 } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const CoreValues = () => {
  const values = [
    {
      icon: Users,
      title: 'Augmenting Human Capital',
      description: 'Our AI systems work alongside your teams, enhancing rather than replacing human expertise.',
    },
    {
      icon: TrendingUp,
      title: 'Eliminating Inefficiencies',
      description: 'Automating repetitive tasks and streamlining operations across diverse industries.',
    },
    {
      icon: Lightbulb,
      title: 'Data-Driven Insights',
      description: 'Uncovering actionable intelligence that improves decision-making speed and quality.',
    },
    {
      icon: BarChart3,
      title: 'Sustainable Scaling',
      description: 'Building intelligent operations that grow sustainably with your organization.',
    },
  ]

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Our Approach"
          title="Enhancing Human Capability Through AI"
          gradient={true}
          centered={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          Our AI systems are built to work alongside your teams — automating repetitive tasks, 
          uncovering data-driven insights, and improving the speed and quality of decision-making.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
                <div className="relative glassmorphism p-6 sm:p-8 rounded-2xl border-2 border-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300 h-full">
                  <motion.div 
                    className="inline-flex p-3 rounded-xl bg-primary-500/20 text-primary-400 mb-4 border border-primary-500/30"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold font-display text-white mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Industries Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4 font-medium">Serving Key Industries:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Logistics', 'Manufacturing', 'Healthcare', 'Finance', 'Agriculture'].map((industry, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoreValues
