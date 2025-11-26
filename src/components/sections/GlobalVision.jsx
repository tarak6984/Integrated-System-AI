import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Target, Award } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const GlobalVision = () => {
  const regions = [
    { name: 'Bangladesh', status: 'Core Hub', icon: '🇧🇩' },
    { name: 'Southeast Asia', status: 'Expanding', icon: '🌏' },
    { name: 'Middle East', status: 'Target Market', icon: '🌍' },
    { name: 'Africa', status: 'Frontier Region', icon: '🌍' },
  ]

  const objectives = [
    {
      icon: Award,
      title: 'Strategic Investor & Incubator',
      description: 'Becoming a leading investor and incubator for AI-powered ventures in emerging markets.',
    },
    {
      icon: Target,
      title: 'Intelligent Integration Leader',
      description: 'Leading the development of intelligent integration systems for SMEs and enterprises.',
    },
    {
      icon: TrendingUp,
      title: 'Ethical AI Adoption',
      description: 'Driving ethical and inclusive AI adoption on a global scale.',
    },
    {
      icon: MapPin,
      title: 'Sustainable Impact',
      description: 'Creating sustainable impact through scalable, human-centric AI architectures.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-dark-50">
      <div className="container-custom">
        <SectionTitle
          subtitle="Global Expansion"
          title="A Global Vision with Local Execution"
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
          With Bangladesh as our core engineering and support hub, we combine technical expertise 
          with cost-effective scalability. Our operational model allows us to rapidly develop, test, 
          and deploy AI solutions across diverse markets.
        </motion.p>

        {/* Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="p-6 text-center hover:shadow-xl">
                <motion.div 
                  className="text-5xl mb-4"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {region.icon}
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-dark-900 mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {region.name}
                </motion.h3>
                <motion.p 
                  className="text-primary-600 font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                >
                  {region.status}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Long-term Vision */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold font-display text-center text-dark-900 mb-12"
          >
            Our Long-Term Vision
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark-900 mb-2">{objective.title}</h4>
                    <p className="text-dark-600 leading-relaxed">{objective.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-primary-50 to-accent-50 border-2 border-primary-200" hover={false}>
            <p className="text-2xl md:text-3xl font-bold text-dark-900 leading-relaxed">
              Integrated Systems AI aims to be more than a product company. 
              We are building a <span className="text-gradient">platform for sustainable AI innovation</span>.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalVision
