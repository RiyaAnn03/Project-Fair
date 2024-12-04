import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/landingimg.png'
import ProjectCart from '../component/ProjectCart'
import { Card } from 'react-bootstrap'
const Home = () => {
  const [isLogin,setIsLogin]=useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){

      setIsLogin(true)
    }else{
      setIsLogin(false)
    }
  },[])
  return (
    <>
    {/* landing */}
    <div style={{minHeight:'100vh'}} className="d-flex jusify-content-center align-items-center rounded shadow w-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 style={{fontSize:'80px'}}><i className='fa-brands fa-docker'></i>Project Fair</h1>
            <p style={{textAlign:'justify'}}> One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
        {isLogin?         
           <Link to={'/dashboard'} className='btn btn-warning'>MANAGE YOUR PROJECTS</Link>
           :
             <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
        }
  
          </div>
          <div className="col-lg-6">
            <img className='img-fluid' src={landingImg} alt="" />
          </div>

        </div>
      </div>
    </div>
    {/* Explore our Project */}
    <div className='my-5 text-center'>
      <h1 className='mb-5'>Explore Our Project</h1>
      <marquee >
        <div className="d-flex">
          <div className="me-5">
            <ProjectCart/>
          </div>
        </div>
      </marquee>
      <button className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS....</button>
    </div>
    {/* OUR TESTITMONIALS */}
    <div className='d-flex justify-content-center align-items-center my-5 flex-column'>
      <h1>Our Testimoniials</h1>
      <div className="d-flex justify-content-evenly align-items-center  mt-3 w-100 ">
        <Card style={{ width: '18rem' }}>
    
      <Card.Body>
         <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
          <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://th.bing.com/th/id/OIP.5YKpMVtfig6RegF-10jYBQHaHa?w=500&h=500&rs=1&pid=ImgDetMain" alt="" />
          <div className='d-flex justify-content-center my-2 '>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>
            <i className='fa-solid fa-star text-warning'></i>

          </div>
         <p style={{textAlign:'justify'}}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Proandae dicta ad deserunt magni expedita consectetur.
         </p>
        </Card.Text>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
    
    <Card.Body>
       <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/049_man_profile_boy_avatar_human_people_smile-512.png" alt="" />
        <div className='d-flex justify-content-center my-2 '>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>

        </div>
       <p style={{textAlign:'justify'}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id  deserunt magni expedita consectetur.
       </p>
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
    
    <Card.Body>
       <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://img.freepik.com/premium-vector/young-man-rhombus-diamond-pattern-sweater-round-avatar-face-icon-flat-style_768258-3386.jpg?w=2000" alt="" />
        <div className='d-flex justify-content-center my-2 '>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>
          <i className='fa-solid fa-star text-warning'></i>

        </div>
       <p style={{textAlign:'justify'}}>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident id  magni expedita consectetur.
       </p>
      </Card.Text>
      
    </Card.Body>
  </Card>
      </div>
    </div>
    </>
  )
}

export default Home
