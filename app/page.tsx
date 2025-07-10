"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code2, ChevronDown, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { ParticleField } from "@/components/particle-field"
import { AnimatedCounter } from "@/components/animated-counter"
import Link from "next/link"
import { Database, Globe, Palette, Server, Smartphone } from "lucide-react"
import { CVDownload } from "@/components/cv-download"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Modern UI/UX with React, Next.js, Vue.js and cutting-edge frameworks",
      icon: "🎨",
      href: "/skills/frontend",
      color: "from-blue-500 to-cyan-500",
      technologies: ["React", "Next.js", "Vue.js", "TypeScript"],
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions with Node.js, Python, and cloud services",
      icon: "⚙️",
      href: "/skills/backend",
      color: "from-green-500 to-emerald-500",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and Flutter",
      icon: "📱",
      href: "/skills/mobile",
      color: "from-purple-500 to-pink-500",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
    },
    {
      title: "DevOps & Cloud",
      description: "Infrastructure, deployment, and cloud architecture solutions",
      icon: "☁️",
      href: "/skills/devops",
      color: "from-orange-500 to-red-500",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
  ]

  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance.",
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      price: "From $2,500",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Content Management",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience.",
      icon: Smartphone,
      color: "from-purple-500 to-purple-600",
      price: "From $5,000",
      features: [
        "iOS & Android Apps",
        "Cross-platform Solutions",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and analytics.",
      icon: Globe,
      color: "from-green-500 to-green-600",
      price: "From $3,500",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "Analytics Dashboard",
        "Multi-vendor Support",
      ],
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
      icon: Palette,
      color: "from-pink-500 to-pink-600",
      price: "From $1,500",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing"],
    },
    {
      title: "API Development",
      description: "Robust APIs and backend services that power your applications with scalable architecture.",
      icon: Server,
      color: "from-orange-500 to-orange-600",
      price: "From $2,000",
      features: ["RESTful APIs", "GraphQL Integration", "Database Design", "Authentication", "Documentation"],
    },
    {
      title: "Consulting & Strategy",
      description: "Technical consulting and strategic planning to guide your digital transformation journey.",
      icon: Database,
      color: "from-cyan-500 to-cyan-600",
      price: "From $150/hr",
      features: [
        "Technical Audits",
        "Architecture Planning",
        "Technology Selection",
        "Performance Analysis",
        "Team Training",
      ],
    },
  ]

  const reviewStats = [
    { label: "Happy Clients", value: "150+" },
    { label: "Projects Completed", value: "200+" },
    { label: "Average Rating", value: "4.9★" },
    { label: "Response Time", value: "< 24h" },
  ]

  const customerReviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechStart Inc.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      review:
        "Absolutely phenomenal work! The attention to detail and innovative solutions exceeded all our expectations. Our platform's performance improved by 300% and user engagement doubled.",
      project: "SaaS Platform",
      date: "Dec 2023",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      company: "Digital Innovations",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      review:
        "Working with this developer was a game-changer for our company. The code quality is exceptional, delivery was ahead of schedule, and the ongoing support has been outstanding.",
      project: "E-commerce Platform",
      date: "Nov 2023",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      review:
        "The most talented developer I've worked with. Transformed our vision into reality with elegant solutions and cutting-edge technology. Highly recommend for any serious project.",
      project: "Mobile App",
      date: "Oct 2023",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Founder",
      company: "InnovateLab",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      review:
        "Incredible expertise in both frontend and backend development. Built our entire platform from scratch and it's been running flawlessly. Great communication throughout the project.",
      project: "Analytics Dashboard",
      date: "Sep 2023",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      position: "Marketing Director",
      company: "GrowthCorp",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      review:
        "Our website redesign resulted in a 250% increase in conversions. The developer understood our brand perfectly and delivered beyond expectations. Professional and reliable.",
      project: "Website Redesign",
      date: "Aug 2023",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Operations Manager",
      company: "LogisticsPro",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
      review:
        "Built a complex inventory management system that streamlined our entire operation. The attention to detail and problem-solving skills are remarkable. Couldn't be happier.",
      project: "Management System",
      date: "Jul 2023",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[100px]">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

        <motion.div
          className="container mx-auto px-6 text-center z-10 relative"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 mx-auto mb-8">
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
                <Code2 className="w-16 h-16 text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Full Stack
            <br />
            <span className="text-4xl md:text-6xl">Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting exceptional digital experiences with cutting-edge technologies. Specialized in building scalable
            applications that drive business growth.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/projects">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <CVDownload />

            <Link href="/contact">
              <Button variant="secondary" size="lg" className="group bg-white/10 hover:bg-white/20">
                Get In Touch
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Projects Completed", value: 150, suffix: "+" },
              { label: "Happy Clients", value: 98, suffix: "%" },
              { label: "Years Experience", value: 5, suffix: "+" },
              { label: "Technologies", value: 25, suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.suffix}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              My Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my skills across different technology domains
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <Link href={category.href}>
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                    <CardContent className="p-8">
                      <div className="text-6xl mb-4">{category.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{category.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {category.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-white/10 text-foreground">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-blue-500 group-hover:translate-x-2 transition-transform">
                        <span className="mr-2">Explore Skills</span>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Services I Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-500">{service.price}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group-hover:bg-blue-500 group-hover:text-white transition-colors bg-transparent"
                      >
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take my word for it - hear from satisfied clients
            </p>
          </motion.div>

          {/* Review Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {reviewStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-6">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.1 + i * 0.1, duration: 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Review Text */}
                    <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                      "{review.review}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <motion.img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full border-2 border-blue-500/20"
                        whileHover={{ scale: 1.1 }}
                      />
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.position}</div>
                        <div className="text-sm text-blue-500">{review.company}</div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Project:</span>
                        <span className="font-medium">{review.project}</span>
                      </div>
                      <div className="flex justify-between text-sm mt-1">
                        <span className="text-muted-foreground">Completed:</span>
                        <span className="font-medium">{review.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                Start Your Project Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Projects Preview */}
      <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              A glimpse of my recent projects and achievements
            </p>
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
