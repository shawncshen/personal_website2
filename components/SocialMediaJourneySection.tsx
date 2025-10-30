'use client'

import { useState, useEffect } from 'react'

export default function SocialMediaJourneySection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'My Social Media Journey 📸'

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

  return (
    <section
      id="social"
      className="w-full bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center">
          {displayedText}
        </h2>

        {/* Content */}
        <div className="space-y-6 md:space-y-8 text-xl md:text-2xl leading-8 text-black font-serif">
          <p>People often ask me how I blew up on TikTok. Well, this is the story...</p>

          <p>
            Growing up, I loved performing card tricks to people. Seeing their astounished faces when they
            witnessed something so seemingly impossible become reality right before their own eyes gave me
            confidence.
          </p>

          <p>
            For context, English isn't my first language. When I first immigrated to Georgia from Taiwan, I was
            insecure of my accent. Through performing magic tricks, I met a lot of people, which made me
            comfortable with public speaking.
          </p>

          <p>
            I created magic clubs in middle school and high school. During the weekly meetings, I taught
            members simple magic tricks. On weekends, other magicians from the club and I would perform at
            events in my community like nursing homes and local elementary schools.
          </p>

          <p>
            But then in 2020, Covid hit. I lost access to my audience, so I decided to showcase my passion online
            on TikTok. Without much thought, I started posting videos of my tricks 2 to 5 times a day. However,
            the views and engagement on my account were low. It went on like this for 3 months. I was impatient
            and frustrated because I hadn't achieved what I wanted. It was then, while scrolling on TikTok, I
            unexpectedly found a video by Gary Vaynerchuk. He had started out owning a wine business then
            later followed his love for influencing and motivational lectures. In his video, I remember so clearly
            him saying,
          </p>

          <p>
            <em className="italic font-medium">
              "Passion is priceless and does not feel like work. Without hustle, talent will only get you so far."
            </em>
          </p>

          <p>
            It hit me hard. I started researching algorithms and experimenting with different lengths of videos,
            formats, settings, and types of videos. In addition to magic tricks, I diversified my content. I started
            filming skits, comedy, POV videos, even Python and OOP tutorials. I continued to experiment with
            different video topics I enjoyed and that my audiences would enjoy as well.
          </p>

          <p>
            I never had expected my social media passion to turn out this great. I often reminded myself to not
            worry about the number of views, likes, or any harsh comments I would get. Instead of letting outside
            world's perspective negatively affect me, I made sure I was trusting my own intuition and feelings.
            After months of trials and errors, sending over 100 DMs to successful influencers, my social media
            presence started to shine. Within 2 years of consistent posting, I had gained <strong className="font-semibold text-gray-900">1.6 million followers</strong> on
            TikTok and received multiple sponsorships with companies and groups like Vincero Watches,
            Team Wang, FaZe Clan & x-shot collab, and more.
          </p>

          <p>
            I've since stopped posting, which many of my friends often ask me why. Mental health was definitely
            a factor. A simple 15 second video online actually took hours of filming and editing. There are so
            many factors that come into play, and any small details can affect the outcome of a video. Filming had
            started to feel like a task, and I began losing the enjoyment and the satisfaction. In 2022, I had
            decided that it was time for me to move on from social media and try something else. I wanted to
            explore new hobbies that sparked the same energy I had for filming when I first started in August of
            2020. Since starting college, I found new passions like badminton and traveling.
          </p>

          <p>
            I am 21 years old and currently studying computer science at Georgia Tech. I did not grow up with
            much of a technical background, but I realized that Georgia Tech is the perfect place for me to
            strengthen my technical skills. That same hunger and drive I once had to grow on social media is now
            what I bring into my career path. Whether it's contributing to big tech, joining a startup, or even
            building one of my own, I want to keep pushing myself with that same determination to succeed.
          </p>

          <p className="text-xl text-center text-gray-800 mt-8 italic">
            I have a feeling I'll be back on social media soon, and when I do, I'll be sure to update this page :)
          </p>
        </div>

        {/* 2x3 Image Grid */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
            {/* Image 1 - Ring Light */}
            <div className="flex flex-col items-center">
              <img
                src="/images/ringlight.png"
                alt="my first ring light setup"
                className="w-full h-auto rounded-lg overflow-hidden mb-4 object-contain"
              />
              <p className="text-center text-xs md:text-sm text-gray-400 lowercase tracking-wide">
                my first ring light setup!
              </p>
            </div>

            {/* Image 2 - Magic Club */}
            <div className="flex flex-col items-center">
              <img
                src="/images/magic-club.jpg"
                alt="me and Jaiwon at club fair"
                className="w-full h-auto rounded-lg overflow-hidden mb-4 object-contain"
              />
              <p className="text-center text-xs md:text-sm text-gray-400 lowercase tracking-wide">
                me and Jaiwon at club fair!
              </p>
            </div>

            {/* Image 3 - Magic Summer Teaching */}
            <div className="flex flex-col items-center">
              <img
                src="/images/magic-summer.png"
                alt="9th grade me teaching magic at summer camp"
                className="w-full h-auto rounded-lg overflow-hidden mb-4 object-contain"
              />
              <p className="text-center text-xs md:text-sm text-gray-400 lowercase tracking-wide">
                9th grade me teaching magic at summer camp!
              </p>
            </div>

            {/* Image 4 - Follower Demographics */}
            <div className="flex flex-col items-center">
              <img
                src="/images/follower-demo.png"
                alt="detailed screenshot of follower demographics"
                className="w-full h-auto rounded-lg overflow-hidden mb-4 object-contain"
              />
              <p className="text-center text-xs md:text-sm text-gray-400 lowercase tracking-wide">
                old screenshot of follower demographics lol
              </p>
            </div>

            {/* Image 5 - Only Following */}
            <div className="flex flex-col items-center">
              <img
                src="/images/only-following.png"
                alt="TikTok analytics overview"
                className="w-full h-auto rounded-lg overflow-hidden mb-4 object-contain"
              />
              <p className="text-center text-xs md:text-sm text-gray-400 lowercase tracking-wide">
                me up 5 am not understanding why the video did not hit fyp..
              </p>
            </div>

            {/* Image 6 - TikTok Video */}
            <div className="flex flex-col items-center">
              <img
                src="/images/tiktok-video.png"
                alt="one of my viral TikTok videos"
                className="w-full h-auto rounded-lg overflow-hidden mb-4 object-contain"
              />
              <p className="text-center text-xs md:text-sm text-gray-400 lowercase tracking-wide whitespace-nowrap">
                cool spinning illusion video! ₍^. .^₎
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
