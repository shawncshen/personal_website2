'use client'

interface WorkExperience {
  company: string
  position: string
  duration: string
  description: string[]
  skills: string
}

export default function WorkExperienceSection() {
  const experiences: WorkExperience[] = [
    {
      company: 'Amazon Web Services (AWS)',
      position: 'Software Development Engineer Intern',
      duration: 'Jan 2025 - Aug 2025',
      description: [
        'Designed and implemented a high-performance Rust dataset refresh daemon to offload deserialization of 5GB+ droplet .tar.gz metadata archives from the main control plane process, reducing CPU spikes from 70% down to under 2% by linux control group',
        'Built streaming deserialization pipelines to avoid full-memory loads, cutting refresh time by 40% and saving $400K annually by eliminating redundant S3 downloads across distributed hosts',
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
      duration: 'Aug 2024 - May 2025',
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
        'Collaborated with 8 individuals across different Cisco locations in the US to design a healthcare app that enhanced patient accessibility during the pandemic; Received 3rd place at the Capstone Project Competition.',
        'Engaged in interactive problem-solving workshops with industry leaders on subjects related to Meraki, Cybersecurity, Internet of Things (IoT), and LoRaWAN solutions',
      ],
      skills: 'Meraki, DevNet, AppDynamics',
    },
  ]

  return (
    <section
      id="work"
      className="w-full bg-white py-12 md:py-20 px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          Work Experiences
        </h2>

        {/* Work Experiences List */}
        <div className="space-y-10 md:space-y-12">
          {experiences.map((experience, index) => (
            <div key={index} className="pb-8 md:pb-10 border-b border-gray-200 last:border-b-0">
              {/* Company and Duration */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 md:gap-6 mb-2">
                <div className="flex gap-4 items-start flex-1">
                  {/* Company Logo */}
                  <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                    {experience.company === 'Amazon Web Services (AWS)' && (
                      <img src="/images/aws-logo.png" alt="AWS" className="w-full h-full object-contain p-2" />
                    )}
                    {experience.company === 'Verizon' && (
                      <img src="/images/verizon-logo.png" alt="Verizon" className="w-full h-full object-contain p-2" />
                    )}
                    {experience.company === 'Georgia Tech Medical AI' && (
                      <img src="/images/gatech-logo.png" alt="Georgia Tech" className="w-full h-full object-contain p-2" />
                    )}
                    {experience.company === 'Cisco' && (
                      <img src="/images/cisco-logo.png" alt="Cisco" className="w-full h-full object-contain p-2" />
                    )}
                  </div>
                  {/* Company Info */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold">{experience.company}</h3>
                    <p className="text-gray-600 text-base md:text-lg">{experience.position}</p>
                  </div>
                </div>
                <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded font-semibold text-sm md:text-base whitespace-nowrap h-fit">
                  Duration: {experience.duration}
                </div>
              </div>

              {/* Description Points */}
              <ul className="space-y-3 md:space-y-4 mb-4">
                {experience.description.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-base md:text-lg">
                    <span className="text-gray-400 mt-1 flex-shrink-0">•</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Skills */}
              <p className="text-base md:text-lg">
                <span className="font-semibold">Skills:</span> {experience.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
