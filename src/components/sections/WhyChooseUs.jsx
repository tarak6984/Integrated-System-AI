import { motion } from 'framer-motion'
import { Heart, Link2, Scaling, Briefcase, Shield } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Heart,
      title: 'Human-Centric Approach',
      description: 'We build AI to empower people, not replace them. Our solutions enhance human capabilities and preserve the essential role of human insight.',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Link2,
      title: 'Seamless Integration',
      description: 'Our solutions are designed to enhance, not disrupt, your existing workflows. We integrate smoothly with your current infrastructure.',
      color: 'from-primary-500 to-primary-700',
    },
    {
      icon: Scaling,
      title: 'Scalable Solutions',
      description: 'Built for local adaptability and global expansion. Our systems grow with your organization, from startup to enterprise.',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Briefcase,
      title: 'Hybrid Model',
      description: 'A unique combination of product development, venture building, and strategic deployment tailored to your needs.',
      color: 'from-accent-500 to-accent-700',
    },
    {
      icon: Shield,
      title: 'Ethical AI Leadership',
      description: 'Committed to responsible and inclusive innovation. We prioritize transparency, fairness, and accountability in all our solutions.',
      color: 'from-blue-500 to-indigo-600',
    },
  ]

  return (
    <section id="why-us" className="section-padding relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-950/10 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Our Differentiators"
          title="Why Choose Integrated Systems AI?"
          gradient={true}
          centered={true}
        />

        {/* Bento Grid Layout - Top 3 equal, Bottom 2 wider */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isBottomRow = index >= 3 // Items 4 & 5 (Hybrid Model & Ethical AI)
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`group relative ${isBottomRow ? 'lg:col-span-3' : 'lg:col-span-2'}`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}></div>
                
                <div className="relative glassmorphism p-8 rounded-2xl border-2 border-primary-500/20 group-hover:border-primary-400/50 transition-all duration-300 h-full min-h-[280px] flex flex-col">
                  <motion.div 
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.color} mb-6 w-fit`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold font-display text-white mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {reason.title}
                  </motion.h3>
                  
                  <p className="text-white leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional emphasis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-gradient-to-r from-primary-500/80 to-accent-500/80 rounded-2xl p-12 shadow-lg transition-all duration-500"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Whether you&apos;re looking to modernize your operations, automate key processes, 
            or explore the transformative power of AI in your sector — we&apos;re here to build with you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
