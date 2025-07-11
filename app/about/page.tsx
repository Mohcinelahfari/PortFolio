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
    name: "Mohcine Lahfari",
    title: "Full Stack Developer",
    location: "Casablanca, Morocco",
    experience: "2+ Years",
    email: "mohcinelahfari01@gmail.com",
    phone: "+212 700534286",
  }

  const achievements = [
    {
      icon: Award,
      title: "Professional Internships",
      description: "Completed 3 successful internships at leading companies",
      year: "2024-2025",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Mobile App Development",
      description: "Built employee management apps with React Native",
      year: "2024-2025",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Zap,
      title: "Full-Stack Solutions",
      description: "Developed complete web applications with Laravel & React",
      year: "2024-2025",
      color: "from-blue-700 to-purple-600",
    },
    {
      icon: Coffee,
      title: "Technology Enthusiast",
      description: "Passionate about modern web technologies and best practices",
      year: "Ongoing",
      color: "from-purple-600 to-purple-700",
    },
  ]

  const timeline = [
    {
      date: "Jan 2025",
      fullDate: "March 2025 - April 2025",
      title: "Mobile Developer - Internship",
      company: "Black Service Solution - Casablanca Technopark",
      description:
        "Developing a mobile application for employee and department management. Designing user interface (UI) with React Native (Expo). Creating screens for adding, editing, and deleting employees with modern mobile development practices.",
      current: false,
    },
    {
      date: "novembre 2024",
      fullDate: "novembre 2024 - March 2025",
      title: "Web Application Developer - Internship",
      company: "My Team - Bouskoura",
      description:
        "Developed an employee and department management system. Implemented a leave and travel booking module. Created a medication tracking system linked to CNSS. Designed and optimized the database architecture. Implemented authentication and application security features.",
      current: false,
    },
    {
      date: "March 2024",
      fullDate: "March 2024 - April 2024",
      title: "Mobile Developer - Internship",
      company: "Cosumar - Casablanca",
      description:
        "Developed a mobile application using React Native, Expo, and NativeWind for employee schedule management. Collaborated with the development team to design and implement user-friendly interfaces. Ensured application performance and responsiveness across various devices and platforms.",
      current: false,
    },
  ]

  const education = [
    {
      period: "Oct 2024 - Present",
      degree: "Professional Bachelor's Degree",
      field: "Development and Security",
      school: "IFIAG School",
      location: "Casablanca, Morocco",
      status: "In Progress",
      description:
        "Advanced training in software development with specialization in computer security and cybersecurity. Focus on secure coding practices, vulnerability assessment, and modern security frameworks.",
      current: true,
      icon: "🎓",
      color: "from-blue-500 to-blue-600",
    },
    {
      period: "Oct 2022 - Jun 2024",
      degree: "Specialized Technician Diploma",
      field: "Digital Development",
      school: "IFIAG School",
      location: "Casablanca, Morocco",
      status: "Graduated",
      description:
        "Comprehensive training in web and mobile development, including modern technologies like React, Laravel, React Native, and full-stack development methodologies. Hands-on experience with real-world projects.",
      current: false,
      icon: "💻",
      color: "from-blue-600 to-blue-700",
    },
    {
      period: "Sep 2021 - Jun 2022",
      degree: "Baccalaureate",
      field: "Life and Earth Sciences",
      school: "Othmân ibn Affân High School",
      location: "Morocco",
      status: "Graduated",
      description:
        "Scientific baccalaureate with specialization in Life and Earth Sciences, developing strong analytical thinking, problem-solving skills, and scientific methodology that supports logical programming approaches.",
      current: false,
      icon: "🔬",
      color: "from-blue-700 to-purple-600",
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
      description: "I believe in delivering high-quality code that stands the test of time and follows best practices.",
      icon: "⭐",
    },
    {
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly, and I'm committed to staying current with the latest developments and trends.",
      icon: "📈",
    },
    {
      title: "Collaboration",
      description:
        "Great products are built by great teams working together towards common goals with clear communication.",
      icon: "🤝",
    },
    {
      title: "Innovation",
      description: "I love exploring new technologies and finding creative solutions to complex technical challenges.",
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
                    My name is Mohcine Lahfari, and I'm a passionate Full-Stack Developer specializing in React.js,
                    Next.js, and Laravel. I build modern, responsive web applications from intuitive front-end
                    interfaces to robust back-end systems. I'm dedicated to writing clean code, optimizing performance,
                    and creating meaningful digital solutions.
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
                        src="/v1photo.png"
                        alt="Mohcine Lahfari - Full Stack Developer"
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
              <h2 className="text-4xl font-bold mb-8">My Development Journey</h2>
              <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Hi, I'm Mohcine Lahfari, a passionate Full-Stack Developer with expertise in React.js, Next.js, and
                  Laravel. I specialize in creating clean, scalable, and high-performance web applications that
                  seamlessly connect dynamic user interfaces with powerful backend architectures.
                </p>
                <p>
                  Throughout my career, I've completed three professional internships at leading companies including
                  Cosumar, My Team, and Black Service Solution. These experiences have given me real-world exposure to
                  diverse projects and helped me refine my development skills across multiple technology stacks.
                </p>
                <p>
                  I'm known for being highly motivated, detail-oriented, and committed to delivering exceptional work. I
                  thrive on solving complex technical challenges and transforming innovative ideas into impactful
                  digital solutions that make a difference.
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
                Key milestones and accomplishments that define my professional journey
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
              <h2 className="text-4xl font-bold mb-4">Professional Experience Timeline</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My career progression and key professional milestones
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.date}
                    className="relative flex items-start gap-8 pb-12"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-xs text-center ${
                        item.current
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 ring-4 ring-blue-500/20"
                          : "bg-gradient-to-r from-blue-600 to-blue-700"
                      }`}
                    >
                      {item.date}
                    </div>

                    {/* Content */}
                    <Card className="flex-1 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          {item.current && (
                            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">Current</Badge>
                          )}
                        </div>
                        <p className="text-blue-500 font-medium">{item.company}</p>
                        <p className="text-sm text-muted-foreground">{item.fullDate}</p>
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

        {/* Education Section */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Education & Academic Background</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My academic journey and professional certifications that shaped my expertise
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-1 gap-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.degree}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="group"
                  >
                    <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                      <CardContent className="p-8">
                        <div className="flex items-start gap-6">
                          {/* Icon */}
                          <div
                            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform`}
                          >
                            {edu.icon}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-3">
                              <div>
                                <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors">
                                  {edu.degree}
                                </h3>
                                <p className="text-lg text-blue-500 font-medium">{edu.field}</p>
                              </div>
                              {edu.current && (
                                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                                  In Progress
                                </Badge>
                              )}
                              {!edu.current && (
                                <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                                  {edu.status}
                                </Badge>
                              )}
                            </div>

                            <div className="flex items-center gap-4 mb-4 text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                <span>{edu.period}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4" />
                                <span>{edu.school}</span>
                              </div>
                            </div>

                            <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
                <div className="text-muted-foreground text-sm">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">2</div>
                <div className="text-muted-foreground text-sm">Diplomas Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">1</div>
                <div className="text-muted-foreground text-sm">In Progress</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">IFIAG</div>
                <div className="text-muted-foreground text-sm">Specialized School</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Core Values & Principles</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The fundamental principles that guide my work ethic and professional relationships
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
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Beyond Development</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Personal interests and hobbies that keep me inspired, creative, and well-balanced
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
                Let's Build Something Extraordinary Together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to collaborate on new projects and work with passionate individuals and teams.
                Whether you have a specific vision or want to explore innovative possibilities, I'd love to connect and
                discuss how we can create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  >
                    <Heart className="mr-2 h-5 w-5" />
                    Start a Conversation
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" size="lg" className="border-2 bg-transparent">
                    Explore My Portfolio
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
