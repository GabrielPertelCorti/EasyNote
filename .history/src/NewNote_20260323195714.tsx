import NoteForm from "./NoteForm.tsx"
import type { NoteData } from "./App.tsx"



type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag
}

function NewNote({onSubmit}: NewNoteProps) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewNote