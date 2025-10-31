'use client'

import { useState, useEffect } from 'react'

interface WorkExperience {
  company: string
  position: string
  duration: string
  description: (string | JSX.Element)[]
  skills: string
}

export default function WorkExperienceSection() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Work Experiences'

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

  const experiences: WorkExperience[] = [
    {
      company: 'Amazon Web Services (AWS)',
      position: 'Software Development Engineer Intern',
      duration: 'June 2025 - Aug 2025',
      description: [
        <>Designed and implemented a high-performance Rust dataset refresh daemon to offload deserialization of 5GB+ droplet .tar.gz metadata archives from the main control plane process, reducing CPU spikes from <strong>70%</strong> down to under <strong>2%</strong> by linux control group</>,
        <>Built streaming deserialization pipelines to avoid full-memory loads, cutting refresh time by 40% and saving <strong>$400K</strong> annually by eliminating redundant S3 downloads across distributed hosts</>,
      ],
      skills: 'Rust, Java, S3, EC2, EBS, Linux C-Groups, CloudWatch, Git',
    },
    {
      company: 'Verizon',
      position: 'Data Science Intern',
      duration: 'March 2025 - May 2025',
      description: [
        'Engineered and deployed end-to-end analytics pipelines using Python and SQL to analyze user activity across 30+ billing cycles, uncovering $250K in unaccounted billing discrepancies and driving data-informed decision-making',
        'Increased customer retention by 9% through a TensorFlow churn prediction model (88% precision) deployed to Azure, integrating real-time results into customer-facing dashboards',
      ],
      skills: 'Python (Pandas, NumPy, TensorFlow), SQL, Power BI, Streamlit',
    },
    {
      company: 'Georgia Tech Medical AI',
      position: 'AI Researcher',
      duration: 'Aug 2024 - Dec 2025',
      description: [
        'Improved patient outcome prediction accuracy by 15% by training and analyzing 100+ datasets with Python and TensorFlow',
        'Led Agile sprints to streamline MongoDB/MySQL workflows, cutting manual processing by 30% across 5 research teams',
      ],
      skills: 'Python (TensorFlow, PyTorch), MongoDB, MySQL, Google Cloud',
    },
    {
      company: 'Cisco',
      position: 'Software Engineer Apprentice',
      duration: 'June 2021 - July 2021',
      description: [
        'Selected out of 600+ applicants to be a part of Cisco\'s Atlanta 2021 Cohort and gained exposure to Cisco\'s core technologies (Meraki, DevNet, AppDynamics), business strategies, and mission.',
        <>Collaborated with 8 individuals across different Cisco locations in the US to design a healthcare app that enhanced patient accessibility during the pandemic; Received <strong>3rd place</strong> at the Capstone Project Competition.</>,
        'Engaged in interactive problem-solving workshops with industry leaders on subjects related to Meraki, Cybersecurity, Internet of Things (IoT), and LoRaWAN solutions',
      ],
      skills: 'Meraki, DevNet, AppDynamics',
    },
  ]

  return (
    <section
      id="work"
      className="w-full bg-gradient-to-br from-gray-50 to-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 md:mb-16 text-center">
          {displayedText}
        </h2>

        {/* Work Experiences Cards */}
        <div className="space-y-8 md:space-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white p-8 md:p-10">
              {/* Header with Logo and Company Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 pb-8 border-b border-gray-200">
                {/* Left - Logo and Company Info */}
                <div className="flex gap-4 items-start flex-1">
                  {/* Company Logo */}
                  <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                    {experience.company === 'Amazon Web Services (AWS)' && (
                      <img src="/images/aws-logo.png" alt="AWS" className="w-full h-full object-contain p-3" />
                    )}
                    {experience.company === 'Verizon' && (
                      <img src="/images/verizon-logo.png" alt="Verizon" className="w-full h-full object-contain p-3" />
                    )}
                    {experience.company === 'Georgia Tech Medical AI' && (
                      <img src="/images/gatech-logo.png" alt="Georgia Tech" className="w-full h-full object-contain p-3" />
                    )}
                    {experience.company === 'Cisco' && (
                      <img src="/images/cisco-logo.png" alt="Cisco" className="w-full h-full object-contain p-3" />
                    )}
                  </div>

                  {/* Company Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{experience.company}</h3>
                    <p className="text-lg md:text-xl text-gray-700 font-semibold mb-3">{experience.position}</p>
                    <p className="text-gray-500 text-base md:text-lg">{experience.duration}</p>
                  </div>
                </div>
              </div>

              {/* Description Points */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {experience.description.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-500 mt-1 flex-shrink-0 font-bold">▸</span>
                      <span className="text-gray-700 text-base md:text-lg leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Badges */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-4">
                  Technical Skills
                </p>
                <div className="flex flex-wrap gap-3">
                  {experience.skills.split(', ').map((skill, idx) => (
                    <span key={idx} className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
