import NoteForm from "./NoteForm.tsx"

type

function NewNote({onSumbit}: NewNoteProps) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm/>
    </div>
  )
}

export default NewNote