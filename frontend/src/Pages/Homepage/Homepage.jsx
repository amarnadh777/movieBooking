import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Moviecard from "../../Components/Moviecard/Moviecard";
import { Link } from "react-router-dom";
import axios from "axios";
function Homepage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
   
     
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGQ5NzNiZWZjYzEzOWNlOTcxMDUyNDllNzUyNGM2NiIsIm5iZiI6MTcyNTk4Njk1OC45NjQyNzgsInN1YiI6IjYyZThmZDlkZjFiNTcxMDA1ZTJiZTBhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fNEMy2S5TWm8tVEJmC4kq3PB5Dz-stfdsUtOuhJnAT4",
        },
      };
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        ,options);
        console.log(response.data.results);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="Home">
      <Navbar></Navbar>
      {console.log("array", movies)}
      <div className="movie-cards">
        {movies.map((each) => {
          return (
            <>
              <Moviecard
                movieid={each.id}
                url={`https://image.tmdb.org/t/p/w500/${each.poster_path}`}
              ></Moviecard>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
