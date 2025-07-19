"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { Download, Code2, Cloud, Lightbulb, Target } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isFlipped, setIsFlipped] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Code2,
      title: "MERN Stack & Frontend Development",
      description: "Expert in React, Node.js, Express, MongoDB, and beautiful, interactive frontends.",
    },
    {
      icon: Cloud,
      title: "Cloud Tech Enthusiast",
      description: "Hands-on with AWS, scalable cloud solutions, and modern DevOps tools.",
    },
    {
      icon: Lightbulb,
      title: "AI/ML Engineering",
      description: "Proficient in Python, ML, and building intelligent solutions for real-world impact.",
    },
    {
      icon: Target,
      title: "Goal-Oriented & Innovative",
      description: "Driven to deliver impactful results through teamwork and creative problem-solving.",
    },
  ]

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
      <motion.section
          id="about"
          className="py-12 md:py-20 bg-gray-900 dark:bg-white transition-colors duration-500"
          ref={sectionRef}
          style={{ opacity }}
      >
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12">
              {/* Left Side - Image */}
              <motion.div
                  className="lg:w-1/2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
              >
                <div className="relative flex justify-center">
                  <motion.div
                      className="w-full max-w-md aspect-square flex items-center justify-center perspective-1000"
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                  >
                    {/* Flip Card Container */}
                    <motion.div
                        className="relative w-full h-full preserve-3d cursor-pointer"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        onHoverStart={() => setIsFlipped(true)}
                        onHoverEnd={() => setIsFlipped(false)}
                        style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side - Image */}
                      <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border-4 border-[#3EADCF] shadow-2xl">
                        <img src="/about-image.jpg" alt="Brajesh Kumar" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>

                      {/* Back Side - BK */}
                      <div
                          className="absolute inset-0 w-full h-full backface-hidden rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] dark:bg-gradient-to-br dark:from-[#e2e8f0] dark:via-[#cbd5e1] dark:to-[#94a3b8] border-4 border-[#57D9FF] shadow-2xl"
                          style={{ transform: "rotateY(180deg)" }}
                      >
                        <motion.div
                            className="text-[#3EADCF] text-6xl md:text-8xl font-bold select-none relative"
                            animate={{
                              filter: [
                                "drop-shadow(0 0 20px #3EADCF)",
                                "drop-shadow(0 0 40px #57D9FF)",
                                "drop-shadow(0 0 20px #3EADCF)",
                              ],
                            }}
                            transition={{
                              filter: {
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                              },
                            }}
                        >
                          BK
                          <div className="absolute inset-0 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] bg-clip-text text-transparent">
                            BK
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                  className="lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
              >
                {/* WHO am I? */}
                <motion.h3
                    className="text-2xl md:text-3xl font-bold mb-4 text-[#3EADCF] dark:text-[#57D9FF] uppercase tracking-wide"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                  WHO am I?
                </motion.h3>

                {/* Text Content */}
                <motion.div
                    className="space-y-4 text-[#e2e8f0] dark:text-[#334155] text-base md:text-lg mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                  <p>
                    Hi, I'm <span className="text-[#57D9FF] dark:text-[#0284c7] font-semibold">Brajesh Kumar</span>, a
                    passionate Software Developer, AI/ML Engineer, MERN Stack & Frontend Developer, and Cloud Tech Enthusiast.
                  </p>

                  <p>
                    I’m currently pursuing my B.Tech in Computer Science and Engineering at GL Bajaj Group of Institutions, with a strong focus on Artificial Intelligence, Machine Learning, and scalable cloud solutions. My journey has been shaped by hands-on experience in real-world projects—ranging from smart assistants and intelligent web apps to data-driven solutions deployed on cloud platforms.
                  </p>

                  <p>
                    I thrive on building impactful tech, collaborating with global minds, and tackling complex challenges at the intersection of code, data, and creativity. Let’s connect and create solutions that drive real change!
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                      className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white px-6 py-3 text-base font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                          window.open(
                              "https://drive.google.com", // UPDATE to your real resume link!
                              "_blank",
                          )
                      }
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button
                      variant="outline"
                      className="border-[#3EADCF] text-[#3EADCF] to [#57D9FF] hover:bg-[#3EADCF]/10 hover:to-[#57D9FF]/10 px-6 py-3 text-base font-medium"
                      onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View My Works
                  </Button>
                </motion.div>
              </motion.div>
            </div>

            {/* What I Bring Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
            >
              <h4 className="text-xl md:text-2xl font-bold mb-6 text-white dark:text-[#0f172a]">What I Bring</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        className="group p-6 bg-[#111827] dark:bg-gray-50 rounded-xl border border-[#3EADCF]/20 hover:border-[#3EADCF]/60 transition-all duration-300 shadow-sm hover:shadow-md"
                        whileHover={{ scale: 1.02, y: -5 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                    >
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="h-6 w-6 text-white" />
                        </div>
                        <h5 className="font-bold text-white dark:text-[#0f172a] mb-2 text-base">{feature.title}</h5>
                        <p className="text-[#cbd5e1] dark:text-[#475569] text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}
