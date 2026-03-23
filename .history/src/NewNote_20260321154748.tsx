import NoteForm from "./NoteForm.tsx"

function NewNote({onSumbit}: NewNoteProps) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm/>
    </div>
  )
}

export default NewNote