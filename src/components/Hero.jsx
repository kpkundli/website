import { motion } from 'framer-motion'
import { Star, Sparkles, Moon, Sun, Zap } from 'lucide-react'
import './Hero.css'

const Hero = ({ onOpenFormModal }) => {

  return (
    <section className="hero">
      {/* Cosmic Background Elements */}
      <div className="cosmic-background">
        <div className="stars-field">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="star"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
        
        <motion.div 
          className="cosmic-orb orb-1"
          animate={{ 
            rotate: 360,
            x: [0, 50, 0, -50, 0],
            y: [0, -30, 0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        >
          <Sun className="orb-icon" />
        </motion.div>
        
        <motion.div 
          className="cosmic-orb orb-2"
          animate={{ 
            rotate: -360,
            x: [0, -40, 0, 40, 0],
            y: [0, 40, 0, -40, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        >
          <Moon className="orb-icon" />
        </motion.div>

        <motion.div 
          className="cosmic-orb orb-3"
          animate={{ 
            rotate: 180,
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        >
          <Star className="orb-icon" />
        </motion.div>
      </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Sparkles className="badge-icon" />
            <span>Vedic Astrology Experts</span>
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Professional KP Kundli
            <span className="title-highlight"> Creation</span>
            <br />
            Service
          </motion.h1>

          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            Get your accurate Krishnamurti Paddhati kundli created with precision. 
            We specialize in traditional KP chart preparation with detailed calculations 
            for accurate astrological analysis.
          </motion.p>

          <motion.div 
            className="hero-features"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <div className="feature-item">
              <div className="feature-icon">
                <Zap />
              </div>
              <div className="feature-text">
                <h3>Accurate Calculations</h3>
                <p>Precise KP methodology</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Star />
              </div>
              <div className="feature-text">
                <h3>Professional Service</h3>
                <p>Reliable kundli creation</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <Sparkles />
              </div>
              <div className="feature-text">
                <h3>Chart Only</h3>
                <p>No predictions included</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <motion.button 
              className="cta-primary"
              onClick={onOpenFormModal}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} />
              Get My Kundli Now
              <span className="price-tag">₹21</span>
            </motion.button>
            
            <div className="trust-indicators">
              <div className="trust-item">
                <span className="trust-number">Authentic</span>
                <span className="trust-label">KP Methodology</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">24 Hours</span>
                <span className="trust-label">Delivery Time</span>
              </div>
              <div className="trust-item">
                <span className="trust-number">No Predictions</span>
                <span className="trust-label">Chart Only</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="kundli-preview">
            <motion.div 
              className="kundli-chart"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div className="chart-center">
                <Star size={32} />
              </div>
              <div className="chart-houses">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`house house-${i + 1}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + i * 0.1 }}
                  >
                    <div className="house-number">{i + 1}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="floating-elements">
              <motion.div 
                className="floating-planet planet-1"
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                ☿
              </motion.div>
              <motion.div 
                className="floating-planet planet-2"
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                ♀
              </motion.div>
              <motion.div 
                className="floating-planet planet-3"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 270, 360]
                }}
                transition={{ duration: 10, repeat: Infinity }}
              >
                ♂
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
