import NoteForm from "./NoteForm.tsx"

type NewNoteProps = {
  onSumbit: () => void
}

function NewNote({onSumbit}: NewNoteProps) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm/>
    </div>
  )
}

export default NewNote