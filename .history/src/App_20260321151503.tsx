import "bootstrap/dist/css/bootstrap.min.css"
import { Container} from "react-bootstrap"
import { Routes, Route, Navigate } from 'react-router-dom'
import NewNote from './NewNote.tsx'
import './App.css'

type Note = {
  
}

type NoteData = {
  title: string,
  markdown: string,
  tags: Tag[],
}

type Tag = {
  id: string,
  label: string,
}

function App() {
  

  return (
    <Container className="my-4" >
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="/new" element={<NewNote/>} />

        <Route path="/:id" >
          <Route index element={<h1>show</h1>} />
          <Route path="edit" element={<h1>edit</h1>} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}

export default App
