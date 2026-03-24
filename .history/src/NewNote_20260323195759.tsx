import NoteForm from "./NoteForm.tsx"
import type { NoteData, Tag } from "./App.tsx"



type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

function NewNote({onSubmit, onAddTag, a}: NewNoteProps) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  )
}

export default NewNote