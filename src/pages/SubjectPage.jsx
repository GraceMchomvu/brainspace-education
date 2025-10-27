import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, FileText, Video, Book, Download, CheckCircle, Lock, Crown } from 'lucide-react'

const SubjectPage = () => {
  const { curriculum, year, subject } = useParams()
  const [activeTab, setActiveTab] = useState('notes')
  const userPlan = localStorage.getItem('userPlan') || 'free'
  const isPremium = userPlan === 'premium'

  const subjectNames = {
    swahili: 'Swahili',
    geography: 'Geography',
    'computer-science': 'Computer Science',
    ict: 'ICT',
    physics: 'Physics',
    chemistry: 'Chemistry',
    accounting: 'Accounting',
    business: 'Business',
  }

  const yearNames = {
    'year-10': 'Year 10',
    'year-11': 'Year 11',
    'year-12': 'Year 12',
    'year-13': 'Year 13',
  }

  const curriculumNames = {
    necta: 'NECTA',
    cambridge: 'Cambridge',
  }

  const subjectName = subjectNames[subject] || subject
  const yearName = yearNames[year] || year
  const curriculumName = curriculumNames[curriculum] || curriculum

  const mockResources = {
    notes: [
      { id: 1, title: 'Introduction to ' + subjectName, type: 'PDF', size: '2.4 MB' },
      { id: 2, title: 'Core Concepts and Principles', type: 'PDF', size: '3.1 MB' },
      { id: 3, title: 'Advanced Topics', type: 'PDF', size: '2.8 MB' },
      { id: 4, title: 'Revision Guide', type: 'PDF', size: '1.9 MB' },
    ],
    videos: [
      { id: 1, title: 'Topic 1: Fundamentals', duration: '45:32', views: '1.2k' },
      { id: 2, title: 'Topic 2: Applications', duration: '38:15', views: '956' },
      { id: 3, title: 'Topic 3: Problem Solving', duration: '52:10', views: '1.5k' },
      { id: 4, title: 'Exam Preparation Tips', duration: '25:45', views: '2.1k' },
    ],
    papers: [
      { id: 1, title: '2019 Past Paper', type: 'PDF', size: '1.2 MB' },
      { id: 2, title: '2020 Past Paper', type: 'PDF', size: '1.4 MB' },
      { id: 3, title: '2021 Past Paper', type: 'PDF', size: '1.3 MB' },
      { id: 4, title: '2022 Past Paper', type: 'PDF', size: '1.5 MB' },
      { id: 5, title: '2023 Past Paper', type: 'PDF', size: '1.3 MB' },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to={`/${curriculum}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to {curriculumName}
        </Link>

        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-sm font-semibold rounded-full mb-2">
              {curriculumName}
            </span>
            <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full ml-2">
              {yearName}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            {subjectName}
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive resources for {subjectName} in {curriculumName} {yearName}
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('notes')}
              className={`flex items-center px-6 py-4 font-medium transition ${
                activeTab === 'notes'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Book size={20} className="mr-2" />
              Study Notes
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center px-6 py-4 font-medium transition relative ${
                activeTab === 'videos'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Video size={20} className="mr-2" />
              Video Lessons
              {!isPremium && (
                <Lock size={16} className="ml-2 text-amber-500" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('papers')}
              className={`flex items-center px-6 py-4 font-medium transition relative ${
                activeTab === 'papers'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText size={20} className="mr-2" />
              Past Papers
              {!isPremium && (
                <Lock size={16} className="ml-2 text-amber-500" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'notes' && (
              <div className="space-y-4">
                {mockResources.notes.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center">
                      <FileText className="text-primary-600 mr-3" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.type} • {item.size}</p>
                      </div>
                    </div>
                    <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      <Download size={20} className="mr-2" />
                      Download
                    </button>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'videos' && (
              <>
                {isPremium ? (
                  <div className="grid md:grid-cols-2 gap-4">
                    {mockResources.videos.map((item) => (
                      <div
                        key={item.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition"
                      >
                        <div className="bg-gradient-to-br from-primary-100 to-secondary-100 h-32 flex items-center justify-center">
                          <Video className="text-primary-600" size={48} />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <span className="mr-4">⏱ {item.duration}</span>
                            <span>👁 {item.views} views</span>
                          </div>
                          <button className="mt-3 text-primary-600 hover:text-primary-700 font-medium text-sm">
                            Watch Now →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-12 max-w-2xl mx-auto">
                      <Crown className="text-amber-500 mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Unlock Premium Content
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Upgrade to premium to access all video lessons and exclusive content
                      </p>
                      <Link
                        to="/"
                        onClick={() => {
                          localStorage.setItem('userPlan', 'premium')
                          window.location.reload()
                        }}
                        className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                      >
                        Upgrade to Premium
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === 'papers' && (
              <>
                {isPremium ? (
                  <div className="space-y-4">
                    {mockResources.papers.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                      >
                        <div className="flex items-center">
                          <CheckCircle className="text-green-600 mr-3" size={24} />
                          <div>
                            <h3 className="font-semibold text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.type} • {item.size}</p>
                          </div>
                        </div>
                        <button className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                          <Download size={20} className="mr-2" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-12 max-w-2xl mx-auto">
                      <Crown className="text-amber-500 mx-auto mb-4" size={64} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Unlock Premium Content
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Upgrade to premium to access all past papers and practice exams
                      </p>
                      <Link
                        to="/"
                        onClick={() => {
                          localStorage.setItem('userPlan', 'premium')
                          window.location.reload()
                        }}
                        className="inline-block bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition"
                      >
                        Upgrade to Premium
                      </Link>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubjectPage

