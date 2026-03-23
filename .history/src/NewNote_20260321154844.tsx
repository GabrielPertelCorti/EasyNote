import NoteForm from "./NoteForm.tsx"
import { NoteData } from "./App.tsx"



type NewNoteProps = {
  onSumbit: (data: NoteData) => void
}

function NewNote({onSumbit}: NewNoteProps) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm onSubmit={onSumbit} />
    </div>
  )
}

export default NewNote