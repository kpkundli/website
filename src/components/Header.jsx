import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import TermsModal from './TermsModal'
import PrivacyModal from './PrivacyModal'
import './Header.css'

const Header = () => {
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.header 
        className="header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="header-container">
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="logo-icon">
              <img src="/logo.png" alt="KP Kundli Services" className="logo-image" />
            </div>
            <div className="logo-text">
              <h1>KP Kundli Services</h1>
              <span>Professional Kundli Creation</span>
            </div>
          </motion.div>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-links">
              <div className="legal-links">
                <button 
                  onClick={() => setShowTerms(true)}
                  className="legal-link"
                >
                  Terms & Conditions
                </button>
                <button 
                  onClick={() => setShowPrivacy(true)}
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
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="header-glow"></div>
      </motion.header>

      {showTerms && <TermsModal onClose={() => setShowTerms(false)} />}
      {showPrivacy && <PrivacyModal onClose={() => setShowPrivacy(false)} />}
    </>
  )
}

export default Header
