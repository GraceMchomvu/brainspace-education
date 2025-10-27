import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Globe, Atom, Calculator, Computer, TabletSmartphone, Building2, Languages } from 'lucide-react'

const Cambridge = () => {
  const [selectedYear, setSelectedYear] = useState('all')

  const subjects = [
    { id: 'swahili', name: 'Swahili', icon: Languages, color: 'bg-blue-500' },
    { id: 'geography', name: 'Geography', icon: Globe, color: 'bg-green-500' },
    { id: 'computer-science', name: 'Computer Science', icon: Computer, color: 'bg-purple-500' },
    { id: 'ict', name: 'ICT', icon: TabletSmartphone, color: 'bg-indigo-500' },
    { id: 'physics', name: 'Physics', icon: Atom, color: 'bg-red-500' },
    { id: 'chemistry', name: 'Chemistry', icon: BookOpen, color: 'bg-orange-500' },
    { id: 'accounting', name: 'Accounting', icon: Calculator, color: 'bg-teal-500' },
    { id: 'business', name: 'Business', icon: Building2, color: 'bg-yellow-500' },
  ]

  const years = [
    { id: 'all', name: 'All Years' },
    { id: 'year-10', name: 'Year 10 (IGCSE)' },
    { id: 'year-11', name: 'Year 11 (IGCSE)' },
    { id: 'year-12', name: 'Year 12 (AS Level)' },
    { id: 'year-13', name: 'Year 13 (A Level)' },
  ]

  const filteredSubjects = selectedYear === 'all' 
    ? subjects 
    : subjects

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cambridge Curriculum
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            International education resources and assessment materials
          </p>
        </div>

        {/* Year Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {years.map((year) => (
              <button
                key={year.id}
                onClick={() => setSelectedYear(year.id)}
                className={`px-6 py-2 rounded-lg font-medium transition ${
                  selectedYear === year.id
                    ? 'bg-secondary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {year.name}
              </button>
            ))}
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSubjects.map((subject) => {
            const IconComponent = subject.icon
            return (
              <Link
                key={subject.id}
                to={`/subject/cambridge/${selectedYear === 'all' ? 'year-10' : selectedYear}/${subject.id}`}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 group"
              >
                <div className={`${subject.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {subject.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Access all resources for {subject.name}
                </p>
              </Link>
            )
          })}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            About Cambridge
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Cambridge International provides internationally recognized qualifications for students 
            aged 5-19. Our Cambridge curriculum resources cover both IGCSE (International General 
            Certificate of Secondary Education) for Years 10-11 and A-Levels (Advanced Levels) 
            for Years 12-13. Each subject is aligned with Cambridge's international standards and 
            includes syllabi-specific materials, past papers, specimen papers, and comprehensive 
            study guides to help students achieve excellence in their examinations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cambridge

