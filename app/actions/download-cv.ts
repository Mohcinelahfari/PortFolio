"use server"

import { redirect } from "next/navigation"

export async function downloadCV() {
  // In a real application, you would:
  // 1. Track download analytics
  // 2. Log the download event
  // 3. Potentially require user information
  // 4. Serve the file from a secure location

  console.log("CV download requested at:", new Date().toISOString())

  // Redirect to the CV file
  redirect("/cv/Mohcine_Lahfari_CV.pdf")
}
