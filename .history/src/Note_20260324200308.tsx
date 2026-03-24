import { useNote } from "./NoteLayout"
import { Row, Col } from "react-bootstrap"



export function Note(){
  const note = useNote()

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
        </Col>
      </Row>
    
    </>
  )
}