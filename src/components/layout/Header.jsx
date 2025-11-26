import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut, LayoutDashboard } from 'lucide-react'
import Button from '../ui/Button'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { user, logout, isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Vision', href: '#vision' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-dark-900/30 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center group"
          >
            <img 
              src={isScrolled ? "/logo.svg" : "/logo-white.svg"}
              alt="Integrated Systems AI" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {location.pathname === '/' && navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`font-medium transition-colors relative group ${
                  isScrolled
                    ? 'text-dark-700 hover:text-primary-600'
                    : 'text-white hover:text-primary-300'
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button 
                    variant={isScrolled ? "outline" : "secondary"} 
                    size="sm"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="primary" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <Button 
                    variant={isScrolled ? "outline" : "secondary"} 
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={async () => {
                    await logout()
                    navigate('/')
                  }}
                  className="flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled
                ? 'text-dark-700 hover:text-primary-600'
                : 'text-white hover:text-primary-300'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-dark-100 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-4">
              {location.pathname === '/' && navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-dark-700 hover:text-primary-600 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              {!isAuthenticated ? (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="w-full"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="secondary" 
                      size="sm"
                      className="w-full flex items-center justify-center gap-2"
                    >
                      <LayoutDashboard size={16} />
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={async () => {
                      await logout()
                      navigate('/')
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    <LogOut size={16} />
                    Logout
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
