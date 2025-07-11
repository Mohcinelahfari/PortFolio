"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function BackendSkillsPage() {
  const backendTechnologies = [
    {
    name: "ASP .NET C#",
    level: 90,
    experience: "2+ years",
    description: "Framework for building robust, scalable, and secure web applications",
    projects: 25,
    icon: "🔵",
    color: "from-blue-700 to-blue-800",
  },
  {
    name: "PHP",
    level: 80,
    experience: "2+ years",
    description: "A general-purpose scripting language for web development",
    projects: 30,
    icon: "🐘",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Laravel",
    level: 85,
    experience: "2+ years",
    description: "PHP framework for web artisans, known for elegant syntax and features",
    projects: 22,
    icon: "🛠️",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "MySQL",
    level: 90,
    experience: "3+ years",
    description: "Relational database management system for structured data",
    projects: 40,
    icon: "🐬",
    color: "from-blue-600 to-blue-700",
  },
];

  const architecturePatterns = [
    {
      name: "RESTful APIs",
      description: "Design and implementation of REST architectural style APIs",
      icon: "🔗",
      expertise: "Expert",
    },
    {
      name: "Microservices",
      description: "Breaking down applications into small, independent services",
      icon: "🏗️",
      expertise: "Advanced",
    },
    {
      name: "Event-Driven Architecture",
      description: "Building systems that respond to and produce events",
      icon: "⚡",
      expertise: "Advanced",
    },
    {
      name: "Database Design",
      description: "Designing efficient and scalable database schemas",
      icon: "🗄️",
      expertise: "Expert",
    },
    {
      name: "API Security",
      description: "Implementing authentication, authorization, and security best practices",
      icon: "🔒",
      expertise: "Advanced",
    },
    {
      name: "Performance Optimization",
      description: "Optimizing backend performance through caching, indexing, and profiling",
      icon: "🚀",
      expertise: "Advanced",
    },
  ]

const featuredProjects = [
  {
    name: "School Management System",
    tech: ["Laravel", "Vite.js"],
    description:
      "Comprehensive school management platform with student enrollment, class scheduling, grading, and real-time notifications",
    image: "/school.jpeg",
    github: "#",
    live: "#",
    metrics: {
      students: "2K+",
      classes: "500+",
      uptime: "99.9%",
    },
  },
  {
    name: "Barber Shop Booking App",
    tech: ["Laravel", "Vite.js"],
    description:
      "Online appointment booking system for barber shops with calendar integration, customer tracking, and real-time updates",
    image: "/bar.jpeg",
    github: "#",
    live: "#",
    metrics: {
      bookings: "10K+",
      users: "3K+",
      rating: "4.8/5",
    },
  },
  {
    name: "Hospital Management System",
    tech: ["ASP.NET", "SQL Server"],
    description:
      "End-to-end hospital management platform supporting patient records, appointment scheduling, billing, and inventory management",
    image: "/hospital.jpeg",
    github: "#",
    live: "#",
    metrics: {
      patients: "5K+",
      appointments: "20K+",
      uptime: "99.7%",
    },
  },
];



  const tools = [
    { name: "Postman", category: "API Testing", icon: "📮" },
    { name: "Swagger", category: "API Documentation", icon: "📚" },
    { name: "Jest", category: "Testing", icon: "🧪" },
    { name: "PM2", category: "Process Management", icon: "⚙️" },
    { name: "Nginx", category: "Web Server", icon: "🌐" },
    { name: "AWS", category: "Cloud Services", icon: "☁️" },
    { name: "Git", category: "Version Control", icon: "📝" },
    { name: "Linux", category: "Operating System", icon: "🐧" },
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
                <div className="text-8xl mb-6">⚙️</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Backend Development
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Building robust, scalable server-side applications with modern backend technologies and cloud
                  infrastructure. Specialized in API development, database design, and system architecture.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Backend Technologies</h2>
              <p className="text-xl text-muted-foreground">My backend technology stack and expertise levels</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {backendTechnologies.map((tech, index) => (
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

        {/* Architecture Patterns */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Architecture & Patterns</h2>
              <p className="text-xl text-muted-foreground">
                Design patterns and architectural approaches I specialize in
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architecturePatterns.map((pattern, index) => (
                <motion.div
                  key={pattern.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{pattern.icon}</div>
                        <div>
                          <h3 className="font-bold text-lg">{pattern.name}</h3>
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                            {pattern.expertise}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{pattern.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Featured Backend Projects</h2>
              <p className="text-xl text-muted-foreground">Projects showcasing my backend development expertise</p>
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
                      <img
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
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
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
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Tools & Environment</h2>
              <p className="text-xl text-muted-foreground">Development tools and technologies I work with daily</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
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
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Backend Development Expertise
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">2+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                  <div className="text-muted-foreground">Backend Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">5+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I specialize in building scalable, secure, and high-performance backend systems. From RESTful APIs to
                microservices architecture, I have the expertise to handle complex server-side challenges and deliver
                robust solutions that power modern applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <Server className="mr-2 h-5 w-5" />
                    Discuss Your Backend Needs
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" size="lg" className="border-2 bg-transparent">
                    View Backend Projects
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
