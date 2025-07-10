"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Clock, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@devportfolio.com",
      description: "Send me an email anytime",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call me for urgent matters",
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Available for remote work worldwide",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      description: "I'll get back to you quickly",
      color: "from-orange-500 to-orange-600",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com",
      username: "@devportfolio",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com",
      username: "@devportfolio",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com",
      username: "@devportfolio",
      color: "hover:text-blue-400",
    },
    {
      icon: Globe,
      name: "Website",
      url: "https://devportfolio.com",
      username: "devportfolio.com",
      color: "hover:text-green-400",
    },
  ]

  const faqs = [
    {
      question: "What's your typical response time?",
      answer: "I usually respond to emails within 24 hours, often much sooner during business hours.",
    },
    {
      question: "Do you work with international clients?",
      answer: "I work with clients worldwide and am comfortable with different time zones.",
    },
    {
      question: "What's your preferred communication method?",
      answer: "Email is best for initial contact, then we can move to video calls for project discussions.",
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, I offer a free 30-minute consultation to discuss your project and see if we're a good fit.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>

              <div className="text-center">
                <motion.div
                  className="text-8xl mb-6"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                >
                  📧
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Let's Connect
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can work
                  together to create something amazing.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <Send className="h-6 w-6 text-blue-500" />
                      Send me a message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    I'm always excited to work on new projects and help bring innovative ideas to life. Whether you have
                    a specific project in mind or just want to explore possibilities, let's start a conversation.
                  </p>
                </div>

                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color}`}>
                              <info.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold">{info.title}</h3>
                              <p className="text-sm text-muted-foreground">{info.description}</p>
                              <p className="font-medium text-blue-500">{info.value}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-8">
                  <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 ${social.color}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.icon className="h-5 w-5" />
                        <div>
                          <div className="font-medium">{social.name}</div>
                          <div className="text-sm text-muted-foreground">{social.username}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions about working together
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 text-blue-500">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss your ideas and create something extraordinary together. I'm here to help turn your vision
                into reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Start a Conversation
                </Button>
                <Link href="/projects">
                  <Button variant="outline" size="lg" className="border-2 bg-transparent">
                    View My Work
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
