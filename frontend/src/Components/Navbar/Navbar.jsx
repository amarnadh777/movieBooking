import React from 'react'
import "./Navbar.css"
import logo from "./bookmyshow-logo-vector.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (
        <div className='nav-bar'>
            <div className="nav-bar-first">
                <div className="nav-logo"> <img src={logo} alt="" />

                </div>
                <div className="nav-bar-search"><input type="text" placeholder='Search movies' /></div>
            </div>
            <div className="nav-bar-second">
                <h3>Location</h3>
                <button>Sign in</button>
                <div className='nav-bar-ham' ><FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon></div>
                

            </div>




        </div>
    )
}

export default Navbar