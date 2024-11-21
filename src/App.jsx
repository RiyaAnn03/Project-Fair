
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import Pnf from './Pages/Pnf'
import Footer from './component/Footer'
function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth insideRegister={true}/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/*' element={<Pnf/>}/>
 </Routes>
 <Footer/>
    </>
  )
}

export default App
