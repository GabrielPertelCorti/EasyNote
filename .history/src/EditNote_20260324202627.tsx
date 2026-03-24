import NoteForm from "./NoteForm.tsx"
import type { NoteData, Tag } from "./App.tsx"



type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

function EditNote({onSubmit, onAddTag, availableTags}: EditNoteProps) {
  return (
    <div>
      <h1>EditNote</h1>
      <NoteForm onSubmit={data => onSubmit()} onAddTag={onAddTag} availableTags={availableTags} />
    </div>
  )
}

export default EditNote