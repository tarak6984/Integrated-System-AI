import { motion } from 'framer-motion'
import { MapPin, TrendingUp, Target, Award } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import FlagIcon from '../ui/FlagIcon'

const GlobalVision = () => {
  const regions = [
    { name: 'United Kingdom', status: 'Headquarters', flagCode: 'GB' },
    { name: 'Bangladesh', status: 'Engineering Hub', flagCode: 'BD' },
    { name: 'Japan', status: 'Engineering Hub', flagCode: 'JP' },
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
    <section className="section-padding bg-gradient-space relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
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
          className="text-center text-base sm:text-lg md:text-xl text-white max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          Headquartered in the <span className="text-primary-400 font-semibold">United Kingdom</span>, with engineering hubs in <span className="text-primary-400 font-semibold">Bangladesh</span> and <span className="text-primary-400 font-semibold">Japan</span>, we combine technical expertise 
          with cost-effective scalability. Our operational model allows us to rapidly develop, test, 
          and deploy AI solutions across diverse markets.
        </motion.p>

        {/* Regions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20 max-w-6xl mx-auto">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card className="p-6 sm:p-8 text-center hover:shadow-xl">
                <motion.div 
                  className="mb-4 flex items-center justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  {region.flagCode ? (
                    <FlagIcon country={region.flagCode} size="80" />
                  ) : (
                    <span className="text-5xl">{region.icon}</span>
                  )}
                </motion.div>
                <motion.h3 
                  className="text-lg sm:text-xl font-bold text-white mb-2"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                >
                  {region.name}
                </motion.h3>
                <motion.p 
                  className="text-primary-400 text-sm sm:text-base font-semibold"
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
            className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-center text-white mb-8 sm:mb-12"
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
                  className="flex items-start space-x-4 glassmorphism p-4 rounded-xl transition-all duration-300"
                >
                  <div className="flex-shrink-0 p-3 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{objective.title}</h4>
                    <p className="text-white text-sm sm:text-base leading-relaxed">{objective.description}</p>
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
          <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-2 border-primary-500/30 transition-all duration-300" hover={false}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white leading-relaxed">
              Integrated Systems AI aims to be more than a product company. 
              We are building a <span className="text-gradient-cyber">platform for sustainable AI innovation</span>.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default GlobalVision
