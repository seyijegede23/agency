import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const Ourwork = () => {
  const workdata = [
    {
      title: 'School Management System',
      description:
        'We built a platform that simplifies school administration, manages students, staff, and classes, and streamlines communication. Still under development.',
      image: assets.sms,
    },
    {
      title: 'HoloMeet',
      description:
        'A free, reliable video conferencing solution we built to deliver smooth, high-quality virtual meetings for teams and businesses.',
      image: assets.holomeet,
      href: 'https://holomeet-kappa.vercel.app/',
    },
    {
      title: 'Cvision',
      description:
        'An AI-powered CV builder we developed to help users create the perfect resume for any job—smart, fast, and fully tailored to their career goals.',
      image: assets.cvision,
      href: 'https://cvision-plum.vercel.app/',
    },
  ]

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-20 text-gray-700 dark:text-white"
    >
      <Title
        title="Our Latest Work"
        desc="From planning to launch, we craft custom software solutions that propel your business ahead."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {workdata.map((work, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-500 hover:scale-105"
          >
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <h3 className="text-xl font-semibold">{work.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {work.description}
              </p>
              {work.href && (
                <a
                  href={work.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-2"
                >
                  Visit Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ourwork
