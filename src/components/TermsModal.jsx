import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import './TermsModal.css'

const TermsModal = ({ onClose, onAccept }) => {
  const handleAccept = () => {
    onAccept?.()
    onClose?.()
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
        className="terms-modal"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header minimal">
          <h2>Terms & Conditions</h2>
          <button className="close-btn" onClick={onClose} aria-label="Close">
            <X size={20} />
          </button>
        </div>

        <div className="modal-content">
          <div className="terms-content simple">
            <section>
              <h3>1. Scope of Service</h3>
              <p>KP Kundli provides preparation of KP (Krishnamurti Paddhati) kundli charts strictly based on the birth details you submit. The service does not include interpretations, predictions, remedies, counselling, or any advisory component.</p>
            </section>
            <section>
              <h3>2. Ordering & Delivery</h3>
              <p>Upon receipt of complete and accurate details and the applicable fee, we endeavour to deliver the kundli by email within 24 hours. Delivery timelines are indicative and may vary due to operational or technical reasons (including email delivery issues outside our control).</p>
            </section>
            <section>
              <h3>3. Fees & Refunds</h3>
              <p>The fee is ₹21 per kundli. As the output is a personalized digital file, all payments are final and non‑refundable.</p>
            </section>
            <section>
              <h3>4. Your Responsibilities</h3>
              <p>You are responsible for the accuracy and completeness of the submitted birth details and for providing a valid, accessible email address. Please check your spam/junk folders and whitelist our email if needed.</p>
            </section>
            <section>
              <h3>5. Intellectual Property & Use</h3>
              <p>The kundli format and layout are provided for your personal, non‑commercial use. You agree not to reproduce, distribute, or resell our materials.</p>
            </section>
            <section>
              <h3>6. Disclaimer & Limitation of Liability</h3>
              <p>The service comprises chart preparation only and is provided on an “as is” and “as available” basis without warranties. To the maximum extent permitted by law, our total aggregate liability for any claim arising from the service shall not exceed the amount you paid for that kundli. We are not liable for indirect, incidental, special, or consequential losses, nor for failures attributable to third‑party providers (including email services).</p>
            </section>
            <section>
              <h3>7. Privacy</h3>
              <p>We handle your information as described in our Privacy Policy. In brief, we do not maintain customer databases; form submissions are relayed via a third‑party form service for email delivery. Please review the Privacy Policy for details.</p>
            </section>
            <section>
              <h3>8. Governing Law</h3>
              <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of competent courts in India.</p>
            </section>
            <section>
              <h3>9. Contact</h3>
              <p>Questions or concerns: contact@kpkundli.com</p>
            </section>
          </div>

          <div className="acceptance-footer">
            <div className="last-updated"><small>Last updated: August 14, 2025</small></div>
            <button className="accept-btn" onClick={handleAccept}>I Accept</button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TermsModal
