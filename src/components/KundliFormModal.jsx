import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, MapPin, Calendar, Clock, Shield, AlertCircle, Mail as MailIcon } from 'lucide-react'
import ConfirmationModal from './ConfirmationModal'
import './KundliFormModal.css'

const KundliFormModal = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, gender, dateOfBirth, timeOfBirth, placeOfBirth, email } = formData
    if (name && gender && dateOfBirth && timeOfBirth && placeOfBirth && /\S+@\S+\.\S+/.test(email)) {
      setShowConfirmation(true)
    }
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleBackdropClick = (e) => { if (e.target === e.currentTarget) onClose() }

  if (!isOpen && !showConfirmation) return null

  return (
    <AnimatePresence mode="wait">
      {!showConfirmation ? (
        <motion.div
          key="form-modal"
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
        >
          <motion.div
            className="form-modal"
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <button className="modal-close" onClick={onClose} aria-label="Close">
              <X size={18} />
            </button>

            <div className="data-privacy-notice">
              <Shield className="privacy-icon" />
              <div className="privacy-text">
                <p>We don’t store your data on servers. The form is forwarded via Formspree for delivery. We process it only to generate and email your kundli.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="kundli-form">
              <div className="form-group">
                <label htmlFor="name"><User size={18} /> Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dateOfBirth"><Calendar size={18} /> Date of Birth</label>
                  <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="timeOfBirth"><Clock size={18} /> Time of Birth</label>
                  <input type="time" id="timeOfBirth" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleInputChange} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="placeOfBirth"><MapPin size={18} /> Place of Birth</label>
                <input type="text" id="placeOfBirth" name="placeOfBirth" value={formData.placeOfBirth} onChange={handleInputChange} placeholder="City, State, Country" required />
              </div>

              {/* Gender selection */}
              <div className="form-group">
                <label>Gender</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleInputChange} />
                    <span>Male</span>
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleInputChange} />
                    <span>Female</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email"><MailIcon size={18} /> Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required />
              </div>

              <div className="form-footer">
                <div className="disclaimer">
                  <AlertCircle size={16} />
                  <span>Chart creation only — no interpretations.</span>
                </div>
                <motion.button type="submit" className="submit-btn" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Proceed — ₹21
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div key="confirmation-modal" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 20, stiffness: 300 }}>
          <ConfirmationModal formData={formData} onClose={() => { setShowConfirmation(false); onClose?.() }} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default KundliFormModal
