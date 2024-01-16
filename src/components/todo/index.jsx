import React from 'react'
import Notes from './notes'
import NoteForm from './note-form'
import { Col, Container, Row } from 'react-bootstrap'

const Todo = () => {
  return (
    <Container>
      <Row>

        <Col sm="4">
        <NoteForm></NoteForm>
        </Col>

        <Col sm ="8">
        <Notes></Notes>
        </Col>
      </Row>
      
      
    </Container>
  )
}

export default Todo