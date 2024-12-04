import React, { useEffect, useState } from 'react'
import { Modal,Button } from 'react-bootstrap'
import uploadprojectImg from '../assets/uploadProjectImg.png'
const Add = () => {
  const [preview,setPreview]=useState("")
  const [uploadFileStatus,setUploadFileStatus]=useState(false)
  const [projectDetails,setProjectDetails]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImages:""
  })
  console.log(projectDetails);
  
    const [show, setShow] = useState(false);
    useEffect(()=>{
      if(projectDetails.projectImages.type=="image/png"||projectDetails.projectImages.type=="image/jpg"||projectDetails.projectImages.type=="image/jpeg"){
        setUploadFileStatus(true)
setPreview(        URL.createObjectURL(projectDetails.projectImages)) }
else{
        // invalid img file
        setUploadFileStatus(false)
        setProjectDetails({...projectDetails,projectImages:""})
      }

    },[projectDetails.projectImages])

  const handleClose = () =>{ 
    setShow(false);
    setPreview("")
    setUploadFileStatus(false)
    setProjectDetails({title:"",languages:"",overview:"",github:"",website:"",projectImages:"" })

  }
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} className="btn btn-primary">+ New Project</div>
      <Modal size='lg' centered     show={show}  onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label >
                <input onChange={e=>setProjectDetails({...projectDetails,projectImages:e.target.files[0]})} type="file"  style={{display:'none'}}/>
                <img className='img-fluid' height={'200px'}  src={preview?preview:uploadprojectImg} alt="" />
              </label>
{
  !uploadFileStatus &&
  <div className="text-warning fw-bolder">*Upload only the following file types (jpeg,jpg,png) here!!</div>

}            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type="text" className='form-control' placeholder='Project title' />
              </div>
              <div className="mb-2">
                <input value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} type="text" className='form-control' placeholder='Project Languages' />
              </div>
              <div className="mb-2">
                <input value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} type="text" className='form-control' placeholder='Project Overview' />
              </div>
              <div className="mb-2">
                <input value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} type="text" className='form-control' placeholder='Project github link' />
              </div>
              <div className="mb-2">
                <input value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} type="text" className='form-control' placeholder='Project website link' />
              </div>
              

            </div>
          </div>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
