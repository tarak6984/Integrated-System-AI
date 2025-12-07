import { motion } from 'framer-motion'
import { Target, Compass } from 'lucide-react'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const VisionMission = () => {
  const content = [
    {
      icon: Target,
      title: 'Our Vision',
      description: 'To build and scale intelligent systems that reshape industries, streamline processes, and empower the emerging markets of tomorrow through AI innovation.',
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: Compass,
      title: 'Our Mission',
      description: 'We are committed to designing and deploying AI-powered agents and integrated solutions that reduce inefficiencies, optimize operations, and create sustainable growth — starting in Bangladesh and expanding into global markets.',
      gradient: 'from-accent-500 to-accent-700',
    },
  ]

  return (
    <section id="vision" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Guiding Principles"
          title="Vision & Mission"
          gradient={true}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {content.map((item, index) => {
            const Icon = item.icon
            const isVision = index === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className={`h-full p-6 sm:p-8 md:p-10 ${isVision ? 'hover:glow-cyan' : 'hover:glow-purple'} transition-all duration-300`}>
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 ${isVision ? 'glow-cyan' : 'glow-purple'} animate-glow-pulse`}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-white mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default VisionMission
