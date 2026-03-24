import { Row, Col, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"

function NoteList() {
  return (
    <>
      <Row>
        <Col><h1>NoteList</h1></Col>
        <Col xs="auto" >
          <Stack gap={2} direction="horizontal">
            <Link></Link>
          </Stack>
        </Col>
      </Row>
    </>
  )
}

export default NoteList