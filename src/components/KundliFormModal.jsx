import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, User, MapPin, Calendar, Clock, Shield, AlertCircle } from 'lucide-react'
import ConfirmationModal from './ConfirmationModal'
import './KundliFormModal.css'

const KundliFormModal = ({ isOpen, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.dateOfBirth && formData.timeOfBirth && formData.placeOfBirth) {
      setShowConfirmation(true)
    }
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

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
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="modal-header">
              <h2>Get Your KP Kundli</h2>
              <button className="close-btn" onClick={onClose}>
                <X size={24} />
              </button>
            </div>

            <div className="data-privacy-notice">
              <Shield className="privacy-icon" />
              <div className="privacy-text">
                <p><strong>Privacy Notice:</strong> We don't store your data in any database. Form processing is handled by Formspree. We take no responsibility for lapses on their side.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="kundli-form">
              <div className="form-group">
                <label htmlFor="name">
                  <User size={20} />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dateOfBirth">
                    <Calendar size={20} />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="timeOfBirth">
                    <Clock size={20} />
                    Time of Birth
                  </label>
                  <input
                    type="time"
                    id="timeOfBirth"
                    name="timeOfBirth"
                    value={formData.timeOfBirth}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="placeOfBirth">
                  <MapPin size={20} />
                  Place of Birth
                </label>
                <input
                  type="text"
                  id="placeOfBirth"
                  name="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={handleInputChange}
                  placeholder="City, State, Country"
                  required
                />
              </div>

              <div className="form-footer">
                <div className="disclaimer">
                  <AlertCircle size={16} />
                  <span>Chart creation only - no predictions included</span>
                </div>
                
                <motion.button
                  type="submit"
                  className="submit-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Proceed to Payment - ₹21
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="confirmation-modal"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
        >
          <ConfirmationModal 
            formData={formData}
            onBack={() => setShowConfirmation(false)}
            onClose={onClose}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default KundliFormModal
