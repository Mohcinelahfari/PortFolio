"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import Link from "next/link"

export default function DevOpsSkillsPage() {
  const devopsTechnologies = [
    {
      name: "AWS",
      level: 88,
      experience: "3+ years",
      description: "Amazon Web Services cloud platform for scalable infrastructure and services",
      projects: 32,
      icon: "☁️",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Docker",
      level: 92,
      experience: "3+ years",
      description: "Containerization platform for consistent application deployment across environments",
      projects: 40,
      icon: "🐳",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Kubernetes",
      level: 80,
      experience: "2+ years",
      description: "Container orchestration platform for automated deployment and scaling",
      projects: 18,
      icon: "⚙️",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Terraform",
      level: 82,
      experience: "2+ years",
      description: "Infrastructure as Code tool for building and managing cloud infrastructure",
      projects: 22,
      icon: "🏗️",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Jenkins",
      level: 85,
      experience: "3+ years",
      description: "Open-source automation server for continuous integration and deployment",
      projects: 28,
      icon: "🔧",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "GitHub Actions",
      level: 90,
      experience: "2+ years",
      description: "CI/CD platform integrated with GitHub for automated workflows",
      projects: 35,
      icon: "🚀",
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Nginx",
      level: 86,
      experience: "3+ years",
      description: "High-performance web server and reverse proxy for load balancing",
      projects: 30,
      icon: "🌐",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Linux",
      level: 85,
      experience: "4+ years",
      description: "Unix-like operating system administration and server management",
      projects: 45,
      icon: "🐧",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Monitoring",
      level: 78,
      experience: "2+ years",
      description: "Application and infrastructure monitoring with Prometheus, Grafana, and ELK stack",
      projects: 20,
      icon: "📊",
      color: "from-red-500 to-red-600",
    },
  ]

  const cloudServices = [
    {
      name: "EC2 & Auto Scaling",
      description: "Scalable compute capacity with automatic scaling based on demand",
      icon: "🖥️",
      expertise: "Expert",
    },
    {
      name: "RDS & Database Management",
      description: "Managed relational databases with automated backups and scaling",
      icon: "🗄️",
      expertise: "Advanced",
    },
    {
      name: "S3 & CloudFront",
      description: "Object storage and content delivery network for global distribution",
      icon: "📦",
      expertise: "Expert",
    },
    {
      name: "Lambda & Serverless",
      description: "Event-driven serverless computing for cost-effective solutions",
      icon: "⚡",
      expertise: "Advanced",
    },
    {
      name: "VPC & Networking",
      description: "Virtual private cloud setup with secure networking configurations",
      icon: "🔗",
      expertise: "Advanced",
    },
    {
      name: "IAM & Security",
      description: "Identity and access management with security best practices",
      icon: "🔐",
      expertise: "Advanced",
    },
  ]

  const featuredProjects = [
    {
      name: "Microservices Infrastructure",
      tech: ["Kubernetes", "Docker", "AWS", "Terraform", "Prometheus"],
      description: "Complete microservices architecture with auto-scaling, monitoring, and CI/CD pipeline",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      metrics: {
        services: "15+",
        uptime: "99.9%",
        scaling: "Auto",
      },
    },
    {
      name: "Multi-Environment CI/CD",
      tech: ["GitHub Actions", "Docker", "AWS", "Terraform"],
      description: "Automated deployment pipeline with staging, testing, and production environments",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      metrics: {
        deployments: "500+",
        environments: "4",
        rollback: "<5min",
      },
    },
    {
      name: "High-Availability Setup",
      tech: ["AWS", "Load Balancer", "RDS", "CloudWatch"],
      description: "Fault-tolerant infrastructure with load balancing, database replication, and monitoring",
      image: "/placeholder.svg?height=200&width=300",
      github: "#",
      live: "#",
      metrics: {
        availability: "99.99%",
        regions: "3",
        recovery: "<1min",
      },
    },
  ]

  const devopsTools = [
    { name: "Git", category: "Version Control", icon: "📝" },
    { name: "Ansible", category: "Configuration Management", icon: "🔧" },
    { name: "Prometheus", category: "Monitoring", icon: "📊" },
    { name: "Grafana", category: "Visualization", icon: "📈" },
    { name: "ELK Stack", category: "Log Management", icon: "📋" },
    { name: "Vault", category: "Secret Management", icon: "🔒" },
    { name: "Helm", category: "Package Manager", icon: "⚓" },
    { name: "ArgoCD", category: "GitOps", icon: "🔄" },
  ]

  const infrastructureStats = [
    { label: "Cloud Projects", value: "50+", icon: "☁️" },
    { label: "Uptime Achieved", value: "99.9%", icon: "⚡" },
    { label: "Deployments/Month", value: "200+", icon: "🚀" },
    { label: "Cost Optimization", value: "40%", icon: "💰" },
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
                <div className="text-8xl mb-6">☁️</div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  DevOps & Cloud
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Infrastructure automation, cloud architecture, and deployment strategies using modern DevOps practices
                  and tools. Specialized in building scalable, reliable, and secure cloud infrastructure.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Infrastructure Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {infrastructureStats.map((stat, index) => (
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
              <h2 className="text-4xl font-bold mb-4">DevOps Technologies</h2>
              <p className="text-xl text-muted-foreground">
                My DevOps and cloud technology stack with expertise levels
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsTechnologies.map((tech, index) => (
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

        {/* Cloud Services */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Cloud Services Expertise</h2>
              <p className="text-xl text-muted-foreground">
                AWS cloud services and infrastructure components I specialize in
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cloudServices.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-3xl">{service.icon}</div>
                        <div>
                          <h3 className="font-bold text-lg">{service.name}</h3>
                          <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 text-xs">
                            {service.expertise}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
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
              <h2 className="text-4xl font-bold mb-4">Featured DevOps Projects</h2>
              <p className="text-xl text-muted-foreground">Infrastructure projects showcasing my DevOps expertise</p>
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
                  View All DevOps Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* DevOps Tools */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">DevOps Tools</h2>
              <p className="text-xl text-muted-foreground">
                Tools and platforms I use for DevOps and infrastructure management
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {devopsTools.map((tool, index) => (
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
                DevOps & Cloud Expertise
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">3+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">50+</div>
                  <div className="text-muted-foreground">Cloud Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-2">99.9%</div>
                  <div className="text-muted-foreground">Uptime Achieved</div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I specialize in building and maintaining scalable cloud infrastructure using modern DevOps practices.
                From containerization to CI/CD pipelines, I help organizations achieve reliable, automated, and
                cost-effective deployment strategies that support rapid development and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    <Cloud className="mr-2 h-5 w-5" />
                    Discuss Your Infrastructure
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" size="lg" className="border-2 bg-transparent">
                    View DevOps Projects
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
