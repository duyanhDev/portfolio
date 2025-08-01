"use client"

import { useState, useEffect } from "react"
import {
  Github,
  Mail,
  Phone,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Database,
  Globe,
  Cloud,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Zap,
  Star,
  Rocket,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CyberProfilePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "TypeScript"],
    databases: ["SQL Server", "PostgreSQL", "MongoDB"],
    frameworks: ["React.js", "Express.js", "Nest.js"],
    tools: ["Github", "Postman"],
    cloud: ["Vercel", "Render", "Cloudinary"],
    web: ["RESTful API", "JWT authentication"],
  }

  const projects = [
    {
      title: "Online English Learning Platform",
      period: "Jun 2025 - Jul 2025",
      description:
        "Developed an online platform for browsing courses, purchasing, tracking progress, and managing accounts. Built admin dashboard to manage courses, categories and users. Implemented email authentication and integrated rating, reviews.",
      technologies: ["React.js", "TypeScript", "Nest.js", "MongoDB", "Redux", "JWT"],
      github: "https://github.com/duyanhDev/learn-english",
      website: null,
      image: "/placeholder.svg?height=300&width=500&text=English+Learning+Platform",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "E-commerce Website – Fashion Store Shop",
      period: "Dec 2024 - Jun 2025",
      description:
        "Built a responsive fashion e-commerce website with product browsing, cart, wishlist, and order management. Integrated payments (VNPay, Momo, COD) and discount codes for seamless checkout. Developed admin dashboard to manage products, categories, orders, and users. Implemented AI chatbot using Gemma 2 API for customer support and real-time chat with Socket.io.",
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/duyanhDev/fashionStoreShop",
      website: "https://fashion-store-shop-ecommert.vercel.app/",
      image: "/placeholder.svg?height=300&width=500&text=Fashion+Store+Shop",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Mini Social Network",
      period: "Jan 2025 - May 2025",
      description:
        "Built a mini social network with user registration, posts, likes, comments, stories, and real-time messaging. Integrated AI chatbot (Ollama 2 API) for interactive user support. Developed RESTful APIs and secured authentication with JWT.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux"],
      github: "https://github.com/duyanhDev/facebookClone/tree/FrontEnd",
      website: null,
      image: "/placeholder.svg?height=300&width=500&text=Social+Network",
      color: "from-green-500 to-teal-500",
    },
  ]

  const awards = [
    {
      title: "Scholarship for Semester 1",
      organization: "Thu Dau Mot University",
      date: "Feb 2025",
    },
    {
      title: "Scholarship for Semester 1",
      organization: "Thu Dau Mot University",
      date: "Feb 2021",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white animated-bg">
      {/* Floating Particles */}
      <div className="particles fixed inset-0 z-0">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Matrix Background */}
      <div className="matrix-bg fixed inset-0 z-0 opacity-20" />

      {/* Mouse Follower */}
      <div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: "all 0.1s ease",
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrollY > 50 ? "glass backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold neon-text bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DuyAnh.dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Education", "Awards"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-cyan-400 transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-cyan-400 hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden glass backdrop-blur-md border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["Home", "About", "Skills", "Projects", "Education", "Awards"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 font-medium w-full text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="fade-in-up">
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text typing">
                  DANG TRINH
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent neon-text float">
                  DUY ANH
                </span>
              </h1>
            </div>

            <div className="mb-8">
              <p className="text-2xl sm:text-3xl text-gray-300 mb-4 shimmer">
                <Zap className="inline w-8 h-8 mr-2 text-yellow-400" />
                Full-Stack Developer & IT Student
                <Rocket className="inline w-8 h-8 ml-2 text-cyan-400" />
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-gray-300">
              <a
                href="mailto:dangtrinhduyanh100202@gmail.com"
                className="flex items-center gap-3 hover:text-cyan-400 transition-all duration-300 group glass p-3 rounded-lg glow-hover"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">dangtrinhduyanh100202@gmail.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <div className="flex items-center gap-3 glass p-3 rounded-lg glow">
                <Phone className="w-6 h-6 text-green-400" />
                <span>0373081693</span>
              </div>
              <a
                href="https://github.com/duyanhDev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-purple-400 transition-all duration-300 group glass p-3 rounded-lg glow-hover"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glow pulse-glow"
              >
                <Star className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("about")}
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 glass"
              >
                About Me
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400 neon-text" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4 neon-text bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full glow" />
          </div>

          <div className="max-w-4xl mx-auto fade-in-up">
            <Card className="glass border-gray-800 glow-hover hover-scale rotating-border">
              <CardContent className="p-12">
                <p className="text-xl text-gray-300 leading-relaxed text-center">
                  I am an Information Technology student with a strong passion for software development. Eager to tackle
                  real-world challenges through continuous learning, I am enthusiastic about contributing to innovative
                  web projects in a fast-paced, collaborative environment. I look forward to growing professionally and
                  learning from experienced mentors in the industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4 neon-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full glow" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Languages", icon: Code, color: "from-cyan-400 to-blue-500", skills: skills.languages },
              { title: "Databases", icon: Database, color: "from-green-400 to-emerald-500", skills: skills.databases },
              { title: "Frameworks", icon: Globe, color: "from-purple-400 to-violet-500", skills: skills.frameworks },
              { title: "Tools", icon: Code, color: "from-orange-400 to-red-500", skills: skills.tools },
              { title: "Cloud Services", icon: Cloud, color: "from-sky-400 to-cyan-500", skills: skills.cloud },
              { title: "Web Technologies", icon: Globe, color: "from-pink-400 to-rose-500", skills: skills.web },
            ].map((category, index) => (
              <Card
                key={category.title}
                className={`glass border-gray-800 glow-hover hover-scale transition-all duration-500 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} glow`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        className={`bg-gradient-to-r ${category.color} text-white hover:scale-105 transition-all duration-200 cursor-default glow`}
                        style={{ animationDelay: `${skillIndex * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4 neon-text bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full glow" />
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`glass border-gray-800 glow-hover transition-all duration-500 overflow-hidden rotating-border ${
                  index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 lg:h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 hover:opacity-40 transition-opacity duration-300`}
                    />
                  </div>

                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-cyan-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      {project.period}
                    </div>

                    <h3
                      className={`text-3xl font-bold mb-6 bg-gradient-to-r ${project.color} bg-clip-text text-transparent neon-text`}
                    >
                      {project.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">{project.description}</p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-white mb-4 text-lg">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            className={`bg-gradient-to-r ${project.color} text-white hover:scale-105 transition-all duration-200 glow`}
                            style={{ animationDelay: `${techIndex * 50}ms` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        asChild
                        className={`bg-gradient-to-r ${project.color} hover:scale-105 transition-all duration-300 glow text-white`}
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          View Code
                        </a>
                      </Button>
                      {project.website && (
                        <Button
                          variant="outline"
                          asChild
                          className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black glass hover:scale-105 transition-all duration-300 bg-transparent"
                        >
                          <a href={project.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4 neon-text bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Education
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full glow" />
          </div>

          <div className="max-w-3xl mx-auto fade-in-up">
            <Card className="glass border-gray-800 glow-hover hover-scale rotating-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 glow">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-white">Thu Dau Mot University</span>
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-lg text-gray-300">
                  <Calendar className="w-5 h-5" />
                  Sep 2021 - Present
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-xl">Information Technology - Information System</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-5xl font-bold mb-4 neon-text bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Awards & Recognition
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full glow" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card
                key={index}
                className={`glass border-gray-800 glow-hover hover-scale rotating-border transition-all duration-500 ${
                  index % 2 === 0 ? "fade-in-left" : "fade-in-right"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 glow">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white">{award.title}</span>
                  </CardTitle>
                  <CardDescription className="text-lg font-medium text-gray-300">{award.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-5 h-5" />
                    {award.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 neon-text">
              DuyAnh.dev
            </div>
            <p className="text-gray-400 mb-8 text-xl">Let's build something amazing together</p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="mailto:dangtrinhduyanh100202@gmail.com"
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 glow-hover"
              >
                <Mail className="w-8 h-8" />
              </a>
              <a
                href="https://github.com/duyanhDev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 glow-hover"
              >
                <Github className="w-8 h-8" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Dang Trinh Duy Anh. Built with React.js, Next.js & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
