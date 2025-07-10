"use client"

import { useState } from "react"
import { Download, FileText, Eye, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function CVDownload() {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    const pdfPath = "/cv/Mohcine_Lahfari_CV.pdf"
    const fileName = "Mohcine_Lahfari_CV.pdf"

    const link = document.createElement("a")
    link.href = pdfPath
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  const handleView = () => {
    const pdfPath = "/cv/Mohcine_Lahfari_CV.pdf"
    console.log("Attempting to view PDF at:", pdfPath)

    // Check if file exists before opening
    fetch(pdfPath, { method: "HEAD" })
      .then((response) => {
        if (response.ok) {
          window.open(pdfPath, "_blank")
        } else {
          console.error("PDF file not found at:", pdfPath)
          alert("CV file not found. Please contact the administrator.")
        }
      })
      .catch((error) => {
        console.error("Error checking PDF file:", error)
        alert("Unable to view CV. Please try downloading instead.")
      })
  }

  const cvDetails = {
    name: "Your Name - Full Stack Developer",
    size: "2.3 MB",
    pages: "2 pages",
    lastUpdated: "December 2024",
    format: "PDF",
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="group border-2 bg-transparent hover:bg-white/10">
          <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          View CV
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md bg-background/95 backdrop-blur-2xl border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Resume / CV
          </DialogTitle>
        </DialogHeader>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{cvDetails.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {cvDetails.format} • {cvDetails.size}
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Pages:</span>
                <span>{cvDetails.pages}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last Updated:</span>
                <span>{cvDetails.lastUpdated}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Format:</span>
                <span>{cvDetails.format}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleDownload}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                disabled={downloaded}
              >
                {downloaded ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </>
                )}
              </Button>

              <Button variant="outline" onClick={handleView} className="bg-transparent">
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Click download to save the PDF to your device
            </p>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
