import { motion } from 'framer-motion'
import { Shield, Mail } from 'lucide-react'
import './Footer.css'

const Footer = ({ onOpenTerms, onOpenPrivacy }) => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div 
          className="footer-main"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="/logo.png" alt="KP Kundli" className="logo-image" />
              </div>
              <div className="logo-text">
                <h3>KP Kundli</h3>
                <span>Chart Preparation Service</span>
              </div>
            </div>
            <p className="brand-description">
              We prepare authentic KP (Krishnamurti Paddhati) kundli charts. No interpretations or predictions.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield size={16} />
                <span>Secure & Private</span>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Get in touch</h4>
            <div className="contact-items">
              <div className="contact-item">
                <Mail size={20} />
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:contact@kpkundli.com">contact@kpkundli.com</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© 2025 KP Kundli. All rights reserved.</p>
              <p className="disclaimer">Service strictly limited to kundli chart creation. No interpretations or advice included.</p>
            </div>
            <div className="footer-legal">
              <button className="linklike" onClick={onOpenTerms}>Terms & Conditions</button>
              <span className="separator">•</span>
              <button className="linklike" onClick={onOpenPrivacy}>Privacy Policy</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
