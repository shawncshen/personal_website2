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
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-lg md:text-2xl italic text-center text-gray-800 max-w-4xl leading-relaxed">
              There is a saying that your friends are who you are and I really believe that is true.
              Without my friends and family, I wouldn't be where I am today. If you are seeing this,
              I just want to say thank you so much for the support you have given me.
            </p>
            <p className="text-lg md:text-2xl italic text-center text-gray-800 max-w-4xl leading-relaxed">
              You guys mean a lot to me :)
            </p>
          </div>

          {/* Images Below */}
          <div className="w-full flex justify-start gap-6 items-start">
            {/* Left Column - movetoUS.png and meandalex.jpg */}
            <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: '30%' }}>
              {/* Moving to US image */}
              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/move_to_US.jpg"
                    alt="Moving to the US"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">moving to US!</p>
              </div>

              {/* Me and Alex image */}
              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/meandalex.jpg"
                    alt="Me and Alex"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">me and Alex!</p>
              </div>

              {/* Lunch with Lauren image */}
              <div className="group cursor-pointer" style={{ width: '90%', margin: '0 auto' }}>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/lunchwlauren.jpg"
                    alt="Lunch with Lauren"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">grabbing lunch w Lauren!</p>
              </div>
            </div>

            {/* Middle Column - 604.png and ryan.png */}
            <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: '30%' }}>
              {/* 604.png (half height) */}
              <div className="h-1/2 group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/604.png"
                    alt="Unforgettable Classmates"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">unforgettable classmates!</p>
              </div>

              {/* ryan.png (below 604.png) */}
              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/ryan.png"
                    alt="Friends Together"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">me and Ryan eating Thai!</p>
              </div>

              {/* Athens image */}
              <div className="group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/athens.jpg"
                    alt="Downtown Athens"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">downtown athens</p>
              </div>

            </div>

            {/* Right Column - swiz.png, bucketsquad.png, and jason.png */}
            <div className="flex flex-col gap-6 flex-shrink-0" style={{ width: '35%' }}>
              {/* swiz.png */}
              <div className="h-1/3 group cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/swiz.png"
                    alt="Game Day Fun"
                    className="w-full h-full object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">study abroad memories at Switzerland 🇨🇭</p>
              </div>

              {/* bucketsquad.png */}
              <div className="group cursor-pointer" style={{ width: '90%', margin: '0 auto' }}>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/bucketsquad.png"
                    alt="Bucket Squad"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">my first NBA game!</p>
              </div>

              {/* Trip to SF image */}
              <div className="group cursor-pointer" style={{ width: '90%', margin: '0 auto' }}>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/triptosf.png"
                    alt="Trip to SF"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">trip to SF 2025</p>
              </div>

              {/* Me and Dad image */}
              <div className="group cursor-pointer" style={{ width: '90%', margin: '0 auto' }}>
                <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-blue-400 group-hover:scale-105">
                  <img
                    src="/images/me_and_dad.png"
                    alt="Me and Dad"
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
                <p className="text-center text-sm text-gray-500 mt-2">me and dad!</p>
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
