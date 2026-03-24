import type { Note } from "./App"

type NoteLayoutProps = {
  notes: Note[]
}

function NoteLayout({notes}: NoteLayoutProps) {

  const {id} = useParams()
  const note = notes.find(n => n.id === id)

  if(note == null) return <Navigate to="/" replace />

  return (
    
  )
}

export default NoteLayout