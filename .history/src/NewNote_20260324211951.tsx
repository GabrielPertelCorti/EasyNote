import NoteForm from "./NoteForm.tsx"
import type { NoteData, Tag } from "./App.tsx"



type NewNoteProps = {
  onSubmit: (data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

function NewNote({onSubmit, onAddTag, availableTags}: NewNoteProps) {
  return (
    <div>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </div>
  )
}

export default NewNote