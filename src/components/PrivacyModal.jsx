import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import './PrivacyModal.css'

const PrivacyModal = ({ onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="privacy-modal"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header minimal">
          <h2>Privacy Policy</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <div className="privacy-content simple">
            <section>
              <h3>1. Overview</h3>
              <p>We are committed to handling your information responsibly and transparently. Our service is limited to preparing your KP kundli and delivering it to you by email.</p>
            </section>
            <section>
              <h3>2. Data We Handle</h3>
              <p>You may provide personal details (e.g., name, email, date/time/place of birth) solely for the purpose of chart preparation and delivery. We do not operate a database and do not maintain persistent server‑side records of your submissions.</p>
            </section>
            <section>
              <h3>3. Processing & Transmission</h3>
              <p>Form submissions are relayed via Formspree (a third‑party form service) for email delivery. While we take reasonable care in selecting providers, we do not control their systems and are not responsible for their independent practices. We use your details only to prepare your kundli and email it to you.</p>
            </section>
            <section>
              <h3>4. Storage & Retention</h3>
              <p>Your details reside only within email correspondence used to deliver the kundli. We do not maintain separate storage on our servers. On request, we will delete the related emails within a reasonable period, subject to any legal or operational constraints.</p>
            </section>
            <section>
              <h3>5. Your Choices</h3>
              <p>You may contact us at contact@kpkundli.com to request deletion of email records associated with your order or to raise any privacy query. We will endeavour to respond promptly.</p>
            </section>
          </div>

          <div className="acceptance-footer">
            <div className="last-updated"><small>Last updated: August 14, 2025</small></div>
            <button className="accept-btn" onClick={onClose}>I Understand</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PrivacyModal
