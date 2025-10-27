import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Book, Video, FileText, TrendingUp, Search, Sparkles } from 'lucide-react'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const subjects = [
    { name: 'Physics', id: 'physics', curriculum: 'necta', year: 'year-10' },
    { name: 'Chemistry', id: 'chemistry', curriculum: 'necta', year: 'year-10' },
    { name: 'Geography', id: 'geography', curriculum: 'necta', year: 'year-10' },
    { name: 'Computer Science', id: 'computer-science', curriculum: 'necta', year: 'year-10' },
    { name: 'ICT', id: 'ict', curriculum: 'necta', year: 'year-10' },
    { name: 'Accounting', id: 'accounting', curriculum: 'necta', year: 'year-10' },
    { name: 'Business', id: 'business', curriculum: 'necta', year: 'year-10' },
    { name: 'Swahili', id: 'swahili', curriculum: 'necta', year: 'year-10' },
  ]

  const handleSearch = () => {
    if (!searchQuery.trim()) return
    
    const lowerQuery = searchQuery.toLowerCase()
    const found = subjects.find(subject => 
      subject.name.toLowerCase().includes(lowerQuery) ||
      lowerQuery.includes(subject.name.toLowerCase())
    )
    
    if (found) {
      navigate(`/subject/${found.curriculum}/${found.year}/${found.id}`)
    } else {
      // Default to NECTA page if not found
      navigate('/necta')
    }
  }

  return (
    <>
      {/* AI-Powered Search Section */}
      <section className="bg-gradient-to-r from-purple-600 via-primary-600 to-secondary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="text-white mr-2" size={32} />
              <h2 className="text-3xl font-bold text-white">AI-Powered Smart Search</h2>
            </div>
            <p className="text-white/90 text-lg">
              Find exactly what you're studying for instantly
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full p-2 shadow-xl">
            <Search className="text-gray-400 ml-4" size={24} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search for any subject (e.g., Physics, Chemistry, Geography...)"
              className="flex-1 px-4 py-3 text-lg border-none outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
            >
              Search
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/80 text-sm">
              Try searching: "Physics notes", "Chemistry videos", "Geography past papers"
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Minds Through
              <span className="text-primary-600"> Quality Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Access comprehensive educational resources for NECTA and Cambridge curricula
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/necta"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition shadow-lg"
              >
                Explore NECTA
              </Link>
              <Link
                to="/cambridge"
                className="bg-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary-700 transition shadow-lg"
              >
                Explore Cambridge
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="resources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose BrainSpace?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive resources designed for academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Practice Papers</h3>
              <p className="text-gray-600">
                Access past papers and practice questions for both curricula
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Lessons</h3>
              <p className="text-gray-600">
                Engaging video content covering key topics and concepts
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Notes</h3>
              <p className="text-gray-600">
                Well-structured notes and summaries for easy revision
              </p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition">
              <div className="bg-secondary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-secondary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Monitor your learning progress and identify areas for improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

