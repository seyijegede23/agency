import React from 'react'
import { motion } from 'framer-motion'
import assets from '../assets/assets'
import { FlipWords } from './Flipwords'

const Hero = ({ theme }) => {
  const words = ["Secure", "Modern", "Scalable", "Reliable", "Optimized", "Innovative"]

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.3, delayChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div
      id="hero"
      className="relative flex flex-col items-center justify-center gap-8 py-20 sm:px-8 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white"
    >
      {/* Floating Gradient Backgrounds */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />

      {/* Profile Tag */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-sm"
      >
        <img className="w-16 sm:w-20" src={assets.group_profile} alt="Group profile" />
        <p className="text-xs sm:text-sm font-medium">Trusted by 10+ CEOs</p>
      </motion.div>

      {/* Hero Text */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-start text-black dark:text-white"
      >
        <motion.p
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-medium leading-tight"
        >
          We are dedicated
          <br /> to crafting
        </motion.p>

        <motion.div variants={itemVariants} className="pl-6 sm:pl-8">
          <FlipWords
            words={words}
            className="bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent text-5xl sm:text-6xl font-extrabold"
          />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-4xl sm:text-5xl font-black pl-6 sm:pl-8"
        >
          Applications
        </motion.p>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="text-base sm:text-lg font-medium text-gray-600 dark:text-white/70 max-w-xs sm:max-w-2xl text-center px-4 pb-6 leading-relaxed"
      >
        Reliant Technology delivers modern, reliable, and scalable digital solutions specializing in innovative web development, software design, and IT services.
      </motion.p>

      {/* Video Section */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.4 }}
        className="relative w-full px-4 sm:px-0"
      >
        <video
          src={assets.hero_video}
          autoPlay
          muted
          loop
          playsInline
          className="rounded-2xl w-full max-w-3xl lg:max-w-5xl mx-auto shadow-xl"
        />
        <img
          src={assets.bgImage1}
          alt="bg image"
          className="absolute -top-40 -right-40 sm:-top-10 sm:-right-10 z-[-1] dark:hidden"
        />
      </motion.div>
    </div>
  )
}

export default Hero
