import { motion } from 'framer-motion'
import { Search, Cpu, Zap, Link2, Rocket, Shield } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const AIProcess = () => {
  const processSteps = [
    {
      icon: Search,
      number: '01',
      title: 'Industry & Workflow Mapping',
      description: 'Analyze data, tools, bottlenecks, and operational needs to understand your unique challenges.',
      color: 'from-blue-500 to-blue-700',
      highlights: ['Data Analysis', 'Tool Assessment', 'Bottleneck Identification']
    },
    {
      icon: Cpu,
      number: '02',
      title: 'Agent Architecture Design',
      description: 'Define skills, autonomy levels, reasoning capabilities, and integration endpoints.',
      color: 'from-purple-500 to-purple-700',
      highlights: ['Skill Definition', 'Autonomy Design', 'Integration Planning']
    },
    {
      icon: Zap,
      number: '03',
      title: 'Custom Training & Optimization',
      description: 'Train with domain datasets, compliance rules, and organization-specific knowledge.',
      color: 'from-green-500 to-green-700',
      highlights: ['Domain Training', 'Compliance Rules', 'Custom Knowledge']
    },
    {
      icon: Link2,
      number: '04',
      title: 'Integration into Existing Systems',
      description: 'Connect with ERPs, CRMs, APIs, and cloud infrastructure — without operational disruption.',
      color: 'from-cyan-500 to-cyan-700',
      highlights: ['ERP Integration', 'CRM Connection', 'API Setup']
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Deployment, Scaling & Fine Tuning',
      description: 'Roll out, monitor performance, optimize continuously, and expand capabilities.',
      color: 'from-orange-500 to-orange-700',
      highlights: ['Deployment', 'Monitoring', 'Optimization']
    },
    {
      icon: Shield,
      number: '06',
      title: 'Governance, Safety & Compliance',
      description: 'Built-in ethical frameworks, auditability, and compliance with industry regulations.',
      color: 'from-indigo-500 to-indigo-700',
      highlights: ['Ethical AI', 'Auditability', 'Compliance']
    }
  ]

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Our Methodology"
          title="AI Agent Development Process"
          gradient={true}
          centered={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg md:text-xl text-white max-w-3xl mx-auto mb-16"
        >
          Our systematic 6-step approach ensures your AI agents are <span className="text-primary-400 font-semibold">perfectly aligned</span> with your business needs and <span className="text-accent-400 font-semibold">seamlessly integrated</span> into your operations.
        </motion.p>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-1/2 top-full h-8 w-px bg-gradient-to-b from-primary-500/50 to-transparent hidden md:block transform -translate-x-1/2 z-0"></div>
                )}

                <div className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1 glassmorphism p-6 md:p-8 rounded-2xl border-2 border-primary-500/30 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div 
                        className={`flex-shrink-0 p-4 rounded-xl bg-gradient-to-br ${step.color} shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-4xl font-bold text-green-400 font-display">{step.number}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-white font-display">{step.title}</h3>
                        </div>
                        
                        <p className="text-white leading-relaxed mb-4">
                          {step.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {step.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="bg-accent-500/20 text-accent-400 px-3 py-1 rounded-full text-xs font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glassmorphism-purple p-8 md:p-12 rounded-2xl border-2 border-accent-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Start Your AI Transformation Journey
            </h3>
            <p className="text-lg text-white max-w-2xl mx-auto mb-6">
              Our proven process has helped 100+ organizations successfully deploy AI agents. 
              From initial consultation to full-scale deployment, we're with you every step of the way.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>98.5% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>6-16 Week Deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AIProcess
