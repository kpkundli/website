import { motion } from 'framer-motion'
import { CheckCircle, Mail, Clock, Sparkles, RotateCcw } from 'lucide-react'
import './SuccessAnimation.css'

const SuccessAnimation = ({ onRestart }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.8, ease: "easeInOut" },
        opacity: { duration: 0.3 }
      }
    }
  }

  const sparkleVariants = {
    animate: {
      rotate: [0, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.div
      className="success-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="success-content" variants={itemVariants}>
        {/* Animated Checkmark */}
        <motion.div className="checkmark-container">
          <motion.div
            className="checkmark-circle"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              className="checkmark-svg"
            >
              <motion.circle
                cx="40"
                cy="40"
                r="35"
                fill="none"
                stroke="#00c851"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.path
                d="M20 40 L35 55 L60 25"
                fill="none"
                stroke="#00c851"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={checkmarkVariants}
                initial="hidden"
                animate="visible"
              />
            </motion.svg>
          </motion.div>
          
          {/* Sparkles around checkmark */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="sparkle"
              style={{
                position: 'absolute',
                top: `${20 + Math.sin(i * 60 * Math.PI / 180) * 60}px`,
                left: `${20 + Math.cos(i * 60 * Math.PI / 180) * 60}px`,
              }}
              variants={sparkleVariants}
              animate="animate"
              transition={{ delay: i * 0.1 }}
            >
              <Sparkles size={16} color="#ffd700" />
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 className="success-title" variants={itemVariants}>
          Payment Successful! 🎉
        </motion.h2>

        <motion.p className="success-message" variants={itemVariants}>
          Your KP Kundli is being prepared by our expert astrologers
        </motion.p>

        <motion.div className="success-details" variants={itemVariants}>
          <div className="detail-card">
            <Mail className="detail-icon" />
            <div className="detail-text">
              <h3>Email Delivery</h3>
              <p>Your kundli will be sent to your email address</p>
            </div>
          </div>

          <div className="detail-card">
            <Clock className="detail-icon" />
            <div className="detail-text">
              <h3>Within 24 Hours</h3>
              <p>Expert astrologers are working on your kundli</p>
            </div>
          </div>
        </motion.div>

        <motion.div className="contact-info" variants={itemVariants}>
          <p>For any queries, contact us at:</p>
          <a href="mailto:contact@kpkundli.com" className="contact-email">
            contact@kpkundli.com
          </a>
        </motion.div>

        <motion.button
          className="restart-btn"
          onClick={onRestart}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RotateCcw size={18} />
          Create Another Kundli
        </motion.button>
      </motion.div>

      {/* Background animation */}
      <div className="floating-elements">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-star"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
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
    </motion.div>
  )
}

export default SuccessAnimation
