"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "AI-Powered SaaS Platform",
      description:
        "Revolutionary AI platform that transforms business workflows with machine learning capabilities and real-time analytics.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "TypeScript", "OpenAI", "Prisma", "Stripe"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: true,
      stats: { users: "10K+", revenue: "$50K+", rating: 4.9 },
      year: "2024",
    },
    {
      id: 2,
      title: "Crypto Trading Dashboard",
      description:
        "Real-time cryptocurrency trading platform with advanced charting, portfolio management, and automated trading bots.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "WebSocket", "D3.js", "Redis"],
      category: "Frontend",
      github: "#",
      live: "#",
      featured: true,
      stats: { trades: "1M+", volume: "$10M+", uptime: "99.9%" },
      year: "2024",
    },
    {
      id: 3,
      title: "E-Learning Platform",
      description:
        "Comprehensive online learning platform with video streaming, interactive quizzes, and progress tracking.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "Laravel", "AWS", "FFmpeg", "MySQL"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: false,
      stats: { students: "25K+", courses: "500+", completion: "85%" },
      year: "2023",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Node.js", "MongoDB", "JWT", "Stripe"],
      category: "Mobile",
      github: "#",
      live: "#",
      featured: false,
      stats: { downloads: "100K+", rating: "4.8", transactions: "$5M+" },
      year: "2023",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description:
        "Advanced social media analytics platform with sentiment analysis, trend tracking, and automated reporting.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Python", "Django", "PostgreSQL", "Celery", "Chart.js"],
      category: "Backend",
      github: "#",
      live: "#",
      featured: false,
      stats: { accounts: "50K+", reports: "1M+", accuracy: "94%" },
      year: "2023",
    },
    {
      id: 6,
      title: "Real Estate Platform",
      description: "Modern real estate platform with virtual tours, mortgage calculator, and advanced property search.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Prisma", "Stripe", "Mapbox", "Three.js"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: false,
      stats: { properties: "10K+", users: "25K+", sales: "$2M+" },
      year: "2022",
    },
    {
      id: 7,
      title: "Task Management System",
      description:
        "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: false,
      stats: { teams: "5K+", tasks: "500K+", productivity: "+40%" },
      year: "2022",
    },
    {
      id: 8,
      title: "Weather Forecast App",
      description: "Beautiful weather application with detailed forecasts, interactive maps, and weather alerts.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Flutter", "Dart", "Firebase", "Weather API"],
      category: "Mobile",
      github: "#",
      live: "#",
      featured: false,
      stats: { downloads: "200K+", rating: "4.7", cities: "10K+" },
      year: "2022",
    },
    {
      id: 9,
      title: "Inventory Management",
      description: "Enterprise inventory management system with barcode scanning, automated reordering, and analytics.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "Express", "PostgreSQL", "Redis", "Docker"],
      category: "Full Stack",
      github: "#",
      live: "#",
      featured: false,
      stats: { businesses: "1K+", items: "1M+", efficiency: "+60%" },
      year: "2021",
    },
  ]

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory

    return matchesSearch && matchesCategory
  })

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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  My Projects
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                  A comprehensive showcase of my work across different technologies and domains. Each project represents
                  a unique challenge and innovative solution.
                </p>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                  <div className="relative flex-1 w-full">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-white/10 border-white/20"
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={
                          selectedCategory === category
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                            : "bg-white/10 border-white/20"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10">
                    <div className="relative overflow-hidden">
                      {project.featured && (
                        <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          Featured
                        </Badge>
                      )}
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
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

                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl group-hover:text-blue-500 transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {project.year}
                        </Badge>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {project.category}
                      </Badge>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center">
                        {Object.entries(project.stats).map(([key, value]) => (
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
