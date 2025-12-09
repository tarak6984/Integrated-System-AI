import { motion } from 'framer-motion'
import { Factory, Truck, HeartPulse, DollarSign, Wheat } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const IndustrySolutions = () => {
  const industries = [
    {
      icon: Factory,
      name: 'Manufacturing',
      tagline: 'Smart Factory Solutions',
      description: 'AI-powered solutions that optimize production lines, ensure quality, and minimize downtime.',
      solutions: [
        { title: 'Predictive Maintenance', detail: 'Prevent equipment failures before they happen' },
        { title: 'Vision-Based Quality Control', detail: 'Automated defect detection with computer vision' },
        { title: 'Production-Line Optimization', detail: 'Real-time efficiency improvements' }
      ],
      color: 'from-blue-500 to-blue-700',
      bgGradient: 'from-blue-500/10 to-blue-700/10',
      icon_bg: 'bg-blue-500/20',
      border: 'border-blue-500/30',
      glow: 'shadow-lg shadow-blue-500/30'
    },
    {
      icon: Truck,
      name: 'Logistics & Transportation',
      tagline: 'Smart Supply Chain',
      description: 'Intelligent systems for route optimization, fleet management, and real-time tracking.',
      solutions: [
        { title: 'Route Optimization', detail: 'AI-driven path planning for maximum efficiency' },
        { title: 'Fleet & Inventory Coordination', detail: 'Synchronized warehouse and transport management' },
        { title: 'Real-Time Tracking', detail: 'Complete visibility across the supply chain' }
      ],
      color: 'from-green-500 to-green-700',
      bgGradient: 'from-green-500/10 to-green-700/10',
      icon_bg: 'bg-green-500/20',
      border: 'border-green-500/30',
      glow: 'shadow-lg shadow-green-500/30'
    },
    {
      icon: HeartPulse,
      name: 'Healthcare',
      tagline: 'Intelligent Healthcare',
      description: 'AI agents that support diagnostics, patient management, and clinical workflows.',
      solutions: [
        { title: 'Triage Assistants', detail: 'AI-powered patient prioritization' },
        { title: 'Patient-Data Automation', detail: 'Streamlined medical record management' },
        { title: 'Clinical Workflow Management', detail: 'Optimized care coordination' }
      ],
      color: 'from-red-500 to-red-700',
      bgGradient: 'from-red-500/10 to-red-700/10',
      icon_bg: 'bg-red-500/20',
      border: 'border-red-500/30',
      glow: 'shadow-lg shadow-red-500/30'
    },
    {
      icon: DollarSign,
      name: 'Finance & Banking',
      tagline: 'FinTech Intelligence',
      description: 'Advanced AI for fraud detection, risk analysis, and compliance automation.',
      solutions: [
        { title: 'Fraud Detection', detail: 'Real-time transaction monitoring and anomaly detection' },
        { title: 'Compliance Automation', detail: 'Automated regulatory reporting and checks' },
        { title: 'Risk Scoring & Forecasting', detail: 'Predictive analytics for better decisions' }
      ],
      color: 'from-yellow-500 to-yellow-700',
      bgGradient: 'from-yellow-500/10 to-yellow-700/10',
      icon_bg: 'bg-yellow-500/20',
      border: 'border-yellow-500/30',
      glow: 'shadow-lg shadow-yellow-500/30'
    },
    {
      icon: Wheat,
      name: 'Agriculture',
      tagline: 'Precision Farming',
      description: 'Smart agriculture solutions for crop monitoring, yield optimization, and resource management.',
      solutions: [
        { title: 'Yield Prediction', detail: 'Data-driven harvest forecasting' },
        { title: 'Farm Automation', detail: 'IoT-connected smart farming equipment' },
        { title: 'Weather & Supply Chain Monitoring', detail: 'Integrated environmental and logistics intelligence' }
      ],
      color: 'from-emerald-500 to-emerald-700',
      bgGradient: 'from-emerald-500/10 to-emerald-700/10',
      icon_bg: 'bg-emerald-500/20',
      border: 'border-emerald-500/30',
      glow: 'shadow-lg shadow-emerald-500/30'
    }
  ]

  return (
    <section id="industries" className="section-padding bg-gradient-space relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Industry-Specific Solutions"
          title="AI Agents for Every Industry"
          gradient={true}
          centered={true}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-lg md:text-xl text-white max-w-4xl mx-auto mb-16"
        >
          We develop <span className="text-primary-400 font-semibold">domain-trained AI agents</span> with sector-specific logic, datasets, and operational toolsets tailored to your industry's unique challenges.
        </motion.p>

        {/* Industries Grid */}
        <div className="space-y-8">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            const isEven = index % 2 === 0
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`p-6 md:p-8 transition-all duration-300`}>
                  <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* Icon and Header */}
                    <div className="flex items-start gap-4 lg:w-1/3">
                      <motion.div 
                        className={`flex-shrink-0 p-4 rounded-2xl bg-gradient-to-br ${industry.color} shadow-lg`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-display">
                          {industry.name}
                        </h3>
                        <p className="text-primary-400 font-semibold mb-3">
                          {industry.tagline}
                        </p>
                        <p className="text-white text-sm leading-relaxed">
                          {industry.description}
                        </p>
                      </div>
                    </div>

                    {/* Solutions */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                      {industry.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                          whileHover={{ y: -5 }}
                          className={`glassmorphism p-4 rounded-xl border-2 ${industry.border} hover:border-primary-500/50 transition-all`}
                        >
                          <h4 className="text-white font-bold mb-2 text-base md:text-lg">
                            {solution.title}
                          </h4>
                          <p className="text-white/90 text-sm md:text-base leading-relaxed">
                            {solution.detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="glassmorphism p-8 rounded-2xl border-2 border-primary-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
              Proven Results Across Industries
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-2">40%</div>
                <p className="text-white text-sm">Efficiency Increase</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-2">98.5%</div>
                <p className="text-white text-sm">AI Accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-2">100+</div>
                <p className="text-white text-sm">Active Deployments</p>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient-cyber mb-2">25+</div>
                <p className="text-white text-sm">Countries Served</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IndustrySolutions
