import React, { useState } from 'react'
import { Button, ButtonGroup, Container, ProgressBar } from 'react-bootstrap'
import { Prev } from 'react-bootstrap/esm/PageItem';

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };
  const decreaseProgress = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };
  return (
    <Container className='aling-items-center'>
      <ButtonGroup aria-label="Basic example">
      <Button variant="danger" onClick={decreaseProgress} >-</Button>
      <Button variant="primary" onClick={increaseProgress} >+</Button>
    </ButtonGroup>
      <ProgressBar now={progress} label={`${progress}%`} className='mt-3 mb-4 '></ProgressBar>
    </Container>
  )
}

export default Progress