import React from 'react'
import Header from '../component/Header'
import {Row,Col} from 'react-bootstrap'
import ProjectCart from '../component/ProjectCart'
const Project = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center py-5">
        <h1>All Projects</h1>
        <input type="text" placeholder='Search projects by  their languages' className='form-control w-25' />
      </div>
      <Row>
        <Col className='mb-3' sm={12} md={6} lg={4}>
        <ProjectCart/>
        </Col>
      </Row>
    </div>
      
    </>
  )
}

export default Project
