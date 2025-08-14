import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import KundliFormModal from './components/KundliFormModal'
import SuccessAnimation from './components/SuccessAnimation'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showFormModal, setShowFormModal] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleOpenFormModal = () => {
    setShowFormModal(true)
  }

  const handleCloseFormModal = () => {
    setShowFormModal(false)
  }

  const handleRestart = () => {
    setShowSuccess(false)
    setShowFormModal(false)
  }

  return (
    <div className="App">
      <div className="cosmic-bg"></div>
      
      <Header />
      
      <main>
        <Hero onOpenFormModal={handleOpenFormModal} />
      </main>
      
      <Footer />
      
      <AnimatePresence>
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
