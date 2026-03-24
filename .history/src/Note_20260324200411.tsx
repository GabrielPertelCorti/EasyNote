import { useNote } from "./NoteLayout"
import { Row, Col } from "react-bootstrap"



export function Note(){
  const note = useNote()

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
                      <Stack gap={1} direction="horizontal" className="justify-content-center flex-wrap">
            {tags.map(tag => (
              <Badge key={tag.id} className="text-truncate" >{tag.label}</Badge>
            ))}
          </Stack>
          )}
        </Col>
      </Row>
    
    </>
  )
}