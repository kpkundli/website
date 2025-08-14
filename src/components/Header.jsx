import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import './Header.css'

const Header = ({ onOpenTerms, onOpenPrivacy }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-container">
          <div className="logo">
            <div className="logo-icon">
              <img src="/logo.png" alt="KP Kundli" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1>KP Kundli</h1>
              <span>Chart Preparation Service</span>
            </div>
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-links">
              <div className="legal-links">
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenTerms?.() }}
                  className="legal-link"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => { setMobileMenuOpen(false); onOpenPrivacy?.() }}
                  className="legal-link"
                >
                  Privacy Policy
                </button>
              </div>
            </div>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>
    </>
  )
}

export default Header
