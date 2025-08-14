import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import KundliFormModal from './components/KundliFormModal'
import SuccessAnimation from './components/SuccessAnimation'
import Footer from './components/Footer'
import TermsModal from './components/TermsModal'
import PrivacyModal from './components/PrivacyModal'
import './App.css'

function App() {
  // Modals
  const [showFormModal, setShowFormModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)

  useEffect(() => {
    // Show Terms on first visit until accepted
    try {
      const accepted = localStorage.getItem('kp_terms_accepted')
      if (!accepted) {
        setShowTerms(true)
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  const handleAcceptTerms = () => {
    try {
      localStorage.setItem('kp_terms_accepted', 'true')
    } catch {
      // ignore storage errors
    }
    setShowTerms(false)
  }

  const handleOpenFormModal = () => setShowFormModal(true)
  const handleCloseFormModal = () => setShowFormModal(false)

  const handleRestart = () => {
    setShowSuccess(false)
    setShowFormModal(false)
  }

  return (
    <div className="app">
      {/* Header */}
      <Header 
        onOpenTerms={() => setShowTerms(true)} 
        onOpenPrivacy={() => setShowPrivacy(true)} 
      />

      {/* Page */}
      <main>
        <Hero onOpenFormModal={handleOpenFormModal} />
      </main>

      {/* Footer */}
      <Footer 
        onOpenTerms={() => setShowTerms(true)} 
        onOpenPrivacy={() => setShowPrivacy(true)} 
      />

      {/* Global Modals */}
      <AnimatePresence>
        {showTerms && (
          <TermsModal onAccept={handleAcceptTerms} onClose={() => setShowTerms(false)} />
        )}
        {showPrivacy && (
          <PrivacyModal onClose={() => setShowPrivacy(false)} />
        )}
        {showFormModal && (
          <KundliFormModal 
            isOpen={showFormModal}
            onClose={handleCloseFormModal}
          />
        )}
        {showSuccess && (
          <SuccessAnimation onRestart={handleRestart} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
