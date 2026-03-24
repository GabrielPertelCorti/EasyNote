import type { Note } from "./App"

type NoteLayoutProps = {
  notes: Note[]
}

function NoteLayout({notes}: NoteLayoutProps) {

  const {id} = use

  return (
    <>
      <h1>NoteLayout</h1>
    </>
  )
}

export default NoteLayout