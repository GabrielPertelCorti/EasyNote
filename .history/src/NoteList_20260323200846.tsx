import { Row, Col } from "react-bootstrap"

function NoteList() {
  return (
    <>
      <Row>
        <Col><h1>NoteList</h1></Col>
        <Col xs="auto" >
          <Stack gap={2}></Stack>
        </Col>
      </Row>
    </>
  )
}

export default NoteList