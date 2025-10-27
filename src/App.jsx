import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NECTA from './pages/NECTA'
import Cambridge from './pages/Cambridge'
import SubjectPage from './pages/SubjectPage'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'

function App() {
  const userPlan = localStorage.getItem('userPlan')

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {userPlan && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            {userPlan ? (
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/necta" element={<NECTA />} />
                <Route path="/cambridge" element={<Cambridge />} />
                <Route path="/subject/:curriculum/:year/:subject" element={<SubjectPage />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/" replace />} />
            )}
          </Routes>
        </main>
        {userPlan && <Footer />}
        {userPlan && <AIAssistant />}
      </div>
    </Router>
  )
}

export default App

