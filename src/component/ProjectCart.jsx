import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
const ProjectCart = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <Card onClick={handleShow} className='btn shadow'>
      <Card.Img height={'200px'} variant="top" src="https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>

      </Card.Body>
    </Card>
    <Modal size='lg 'centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
       
      </Modal>

    </>
  )
}

export default ProjectCart
