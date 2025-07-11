"use server"

import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project"),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      projectType: formData.get("projectType") as string,
      budget: formData.get("budget") as string,
      timeline: formData.get("timeline") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system
    // 4. Send auto-reply email

    console.log("Contact form submission:", validatedData)

    // Simulate success
    return {
      success: true,
      message: `Thank you ${validatedData.firstName}! Your message has been sent successfully. I'll get back to you within 24 hours.`,
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: true,
        message: error.issues[0]?.message || "Validation error",
      }
    }

    return {
      success: false,
      error: true,
      message: "Something went wrong. Please try again later.",
    }
  }
}
