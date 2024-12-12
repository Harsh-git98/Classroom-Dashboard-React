//rfce
import React from 'react'

function Schedule() {
  return (
    <main className="main-container">
      <h1>TIME TABLE</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Day/Period</th>
            <th> 9:00-9:55</th>
            <th> 9:55-10:50</th>
            <th> 10:50-11:45</th>
            <th>11:45-12:40</th>
            <th> 12:40-1:50</th>
            <th> 13:50-14:45</th>
            <th> 14:45-15:40</th>
            <th> 15:40-16:35</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="highlight"><b>Monday</b></td>
            <td></td>
            <td colSpan="3">Algo LAB</td>
            
            
            <td rowSpan="6" className="special"><b>LUNCH</b></td>
            <td colSpan="2">OS</td>
          </tr>
          <tr>
            <td className="highlight"><b>Tuesday</b></td>
           
            
            <td colSpan="2">microprocessor</td>
            <td colSpan="2">OS</td>
            <td colSpan="3">DBMS LAB</td>
          </tr>
          <tr>
            <td className="highlight"><b>Wednesday</b></td>
            <td colSpan="2">ICT</td>
            <td colSpan="2">DBMS</td>
            <td colSpan="1">microprocessor</td>
            <td colSpan="2">ALGO</td>
          </tr>
          <tr>
            <td className="highlight"><b>Thursday</b></td>
            <td></td>
            <td colSpan="3">OS LAB</td>
            <td colSpan="2">Algorithm</td>
          </tr>
          <tr>
            <td className="highlight"><b>Friday</b></td>
            <td ></td>
            <td colSpan="3">MICRO LAB</td>
            <td colSpan="1">ICT</td>
            
           
            <td colSpan="2">DBMS</td>
          </tr>
          
        </tbody>
      </table>
    </main>
  )
}

export default Schedule
