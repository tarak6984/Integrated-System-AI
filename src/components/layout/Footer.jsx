import { useState } from 'react'
import { Mail, MapPin, Linkedin, Twitter, Github, Lock } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  const [showPasscodeModal, setShowPasscodeModal] = useState(false)
  const [passcode, setPasscode] = useState('')
  const [error, setError] = useState('')

  const handleAdminAccess = () => {
    if (passcode === '9090') {
      setShowPasscodeModal(false)
      setPasscode('')
      setError('')
      navigate('/admin')
    } else {
      setError('Incorrect passcode')
      setPasscode('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdminAccess()
    }
  }

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Services', href: '#services' },
      { name: 'Vision & Mission', href: '#vision' },
      { name: 'Careers', href: '#' },
    ],
    solutions: [
      { name: 'AI R&D Lab', href: '#services' },
      { name: 'Integrated Solutions', href: '#services' },
      { name: 'Branded Ventures', href: '#services' },
      { name: 'Shadow Ventures', href: '#services' },
    ],
    resources: [
      { name: 'Documentation', href: '#' },
      { name: 'Case Studies', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Contact', href: '#contact' },
    ],
  }

  return (
    <footer className="border-t border-primary-500/20 text-gray-100 relative overflow-hidden" style={{ background: 'transparent' }}>
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/10 to-transparent pointer-events-none" />
      
      <div className="container-custom py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4 group">
              <img 
                src="/logo-new.png" 
                alt="Integrated Systems AI" 
                className="h-12 w-auto hover:drop-shadow-[0_0_15px_rgba(0,191,255,0.6)] transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <p className="text-white mb-6 max-w-sm leading-relaxed">
              Harnessing <span className="text-primary-400">Artificial Intelligence</span> to Drive Efficiency, Empower Workforces, and Accelerate Innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.5)]">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.5)]">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,191,255,0.5)]">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-gradient-cyber">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white hover:text-primary-400 transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-gradient-cyber">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white hover:text-primary-400 transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-gradient-cyber">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white hover:text-primary-400 transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3 group">
              <Mail className="w-5 h-5 text-primary-400 mt-1 group-hover:animate-pulse" />
              <div>
                <p className="text-white font-medium mb-1">Email Us</p>
                <a href="mailto:buildwith@integrated-systems.ai" className="text-white hover:text-primary-400 transition-colors">
                  buildwith@integrated-systems.ai
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3 group">
              <MapPin className="w-5 h-5 text-accent-400 mt-1 group-hover:animate-pulse" />
              <div>
                <p className="text-white font-medium mb-1">Headquarters</p>
                <p className="text-white">
                  <span className="text-primary-400">United Kingdom</span> | Operations Hub: <span className="text-accent-400">Bangladesh</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-500/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white text-sm">
            © {currentYear} <span className="text-gradient-cyber font-semibold">Integrated Systems AI Ltd</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm items-center">
            <a href="#" className="text-white hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
            {/* Admin Lock Icon */}
            <button
              onClick={() => setShowPasscodeModal(true)}
              className="text-white hover:text-primary-400 transition-all hover:scale-110"
              title="Admin Access"
            >
              <Lock size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Admin Passcode Modal */}
      {showPasscodeModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glassmorphism rounded-2xl p-6 sm:p-8 max-w-md w-full border-2 border-primary-500/30 glow-cyan">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full mb-4 glow-purple">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Admin Access</h3>
              <p className="text-white text-sm">Enter passcode to continue</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-200 text-sm text-center">
                {error}
              </div>
            )}

            <input
              type="password"
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value)
                setError('')
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter passcode"
              className="w-full px-4 py-3 bg-black/40 border border-primary-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition text-center text-lg tracking-widest mb-4"
              maxLength="4"
              autoFocus
            />

            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowPasscodeModal(false)
                  setPasscode('')
                  setError('')
                }}
                className="flex-1 px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleAdminAccess}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-400 hover:to-accent-400 text-white rounded-lg transition font-semibold glow-cyan"
              >
                Access
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
