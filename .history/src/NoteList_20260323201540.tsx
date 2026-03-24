import { Row, Col, Stack, Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"

function NoteList() {
  return (
    <>
      <Row>
        <Col><h1>NoteList</h1></Col>
        <Col xs="auto" >
          <Stack gap={2} direction="horizontal">
            <Link to="/new">
              <Button variant="primary" >Create</Button>
            </Link>
            <Button variant="secondary">Edit Tags</Button>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4" >
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            </Col>
        </Row>
      </Form>
    </>
  )
}

export default NoteList