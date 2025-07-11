"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from "@emailjs/browser"
import { EMAILJS_CONFIG, type EmailTemplateParams } from "@/lib/emailjs"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  message: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear any previous messages when user starts typing
    if (formState.isSuccess || formState.isError) {
      setFormState((prev) => ({ ...prev, isSuccess: false, isError: false, message: "" }))
    }
  }

  const validateForm = (): boolean => {
    if (!formData.firstName.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "First name is required",
      })
      return false
    }

    if (!formData.lastName.trim()) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Last name is required",
      })
      return false
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Please enter a valid email address",
      })
      return false
    }

    if (!formData.projectType) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Please select a project type",
      })
      return false
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Please provide more details about your project (minimum 10 characters)",
      })
      return false
    }

    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    })

    try {
      // Prepare email template parameters
      const templateParams: EmailTemplateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || "Not provided",
        project_type: formData.projectType,
        budget: formData.budget || "Not specified",
        timeline: formData.timeline || "Not specified",
        message: formData.message,
        to_name: "Developer", // Your name
        reply_to: formData.email,
      }

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams as Record<string, unknown>,
        EMAILJS_CONFIG.PUBLIC_KEY,
      )


      if (response.status === 200) {
        setFormState({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: `Thank you ${formData.firstName}! Your message has been sent successfully. I'll get back to you within 24 hours.`,
        })

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            projectType: "",
            budget: "",
            timeline: "",
            message: "",
          })
        }, 2000)
      }
    } catch (error) {
      console.error("EmailJS Error:", error)
      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: "Sorry, there was an error sending your message. Please try again or contact me directly.",
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
            className="mt-1 bg-white/10 border-white/20 focus:border-blue-500"
            placeholder="John"
            disabled={formState.isSubmitting}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
            className="mt-1 bg-white/10 border-white/20 focus:border-blue-500"
            placeholder="Doe"
            disabled={formState.isSubmitting}
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          className="mt-1 bg-white/10 border-white/20 focus:border-blue-500"
          placeholder="john@example.com"
          disabled={formState.isSubmitting}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          className="mt-1 bg-white/10 border-white/20 focus:border-blue-500"
          placeholder="+1 (555) 123-4567"
          disabled={formState.isSubmitting}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Label htmlFor="projectType">Project Type *</Label>
        <Select
          value={formData.projectType}
          onValueChange={(value) => handleInputChange("projectType", value)}
          disabled={formState.isSubmitting}
        >
          <SelectTrigger className="mt-1 bg-white/10 border-white/20 focus:border-blue-500">
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-app">Mobile App</SelectItem>
            <SelectItem value="full-stack">Full Stack Application</SelectItem>
            <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
            <SelectItem value="consulting">Consulting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Label htmlFor="budget">Budget Range</Label>
        <Select
          value={formData.budget}
          onValueChange={(value) => handleInputChange("budget", value)}
          disabled={formState.isSubmitting}
        >
          <SelectTrigger className="mt-1 bg-white/10 border-white/20 focus:border-blue-500">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-5k">Under $5,000</SelectItem>
            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
            <SelectItem value="50k-plus">$50,000+</SelectItem>
            <SelectItem value="discuss">LeI&apos;s discuss</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Label htmlFor="timeline">Project Timeline</Label>
        <Select
          value={formData.timeline}
          onValueChange={(value) => handleInputChange("timeline", value)}
          disabled={formState.isSubmitting}
        >
          <SelectTrigger className="mt-1 bg-white/10 border-white/20 focus:border-blue-500">
            <SelectValue placeholder="Select timeline" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="1-month">Within 1 month</SelectItem>
            <SelectItem value="2-3-months">2-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="6-months-plus">6+ months</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <Label htmlFor="message">Project Details *</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          required
          rows={5}
          className="mt-1 bg-white/10 border-white/20 focus:border-blue-500 resize-none"
          placeholder="Tell me about your project, goals, and any specific requirements..."
          disabled={formState.isSubmitting}
        />
      </motion.div>

      {/* Success/Error Messages */}
      {formState.isSuccess && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500"
        >
          <CheckCircle className="h-5 w-5" />
          <span>{formState.message}</span>
        </motion.div>
      )}

      {formState.isError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500"
        >
          <AlertCircle className="h-5 w-5" />
          <span>{formState.message}</span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white disabled:opacity-50"
          size="lg"
        >
          {formState.isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </Button>
      </motion.div>

      <p className="text-sm text-muted-foreground text-center">
        I&apos;ll get back to you within 24 hours. All information is kept confidential.
      </p>
    </form>
  )
}
