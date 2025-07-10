// EmailJS Configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rltuuw5",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_xfmim7j",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "QwlOI3Iw4LFURPxVj",
}

// Email template parameters interface
export interface EmailTemplateParams {
  from_name: string
  from_email: string
  phone?: string
  project_type: string
  budget?: string
  timeline?: string
  message: string
  to_name: string
  reply_to: string
}
