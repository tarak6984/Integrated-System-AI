import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, LogOut, LayoutDashboard, Shield } from 'lucide-react'
import Button from '../ui/Button'
import { useAuth } from '../../context/AuthContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { logout, isAuthenticated } = useAuth()
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
          ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-primary-500/10 border-b border-primary-500/20'
          : 'bg-black/30 backdrop-blur-sm'
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <img 
              src="/logo-white.svg"
              alt="Integrated Systems AI" 
              className="h-12 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_10px_rgba(0,191,255,0.5)]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {location.pathname === '/' && navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="font-medium transition-colors relative group text-white hover:text-primary-400"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 transition-all group-hover:w-full shadow-[0_0_10px_rgba(0,191,255,0.5)]"></span>
              </a>
            ))}
            
            {!isAuthenticated ? (
              <>
                <Link to="/login">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary-500/50 text-white hover:bg-primary-500/20 hover:border-primary-400"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary-500/50 text-white hover:bg-primary-500/20 hover:border-primary-400"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-accent-500/50 text-white hover:bg-accent-500/20"
                  >
                    <LayoutDashboard size={16} />
                    Dashboard
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2 border-purple-500/50 text-white hover:bg-purple-500/20"
                  >
                    <Shield size={16} />
                    Admin
                  </Button>
                </Link>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={async () => {
                    await logout()
                    navigate('/')
                  }}
                  className="flex items-center gap-2 glow-purple"
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
            className="lg:hidden p-2 transition-colors text-white hover:text-primary-400"
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
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-primary-500/20 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-4">
              {location.pathname === '/' && navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="block py-2 text-white hover:text-primary-400 font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
              
              {!isAuthenticated ? (
                <>
                  <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary-500/50 text-white hover:bg-primary-500/20"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-primary-500/50 text-white hover:bg-primary-500/20"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full flex items-center justify-center gap-2 border-accent-500/50 text-white hover:bg-accent-500/20"
                    >
                      <LayoutDashboard size={16} />
                      Dashboard
                    </Button>
                  </Link>
                  <Link to="/admin" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full flex items-center justify-center gap-2 border-purple-500/50 text-white hover:bg-purple-500/20"
                    >
                      <Shield size={16} />
                      Admin
                    </Button>
                  </Link>
                  <Button 
                    variant="primary" 
                    size="sm"
                    className="w-full flex items-center justify-center gap-2 glow-purple"
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
