"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Brajesh Kumar's correct links & contact details:
const socialLinks = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/brajesh-kumar-9b58651a8",
    label: "LinkedIn",
    color: "#0077B5",
  },
  {
    icon: Github,
    href: "https://github.com/Brajesh31",
    label: "GitHub",
    color: "#333",
  },
  {
    icon: Mail,
    href: "mailto:bk117134@gmail.com",
    label: "Email",
    color: "#EA4335",
  },
  {
    icon: Phone,
    href: "tel:+917452971645",
    label: "Phone",
    color: "#34A853",
  },
  {
    icon: MessageCircle,
    href: "https://wa.me/917452971645?text=Hi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
    label: "WhatsApp",
    color: "#25D366",
  },
  {
    icon: Send,
    href: "https://t.me/immortalsplugin",
    label: "Telegram",
    color: "#0088CC",
  },
]

export default function SocialSidebar() {
  return (
      <motion.div
          className="fixed right-4 md:right-6 top-1/4 transform -translate-y-1/2 z-40 flex flex-col gap-3 md:gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
      >
        {socialLinks.map((link, index) => (
            <motion.div
                key={link.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
            >
              <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#3EADCF] bg-black/50 dark:bg-white/50 backdrop-blur-sm hover:bg-[#3EADCF]/20 transition-all duration-300 group"
                  onClick={() => window.open(link.href, "_blank")}
              >
                <link.icon className="h-4 w-4 md:h-5 md:w-5 text-[#57D9FF] group-hover:text-white transition-colors" />
                <span className="sr-only">{link.label}</span>
              </Button>
            </motion.div>
        ))}

        <motion.div
            className="w-px h-16 md:h-20 bg-gradient-to-b from-[#3EADCF] to-transparent mx-auto mt-2"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
        />
      </motion.div>
  )
}
