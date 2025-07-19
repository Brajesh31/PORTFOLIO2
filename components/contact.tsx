"use client"

import type React from "react"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      if (form.current) {
        const result = await emailjs.sendForm("service_1n85l74", "template_s2gdt4j", form.current, "Udl5iGWEv35i-ZtfU")

        if (result.status === 200) {
          toast({
            title: "Message sent successfully!",
            description: "Thank you for your message. I'll get back to you soon.",
            duration: 5000,
          })

          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          })
        }
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
      <section id="contact" className="py-12 md:py-20 bg-[#111827] dark:bg-[#f1f5f9] transition-colors duration-500">
        <div className="container mx-auto px-4">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white dark:text-[#0f172a]">Contact Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            <motion.div
                className="lg:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white dark:text-[#0f172a]">Get In Touch</h3>
              <p className="text-[#D1D5DB] dark:text-[#475569] mb-6 md:mb-8 text-sm md:text-base">
                Feel free to reach out for any questions, collaborations, or to discuss opportunities in software development, AI/ML, or cloud solutions. I’m always open to new connections and ideas!
              </p>

              <div className="space-y-4 md:space-y-6">
                <Card className="bg-black/30 dark:bg-white/70 border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] p-2 md:p-3 rounded-full">
                      <Mail className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white dark:text-[#0f172a] text-sm md:text-base">Email</h4>
                      <p className="text-[#D1D5DB] dark:text-[#475569] text-sm">bk117134@gmail.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 dark:bg-white/70 border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] p-2 md:p-3 rounded-full">
                      <Phone className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white dark:text-[#0f172a] text-sm md:text-base">Phone</h4>
                      <p className="text-[#D1D5DB] dark:text-[#475569] text-sm">+91 7452971645</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-black/30 dark:bg-white/70 border-none shadow-md">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="bg-gradient-to-br from-[#3EADCF] to-[#57D9FF] p-2 md:p-3 rounded-full">
                      <MapPin className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white dark:text-[#0f172a] text-sm md:text-base">Location</h4>
                      <p className="text-[#D1D5DB] dark:text-[#475569] text-sm">Madhubani, Bihar</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
                className="lg:w-2/3"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
              <Card className="bg-black/30 dark:bg-white/70 border-none shadow-lg">
                <CardContent className="p-4 md:p-6">
                  <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-white dark:text-[#0f172a] text-sm md:text-base">
                          Name
                        </label>
                        <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="bg-[#1E293B] dark:bg-white border-[#3EADCF] text-white dark:text-[#0f172a] text-sm md:text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-white dark:text-[#0f172a] text-sm md:text-base">
                          Email
                        </label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="bg-[#1E293B] dark:bg-white border-[#3EADCF] text-white dark:text-[#0f172a] text-sm md:text-base"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-white dark:text-[#0f172a] text-sm md:text-base">
                        Subject
                      </label>
                      <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Subject"
                          required
                          className="bg-[#1E293B] dark:bg-white border-[#3EADCF] text-white dark:text-[#0f172a] text-sm md:text-base"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-white dark:text-[#0f172a] text-sm md:text-base">
                        Message
                      </label>
                      <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Your Message"
                          required
                          className="min-h-[120px] md:min-h-[150px] bg-[#1E293B] dark:bg-white border-[#3EADCF] text-white dark:text-[#0f172a] text-sm md:text-base"
                      />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-[#3EADCF] to-[#57D9FF] hover:from-[#57D9FF] hover:to-[#3EADCF] text-white disabled:opacity-50"
                    >
                      {isLoading ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                      ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
  )
}
