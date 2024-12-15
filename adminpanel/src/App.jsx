import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import {
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
import Schedule from './Schedule'
import Resource from './Resource';
import Studinfo from './Studinfo'
import Analytics from './Analytics'
import { HiLogin } from 'react-icons/hi'
import Login from './Login.jsx'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  

  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>} ></Route>



      <Route path="/Schedule" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Schedule/>
    </div>} ></Route>
    <Route path="/analytics" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Analytics/>
    </div>} ></Route>

    <Route path="/Resources" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Resource/>
    </div>} ></Route>

    <Route path="/Student" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Studinfo/>
    </div>} ></Route>
    
    <Route path="/admin" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Login/>
  
    </div>} ></Route>

    <Route path='/*' element={<div><hr></hr><h1>Error:404</h1> Page not Found!!<hr></hr></div>}></Route>



    </Routes>
  </BrowserRouter>

    
  )
}

export default App