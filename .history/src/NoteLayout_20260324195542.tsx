import { Note } from "./App"

type NoteLayoutProps = {
  notes: Note[]
}

function NoteLayout({notes}: NoteLayoutProps) {
  return (
    <>
      <h1>NoteLayout</h1>
    </>
  )
}

export default NoteLayout