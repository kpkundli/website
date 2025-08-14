import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { X, QrCode, CheckCircle, Clock, Mail } from 'lucide-react'
import './ConfirmationModal.css'

const ConfirmationModal = ({ formData, onClose }) => {
  const [paid, setPaid] = useState(false)
  const [posting, setPosting] = useState(false)

  useEffect(() => {
    if (!paid) return
    const t = setTimeout(() => {
      onClose?.()
    }, 5000)
    return () => clearTimeout(t)
  }, [paid, onClose])

  const formatTime = (time) => {
    if (!time) return ''
    const [hours, minutes, seconds = '00'] = time.split(':')
    const hour = parseInt(hours, 10)
    if (Number.isNaN(hour)) return time
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes}:${seconds} ${ampm}`
  }

  const handleConfirmPayment = async () => {
    if (posting) return
    setPosting(true)
    try {
      await fetch('https://formspree.io/f/mgvzqyrb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'New KP Kundli Request',
          _replyto: formData.email,
          name: formData.name,
          gender: formData.gender,
          placeOfBirth: formData.placeOfBirth,
          dateOfBirth: formData.dateOfBirth,
          timeOfBirth: formData.timeOfBirth,
          email: formData.email,
        }),
      })
    } catch {
      // ignore errors, still proceed to success UI
    } finally {
      setPaid(true)
      setPosting(false)
    }
  }

  const modalVariants = { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.96 } }
  const itemVariants = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }

  return (
    <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div className="confirmation-modal" variants={modalVariants} initial="hidden" animate="visible" exit="exit" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{paid ? 'Payment Successful' : 'Confirm details'}</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close"><X size={18} /></button>
        </div>

        {!paid ? (
          <motion.div className="modal-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
            <motion.div className="details-section" variants={itemVariants}>
              <h3>Your information</h3>
              <div className="detail-grid">
                <div className="detail-item"><span className="label">Name</span><span className="value">{formData.name}</span></div>
                {formData.gender && (<div className="detail-item"><span className="label">Gender</span><span className="value">{formData.gender.charAt(0).toUpperCase() + formData.gender.slice(1)}</span></div>)}
                <div className="detail-item"><span className="label">Place of Birth</span><span className="value">{formData.placeOfBirth}</span></div>
                <div className="detail-item"><span className="label">Date of Birth</span><span className="value">{new Date(formData.dateOfBirth).toLocaleDateString('en-IN')}</span></div>
                <div className="detail-item"><span className="label">Time of Birth</span><span className="value">{formatTime(formData.timeOfBirth)}</span></div>
                <div className="detail-item"><span className="label">Email</span><span className="value">{formData.email}</span></div>
              </div>
            </motion.div>

            <motion.div className="payment-section" variants={itemVariants}>
              <h3><QrCode size={16} /> Payment — ₹21</h3>
              <div className="qr-container">
                <div className="qr-placeholder">
                  <img src="/payment-qr.png" alt="Scan UPI QR to pay ₹21" className="qr-image" />
                </div>
                <div className="payment-instructions">
                  <p>Scan with any UPI app</p>
                  <p>Pay ₹21 for your KP kundli</p>
                  <p>Tap “Payment completed” after paying</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="delivery-info" variants={itemVariants}>
              <div className="info-card"><Clock size={14} /><span>Delivered within 24 hours</span></div>
              <div className="info-card"><Mail size={14} /><span>Sent to {formData.email}</span></div>
            </motion.div>

            <motion.div className="terms-disclaimer" variants={itemVariants}>
              <div className="disclaimer-box">
                <CheckCircle className="disclaimer-icon" />
                <p>By paying you accept our Terms & Conditions and Privacy Policy. Service is limited to chart creation only.</p>
              </div>
            </motion.div>

            <motion.div className="modal-actions" variants={itemVariants}>
              <motion.button className="confirm-btn" onClick={handleConfirmPayment} whileHover={{ scale: posting ? 1 : 1.02 }} whileTap={{ scale: posting ? 1 : 0.98 }} disabled={posting}>
                <CheckCircle size={16} /> {posting ? 'Processing…' : 'Payment completed'}
              </motion.button>
              <button className="cancel-btn" onClick={onClose} disabled={posting}>Cancel</button>
            </motion.div>
          </motion.div>
        ) : (
          <div className="success-state">
            <motion.div className="success-check" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 12 }}>
              <motion.svg width="84" height="84" viewBox="0 0 80 80" className="checkmark-svg">
                <motion.circle cx="40" cy="40" r="35" fill="none" stroke="#22c55e" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: 'easeInOut' }} />
                <motion.path d="M20 40 L35 55 L60 25" fill="none" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }} />
              </motion.svg>
            </motion.div>
            <h3>Payment successful</h3>
            <p>Your KP kundli will be emailed within 24 hours.</p>
            <small className="closing-note">This window will close automatically.</small>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default ConfirmationModal
