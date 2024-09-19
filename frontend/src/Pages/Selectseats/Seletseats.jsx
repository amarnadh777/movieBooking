import React from 'react'
import "./Selectseats.css"
import Topbar from './Topbar/Topbar'
import { Link } from 'react-router-dom'
function Seletseats() {
  const seats = [[0,0,0,0,0,0],[1,4,5,6,],[1,4,5,6,],[1,4,5,6,],[1,4,5,6,],[1,4,5,6,2.4,5,6,4,5]  ]
  return (
    <div className='select-seats'>
      
   
<Topbar></Topbar>
      
        <div className="seats">
          {seats.map((each) =>
          {
            return(<div className='row' >

              {each.map((e,index) =>
              {
               return( <Link to="/bookingsummary"> <div className="seat">    {index}  </div> </Link>)
              })}
            </div>)
          })}
          {/* <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>


          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>


          </div>
          <div className="row">
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>
            <div className="seat"></div>


          </div> */}
        
        </div>
      </div>
  )
}

export default Seletseats