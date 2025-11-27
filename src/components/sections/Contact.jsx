import { motion } from 'framer-motion'
import { Mail, ArrowRight, MessageSquare } from 'lucide-react'
import Button from '../ui/Button'
import SectionTitle from '../ui/SectionTitle'
import EnhancedContactForm from '../features/EnhancedContactForm'

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-dark-50 to-white">
      <div className="container-custom">
        <SectionTitle
          subtitle="Get In Touch"
          title="Partner with Us"
          gradient={true}
          centered={true}
        />

        {/* Enhanced Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200">
            <div className="text-center mb-8">
              <motion.div 
                className="inline-flex p-4 bg-primary-100 rounded-2xl mb-4"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <MessageSquare className="w-8 h-8 text-primary-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-dark-900 mb-2">Send Us a Message</h3>
              <p className="text-dark-600">We'll get back to you within 24 hours</p>
            </div>
            <EnhancedContactForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <motion.div 
                  className="inline-flex p-4 bg-white/20 rounded-2xl mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <MessageSquare className="w-12 h-12 text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {['Let\'s', 'Build', 'Something', 'Amazing', 'Together'].map((word, index) => (
                    <motion.span
                      key={index}
                      className="inline-block mr-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.h3>
                
                <p className="text-xl text-primary-50 max-w-2xl mx-auto mb-8">
                  Whether you're looking to modernize your operations, automate key processes, 
                  or explore the transformative power of AI in your sector — we're here to help.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:buildwith@integratedsystems.ai"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <Mail className="mr-3 w-5 h-5" />
                  buildwith@integratedsystems.ai
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-12 text-center">
                <p className="text-primary-100 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">Global</div>
            <p className="text-dark-600">Reach & Support</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <p className="text-dark-600">AI-Powered Systems</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
            <p className="text-dark-600">Human-Centric</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
