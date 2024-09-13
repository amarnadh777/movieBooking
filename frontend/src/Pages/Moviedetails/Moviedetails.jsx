import React, { useEffect, useState } from 'react'
import "./Moviedetails.css"
import Navbar from '../../Components/Navbar/Navbar'
import cover from "./cover.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Cast from '../../Components/Cast/Cast'
import Crew from '../../Components/Crew/Crew'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Reviewcard from '../../Components/Reviewcard/Reviewcard'

function Moviedetails() {

  const params = useParams()
  const [movie, setmovie] = useState({})
  const [cast,setcast] = useState([])
  const [reviews,setreviews] = useState([])
  const [loading,setloading] = useState(false)



  useEffect(() => {

    const fetchMovies = async () => {
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${params.movieid}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ5NzNiZWZjYzEzOWNlOTcxMDUyNDllNzUyNGM2NiIsIm5iZiI6MTcyNTk4Njk1OC45NjQyNzgsInN1YiI6IjYyZThmZDlkZjFiNTcxMDA1ZTJiZTBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fNEMy2S5TWm8tVEJmC4kq3PB5Dz-stfdsUtOuhJnAT4'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setmovie(response.data)
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    const getcast = async() =>
    {
      
      const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/${params.movieid}/credits`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ5NzNiZWZjYzEzOWNlOTcxMDUyNDllNzUyNGM2NiIsIm5iZiI6MTcyNTk4Njk1OC45NjQyNzgsInN1YiI6IjYyZThmZDlkZjFiNTcxMDA1ZTJiZTBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fNEMy2S5TWm8tVEJmC4kq3PB5Dz-stfdsUtOuhJnAT4'
        }
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data.cast);
          setcast(response.data.cast)
   
   
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    const getReview = async() =>
    {
      setloading(true)
      try {
        const options = {
 headers: {
   accept: 'application/json'
   ,Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ5NzNiZWZjYzEzOWNlOTcxMDUyNDllNzUyNGM2NiIsIm5iZiI6MTcyNTk4Njk1OC45NjQyNzgsInN1YiI6IjYyZThmZDlkZjFiNTcxMDA1ZTJiZTBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fNEMy2S5TWm8tVEJmC4kq3PB5Dz-stfdsUtOuhJnAT4"
   }  
  }
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieid}/reviews`,options)
   
         setreviews(response.data.results)
        setloading(false)
        
      } catch (error) {
        console.log(error)

      }
    }
    fetchMovies()
    getcast()
    getReview()
  }, []);
  { console.log('moves', movie) }
  return (
    <div>
      <Navbar></Navbar>
      <div className="moviedetails-first">
        <div className="moviedetails-cover" style={{backgroundImage:  `url("https://image.tmdb.org/t/p/w500/${movie.backdrop_path}")`}}>
          {/* <img src="https://www.content.numetro.co.za/image_resized_files/6632-2-2-10-1723533842.jpg" alt="" /> */}

          <div className="moviedetails-movie-info">

            <div className="moviedetails-poster">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" /></div>
            <div className="movie-info-right">
              <div className="movieinfo-moviename">{movie.
                original_title
              }</div>
              <div className="movieinfo-rating"><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> {movie.vote_average}  /10   
                   {` (${movie.vote_count}) votes`}</div>
              <div className="movie-language"> <div className="d">2D</div>  <div className="language">Hindi </div></div>
              <div className="m-info"> 2h 29m . Comdey/Horror . UA . 15 Aug 2024   </div>
              <div className="moviedetails-book"><button> <Link to="/bookticket/343">    Book tickets </Link>  </button></div>

            </div>


          </div>
        </div>

        <div className="movie-about">

          <h4>About this movie</h4>
          <p>{movie.overview}</p>
        </div>

      </div>
      <h3>Cast</h3>
      <Cast data={cast}></Cast>

      <h3>Crew</h3>
      <Crew></Crew>
         <h3>Top reviews</h3>
         <div className="}">
          {reviews.map((review) =>
          {
            return(<Reviewcard data={review}></Reviewcard> )
          })}
         </div>
      {console.log("reviews",reviews)}
    {/* {  !loading && <Reviewcard data={reviews}></Reviewcard>} */}
    </div>
  )
}

export default Moviedetails