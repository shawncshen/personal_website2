'use client'

import { useState, useEffect } from 'react'

export default function FriendsAndFamilySection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Friends & Family'
  const [displayedBottomText, setDisplayedBottomText] = useState('')
  const bottomText = 'Thank you for reading this far!'

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const typeCharacter = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeCharacter, 100) // 100ms per character
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

  useEffect(() => {
    let currentIndex = 0
    let timeoutId: NodeJS.Timeout

    const typeCharacter = () => {
      if (currentIndex < bottomText.length) {
        setDisplayedBottomText(bottomText.substring(0, currentIndex + 1))
        currentIndex++
        timeoutId = setTimeout(typeCharacter, 100) // 100ms per character
      } else {
        // Wait 4 seconds before restarting the animation (to reach 5 seconds total)
        timeoutId = setTimeout(() => {
          currentIndex = 0
          setDisplayedBottomText('')
          typeCharacter()
        }, 4000)
      }
    }

    typeCharacter()

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <section
      id="friends"
      className="w-full bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
          {displayedText}
        </h2>

        {/* Content with Quote and Image Below */}
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Quote */}
          <div className="flex items-center justify-center">
            <p className="text-lg md:text-2xl italic text-center text-gray-800 max-w-4xl leading-relaxed">
              There is a saying that your friends are who you are and I really believe that is true.
              Without my friends and family, I wouldn't be where I am today. If you are seeing this,
              I just want to say thank you so much for the support you have given me. You guys mean a lot to me :)
            </p>
          </div>

          {/* Images Below */}
          <div className="w-full flex justify-start gap-6 items-start">
            {/* Left Column - movetoUS.png */}
            <div className="flex-shrink-0" style={{ width: '30%' }}>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/images/movetoUS.png"
                  alt="Moving to the US"
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-500 mt-2">moving to US!</p>
            </div>

            {/* Middle Column - 604.png and ryan.png */}
            <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: '30%' }}>
              {/* 604.png (half height) */}
              <div className="h-1/2">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <img
                    src="/images/604.png"
                    alt="Unforgettable Classmates"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">unforgettable classmates!</p>
              </div>

              {/* ryan.png (below 604.png) */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <img
                    src="/images/ryan.png"
                    alt="Friends Together"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">me and Ryan eating Thai!</p>
              </div>
            </div>

            {/* Right Column - swiz.png, bucketsquad.png, and jason.png */}
            <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: '35%' }}>
              {/* swiz.png */}
              <div className="h-1/3">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <img
                    src="/images/swiz.png"
                    alt="Game Day Fun"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">study abroad memories at Switzerland 🇨🇭</p>
              </div>

              {/* bucketsquad.png */}
              <div className="h-1/3">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <img
                    src="/images/bucketsquad.png"
                    alt="Bucket Squad"
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">my first NBA game!</p>
              </div>

              {/* atlmintion.png (below bucketsquad.png) */}
              <div>
                <img
                  src="/images/atlmintion.png"
                  alt="Badminton"
                  className="w-full rounded-lg object-contain"
                  style={{ height: '650px', marginLeft: '60px' }}
                />
                <p className="text-center text-sm text-gray-500 mt-2" style={{ marginLeft: '60px' }}>Check out our page: atlminton !</p>
              </div>

            </div>
          </div>

          {/* Typing animation for thank you message */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-2xl md:text-3xl italic text-gray-800" style={{ fontFamily: 'cursive' }}>
              {displayedBottomText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
