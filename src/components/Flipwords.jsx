"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  // Function to cycle the words
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  // --- STYLE SEPARATION LOGIC ---
  // This logic is crucial to fix both the gradient and the layout shift issues.

  // 1. Styles needed for the text color and background clip (applied to inner letters)
  const gradientStyles = className ? className.split(' ').filter(c => 
    c.startsWith('bg-gradient-') || c === 'bg-clip-text' || c === 'text-transparent' || c.startsWith('from-') || c.startsWith('to-')
  ).join(' ') : '';

  // 2. Styles for layout, size, and spacing (applied to the static wrapper)
  const wrapperStyles = className ? className.split(' ').filter(c => 
    !c.startsWith('bg-gradient-') && c !== 'bg-clip-text' && c !== 'text-transparent' && !c.startsWith('from-') && !c.startsWith('to-')
  ).join(' ') : '';
  
  // ------------------------------

  return (
    // STATIC WRAPPER: Holds the font size (e.g., text-6xl) and space in place.
    <span className={twMerge("inline-block relative text-left", wrapperStyles)}>
      <AnimatePresence
        // FIX 3: Use popLayout mode to gracefully shift sibling elements
        mode="popLayout" 
        onExitComplete={() => {
          setIsAnimating(false);
        }}>
        <motion.div
          // FIX 3: Add layout prop for smooth transitions when the word size changes
          layout 
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
          exit={{
            opacity: 0,
            y: -40,
            x: 40,
            filter: "blur(8px)",
            scale: 2,
            position: "absolute", // Keep position absolute for the flip effect
          }}
          // The word container no longer carries size styles
          className="z-10 inline-block relative"
          key={currentWord}>
          
          {currentWord.split(" ").map((word, wordIndex) => (
            <motion.span
              key={word + wordIndex}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={word + letterIndex}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                  // FIX 1 & 2: Apply gradient styles to the innermost letter span
                  className={twMerge("inline-block", gradientStyles)}>
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </span>
  );
};