import { motion } from 'framer-motion'
import { X, QrCode, CheckCircle, Clock, Mail } from 'lucide-react'
import './ConfirmationModal.css'

const ConfirmationModal = ({ formData, onConfirm, onClose }) => {
  const formatTime = (time) => {
    const [hours, minutes, seconds] = time.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes}:${seconds} ${ampm}`
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        type: "spring",
        stiffness: 100
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: { duration: 0.3 }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="confirmation-modal"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Confirm Your Kundli Details</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <motion.div
          className="modal-content"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="details-section" variants={itemVariants}>
            <h3>Your Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="label">Name:</span>
                <span className="value">{formData.name}</span>
              </div>
              <div className="detail-item">
                <span className="label">Gender:</span>
                <span className="value">{formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)}</span>
              </div>
              <div className="detail-item">
                <span className="label">Place of Birth:</span>
                <span className="value">{formData.placeOfBirth}</span>
              </div>
              <div className="detail-item">
                <span className="label">Date of Birth:</span>
                <span className="value">{new Date(formData.dateOfBirth).toLocaleDateString('en-IN')}</span>
              </div>
              <div className="detail-item">
                <span className="label">Time of Birth:</span>
                <span className="value">{formatTime(formData.timeOfBirth)}</span>
              </div>
              <div className="detail-item">
                <span className="label">Email:</span>
                <span className="value">{formData.email}</span>
              </div>
            </div>
          </motion.div>

          <motion.div className="payment-section" variants={itemVariants}>
            <h3>
              <QrCode size={20} />
              Payment - ₹21
            </h3>
            <div className="qr-container">
              <div className="qr-placeholder">
                <QrCode size={80} />
                <p>Scan QR Code to Pay</p>
                <span className="amount">₹21</span>
              </div>
              <div className="payment-instructions">
                <p>📱 Scan the QR code with any UPI app</p>
                <p>💳 Pay ₹21 for your KP Kundli</p>
                <p>✅ Click confirm after payment</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="delivery-info" variants={itemVariants}>
            <div className="info-card">
              <Clock size={18} />
              <span>Delivered within 24 hours</span>
            </div>
            <div className="info-card">
              <Mail size={18} />
              <span>Sent to {formData.email}</span>
            </div>
          </motion.div>

          <motion.div className="terms-disclaimer" variants={itemVariants}>
            <div className="disclaimer-box">
              <CheckCircle className="disclaimer-icon" />
              <p>
                <strong>Important:</strong> By proceeding with payment, you acknowledge and accept our 
                <span className="terms-link"> Terms & Conditions</span> and 
                <span className="terms-link"> Privacy Policy</span>. 
                This service is for kundli chart creation only and does not include predictions.
              </p>
            </div>
          </motion.div>

          <motion.div className="modal-actions" variants={itemVariants}>
            <motion.button
              className="confirm-btn"
              onClick={onConfirm}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle size={20} />
              Payment Completed
            </motion.button>
            <button className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ConfirmationModal
