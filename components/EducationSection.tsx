'use client'

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
          Education
        </h2>

        {/* Modern Card Container */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white"
          style={{
            borderTop: '5px solid #B3A369'
          }}
        >
          {/* Content Wrapper */}
          <div className="flex flex-col lg:flex-row gap-0">
            {/* Left - Text Info */}
            <div className="flex-1 p-8 md:p-12 lg:border-r border-gray-200">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                Georgia Institute of Technology
              </h3>
              <p className="text-lg text-blue-600 font-semibold mb-6">
                BS in Computer Science (Information Networks & AI)
              </p>

              {/* Info Grid */}
              <div className="space-y-6">
                {/* GPA */}
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                    Academic Achievement
                  </p>
                  <p className="text-xl font-bold text-gray-900">GPA: 3.8 / 4.0</p>
                </div>

                {/* Courses */}
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                    Favorite Courses
                  </p>
                  <p className="text-base text-gray-700">
                    Data Structures & Algorithms, AI, ML, Database, System Networks, C Networking
                  </p>
                </div>

                {/* Leadership */}
                <div className="pb-6 border-b border-gray-200">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                    Leadership
                  </p>
                  <p className="text-base text-gray-700">
                    CodeTW (Founder & President), HKSA Vice President, Chinese Student Association
                  </p>
                </div>

                {/* Extracurricular */}
                <div className="pb-2">
                  <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">
                    Extracurricular
                  </p>
                  <p className="text-base text-gray-700">
                    Hacker House Founding Member, AI Researcher, Badminton Club
                  </p>
                </div>
              </div>

              {/* Expected Grad Badge */}
              <div className="mt-8 inline-block bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 text-gray-900 px-6 py-3 rounded-lg font-bold text-base">
                Expected Grad: Dec 2026
              </div>
            </div>

            {/* Right - Images Gallery */}
            <div className="flex-1 p-8 md:p-12">
              <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-6">
                Experience Highlights
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
      </div>
    </section>
  )
}
