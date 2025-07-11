"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Github, Smartphone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import Link from "next/link"
import Image from "next/image"

export default function MobileSkillsPage() {
  const mobileTechnologies = [
    {
      name: "React Native",
      level: 90,
      experience: "2+ years",
      description: "Cross-platform mobile development with native performance and shared codebase",
      projects: 25,
      icon: "⚛️",
      color: "from-blue-500 to-blue-600",
    },
    
    {
      name: "Expo",
      level: 88,
      experience: "3+ years",
      description: "Platform for universal React applications with powerful development tools",
      projects: 22,
      icon: "🚀",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Firebase",
      level: 86,
      experience: "3+ years",
      description: "Google's mobile platform for authentication, database, and cloud functions",
      projects: 28,
      icon: "🔥",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Redux",
      level: 82,
      experience: "3+ years",
      description: "Predictable state container for JavaScript applications",
      projects: 20,
      icon: "🔄",
      color: "from-purple-600 to-purple-700",
    },
    {
      name: "TypeScript",
      level: 88,
      experience: "3+ years",
      description: "Typed superset of JavaScript for better mobile app development",
      projects: 24,
      icon: "🔷",
      color: "from-blue-500 to-blue-600",
    },
  ]

  const mobileFeatures = [
    {
      name: "Push Notifications",
      description: "Real-time messaging and engagement through push notifications",
      icon: "🔔",
      expertise: "Expert",
    },
    {
      name: "Offline Functionality",
      description: "Apps that work seamlessly without internet connection",
      icon: "📱",
      expertise: "Advanced",
    },
    {
      name: "Biometric Authentication",
      description: "Secure authentication using fingerprint and face recognition",
      icon: "🔐",
      expertise: "Advanced",
    },
    {
      name: "Camera & Media",
      description: "Image capture, video recording, and media processing",
      icon: "📸",
      expertise: "Advanced",
    },
    {
      name: "GPS & Location",
      description: "Location-based services and mapping integration",
      icon: "📍",
      expertise: "Advanced",
    },
    {
      name: "Payment Integration",
      description: "In-app purchases and payment gateway integration",
      icon: "💳",
      expertise: "Expert",
    },
  ]

const featuredProjects = [
  {
    name: "Employee Management App",
    tech: ["React Native", "Javascript", "Firebase"],
    description:
      "Mobile application for managing employees and departments with features like attendance tracking, role assignment, and real-time updates",
    image: "/empl.png",
    github: "#",
    live: "#",
    platforms: ["iOS", "Android"],
    metrics: {
      employees: "1K+",
      departments: "20+",
      uptime: "99.9%",
    },
  },
  {
    name: "E-commerce Mobile App",
    tech: ["React Native", "Javascript", "Mysql"],
    description:
      "Custom-built mobile shopping application with product browsing, cart management, secure checkout, and push notifications",
    image: "/ecom.jpeg",
    github: "#",
    live: "#",
    platforms: ["iOS", "Android"],
    metrics: {
      products: "1K+",
      activeUsers: "10K+",
      orders: "25K+",
    },
  },


];


  const developmentTools = [
    { name: "Xcode", category: "iOS Development", icon: "🔨" },
    { name: "Android Studio", category: "Android Development", icon: "🤖" },
    { name: "VS Code", category: "Code Editor", icon: "💻" },
    { name: "Flipper", category: "Debugging", icon: "🐛" },
    { name: "Fastlane", category: "CI/CD", icon: "🚀" },
    { name: "TestFlight", category: "Beta Testing", icon: "✈️" },
    { name: "App Store Connect", category: "Distribution", icon: "📱" },
    { name: "Google Play Console", category: "Distribution", icon: "🎮" },
  ]

  const appStoreStats = [
    { label: "Apps Published", value: "25+", icon: "📱" },
    { label: "Total Downloads", value: "500K+", icon: "⬇️" },
    { label: "Average Rating", value: "4.7★", icon: "⭐" },
    { label: "User Retention", value: "78%", icon: "👥" },
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
                <div className="text-8xl mb-6">📱</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Mobile Development
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Creating native and cross-platform mobile applications with React Native, Flutter, and native
                  iOS/Android development. Specialized in building high-performance apps with exceptional user
                  experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Store Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {appStoreStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Mobile Technologies</h2>
              <p className="text-xl text-muted-foreground">
                My mobile development technology stack and expertise levels
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileTechnologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl">{tech.icon}</div>
                        <div>
                          <CardTitle className="text-xl">{tech.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{tech.experience}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{tech.description}</p>

                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Proficiency</span>
                            <span>{tech.level}%</span>
                          </div>
                          <Progress value={tech.level} className="h-2" />
                        </div>

                        <div className="flex justify-between text-sm">
                          <span>Projects Completed</span>
                          <span className="font-semibold text-blue-500">{tech.projects}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mobile Features */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Mobile App Features</h2>
              <p className="text-xl text-muted-foreground">Advanced mobile features and integrations I specialize in</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileFeatures.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{feature.icon}</div>
                        <div>
                          <h3 className="font-bold text-lg">{feature.name}</h3>
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                            {feature.expertise}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Featured Mobile Projects</h2>
              <p className="text-xl text-muted-foreground">Mobile applications showcasing my development expertise</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow bg-white/5 backdrop-blur-sm border-white/10">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        <Button size="sm" variant="secondary">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-2 mb-4">
                        {project.platforms.map((platform) => (
                          <Badge key={platform} className="bg-blue-500/20 text-blue-400 text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key}>
                            <div className="text-sm font-bold text-blue-500">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/projects">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  View All Mobile Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Development Tools */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Development Tools</h2>
              <p className="text-xl text-muted-foreground">Tools and platforms I use for mobile app development</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {developmentTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl mb-2">{tool.icon}</div>
                      <h3 className="font-semibold text-sm">{tool.name}</h3>
                      <p className="text-xs text-muted-foreground">{tool.category}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Summary */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Mobile Development Expertise
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">25+</div>
                  <div className="text-muted-foreground">Mobile Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">500K+</div>
                  <div className="text-muted-foreground">Total Downloads</div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I specialize in creating high-quality mobile applications that deliver exceptional user experiences
                across iOS and Android platforms. From concept to App Store deployment, I handle the entire mobile
                development lifecycle with expertise in both cross-platform and native development approaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <Smartphone className="mr-2 h-5 w-5" />
                    Discuss Your Mobile App
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" size="lg" className="border-2 bg-transparent">
                    View Mobile Projects
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
