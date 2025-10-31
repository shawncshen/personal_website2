'use client'

import { useState, useEffect } from 'react'

export default function EducationSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Education'

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const typeCharacter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeCharacter, 100) // 100ms per character for faster typing
      } else {
        // Wait 4 seconds before restarting the animation (to reach 5 seconds total)
        timeoutId = setTimeout(() => {
          currentIndex = 0
          setDisplayedText('')
          typeCharacter()
        }, 4000)
      }
    }

    typeCharacter()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section
      id="education"
      className="w-full bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
          {displayedText}
        </h2>

        {/* Modern Card Container */}
        <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-8 md:p-12">
          {/* Top Section - Logo, School Info, and Date */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8 pb-8 border-b border-gray-200">
            {/* Left - Logo and School Info */}
            <div className="flex gap-4 items-start flex-1">
              {/* Georgia Tech Logo */}
              <img
                src="/images/gatech-logo.png"
                alt="Georgia Tech Logo"
                className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 object-contain"
                style={{
                  animation: 'slideInLeft 1s ease-out 0.2s both'
                }}
              />

              {/* School and Degree Info */}
              <div>
                <h3 className="text-4xl md:text-4xl font-bold mb-1 text-gray-900">
                  Georgia Institute of Technology
                </h3>
                <p className="text-gray-600 text-lg md:text-xl">
                  BS in Computer Science (Information Networks & AI)
                </p>
              </div>
            </div>

            {/* Right - Expected Graduation and GPA */}
            <div className="text-right flex-shrink-0">
              <p className="text-gray-500 text-base italic mb-2">
                <span className="font-bold">Expected Graduation:</span> Dec 2026
              </p>
              <p className="text-gray-500 text-base italic">
                <span className="font-bold">GPA:</span> 3.7
              </p>
            </div>
          </div>

          {/* Bullet Points */}
          <div className="space-y-5 mb-8">
            <div className="flex gap-4">
              <span className="text-gray-900 flex-shrink-0 text-xl">▸</span>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-bold text-gray-900">Specialization:</span> Intelligence & Information Internetworks
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-900 flex-shrink-0 text-xl">▸</span>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-bold text-gray-900">Relevant Coursework:</span> DSA, OOP, Algorithms, Systems and Networks, Linear Algebra, Database, Machine Learning
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-900 flex-shrink-0 text-xl">▸</span>
              <div className="text-lg md:text-xl text-gray-700">
                <p className="mb-2">
                  <span className="font-bold text-gray-900">Leadership & Activities:</span> CodeTW (Founder & President), Hacker House Founding Member, HKSA Vice President,
                </p>
                <p style={{ paddingLeft: '18ch' }}>Chinese Student Association (Former Dynasty Leader), Badminton Club</p>
              </div>
            </div>
          </div>

          {/* Images Gallery */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-6">
              Fun times at Georgia Tech!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Image 1 - Study Abroad */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                  style={{
                    backgroundImage: 'url(/images/study-abroad.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <p className="text-center text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                  Europe Study Abroad
                </p>
              </div>

              {/* Image 2 - Me & Vic */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                  style={{
                    backgroundImage: 'url(/images/mevic.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <p className="text-center text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                  Badminton Tournament
                </p>
              </div>

              {/* Image 3 - HKSA CSA */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div
                  className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105"
                  style={{
                    backgroundImage: 'url(/images/hksa-csa.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <p className="text-center text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">
                  Hot Pot Social
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
