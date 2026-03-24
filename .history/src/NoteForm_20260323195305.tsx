import { Form, Stack, Row, Button, Col} from "react-bootstrap"
import CreatableReactSelect from "react-select/creatable"
import { Link } from "react-router-dom"
import { useRef } from "react"
import type { NoteData, Tag } from "./App.tsx"
import { useState } from "react"




type NoteFormProps = {
  onSubmit: (data: NoteData) => void,
}


function NoteForm({onSubmit}: NoteFormProps) {

  const titleRef = useRef<HTMLInputElement>(null)
  const markdownRef = useRef<HTMLTextAreaElement>(null)
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])

  function handleSubmit(e){
    e.preventDefault()
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: [],
    })
  }


  return (
    <Form onSubmit={handleSubmit} >
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required  />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
              onCreateOption={ label => {
                const newTag = { id}
              }}
              value={selectedTags.map(tag => {
                return {label: tag.label, value: tag.id}
              })}
              onChange={tags => setSelectedTags(tags.map(tag => {
                return {label: tag.label, id: tag.value}
              }))} isMulti />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control required as="textarea" ref={markdownRef} rows={15} />
        </Form.Group>

        <Stack direction="horizontal" gap={2} className="justify-content-end" >
          <Button type="submit" variant="primary" >Save</Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary" >Cancel</Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}

export default NoteForm

// import { Form, Stack, Row, Col, Button } from "react-bootstrap"

// function NoteForm() {
//   return (
//     <Form>
//       <Stack gap={4}>
//         <Row>
//           <Col>
//             <Form.Group controlId="title">
//               <Form.Label>Title</Form.Label>
//               <Form.Control required placeholder="Enter title..." />
//             </Form.Group>
//           </Col>
//           <Col>
//             <Form.Group controlId="tags">
//               <Form.Label>Tags</Form.Label>
//               <Form.Control required placeholder="Enter tags..." />
//             </Form.Group>
//           </Col>
//         </Row>
        
//         <Form.Group controlId="markdown">
//           <Form.Label>Body</Form.Label>
//           <Form.Control required as="textarea" rows={10} placeholder="Write your note here..." />
//         </Form.Group>

//         <Stack direction="horizontal" gap={2} className="justify-content-end">
//           <Button type="submit" variant="primary">Save</Button>
//           <Button type="button" variant="outline-secondary">Cancel</Button>
//         </Stack>
//       </Stack>
//     </Form>
//   )
// }

// export default NoteForm