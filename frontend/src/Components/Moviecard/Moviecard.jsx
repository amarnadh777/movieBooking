import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Moviecard.css'
import { Link } from 'react-router-dom'
function Moviecard({url,movieid}) {
     return (
  
         
         
         
         <div className='movie-card' key={movieid}>
         <Link className='link' to={`/moviedetails/${movieid}`}>
        

        <div className="movie-poster"><img src={url} alt="" /></div>
        <div className='movie-rating'> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>  8.9/12  </div>
        <div className="movie-name">Avengers</div>
       <div className="movie-genre">Comdey/Horror</div> 
    </Link>   
    </div>      
    
    
 
  )
}

export default Moviecard