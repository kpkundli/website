import { motion } from 'framer-motion'
import { X, Shield, Lock, Eye } from 'lucide-react'
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
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <div className="header-title">
            <Lock className="lock-icon" />
            <h2>Privacy Policy</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          <div className="privacy-intro">
            <Eye className="eye-icon" />
            <p>Your privacy is important to us. This policy explains how we handle your data.</p>
          </div>

          <div className="privacy-content">
            <section>
              <h3>1. Information We Collect</h3>
              <div className="info-grid">
                <div className="info-card">
                  <h4>Personal Information</h4>
                  <ul>
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Date of birth</li>
                    <li>Time of birth</li>
                    <li>Place of birth</li>
                    <li>Gender</li>
                  </ul>
                </div>
                <div className="info-card">
                  <h4>Technical Information</h4>
                  <ul>
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Usage analytics</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3>2. How We Use Your Information</h3>
              <div className="purpose-list">
                <div className="purpose-item">
                  <Shield size={20} />
                  <div>
                    <h4>Service Delivery</h4>
                    <p>To prepare and deliver your personalized kundli</p>
                  </div>
                </div>
                <div className="purpose-item">
                  <Shield size={20} />
                  <div>
                    <h4>Communication</h4>
                    <p>To send your kundli and respond to inquiries</p>
                  </div>
                </div>
                <div className="purpose-item">
                  <Shield size={20} />
                  <div>
                    <h4>Service Improvement</h4>
                    <p>To enhance our services and user experience</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3>3. Data Protection & Security</h3>
              <div className="security-features">
                <div className="security-item">
                  <div className="security-icon">🔒</div>
                  <h4>Encryption</h4>
                  <p>All data is encrypted in transit and at rest</p>
                </div>
                <div className="security-item">
                  <div className="security-icon">🛡️</div>
                  <h4>Secure Storage</h4>
                  <p>Data stored on secure, protected servers</p>
                </div>
                <div className="security-item">
                  <div className="security-icon">🗑️</div>
                  <h4>Data Deletion</h4>
                  <p>Personal data deleted after service completion</p>
                </div>
              </div>
            </section>

            <section>
              <h3>4. Data Sharing & Third Parties</h3>
              <div className="sharing-policy">
                <div className="policy-card no-sharing">
                  <h4>❌ We DO NOT Share:</h4>
                  <ul>
                    <li>Personal birth details</li>
                    <li>Email addresses</li>
                    <li>Kundli contents</li>
                    <li>Any personal information</li>
                  </ul>
                </div>
                <div className="policy-card limited-sharing">
                  <h4>⚠️ Limited Technical Sharing:</h4>
                  <ul>
                    <li>Payment processors (for transactions only)</li>
                    <li>Email services (for delivery only)</li>
                    <li>Analytics services (anonymized data only)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3>5. Your Rights</h3>
              <div className="rights-list">
                <div className="right-item">
                  <strong>Access:</strong> Request copies of your personal data
                </div>
                <div className="right-item">
                  <strong>Correction:</strong> Request correction of inaccurate data
                </div>
                <div className="right-item">
                  <strong>Deletion:</strong> Request deletion of your data
                </div>
                <div className="right-item">
                  <strong>Portability:</strong> Request transfer of your data
                </div>
                <div className="right-item">
                  <strong>Objection:</strong> Object to processing of your data
                </div>
              </div>
            </section>

            <section>
              <h3>6. Data Retention</h3>
              <p><strong>Automatic Deletion:</strong> All personal information is automatically deleted within 30 days after kundli delivery unless you request otherwise.</p>
              <p><strong>Transaction Records:</strong> Payment records are retained for 3 years for legal compliance.</p>
            </section>

            <section>
              <h3>7. Cookies & Tracking</h3>
              <p>We use minimal cookies for:</p>
              <ul>
                <li>Session management</li>
                <li>Security features</li>
                <li>Basic analytics (anonymized)</li>
              </ul>
              <p>No tracking or advertising cookies are used.</p>
            </section>

            <section>
              <h3>8. Contact for Privacy Matters</h3>
              <div className="contact-info">
                <p><strong>Email:</strong> privacy@kpkundli.com</p>
                <p><strong>Response Time:</strong> 24-48 hours</p>
                <p><strong>Data Controller:</strong> KP Kundli Services</p>
              </div>
            </section>
          </div>

          <div className="acceptance-footer">
            <div className="last-updated">
              <small>Last updated: August 14, 2025</small>
            </div>
            <button className="accept-btn" onClick={onClose}>
              I Understand
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default PrivacyModal
