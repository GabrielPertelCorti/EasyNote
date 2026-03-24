import NoteForm from "./NoteForm.tsx"
import type { NoteData, Tag } from "./App.tsx"
import { useNote } from "./NoteLayout"



type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void
  onAddTag: (tag: Tag) => void
  availableTags: Tag[]
}

function EditNote({onSubmit, onAddTag, availableTags}: EditNoteProps) {

  const note = useNote()

  return (
    <div>
      <h1>EditNote</h1>
      <NoteForm onSubmit={data => onSubmit(note.id, data)} onAddTag={onAddTag} availableTags={availableTags} title={note.title} markdown={note.markdown} tags= />
    </div>
  )
}

export default EditNote