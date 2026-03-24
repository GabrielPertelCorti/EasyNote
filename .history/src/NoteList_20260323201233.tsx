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

        </Row>
      </Form>
    </>
  )
}

export default NoteList