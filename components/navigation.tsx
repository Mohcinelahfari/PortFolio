"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const skillsSubmenu = [
    { name: "Frontend", href: "/skills/frontend" },
    { name: "Backend", href: "/skills/backend" },
    { name: "Mobile", href: "/skills/mobile" },
    { name: "DevOps", href: "/skills/devops" },
  ]

  return (
    <motion.nav
      className="fixed top-0 w-full z-40 bg-background/10 backdrop-blur-2xl border-b border-white/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              DevPortfolio
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                <Link href={item.href}>
                  <motion.span
                    className={`relative text-foreground/80 hover:text-foreground transition-colors cursor-pointer ${
                      pathname === item.href ? "text-blue-500" : ""
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
                  </motion.span>
                </Link>

                {/* Skills Dropdown */}
                {item.name === "Skills" && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {skillsSubmenu.map((skill) => (
                      <Link key={skill.name} href={skill.href}>
                        <div className="px-4 py-3 hover:bg-white/10 transition-colors cursor-pointer">{skill.name}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background/95 backdrop-blur-2xl">
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <div key={item.name}>
                      <Link href={item.href} onClick={() => setIsOpen(false)}>
                        <div
                          className={`text-lg font-medium hover:text-blue-500 transition-colors ${
                            pathname === item.href ? "text-blue-500" : ""
                          }`}
                        >
                          {item.name}
                        </div>
                      </Link>
                      {item.name === "Skills" && (
                        <div className="ml-4 mt-2 space-y-2">
                          {skillsSubmenu.map((skill) => (
                            <Link key={skill.name} href={skill.href} onClick={() => setIsOpen(false)}>
                              <div className="text-muted-foreground hover:text-foreground transition-colors">
                                {skill.name}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
