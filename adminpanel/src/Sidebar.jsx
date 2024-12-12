import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { HiAcademicCap } from "react-icons/hi";
 import { HiCalendar } from "react-icons/hi";


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <HiAcademicCap className='icon_header'/> IT 2022-26
            </div>
            <span className='card_icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/analytics">
                    <BsMenuButtonWideFill className='icon'/> Analytics
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Schedule">
                    <HiCalendar className='icon'/> Schedule
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Resources">
                    <BsFillGrid3X3GapFill className='icon'/> Resources
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/Student">
                    <BsPeopleFill className='icon'/> student Info
                </a>
            </li>

            
            
        </ul>
    </aside>
  )
}

export default Sidebar