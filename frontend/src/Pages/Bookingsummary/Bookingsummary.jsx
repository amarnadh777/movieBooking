import React from 'react'
import "./Bookingsummary.css"

function Bookingsummary() {
  return (
    <div className='book-summary-card'>
        
        <h4>Booking summary</h4>
        <div className="book-summary-theaterinfo"></div>        
          <div className="bs-theaterinfo">
        <div className="ti-row">    <h4>CASINO - B4-B5 (2tikcet)  </h4>   <h5>Rs 2000</h5>  </div>
        <div className="ti-row">screnn 5</div>
        <div className="ti-row"><h4>Convinience fee</h4> <h5>Rs 9000</h5> </div>
        <div className="underline"></div>
        <div className="ti-row"><h4>Sub total</h4> <h5>Rs 9000</h5> </div>

           <button className='ti-book'>Total book Rs 900</button>
          </div>
        </div>
  )
}

export default Bookingsummary