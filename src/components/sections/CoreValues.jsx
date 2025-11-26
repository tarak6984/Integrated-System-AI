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
    <section className="section-padding bg-white">
      <div className="container-custom">
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
          className="text-center text-xl text-dark-600 max-w-4xl mx-auto mb-16"
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="relative p-8 rounded-2xl border-2 border-dark-100 group-hover:border-primary-300 transition-all duration-300 bg-white h-full">
                  <motion.div 
                    className="inline-flex p-3 rounded-xl bg-primary-100 text-primary-600 mb-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold font-display text-dark-900 mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {value.title}
                  </motion.h3>
                  
                  <p className="text-dark-600 leading-relaxed">
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
          <p className="text-dark-600 mb-4 font-medium">Serving Key Industries:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Logistics', 'Manufacturing', 'Healthcare', 'Finance', 'Agriculture'].map((industry, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoreValues
