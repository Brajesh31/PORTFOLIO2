"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter } from "lucide-react"

// ----- START: Your Custom Projects Data -----
const projectsData = [
  {
    id: 1,
    title: "Emma (AI Personal Assistant)",
    shortDescription: "AI-based productivity assistant with custom algorithms and voice commands.",
    longDescription:
        "Emma is a desktop-based AI personal assistant built in Python. It automates reminders, answers queries, manages schedules, and supports natural language voice interactions, boosting daily productivity. Features NLP, scheduling, and automation.",
    image: "/emma-ai.jpg",
    tags: ["Python", "AI", "NLP", "Automation", "Desktop App"],
    category: "AI/ML",
    github: "https://github.com/Brajesh31/emma-assistant",
    demo: "#",
  },
  {
    id: 2,
    title: "Thea (AI Therapist)",
    shortDescription: "Empathetic AI therapist chatbot using Python and a custom dataset.",
    longDescription:
        "Thea is an AI therapist developed in Python, utilizing a custom dataset to provide empathetic, supportive, and context-aware responses. Thea simulates therapeutic conversations for mental health support and privacy.",
    image: "/thea-therapist.jpg",
    tags: ["Python", "AI", "NLP", "Mental Health", "Chatbot"],
    category: "AI/ML",
    github: "https://github.com/Brajesh31/thea-ai-therapist",
    demo: "#",
  },
  {
    id: 3,
    title: "Ella (AI Companion)",
    shortDescription: "Mobile AI chat companion app built with React Native and ML.",
    longDescription:
        "Ella is a React Native-based AI companion app featuring conversational ML models. It provides daily interactions, creative responses, and productivity tips via a polished mobile interface with animated chat features.",
    image: "/ella-app.jpg",
    tags: ["React Native", "Expo", "ML", "Mobile App", "AI"],
    category: "Frontend",
    github: "https://github.com/Brajesh31/ella-ai-companion",
    demo: "#",
  },
  {
    id: 4,
    title: "The Knights of Flovora",
    shortDescription: "Flutter RPG dungeon crawler game with immersive combat.",
    longDescription:
        "A cross-platform action-adventure RPG built with Flutter. The Knights of Flovora features dungeon crawling, strategic combat, and a storyline with rich 2D graphics. Experience real-time action and exploration on mobile and web.",
    image: "/flovora-rpg.jpg",
    tags: ["Flutter", "Dart", "Game Dev", "Cross-Platform", "2D Graphics"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/flovora-rpg",
    demo: "#",
  },
  {
    id: 5,
    title: "Mathematrix",
    shortDescription: "Interactive gamified platform to master multiplication tables.",
    longDescription:
        "Mathematrix makes learning multiplication tables fun and engaging for kids with interactive quizzes, streak tracking, and animation. Built with HTML, CSS, and JavaScript, it supports playful, rapid math mastery.",
    image: "/mathematrix.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Education", "Gamification"],
    category: "Frontend",
    github: "https://github.com/Brajesh31/mathematrix",
    demo: "https://mathematrix.vercel.app/",
  },
  {
    id: 6,
    title: "SEMAC (Semester Management & Collaboration)",
    shortDescription: "Full-stack web app for college utilities and ML-powered analytics.",
    longDescription:
        "SEMAC is an integrated college platform featuring utilities for semester management, document sharing, and collaboration. Leveraging Next.js, MongoDB, and ML (Random Forest), it achieved 95% analytics accuracy.",
    image: "/semac.jpg",
    tags: ["Next.js", "MongoDB", "ML", "HTML", "CSS"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/semac",
    demo: "#",
  },
  {
    id: 7,
    title: "IdeaPool",
    shortDescription: "Developer community for sharing and collaborating on software ideas.",
    longDescription:
        "IdeaPool connects software developers to share project proposals and find collaborators. Built with the MERN stack and Next.js, it fosters innovation, idea validation, and team formation.",
    image: "/ideapool.jpg",
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "NextJS"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/ideapool",
    demo: "#",
  },
  {
    id: 8,
    title: "FitDeck",
    shortDescription: "Social web app for fitness enthusiasts and coaches.",
    longDescription:
        "FitDeck is a MERN stack social networking app for fitness buffs to connect, follow coaches, and explore fitness articles. Features profiles, article feeds, and coach following.",
    image: "/fitdeck.jpg",
    tags: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "HTML", "CSS"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/fitdeck",
    demo: "#",
  },
  {
    id: 9,
    title: "ChatterBox",
    shortDescription: "Real-time group chat app using Node.js and Socket.io.",
    longDescription:
        "ChatterBox enables instant messaging in user-created chat rooms with real-time Socket.io. Features group messaging, quick join, and web notifications.",
    image: "/chatterbox.jpg",
    tags: ["NodeJS", "Socket.io", "WebSockets"],
    category: "Backend",
    github: "https://github.com/Brajesh31/chatterbox",
    demo: "#",
  },
  {
    id: 10,
    title: "Cap’nShare",
    shortDescription: "Campus food-sharing app to reduce food wastage.",
    longDescription:
        "Cap’nShare is a Ruby on Rails web app enabling students to share surplus food across campus. Includes AWS S3 storage, PostgreSQL, and Agile workflow for sustainability impact.",
    image: "/capnshare.jpg",
    tags: ["Ruby on Rails", "PostgreSQL", "AWS S3", "JavaScript", "Agile"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/capnshare",
    demo: "#",
  },
  {
    id: 11,
    title: "Career Mapper",
    shortDescription: "Job comparison interface with city-based cost analysis.",
    longDescription:
        "Career Mapper compares jobs based on cost of living, health, safety, and more. Built with Python, MySQL, ReactJS, and offers deep city/job analytics for career planning.",
    image: "/career-mapper.jpg",
    tags: ["Python", "HTML", "CSS", "MySQL", "ReactJS"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/career-mapper",
    demo: "#",
  },
  {
    id: 12,
    title: "Inventory Management",
    shortDescription: "Django-based stock/order management platform.",
    longDescription:
        "A Django and SQLite-based system to efficiently manage inventory, process orders, and handle deliveries for businesses. Supports CRUD, analytics, and reporting.",
    image: "/inventory-management.jpg",
    tags: ["Python", "Django", "SQLite"],
    category: "Backend",
    github: "https://github.com/Brajesh31/inventory-management",
    demo: "#",
  },
  {
    id: 13,
    title: "Chatbot Project",
    shortDescription: "Interactive NLP chatbot using TensorFlow for customer support.",
    longDescription:
        "A Python NLP chatbot powered by TensorFlow, designed for intelligent conversations and customer query handling with context management.",
    image: "/chatbot.jpg",
    tags: ["Python", "TensorFlow", "NLP"],
    category: "AI/ML",
    github: "https://github.com/Brajesh31/python-chatbot",
    demo: "#",
  },
  {
    id: 14,
    title: "Face Recognition Project",
    shortDescription: "Real-time face recognition system using OpenCV and TensorFlow.",
    longDescription:
        "Built a Python application for live facial recognition leveraging OpenCV and TensorFlow models. Supports user registration, live detection, and security notifications.",
    image: "/face-recognition.jpg",
    tags: ["Python", "OpenCV", "TensorFlow", "AI"],
    category: "AI/ML",
    github: "https://github.com/Brajesh31/face-recognition",
    demo: "#",
  },
  {
    id: 15,
    title: "Lab Agile Planning",
    shortDescription: "Agile workflow management tool for labs using Jira and React.",
    longDescription:
        "A web-based tool to manage agile planning and tasks for laboratory teams, integrating Jira with a React-based interface and tracking sprints.",
    image: "/lab-agile.jpg",
    tags: ["Jira", "Agile", "React"],
    category: "Frontend",
    github: "https://github.com/Brajesh31/lab-agile",
    demo: "#",
  },
  {
    id: 16,
    title: "AgroTech",
    shortDescription: "AI-powered agriculture info and productivity platform.",
    longDescription:
        "AgroTech is an IoT-enabled platform that uses AI and the MERN stack to assist farmers with crop insights, weather, and resource management, improving productivity and efficiency.",
    image: "/agrotech.jpg",
    tags: ["React", "Node.js", "MongoDB", "IoT", "AI"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/agrotech-ai",
    demo: "#",
  },
  {
    id: 17,
    title: "Influencer Sponsor Coordination Platform",
    shortDescription: "Platform to connect influencers and sponsors for campaigns.",
    longDescription:
        "A web application that streamlines the process of connecting influencers with potential sponsors for collaboration and campaign management, using Next.js and PostgreSQL.",
    image: "/influencer-sponsor.jpg",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
    category: "Full Stack",
    github: "https://github.com/Brajesh31/influencer-sponsor-platform",
    demo: "#",
  },
]
// ----- END: Your Custom Projects Data -----

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [expandedProjects, setExpandedProjects] = useState<Record<number, boolean>>({})

  const filteredProjects =
      filter === "All" ? projectsData : projectsData.filter((project) => project.category === filter)

  const categories = ["All", "Frontend", "Backend", "Full Stack", "AI/ML"]

  const toggleDescription = (projectId: number) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }))
  }

  return (
      <section id="projects" className="py-12 md:py-20 bg-black dark:bg-[#f8fafc] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          </motion.div>

          {/* Filter buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center mb-8 md:mb-12 gap-4">
            <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden border-[#3EADCF] text-white hover:bg-[#3EADCF]/10"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Projects
            </Button>

            <div className={`flex flex-wrap gap-2 md:gap-4 justify-center ${showFilters ? "block" : "hidden sm:flex"}`}>
              {categories.map((category) => (
                  <Button
                      key={category}
                      variant={filter === category ? "default" : "outline"}
                      onClick={() => setFilter(category)}
                      className={
                        filter === category
                            ? "bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] text-white border-none"
                            : "text-black dark:text-white border-[#3EADCF] hover:bg-[#3EADCF]/10"
                      }
                      size="sm"
                  >
                    {category}
                  </Button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8"
            >
              {filteredProjects.map((project, index) => (
                  <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -5 }}
                  >
                    <Card className="bg-[#111827] dark:bg-white border-none overflow-hidden h-full flex flex-col group shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="overflow-hidden">
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <CardHeader className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <CardTitle className="text-lg md:text-xl text-white dark:text-[#0f172a] line-clamp-2">
                            {project.title}
                          </CardTitle>
                          <Badge
                              variant="outline"
                              className="bg-[#3EADCF]/10 text-[#57D9FF] dark:text-[#0284c7] border-[#3EADCF] text-xs ml-2 flex-shrink-0"
                          >
                            {project.category}
                          </Badge>
                        </div>

                        <CardDescription className="text-[#D1D5DB] dark:text-[#475569] text-sm md:text-base mb-3">
                          {project.shortDescription}
                        </CardDescription>

                        <div className="mb-4">
                          <motion.div
                              initial={false}
                              animate={{
                                height: expandedProjects[project.id] ? "auto" : 0,
                                opacity: expandedProjects[project.id] ? 1 : 0,
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                          >
                            <p className="text-[#D1D5DB] dark:text-[#475569] text-sm leading-relaxed mb-2">
                              {project.longDescription}
                            </p>
                          </motion.div>
                          <button
                              onClick={() => toggleDescription(project.id)}
                              className="text-[#57D9FF] dark:text-[#0284c7] text-sm hover:underline transition-colors"
                          >
                            {expandedProjects[project.id] ? "Show Less" : "Read More"}
                          </button>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                              <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-black/30 dark:bg-white/30 text-[#D1D5DB] dark:text-gray-600 text-xs"
                              >
                                {tag}
                              </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-between gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-[#3EADCF] text-[#57D9FF] hover:bg-[#3EADCF]/10 flex-1"
                            onClick={() => window.open(project.github, "_blank")}
                            disabled={project.github === "#"}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white flex-1"
                            onClick={() => window.open(project.demo, "_blank")}
                            disabled={project.demo === "#"}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
  )
}
