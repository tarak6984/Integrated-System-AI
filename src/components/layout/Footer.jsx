import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

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
    <footer className="bg-dark-900 text-dark-100">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo.svg" 
                alt="Integrated Systems AI" 
                className="h-12 w-auto brightness-0 invert hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-dark-300 mb-6 max-w-sm">
              Harnessing Artificial Intelligence to Drive Efficiency, Empower Workforces, and Accelerate Innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-dark-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-dark-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-dark-300 hover:text-primary-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-primary-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">Email Us</p>
                <a href="mailto:buildwith@integratedsystems.ai" className="text-dark-300 hover:text-primary-400 transition-colors">
                  buildwith@integratedsystems.ai
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">Headquarters</p>
                <p className="text-dark-300">
                  United Kingdom | Operations Hub: Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-dark-400 text-sm">
            © {currentYear} Integrated Systems AI Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
