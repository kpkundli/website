import { motion } from 'framer-motion'
import { 
  Star, 
  Shield, 
  Clock, 
  Award, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>
      
      <div className="footer-content">
        <motion.div 
          className="footer-main"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="/logo.png" alt="KP Kundli Services" className="logo-image" />
                <div className="cosmic-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                </div>
              </div>
              <div className="logo-text">
                <h3>KP Kundli Services</h3>
                <span>Professional Kundli Creation</span>
              </div>
            </div>
            <p className="brand-description">
              Professional KP Kundli creation service. We provide accurate chart preparation 
              using traditional Krishnamurti Paddhati methodology.
            </p>
            <div className="trust-badges">
              <div className="trust-badge">
                <Shield size={16} />
                <span>100% Secure</span>
              </div>
              <div className="trust-badge">
                <Clock size={16} />
                <span>24h Delivery</span>
              </div>
              <div className="trust-badge">
                <Award size={16} />
                <span>Authentic Charts</span>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-items">
              <div className="contact-item">
                <Phone size={20} />
                <div className="contact-details">
                  <span className="contact-label">WhatsApp</span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={20} />
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:contact@kpkundli.com">contact@kpkundli.com</a>
                </div>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <div className="contact-details">
                  <span className="contact-label">Service</span>
                  <span>Online KP Kundli Creation</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2025 KP Kundli Services. All rights reserved.</p>
              <p className="disclaimer">
                For entertainment and guidance purposes only. We provide chart creation service without predictions.
              </p>
            </div>
            <div className="footer-legal">
              <a href="#terms">Terms & Conditions</a>
              <span className="separator">•</span>
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#refund">No Refund Policy</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
