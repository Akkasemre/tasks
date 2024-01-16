import React from 'react'
import { Card } from 'react-bootstrap'

const CardHeader = ({todo}) => {
  return (
    <Card.Title>{todo}</Card.Title>
  )
}

export default CardHeader