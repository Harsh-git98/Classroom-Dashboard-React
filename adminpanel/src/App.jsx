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


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>} />



      <Route path="/Schedule" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Schedule/>
    </div>} />
    <Route path="/analytics" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Analytics/>
    </div>} />

    <Route path="/Resources" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Resource/>
    </div>} />

    <Route path="/Student" element={<div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Studinfo/>
    </div>} />


    </Routes>
  </BrowserRouter>
  </div>
    
  )
}

export default App