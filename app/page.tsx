"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Certificates from "@/components/certificates"
import Education from "@/components/education"
import Contact from "@/components/contact"
import SocialSidebar from "@/components/social-sidebar"
import { motion, useScroll, useSpring } from "framer-motion"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  // Enhanced cursor animation
  useEffect(() => {
    const cursor = document.createElement("div")
    const cursorDot = document.createElement("div")

    cursor.className =
      "fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-300 ease-out"
    cursor.style.backgroundColor = "rgba(87, 217, 255, 0.3)"
    cursor.style.border = "2px solid rgba(87, 217, 255, 0.8)"

    cursorDot.className = "fixed w-2 h-2 rounded-full pointer-events-none z-50 bg-cyan-400"

    document.body.appendChild(cursor)
    document.body.appendChild(cursorDot)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`
      cursorDot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    const growCursor = () => {
      cursor.style.transform = `translate(${Number.parseInt(cursor.style.transform.split("(")[1]) - 8}px, ${Number.parseInt(cursor.style.transform.split(",")[1]) - 8}px) scale(2)`
      cursor.style.backgroundColor = "rgba(62, 173, 207, 0.5)"
    }

    const shrinkCursor = () => {
      cursor.style.transform = `translate(${Number.parseInt(cursor.style.transform.split("(")[1]) + 8}px, ${Number.parseInt(cursor.style.transform.split(",")[1]) + 8}px) scale(1)`
      cursor.style.backgroundColor = "rgba(87, 217, 255, 0.3)"
    }

    document.addEventListener("mousemove", moveCursor)

    const interactiveElements = document.querySelectorAll("a, button, [role='button']")
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", growCursor)
      element.addEventListener("mouseleave", shrinkCursor)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", growCursor)
        element.removeEventListener("mouseleave", shrinkCursor)
      })
      if (document.body.contains(cursor)) document.body.removeChild(cursor)
      if (document.body.contains(cursorDot)) document.body.removeChild(cursorDot)
    }
  }, [])

  // Scroll progress indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <main className="relative min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-[#3EADCF]/10 dark:bg-[#3EADCF]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/3 -left-40 w-80 h-80 bg-[#57D9FF]/10 dark:bg-[#57D9FF]/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#0ea5e9]/10 dark:bg-[#3EADCF]/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      <Header />
      <SocialSidebar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certificates />
      <Education />
      <Contact />
      <Toaster />
    </main>
  )
}
