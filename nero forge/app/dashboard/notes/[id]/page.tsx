import { NoteViewPage } from "@/components/notes/note-view-page"
import { redirect } from "next/navigation"

export default function ViewNote({ params }: { params: { id: string } }) {
  // If the ID is "new", redirect to the new note page
  if (params.id === "new") {
    redirect("/dashboard/notes/create")
  }

  return <NoteViewPage id={params.id} />
}
