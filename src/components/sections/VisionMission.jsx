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
    <section id="vision" className="section-padding bg-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Guiding Principles"
          title="Vision & Mission"
          gradient={true}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {content.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full p-8 md:p-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold font-display text-dark-900 mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-dark-600 text-lg leading-relaxed">
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
