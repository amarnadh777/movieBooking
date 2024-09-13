import React from 'react'
import "./Bookticket.css"
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
function Bookticket() {
  return (
   <div className='Book-tickets'>
    <Navbar></Navbar>
    <div className="book-ticket-frist-row">
        <div className="bookticket-moviename">
        A.R.M (3D) - Malayalam
        </div>
    </div>
    <div className="book-ticket-second-row"></div>
    <div className="book-ticket-third-row">
        <div className="theater-card">
            <div className="theater-info">
                <div className="theater-name">
                    Pan cinemas - alappuzha
                </div>
                <div className="theater-screens">
                    <Link to="/selectseat">
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                    </Link>
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>  <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                </div>
            </div>

            
        </div>
        <div className="theater-card">
            <div className="theater-info">
                <div className="theater-name">
                    Pan cinemas - alappuzha
                </div>
                <div className="theater-screens">
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>  <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                </div>
            </div>

            
        </div>
        <div className="theater-card">
            <div className="theater-info">
                <div className="theater-name">
                    Pan cinemas - alappuzha
                </div>
                <div className="theater-screens">
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>  <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                </div>
            </div>

            
        </div>
        
        <div className="theater-card">
            <div className="theater-info">
                <div className="theater-name">
                    Pan cinemas - alappuzha
                </div>
                <div className="theater-screens">
            
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                 
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>  <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                </div>
            </div>

            
        </div> <div className="theater-card">
            <div className="theater-info">
                <div className="theater-name">
                    Pan cinemas - alappuzha
                </div>
                <div className="theater-screens">
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                    <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>  <div className="theater-screen">
                        <div className="screentime">07:00 PM</div>
                        <div className="screentype">4K DOLBY ATMOS</div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>

   </div>
  )
}

export default Bookticket