"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function FrontendSkillsPage() {
  const frontendTechnologies = [
    {
      name: "React",
      level: 98,
      experience: "1+ years",
      description: "Advanced React development with hooks, context, and performance optimization",
      projects: 45,
      icon: "⚛️",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "Next.js",
      level: 95,
      experience: "2 mounth",
      description: "Full-stack React framework with SSR, SSG, and API routes",
      projects: 35,
      icon: "▲",
      color: "from-gray-700 to-gray-900",
    },
    {
      name: "TypeScript",
      level: 92,
      experience: "6 mounth",
      description: "Type-safe JavaScript development for large-scale applications",
      projects: 40,
      icon: "🔷",
      color: "from-blue-500 to-blue-700",
    },

    {
      name: "Tailwind CSS",
      level: 96,
      experience: "3+ years",
      description: "Utility-first CSS framework for rapid UI development",
      projects: 50,
      icon: "🎨",
      color: "from-cyan-400 to-cyan-600",
    },

  ]

  const featuredProjects = [
    {
      name: "E-Commerce Platform",
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
      description: "Modern e-commerce solution with advanced filtering and payment integration",
      image: "/dash.png",
      github: "#",
      live: "#",
    },
    {
      name: "Dashboard Analytics",
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
      description: "Real-time analytics dashboard with interactive charts and data visualization",
      image: "/ana.png",
      github: "#",
      live: "#",
    },
    {
      name: "Portfolio Website",
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
      description: "Animated portfolio with smooth transitions and modern design",
      image: "/port.jpeg",
      github: "#",
      live: "#",
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
                <div className="text-8xl mb-6">🎨</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Frontend Development
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Creating beautiful, responsive, and interactive user interfaces with modern frontend technologies and
                  best practices.
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
              <h2 className="text-4xl font-bold mb-4">Technologies & Tools</h2>
              <p className="text-xl text-muted-foreground">My frontend technology stack and expertise levels</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frontendTechnologies.map((tech, index) => (
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
                      <p className="text-muted-foreground mb-4">{tech.description}</p>

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
              <h2 className="text-4xl font-bold mb-4">Featured Frontend Projects</h2>
              <p className="text-xl text-muted-foreground">Projects showcasing my frontend development skills</p>
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
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow">
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
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
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
      </div>
    </div>
  )
}
