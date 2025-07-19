"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [activeSection, setActiveSection] = useState("hero")
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
      document.documentElement.classList.toggle("light", savedTheme === "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem("theme", newTheme ? "dark" : "light")
    document.documentElement.classList.toggle("dark", newTheme)
    document.documentElement.classList.toggle("light", !newTheme)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = [
        "hero",
        "about",
        "projects",
        "skills",
        "experience",
        "certificates",
        "education",
        "contact"
      ]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Contact Me", href: "#contact" }
  ]

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
      <>
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-3 md:py-4",
                scrolled ? "bg-black/80 dark:bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent",
            )}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link
                href="#hero"
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#3EADCF] via-[#57D9FF] to-[#0ea5e9] bg-clip-text text-transparent tracking-wide"
            >
              BK
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                          "text-sm xl:text-base font-medium transition-colors hover:text-[#57D9FF]",
                          activeSection === item.href.substring(1)
                              ? "text-[#57D9FF]"
                              : "text-white dark:text-black",
                      )}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
              >
                <Button
                    variant="outline"
                    size="icon"
                    onClick={toggleTheme}
                    className="rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/10 backdrop-blur-sm hover:bg-[#3EADCF]/20 transition-all duration-300"
                >
                  <motion.div initial={false} animate={{ rotate: isDark ? 0 : 180 }} transition={{ duration: 0.3 }}>
                    {isDark
                        ? <Sun className="h-5 w-5 text-[#57D9FF]" />
                        : <Moon className="h-5 w-5 text-[#57D9FF]" />}
                  </motion.div>
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>

              {/* Mobile menu button */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white dark:text-black"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </motion.header>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="fixed top-0 right-0 h-full w-80 bg-black/95 dark:bg-white/95 backdrop-blur-md z-50 lg:hidden"
              >
                <div className="flex flex-col p-6 pt-20">
                  <div className="flex justify-end mb-8">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-white dark:text-black"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </div>

                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <Link
                              href={item.href}
                              className={cn(
                                  "text-lg font-medium transition-colors hover:text-[#57D9FF] block py-2",
                                  activeSection === item.href.substring(1) ? "text-[#57D9FF]" : "text-white dark:text-black",
                              )}
                              onClick={(e) => {
                                e.preventDefault()
                                handleNavClick(item.href)
                              }}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                    ))}
                  </nav>
                </div>
              </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                  onClick={() => setMobileMenuOpen(false)}
              />
          )}
        </AnimatePresence>
      </>
  )
}
