import { motion } from 'framer-motion'
import { Microscope, Blocks, Package, Eye } from 'lucide-react'
import Card from '../ui/Card'
import SectionTitle from '../ui/SectionTitle'

const Services = () => {
  const services = [
    {
      icon: Microscope,
      title: 'AI Research & Development Lab',
      description: 'Headquartered in the United Kingdom with a dedicated operations and engineering hub in Bangladesh, we focus on the development of intelligent, scalable AI technologies that solve real-world business challenges.',
      color: 'primary',
      features: ['Advanced R&D', 'UK Headquarters', 'Bangladesh Hub', 'Scalable Technology']
    },
    {
      icon: Blocks,
      title: 'Integrated AI Solutions',
      description: 'We build intelligent platforms and automation agents that integrate seamlessly with existing software ecosystems. Engineered to improve performance, reduce operational friction, and elevate decision-making.',
      color: 'accent',
      features: ['Seamless Integration', 'Automation Agents', 'Performance Boost', 'Smart Decisions']
    },
    {
      icon: Package,
      title: 'Branded Ventures',
      description: 'Public-facing AI products and services developed under the Integrated Systems AI banner. Including SaaS platforms, enterprise APIs, and sector-specific AI tools for manufacturing, logistics, finance, healthcare, and agriculture.',
      color: 'primary',
      features: ['SaaS Platforms', 'Enterprise APIs', 'Sector-Specific', 'Public Products']
    },
    {
      icon: Eye,
      title: 'Shadow Ventures',
      description: 'Stealth-mode companies incubated and operated using our infrastructure in Bangladesh. Designed to target niche, high-growth verticals without direct public association to Integrated Systems AI.',
      color: 'dark',
      features: ['Stealth Mode', 'Niche Markets', 'High Growth', 'Independent Brands']
    },
  ]

  const colorClasses = {
    primary: {
      gradient: 'from-primary-500 to-primary-700',
      text: 'text-primary-600',
      bg: 'bg-primary-50'
    },
    accent: {
      gradient: 'from-accent-500 to-accent-700',
      text: 'text-accent-600',
      bg: 'bg-accent-50'
    },
    dark: {
      gradient: 'from-dark-600 to-dark-800',
      text: 'text-dark-600',
      bg: 'bg-dark-50'
    }
  }

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="What We Offer"
          title="Our Services & Strategic Focus"
          gradient={true}
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = colorClasses[service.color]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 sm:p-8 hover:shadow-2xl transition-shadow duration-300">
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-6 shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl sm:text-2xl font-bold font-display text-dark-900 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <p className="text-dark-600 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-medium`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
