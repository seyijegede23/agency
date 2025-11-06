import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import { FlipWords } from './Flipwords'

const Hero = ({theme}) => {
  const words = ["Secure", "Modern", "Scalable", "Reliable", "Optimized", "Innovative"]

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <div
      id="hero"
      className="relative flex flex-col items-center gap-6 py-20 sm:px-8 lg:px-24 xl:px-40
      text-center w-full overflow-hidden text-gray-700 dark:text-white">
      
    
      <div className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full ">
        <img className="w-20" src={assets.group_profile} alt="Group profile" />
        <p className="text-xs font-medium">Trusted by 10+ CEOs</p>
      </div>

      {/* Hero Text */}
      <div className="flex flex-col items-start text-black
      ">
        <motion.p
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 1.3 }}
  className="text-5xl font-medium text-black dark:text-white"
>
  We are dedicated
  <br /> to crafting
</motion.p>

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 1.6 }}
  className="pl-8 "
>
  <FlipWords
    words={words}
    className='bg-gradient-to-r from-blue-500 to-gray-300 bg-clip-text text-transparent text-6xl'
  />
</motion.div> 

<motion.p
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ delay: 1.8 }}
  className="text-5xl font-black text-black dark:text-white pl-8"
>
  Applications
</motion.p>
      </div>
<p className="text-base sm:text-lg font-medium text-gray-600 dark:text-white/75 max-w-xs sm:max-w-lg text-center px-4 pb-6">
  Reliant Technology delivers modern, reliable, and scalable digital solutions — specializing in innovative web development, software design, and IT services.
</p>
      
      <div className="relative w-full px-4 sm:px-0">
  <video
    src={assets.hero_video}
    autoPlay
    muted
    loop
    playsInline
    className="rounded-lg w-full max-w-xl lg:max-w-6xl mx-auto"
  />
  <img src={assets.bgImage1} alt="bg image" className='absolute -top-40 -right-40
   sm:-top-10 sm:-right-10 z-[-1] dark:hidden'/>
</div>

    </div>
  )
}

export default Hero
