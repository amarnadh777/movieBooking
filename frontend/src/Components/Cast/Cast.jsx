import React from 'react'
import "./Cast.css"
import imagebaseurl from "../../Utils/Url"
import avatar from "./avatar.png"

function Cast({data}) {
  return (

    <div className="movie-cast">
      {data.map((profile) =>
      {
        return(
          <div className="movie-cast-card">
          <img src={profile.profile_path ? `${imagebaseurl}${profile.profile_path}` : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRDWan_m8H7fFEMEX7SUP2K75xUbw6xTE2g&s`  } />
          <h4>{profile.name}</h4>
          <h6> {profile.character}</h6>
        </div>

        )

      } )}
   
  
  </div>
  )
}

export default Cast