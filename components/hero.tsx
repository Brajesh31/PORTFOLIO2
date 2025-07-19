"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import MatterBackground from "./matter-background"
import { ArrowDown, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentTitle, setCurrentTitle] = useState(0)

  // Your actual expertise for the animated text
  const titles = [
    "Software Developer",
    "AI/ML Engineer",
    "MERN Stack Developer",
    "Frontend Developer",
    "Cloud Tech Enthusiast"
  ]

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
      <section
          id="hero"
          className="relative min-h-screen flex items-center bg-black dark:bg-white light:bg-white transition-colors duration-500"
      >
        <MatterBackground />

        <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white dark:text-[#0f172a]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
            <span className="block bg-gradient-to-r from-[#3EADCF] via-[#57D9FF] to-[#0ea5e9] bg-clip-text text-transparent">
              Brajesh Kumar
            </span>
            </motion.h1>

            <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-[#D1D5DB] dark:text-[#1e293b] h-12 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                  key={currentTitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-gradient bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent"
              >
                {titles[currentTitle]}
              </motion.span>
            </motion.h2>

            <motion.p
                className="text-base sm:text-lg text-[#D1D5DB] dark:text-[#334155] mb-8 max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
              I build impactful, modern web applications and intelligent AI/ML solutions.
              Proficient in MERN stack, cloud, and frontend technologies. Let’s collaborate and bring ideas to life!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                  className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white px-6 sm:px-8 py-3 sm:py-6 rounded-md text-base sm:text-lg"
                  onClick={() =>
                      window.open(
                          "https://drive.google.com",
                          "_blank"
                      )
                  }
              >
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Download CV
              </Button>
              <Button
                  variant="outline"
                  className="border-[#3EADCF] text-[#3EADCF] hover:bg-[#3EADCF]/10 px-6 sm:px-8 py-3 sm:py-6 text-base sm:text-lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-start lg:ml-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative"
            >
              <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#3EADCF] relative z-10">
                <img
                    src="/profile-image.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                />

              </div>

              <motion.div
                  className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#3EADCF]/30 to-[#57D9FF]/30 blur-md z-0"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />

              <motion.div
                  className="absolute -inset-1 rounded-full border-2 border-[#57D9FF]/50 z-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-full z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, type: "spring" }}
              />

              <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#57D9FF] to-[#3EADCF] rounded-full z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              />
            </motion.div>
          </div>
        </div>

        <motion.div
            className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            onClick={() => {
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
        >
          <Button variant="ghost" size="icon" className="rounded-full border border-[#3EADCF]">
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-[#3EADCF]" />
          </Button>
        </motion.div>
      </section>
  )
}
