import { motion } from 'framer-motion'
import './Hero.css'

const Hero = ({ onOpenFormModal }) => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">KP Kundli • Chart Preparation Only</p>
          <h1 id="hero-title" className="hero-title">Calm, precise KP kundli charts for ₹21</h1>
          <p className="hero-sub">We create your KP (Krishnamurti Paddhati) kundli from your birth details and email it within 24 hours. No interpretations or predictions.</p>

          <ul className="hero-list">
            <li>Authentic KP chart preparation</li>
            <li>Email delivery within 24 hours</li>
            <li>Secure & private. No data stored on servers</li>
          </ul>

          <div className="hero-actions">
            <motion.button 
              className="cta"
              onClick={onOpenFormModal}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Create my KP Kundli — ₹21
            </motion.button>
            <p className="note">By continuing, you accept our Terms & Privacy.</p>
          </div>
        </motion.div>

        <motion.div 
          className="hero-art"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          aria-hidden="true"
        >
          <div className="ring ring-lg" />
          <div className="ring ring-md" />
          <div className="ring ring-sm" />
          {/* planets */}
          <div className="orbit orbit-lg">
            <div className="planet planet-1" />
          </div>
          <div className="orbit orbit-md">
            <div className="planet planet-2" />
          </div>
          <div className="orbit orbit-sm">
            <div className="planet planet-3" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
