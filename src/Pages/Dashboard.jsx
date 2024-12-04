import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Profile from '../component/Profile'
import View from '../component/View'

const Dashboard = () => {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user" )){
setUsername(      JSON.parse(sessionStorage.getItem("user")).username.split(" ")[0])   
 }
  })
  return (
    <>
     <Header insideDashboard={true}/>
     <div className="container-fluide py-5">
      <div className="row">
        <div className="col-lg-6">
          <h1>Welcome <span className="text-warning">{username}</span></h1>
          <View/>

        </div>
        <div className="col-lg-6">
          <Profile/>
        </div>
      </div>
     </div>
    </>
  )
}

export default Dashboard
