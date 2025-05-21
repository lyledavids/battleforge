"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Save } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { getContractInstance } from "@/lib/contract"
import { v4 as uuidv4 } from "uuid"

// Contract address
const CONTRACT_ADDRESS = "0x8507bFBB94499baA164df9f283188F4dd7Ac39aF"

export function NewNotePage() {
  const router = useRouter()
  const { toast } = useToast()
  const { isAuthenticated, isRegistered } = useAuth()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isSaving, setIsSaving] = useState(false)

  // Redirect if not authenticated or not registered
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    } else if (isAuthenticated && !isRegistered) {
      router.push("/")
    }
  }, [isAuthenticated, isRegistered, router])

  const handleSave = async () => {
    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please enter a title for your note",
        variant: "destructive",
      })
      return
    }

    try {
      setIsSaving(true)
      const noteId = uuidv4()
      console.log("Creating note with ID:", noteId)

      const contract = getContractInstance(CONTRACT_ADDRESS)

      // Create the note
      await contract.createNote(noteId, title, content)

      toast({
        title: "Note saved",
        description: "Your note has been saved successfully",
      })

      router.push("/dashboard/notes")
    } catch (error: any) {
      console.error("Error saving note:", error)
      toast({
        title: "Error",
        description: error.message || "Failed to save note. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (!isAuthenticated || !isRegistered) {
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={() => router.push("/dashboard/notes")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Notes
        </Button>
        <Button onClick={handleSave} disabled={isSaving}>
          {isSaving ? (
            <>Saving...</>
          ) : (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Note
            </>
          )}
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>New Note</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Note title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              placeholder="Write your note here..."
              className="min-h-[200px]"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave} disabled={isSaving} className="w-full">
            {isSaving ? "Saving..." : "Create Note"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
