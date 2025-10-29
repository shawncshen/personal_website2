'use client'

import { useState } from 'react'
import HeroSection from '@/components/HeroSection'
import AboutMeSection from '@/components/AboutMeSection'
import EducationSection from '@/components/EducationSection'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import SocialMediaJourneySection from '@/components/SocialMediaJourneySection'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <AboutMeSection />
      <EducationSection />
      <WorkExperienceSection />
      <SocialMediaJourneySection />
    </main>
  )
}
