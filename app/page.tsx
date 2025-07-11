"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Code2, ChevronDown, Star, Mail, Github, Linkedin, MapPin } from "lucide-react"
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

  // 🎯 PERSONALIZATION SECTION - REPLACE WITH YOUR INFO
  const personalInfo = {
    // Hero Section
    name: "Mohcine Lahfari", // Your full name
    mainTitle: "Full Stack", // Your main title
    subTitle: "Developer", // Your subtitle/role
    description:
      "Passionate Full-Stack Developer specializing in React.js, Next.js, and Laravel. I build modern, scalable web applications that deliver exceptional user experiences and drive business growth.", // Your description

    // Your Photo/Avatar - REPLACE WITH YOUR ACTUAL IMAGE
    profileImage: "/v1photo.png", // Replace with your photo path

    // Contact Info
    email: "mohcinelahfari01@gmail.com", // Your email
    phone: "+212 700534286", // Your phone
    location: "Casablanca, Morocco", // Your location

    // Social Links
    github: "http://github.com/Mohcinelahfari", // Your GitHub
    linkedin: "https://www.linkedin.com/in/lahfari-mohcine-353272328/v", // Your LinkedIn

  }

  const stats = [
    { label: "Projects Completed", value: 25, suffix: "+" }, // Your project count
    { label: "Happy Clients", value: 98, suffix: "%" }, // Your client satisfaction
    { label: "Years Experience", value: 2, suffix: "+" }, // Your experience years
    { label: "Technologies", value: 15, suffix: "+" }, // Technologies you know
  ]

  const skillCategories = [
    {
      title: "Frontend Development", // Your skill category
      description:
        "Creating beautiful, responsive, and interactive user interfaces with React, Next.js, and modern CSS frameworks.", // Your description
      icon: "🎨", // Your emoji/icon
      href: "/skills/frontend",
      color: "from-blue-500 to-blue-600",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"], // Your technologies
    },
    {
      title: "Backend Development", // Your skill category
      description:
        "Building robust, scalable server-side applications and APIs with Laravel and modern backend technologies.", // Your description
      icon: "⚙️", // Your emoji/icon
      href: "/skills/backend",
      color: "from-blue-600 to-blue-700",
      technologies: ["Laravel", "PHP", "MySQL", "Node.js"], // Your technologies
    },
    {
      title: "Mobile Development", // Your skill category
      description: "Developing cross-platform mobile applications with React Native and modern mobile frameworks.", // Your description
      icon: "📱", // Your emoji/icon
      href: "/skills/mobile",
      color: "from-blue-700 to-purple-600",
      technologies: ["React Native", "Expo", "Flutter", "Mobile UI"], // Your technologies
    },
    {
      title: "Full-Stack Solutions", // Your skill category
      description: "End-to-end application development from database design to user interface implementation.", // Your description
      icon: "🚀", // Your emoji/icon
      href: "/skills",
      color: "from-purple-600 to-purple-700",
      technologies: ["LAMP Stack", "API Design", "Database", "DevOps"], // Your technologies
    },
  ]

  const services = [
    {
      title: "Web Development", // Your service
      description:
        "Custom websites and web applications built with React, Next.js, and Laravel for optimal performance.", // Your description
      icon: Code2,
      color: "from-blue-500 to-blue-600",
      price: "From $1,500", // Your pricing
      features: [
        // Your service features
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Content Management",
      ],
    },
    {
      title: "Mobile App Development", // Your service
      description:
        "Cross-platform mobile applications with React Native for iOS and Android with seamless user experience.", // Your description
      icon: Smartphone,
      color: "from-blue-600 to-blue-700",
      price: "From $2,500", // Your pricing
      features: [
        // Your service features
        "React Native Apps",
        "Cross-platform Solutions",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
      ],
    },
    {
      title: "E-commerce Solutions", // Your service
      description: "Complete online stores with Laravel backend, payment integration, and inventory management.", // Your description
      icon: Globe,
      color: "from-blue-700 to-purple-600",
      price: "From $2,000", // Your pricing
      features: [
        // Your service features
        "Payment Integration",
        "Inventory Management",
        "Order Tracking",
        "Admin Dashboard",
        "Multi-vendor Support",
      ],
    },
    {
      title: "UI/UX Design", // Your service
      description: "Beautiful, intuitive designs that enhance user experience and drive conversions.", // Your description
      icon: Palette,
      color: "from-purple-600 to-purple-700",
      price: "From $800", // Your pricing
      features: [
        // Your service features
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      title: "API Development", // Your service
      description:
        "Robust APIs and backend services with Laravel that power your applications with scalable architecture.", // Your description
      icon: Server,
      color: "from-blue-500 to-blue-600",
      price: "From $1,200", // Your pricing
      features: [
        // Your service features
        "RESTful APIs",
        "Laravel Backend",
        "Database Design",
        "Authentication",
        "API Documentation",
      ],
    },
    {
      title: "Consulting & Mentoring", // Your service
      description: "Technical consulting and mentoring to guide your development journey and best practices.", // Your description
      icon: Database,
      color: "from-blue-600 to-blue-700",
      price: "From $50/hr", // Your pricing
      features: [
        // Your service features
        "Code Reviews",
        "Architecture Planning",
        "Technology Selection",
        "Best Practices",
        "Career Guidance",
      ],
    },
  ]

  const reviewStats = [
    { label: "Happy Clients", value: "25+" }, // Your client count
    { label: "Projects Completed", value: "30+" }, // Your project count
    { label: "Average Rating", value: "4.9★" }, // Your rating
    { label: "Response Time", value: "< 12h" }, // Your response time
  ]

  const customerReviews = [
    {
      id: 1,
      name: "Ahmed Benali", // Client name
      position: "CEO", // Client position
      company: "TechStart Morocco", // Client company
      avatar: "/1.jpeg", // Client photo
      rating: 5,
      review:
        "Mohcine delivered an exceptional web application for our startup. His expertise in React and Laravel helped us launch our platform ahead of schedule. Professional, reliable, and highly skilled.", // Client review
      project: "SaaS Platform", // Project type
      date: "Dec 2024", // Project date
    },
    {
      id: 2,
      name: "Fatima El Mansouri", // Client name
      position: "Marketing Director", // Client position
      company: "Digital Casa", // Client company
      avatar: "/4.jpeg", // Client photo
      rating: 5,
      review:
        "Working with Mohcine was a great experience. He built our e-commerce platform with Laravel and the results exceeded our expectations. Great communication and attention to detail.", // Client review
      project: "E-commerce Website", // Project type
      date: "Nov 2024", // Project date
    },
    {
      id: 3,
      name: "Youssef Alami", // Client name
      position: "Product Manager", // Client position
      company: "InnovateMA", // Client company
      avatar: "/2.jpeg", // Client photo
      rating: 5,
      review:
        "Mohcine developed our mobile app using React Native and it's been running flawlessly. His technical skills and problem-solving abilities are impressive. Highly recommend!", // Client review
      project: "Mobile App", // Project type
      date: "Oct 2024", // Project date
    },
    {
      id: 4,
      name: "Laila Benjelloun", // Client name
      position: "Founder", // Client position
      company: "StartupRabat", // Client company
      avatar: "/5.jpeg", // Client photo
      rating: 5,
      review:
        "Excellent work on our company website. Mohcine's expertise in modern web technologies helped us create a professional online presence. Fast delivery and great quality.", // Client review
      project: "Corporate Website", // Project type
      date: "Sep 2024", // Project date
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navigation />

      {/* Hero Section - Enhanced with personal image */}
      <section className="min-h-screen flex items-center justify-center relative">
        <ParticleField />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />

        <motion.div
          className="container mx-auto px-6 z-10 relative"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm">
                  👋 Hello, I'm {personalInfo.name}
                </Badge>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                {personalInfo.mainTitle}
                <br />
                <span className="text-4xl md:text-6xl">{personalInfo.subTitle}</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed"
              >
                {personalInfo.description}
              </motion.p>

              {/* Contact info */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <span>{personalInfo.email}</span>
                </div>
              </motion.div>

              {/* Action buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
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
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>

              {/* Social links */}
              <motion.div variants={fadeInUp} className="flex gap-4 justify-center lg:justify-start">
                <Link href={personalInfo.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:bg-white/10">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="hover:bg-white/10">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right side - Personal image */}
            <motion.div
              className="relative flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                {/* Animated background circles */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Main image container */}
                <motion.div
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-full">
                    <div className="w-full h-full rounded-full overflow-hidden bg-background">
                      <img
                        src={ "/v1photo.png"}
                        alt={personalInfo.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Floating elements */}
                {/* <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Code2 className="h-8 w-8" />
                </motion.div> */}

                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  ⚡
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
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
            {stats.map((stat, index) => (
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
          <div className="grid md:grid-cols-2 gap-8">
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
