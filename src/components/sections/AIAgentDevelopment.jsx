import { motion } from 'framer-motion'
import { Bot, Brain, Workflow, MessageSquare, Database, TrendingUp } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

const AIAgentDevelopment = () => {
  const agentTypes = [
    {
      icon: Workflow,
      title: 'Process Automation Agents',
      description: 'Autonomous agents that handle data entry, validation, compliance checks, documentation, and workflow routing.',
      features: ['Data Entry', 'Validation', 'Compliance', 'Documentation'],
      color: 'from-blue-500 to-blue-700',
      glow: 'glow-cyan'
    },
    {
      icon: Brain,
      title: 'Decision-Support Agents',
      description: 'Intelligent agents that process large-scale data, provide forecasting, and deliver strategic recommendations.',
      features: ['Data Processing', 'Forecasting', 'Strategic Insights', 'Analytics'],
      color: 'from-purple-500 to-purple-700',
      glow: 'glow-purple'
    },
    {
      icon: TrendingUp,
      title: 'Workflow & Operations Agents',
      description: 'Multi-step process coordinators for logistics, manufacturing, and complex finance workflows.',
      features: ['Process Coordination', 'Logistics', 'Manufacturing', 'Finance'],
      color: 'from-green-500 to-green-700',
      glow: 'shadow-lg shadow-green-500/30'
    },
    {
      icon: MessageSquare,
      title: 'Customer Experience Agents',
      description: 'Advanced chat, email, and voice support integrated with CRM and enterprise communication systems.',
      features: ['Chat Support', 'Email Automation', 'Voice AI', 'CRM Integration'],
      color: 'from-cyan-500 to-cyan-700',
      glow: 'glow-cyan'
    },
    {
      icon: Database,
      title: 'Industry-Specific Intelligence Agents',
      description: 'Domain-trained agents with sector-specific logic, datasets, and operational toolsets.',
      features: ['Domain Logic', 'Sector Data', 'Custom Tools', 'Industry Rules'],
      color: 'from-orange-500 to-orange-700',
      glow: 'shadow-lg shadow-orange-500/30'
    },
    {
      icon: Bot,
      title: 'Autonomous Business Agents',
      description: 'Self-operating agents for forecasting, procurement, scheduling, risk monitoring, and real-time reporting.',
      features: ['Forecasting', 'Procurement', 'Scheduling', 'Risk Analysis'],
      color: 'from-indigo-500 to-indigo-700',
      glow: 'shadow-lg shadow-indigo-500/30'
    }
  ]

  return (
    <section id="ai-agents" className="section-padding bg-gradient-space relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Custom-Built AI Agents"
          title="AI Agent Development"
          gradient={true}
          centered={true}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
            Our AI Agents are <span className="text-primary-400 font-semibold">autonomous, domain-trained digital workers</span> that operate inside your existing workflows and systems.
          </p>
          <p className="text-base md:text-lg text-white leading-relaxed">
            These are <span className="text-accent-400 font-semibold">far beyond simple chatbots</span> — they can execute tasks, automate processes, analyze data, and collaborate with human teams.
          </p>
        </motion.div>

        {/* Agent Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentTypes.map((agent, index) => {
            const Icon = agent.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full p-6 transition-all duration-300`}>
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${agent.color} mb-6`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: "spring" }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold font-display text-white mb-4">
                    {agent.title}
                  </h3>
                  
                  <p className="text-white text-sm leading-relaxed mb-6">
                    {agent.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {agent.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-primary-500/20 text-primary-400 px-3 py-1 rounded-full text-xs font-medium"
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

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-2 border-primary-500/30 transition-all duration-300" hover={false}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Deploy AI Agents?
            </h3>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Our AI agents integrate seamlessly with your existing systems and scale with your business needs. 
              Let's discuss how custom AI agents can transform your operations.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default AIAgentDevelopment
