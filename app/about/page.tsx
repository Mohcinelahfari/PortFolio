"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Award, Calendar, Coffee, Heart, MapPin, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function AboutPage() {
  const personalInfo = {
    name: "John Doe",
    title: "Full Stack Developer",
    location: "San Francisco, CA",
    experience: "5+ Years",
    email: "hello@devportfolio.com",
    phone: "+1 (555) 123-4567",
  }

  const achievements = [
    {
      icon: Award,
      title: "Top Developer Award",
      description: "Recognized as top 1% developer on multiple platforms",
      year: "2023",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "150+ Happy Clients",
      description: "Successfully delivered projects for clients worldwide",
      year: "2024",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Zap,
      title: "Innovation Leader",
      description: "Led development of cutting-edge AI-powered solutions",
      year: "2023",
      color: "from-blue-700 to-purple-600",
    },
    {
      icon: Coffee,
      title: "Open Source Contributor",
      description: "Active contributor to major open source projects",
      year: "Ongoing",
      color: "from-purple-600 to-purple-700",
    },
  ]

  const timeline = [
    {
      year: "2024",
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description: "Leading development of enterprise-scale applications and mentoring junior developers.",
      current: true,
    },
    {
      year: "2022",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Developed and maintained multiple client projects using React, Node.js, and cloud technologies.",
      current: false,
    },
    {
      year: "2020",
      title: "Frontend Developer",
      company: "StartupXYZ",
      description: "Built responsive web applications and improved user experience across multiple products.",
      current: false,
    },
    {
      year: "2019",
      title: "Junior Developer",
      company: "WebDev Agency",
      description: "Started my professional journey, learning modern web development practices and frameworks.",
      current: false,
    },
  ]

  const interests = [
    { name: "AI & Machine Learning", icon: "🤖" },
    { name: "Photography", icon: "📸" },
    { name: "Travel", icon: "✈️" },
    { name: "Music Production", icon: "🎵" },
    { name: "Fitness", icon: "💪" },
    { name: "Reading", icon: "📚" },
    { name: "Gaming", icon: "🎮" },
    { name: "Cooking", icon: "👨‍🍳" },
  ]

  const values = [
    {
      title: "Quality First",
      description: "I believe in delivering high-quality code that stands the test of time.",
      icon: "⭐",
    },
    {
      title: "Continuous Learning",
      description: "Technology evolves rapidly, and I'm committed to staying at the forefront.",
      icon: "📈",
    },
    {
      title: "Collaboration",
      description: "Great products are built by great teams working together towards common goals.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "I love exploring new technologies and finding creative solutions to complex problems.",
      icon: "💡",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-20">
        {/* Header */}
        <section className="py-20 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-6">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/">
                <Button variant="ghost" className="mb-6 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Home
                </Button>
              </Link>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    About Me
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    I'm a passionate full stack developer with over 5 years of experience creating digital solutions
                    that make a difference. I love turning complex problems into simple, beautiful, and intuitive
                    designs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{personalInfo.experience}</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative"
                >
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                    <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=300&width=300"
                        alt="Profile"
                        className="w-72 h-72 rounded-full object-cover border-4 border-white/10"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Personal Story */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8">My Journey</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  My journey into software development began during my computer science studies, where I discovered my
                  passion for creating digital solutions that solve real-world problems. What started as curiosity about
                  how websites work evolved into a deep love for crafting exceptional user experiences.
                </p>
                <p>
                  Over the years, I've had the privilege of working with startups, established companies, and individual
                  entrepreneurs, helping them bring their visions to life through code. Each project has taught me
                  something new and reinforced my belief that technology should be accessible, beautiful, and
                  meaningful.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source projects,
                  or sharing knowledge with the developer community. I believe in continuous learning and staying
                  curious about the ever-evolving world of technology.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Achievements & Recognition</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Milestones and recognition that mark my professional journey
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4`}
                      >
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{achievement.description}</p>
                      <Badge variant="secondary" className="bg-white/10 text-foreground">
                        {achievement.year}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Professional Timeline</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My career progression and key milestones
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex items-start gap-8 pb-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-sm ${
                        item.current
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-blue-500/20"
                          : "bg-gradient-to-r from-blue-600 to-blue-700"
                      }`}
                    >
                      {item.year}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          {item.current && (
                            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Current</Badge>
                          )}
                        </div>
                        <p className="text-blue-500 font-medium">{item.company}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">My Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and professional relationships
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-4">{value.icon}</div>
                      <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Beyond Code</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My interests and hobbies that keep me inspired and balanced
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4 flex items-center gap-3">
                      <span className="text-2xl">{interest.icon}</span>
                      <span className="font-medium">{interest.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with passionate people. Whether you have a
                specific idea or just want to explore possibilities, I'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Get In Touch
                  </Button>
                </Link>
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
