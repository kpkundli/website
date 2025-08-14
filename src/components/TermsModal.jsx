import { motion } from 'framer-motion'
import { X, Shield, AlertTriangle } from 'lucide-react'
import './TermsModal.css'

const TermsModal = ({ onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="terms-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="header-title">
            <Shield className="shield-icon" />
            <h2>Terms & Conditions</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          <div className="warning-section">
            <AlertTriangle className="warning-icon" />
            <p>By using our services, you agree to these terms. Please read carefully.</p>
          </div>

          <div className="terms-content">
            <section>
              <h3>1. Service Description</h3>
              <p>KP Kundli Services provides astrological consultation and kundli preparation services based on Krishnamurti Paddhati (KP) system. Our services are for entertainment and guidance purposes only.</p>
            </section>

            <section>
              <h3>2. Payment & Pricing</h3>
              <p>• Service fee: ₹21 per kundli (non-refundable)</p>
              <p>• Payment must be completed before service delivery</p>
              <p>• All transactions are final and non-reversible</p>
              <p>• Prices may change without prior notice</p>
            </section>

            <section>
              <h3>3. Service Delivery</h3>
              <p>• Kundli will be delivered within 24 hours via email</p>
              <p>• Delivery time is an estimate, not a guarantee</p>
              <p>• We are not liable for email delivery failures</p>
              <p>• Customer must provide accurate birth details</p>
            </section>

            <section>
              <h3>4. Disclaimer & Limitation of Liability</h3>
              <p><strong>IMPORTANT:</strong> Astrology is for guidance only. We make no guarantees about:</p>
              <p>• Accuracy of predictions or interpretations</p>
              <p>• Life outcomes based on astrological advice</p>
              <p>• Financial, medical, or legal decisions made using our services</p>
              <p><strong>LIMITATION:</strong> Our total liability is limited to the service fee paid (₹21). We are not responsible for any indirect, consequential, or punitive damages.</p>
            </section>

            <section>
              <h3>5. User Responsibilities</h3>
              <p>• Provide accurate birth information</p>
              <p>• Use services for personal guidance only</p>
              <p>• Not redistribute or resell our kundlis</p>
              <p>• Consult professionals for medical/legal/financial decisions</p>
            </section>

            <section>
              <h3>6. Intellectual Property</h3>
              <p>All kundli formats, interpretations, and content are proprietary to KP Kundli Services. Users receive personal use rights only.</p>
            </section>

            <section>
              <h3>7. Privacy & Data Protection</h3>
              <p>• We collect minimal personal information for service delivery</p>
              <p>• Birth details are used solely for kundli preparation</p>
              <p>• We do not share personal information with third parties</p>
              <p>• Data is stored securely and deleted after service completion</p>
            </section>

            <section>
              <h3>8. Refund Policy</h3>
              <p><strong>NO REFUNDS:</strong> All sales are final. Due to the personalized nature of astrological services, we do not offer refunds under any circumstances.</p>
            </section>

            <section>
              <h3>9. Governing Law</h3>
              <p>These terms are governed by Indian law. Any disputes will be resolved in Indian courts only.</p>
            </section>

            <section>
              <h3>10. Contact Information</h3>
              <p>For questions: contact@kpkundli.com</p>
              <p>Response time: 24-48 hours</p>
            </section>
          </div>

          <div className="acceptance-footer">
            <div className="last-updated">
              <small>Last updated: August 14, 2025</small>
            </div>
            <button className="accept-btn" onClick={onClose}>
              I Understand & Accept
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TermsModal
