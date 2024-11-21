import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100'>
      <div className="d-flex justify-content-between">
        {/* intro */}
        <div style={{width:'400px'}}>
          <h5><i className="fa-brands fa-docker me-2"></i>Project Fair</h5>
          <p>Designed and build with all the love in the world by the riya with the help of our contributors</p>
          <p>Code licensed MIT, docs CC BY 3.0.   </p>
            <p>Currently v5.3.3.0</p>
       
        </div>

        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home</Link>
          <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Login</Link>
         <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>Register</Link>

        </div>
       {/* guides */}
       <div className='d-flex flex-column'>
          <h5>Guides</h5>
        <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'  }}>React</a>
        <a href="https://www.npmjs.com/package/react-router" target='_blank'  style={{textDecoration:'none',color:'white'  }}>React Router</a>

        <a href="https://react-bootstrap.github.io/"  target='_blank' style={{textDecoration:'none',color:'white'  }}>React Bootstrap</a>


        </div>

        {/* contact */}
        <div className="d-flex flex-column">
          <h5>Contact</h5>
          <div className="d-flex">
            <input placeholder='enter your email here' type="text" className="form-control me-2" />
            <button className="btn btn-warning"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <a href="" target='_blank' style={{textDecoration:'none' ,color:'white'}}><i className="fa-brands fa-facebook"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none' ,color:'white'}}><i className="fa-brands fa-instagram"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none' ,color:'white'}}><i className="fa-brands fa-twitter"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none' ,color:'white'}}><i className="fa-brands fa-github   "></i></a>
            <a href="" target='_blank' style={{textDecoration:'none' ,color:'white'}}><i className="fa-brands fa-linkedin"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none' ,color:'white'}}><i className="fa-brands fa-phone"></i></a>



          </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright &copy; July 2024 Batch, Project Fair App,Bulid with React</p>
      
    </div>
  )
}

export default Footer
