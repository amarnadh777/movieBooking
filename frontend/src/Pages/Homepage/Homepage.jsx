import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Navbar from "../../Components/Navbar/Navbar";
import Moviecard from "../../Components/Moviecard/Moviecard";
import { Link } from "react-router-dom";
import axios from "axios";
function Homepage() {
  const [movies, setMovies] = useState([]);
  const url = [
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAzMzguNEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00364249-khjjypdaat-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@like_202006280402.png,lx-24,ly-617,w-29,l-end:l-text,ie-NjRLIExpa2Vz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00352820-qzpmggkprk-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4zLzEwICAyMS4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00401441-jhkvdzzhks-portrait.jpg",
  ];
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
