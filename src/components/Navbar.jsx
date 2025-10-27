import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, BookOpen } from 'lucide-react'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/BRAINSPACE LOGO WITH MOTO.jpg" 
              alt="BrainSpace Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-primary-600">BrainSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/home" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Home
            </Link>
            <Link to="/necta" className="text-gray-700 hover:text-primary-600 font-medium transition">
              NECTA
            </Link>
            <Link to="/cambridge" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Cambridge
            </Link>
            <Link to="/home#resources" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Resources
            </Link>
            <Link to="/home#contact" className="text-gray-700 hover:text-primary-600 font-medium transition">
              Contact
            </Link>
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
              localStorage.getItem('userPlan') === 'premium'
                ? 'bg-yellow-400 text-gray-900'
                : 'bg-gray-200 text-gray-700'
            }`}>
              {localStorage.getItem('userPlan') === 'premium' ? 'PREMIUM' : 'FREE'}
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/home" 
                className="text-gray-700 hover:text-primary-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/necta" 
                className="text-gray-700 hover:text-primary-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                NECTA
              </Link>
              <Link 
                to="/cambridge" 
                className="text-gray-700 hover:text-primary-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cambridge
              </Link>
              <Link 
                to="/home#resources" 
                className="text-gray-700 hover:text-primary-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/home#contact" 
                className="text-gray-700 hover:text-primary-600 font-medium transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  localStorage.getItem('userPlan') === 'premium'
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {localStorage.getItem('userPlan') === 'premium' ? 'PREMIUM' : 'FREE'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

