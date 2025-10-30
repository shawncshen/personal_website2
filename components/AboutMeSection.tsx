'use client'

import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok } from 'react-icons/fa'

export default function AboutMeSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'About Me'

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
      id="about"
      className="w-full bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
          {displayedText}
        </h2>

        {/* Content Container - Same layout on all devices */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Introduction */}
            <div className="mb-6">
              <p className="text-base md:text-lg mb-4">Hi!</p>
              <p className="text-base md:text-lg mb-4">
                My name is Shawn and I'm currently living in Georgia Tech's first-ever{' '}
                <a href="https://www.cc.gatech.edu/news/computing-student-launches-first-ever-hacker-house-campus" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  Hacker House!
                </a>
              </p>
            </div>

            {/* Story */}
            <div className="mb-6">
              <p className="text-base md:text-lg">
                Growing up, I've faced many challenges. From moving to the US at a young age and
                adapting to big cultural changes, I've learned that it's okay to feel uncomfortable.
                This semester, I'm hoping to step outside my comfort zone and build products that
                make a positive impact on those around me.
              </p>
            </div>

            {/* Fun Facts */}
            <div className="mb-6">
              <p className="font-semibold text-base md:text-lg mb-2">Fun facts about me:</p>
              <p className="text-base md:text-lg">
                I love playing basketball and performing card tricks! In high school, I started a magic
                club, but unfortunately had to shut it down due to Covid. That's when I started to
                perform on social media. I now have 1.6 million TikTok followers, which eventually led
                to a TEDxTalk about on media algorithms!
              </p>
            </div>

            {/* Sign Off */}
            <div className="mb-6">
              <p className="font-semibold text-base md:text-lg">Best,</p>
              <p className="font-semibold text-base md:text-lg">Shawn</p>
            </div>

            {/* Social Media Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/shawncshen/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: '#0A66C2',
                }}
              >
                <div className="flex items-center justify-center px-3 py-2.5" style={{ background: 'rgba(0,0,0,0.2)' }}>
                  <FaLinkedin size={18} />
                </div>
                <span className="px-4 py-2.5">LinkedIn</span>
              </a>
              <a
                href="https://github.com/shawncshen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: '#333333',
                }}
              >
                <div className="flex items-center justify-center px-3 py-2.5" style={{ background: 'rgba(0,0,0,0.3)' }}>
                  <FaGithub size={18} />
                </div>
                <span className="px-4 py-2.5">GitHub</span>
              </a>
              <a
                href="https://instagram.com/shawn.shen717"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #833AB4, #FD1D1D)',
                }}
              >
                <div className="flex items-center justify-center px-3 py-2.5" style={{ background: 'rgba(0,0,0,0.15)' }}>
                  <FaInstagram size={18} />
                </div>
                <span className="px-4 py-2.5">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@shawn_shen12?_t=ZT-8zvHXiBe1YT&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-white rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all duration-300"
                style={{
                  background: '#000000',
                }}
              >
                <div className="flex items-center justify-center px-3 py-2.5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <FaTiktok size={18} />
                </div>
                <span className="px-4 py-2.5">TikTok</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex items-center justify-center group">
            <div className="relative w-4/5">
              <img
                src="/images/library.jpg"
                alt="Shawn in library"
                className="w-full h-auto rounded-lg object-contain"
              />
              <div
                className="absolute inset-0 rounded-lg pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0) 0%, rgba(173, 216, 230, 0.4) 80%)',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div
          className="mt-12 md:mt-16 bg-gray-800 text-white rounded-lg p-8 md:p-12 transition-all duration-1000 hover:shadow-2xl hover:bg-gray-700"
          style={{
            animation: 'slideInUp 0.8s ease-out'
          }}
        >
          <blockquote
            className="text-xl md:text-2xl lg:text-3xl italic text-center font-light"
            style={{
              animation: 'fadeIn 1.2s ease-out 0.3s both'
            }}
          >
            "never give up on my goals and fight for them every way possible."
          </blockquote>
          <p
            className="text-center mt-6 text-base md:text-lg transition-all duration-300 hover:text-blue-300"
            style={{
              animation: 'fadeIn 1.4s ease-out 0.6s both'
            }}
          >
            — Shawn Shen
          </p>
        </div>

        <style>{`
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </section>
  )
}
