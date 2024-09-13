import React from 'react'
import "./Reviewcard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
function Reviewcard({data}) {
  return (
    <div className='review-card'>
      <div className="review-card-top">
        <div className="review-userinfo">
            <img src="https://in.bmscdn.com/in/synopsis-new/noimguser.jpg" alt="" />
              <h4>{data.author}</h4>
              <div className="review-movie-rating"> <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>  34/10</div>
           

        </div>
        <div className="movie-review">
       {data.content}
        </div>
        <div className="review-last-row">
            <div className="review-likes"><FontAwesomeIcon  className='thumbsup' icon={faThumbsUp}></FontAwesomeIcon> 564  </div> 

             <div className="review-date">{data.updated_at}</div>
        </div>
      </div>

    </div>
  )
}

export default Reviewcard