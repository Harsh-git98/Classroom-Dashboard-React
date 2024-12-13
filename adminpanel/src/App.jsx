import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'
import Home from './Home.jsx'
import {
  BrowserRouter,
  Routes,
  Route,Navigate
 } from "react-router-dom";
import Schedule from './Schedule.jsx'
import Resource from './Resource.jsx';
import Studinfo from './Studinfo.jsx'
import Analytics from './Analytics.jsx'
const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

const OpenSidebar = () => {
  setOpenSidebarToggle(!openSidebarToggle)
}

function App() {
 

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


    <Route path='/*' element={<div><hr></hr><h1>Error:404</h1> Page not Found!!<hr></hr></div>}></Route>



    </Routes>
  </BrowserRouter>
  </div>
    
  )
}

export default App