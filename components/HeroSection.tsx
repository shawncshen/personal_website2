'use client'

import { useState, useEffect } from 'react'

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'SHAWN SHEN'

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const typeCharacter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeCharacter, 250) // 250ms per character
      } else {
        // Pause for 1.5 seconds after completion
        timeoutId = setTimeout(() => {
          currentIndex = 0
          setDisplayedText('')
          typeCharacter()
        }, 1500)
      }
    }

    typeCharacter()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/aws-room.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to ensure text is readable */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 md:px-8">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 min-h-20 text-white opacity-90" style={{
          textShadow: '-2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black, -2px 0 0 black, 2px 0 0 black, 0 -2px 0 black, 0 2px 0 black, 0 4px 8px rgba(0, 0, 0, 0.8)',
        }}>
          {displayedText}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-4 font-light">
          MY PERSONAL PORTFOLIO!
        </p>
        <div className="text-sm md:text-base lg:text-lg opacity-75 flex flex-wrap justify-center">
          <a href="#about" className="hover:opacity-100 transition-opacity">About Me</a>
          <span className="mx-1 md:mx-2">|</span>
          <a href="#education" className="hover:opacity-100 transition-opacity">Education</a>
          <span className="mx-1 md:mx-2">|</span>
          <a href="#work" className="hover:opacity-100 transition-opacity">Work Experiences</a>
          <span className="mx-1 md:mx-2">|</span>
          <a href="#social" className="hover:opacity-100 transition-opacity">My Social Media Journey</a>
          <span className="mx-1 md:mx-2">|</span>
          <a href="#friends" className="hover:opacity-100 transition-opacity">Friends & Family</a>
          <span className="mx-1 md:mx-2">|</span>
          <a href="#expand" className="hover:opacity-100 transition-opacity">Expand My Journey</a>
        </div>
      </div>
    </section>
  )
}
