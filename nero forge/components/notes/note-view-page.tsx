"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Edit, Trash2 } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { getContractInstance, type Note } from "@/lib/contract"

// Contract address
const CONTRACT_ADDRESS = "0x8507bFBB94499baA164df9f283188F4dd7Ac39aF"

export function NoteViewPage({ id }: { id: string }) {
  console.log("Attempting to view note with ID:", id)

  const router = useRouter()
  const { toast } = useToast()
  const { isAuthenticated, isRegistered } = useAuth()
  const [note, setNote] = useState<Note | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (!isAuthenticated || !isRegistered) return

    const fetchNote = async () => {
      try {
        console.log("Fetching note with ID:", id)
        setIsLoading(true)
        const contract = getContractInstance(CONTRACT_ADDRESS)
        const noteData = await contract.getNote(id)
        console.log("Note data received:", noteData)
        setNote(noteData)
      } catch (error) {
        console.error("Error fetching note:", error)
        toast({
          title: "Error",
          description: "Failed to load note. It may not exist or you may not have access.",
          variant: "destructive",
        })
        router.push("/dashboard/notes")
      } finally {
        setIsLoading(false)
      }
    }

    fetchNote()
  }, [id, isAuthenticated, isRegistered, router, toast])

  // Redirect if not authenticated or not registered
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/")
    } else if (isAuthenticated && !isRegistered) {
      router.push("/")
    }
  }, [isAuthenticated, isRegistered, router])

  const handleDelete = async () => {
    if (!note) return

    try {
      setIsDeleting(true)
      const contract = getContractInstance(CONTRACT_ADDRESS)
      await contract.deleteNote(note.id)

      toast({
        title: "Note deleted",
        description: "Your note has been deleted successfully",
      })

      router.push("/dashboard/notes")
    } catch (error) {
      console.error("Error deleting note:", error)
      toast({
        title: "Error",
        description: "Failed to delete note. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
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
        {note && (
          <div className="flex space-x-2">
            <Button variant="outline" onClick={() => router.push(`/dashboard/notes/edit/${note.id}`)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <Button variant="destructive" onClick={handleDelete} disabled={isDeleting}>
              {isDeleting ? (
                "Deleting..."
              ) : (
                <>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <p>Loading note...</p>
        </div>
      ) : note ? (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{note.title}</CardTitle>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date(note.updatedAt * 1000).toLocaleString()}
            </p>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              {note.content.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <p className="text-sm text-muted-foreground">Created: {new Date(note.createdAt * 1000).toLocaleString()}</p>
          </CardFooter>
        </Card>
      ) : (
        <div className="flex justify-center py-8">
          <p>Note not found</p>
        </div>
      )}
    </div>
  )
}
