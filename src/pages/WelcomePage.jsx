import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Star, Gift } from 'lucide-react'

const WelcomePage = () => {
  const navigate = useNavigate()

  const handleFreeClick = () => {
    localStorage.setItem('userPlan', 'free')
    navigate('/home')
  }

  const handlePremiumClick = () => {
    localStorage.setItem('userPlan', 'premium')
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 rounded-full bg-primary-600 flex items-center justify-center">
              <BookOpen className="text-white" size={40} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-primary-600">BrainSpace</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your gateway to quality education for NECTA and Cambridge curricula
          </p>
        </div>

        {/* Choice Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Free Version */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border-2 border-gray-100 hover:border-primary-200">
            <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Gift className="text-primary-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Version</h2>
            <p className="text-gray-600 mb-6">
              Explore our educational platform with limited access to resources
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-gray-700">
                <span className="text-primary-600 mr-2">✓</span>
                Access to basic study materials
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-primary-600 mr-2">✓</span>
                Limited practice papers
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-primary-600 mr-2">✓</span>
                Basic video lessons
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-primary-600 mr-2">✓</span>
                Sample notes
              </li>
            </ul>
            <button
              onClick={handleFreeClick}
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg"
            >
              Get Started Free
            </button>
          </div>

          {/* Premium Version */}
          <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border-2 border-primary-300 relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 rounded-bl-lg font-bold">
              RECOMMENDED
            </div>
            <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6">
              <Star className="text-primary-600" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Premium Version</h2>
            <p className="text-primary-100 mb-6">
              Unlock the full potential with complete access to all resources
            </p>
            <ul className="space-y-3 mb-8 text-white">
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Unlimited access to all content
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Complete past papers library
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Full video lesson library
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Comprehensive study notes
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Progress tracking
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Download materials offline
              </li>
              <li className="flex items-center">
                <span className="text-yellow-300 mr-2">✓</span>
                Priority support
              </li>
            </ul>
            <button
              onClick={handlePremiumClick}
              className="w-full bg-white text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition shadow-lg"
            >
              Unlock Premium
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 mt-8 text-sm">
          You can upgrade or downgrade your plan at any time
        </p>
      </div>
    </div>
  )
}

export default WelcomePage
