import NoteForm from "./NoteForm.tsx"

function NewNote({onSumbit}: N) {
  return (
    <div>
      <h1>NewNote</h1>
      <NoteForm/>
    </div>
  )
}

export default NewNote