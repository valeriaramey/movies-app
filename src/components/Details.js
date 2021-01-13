import React from "react";
import { BrowserRoute, Route, Switch } from "react-router-dom";

function Details({ match }) {
  const apiUrl = "https://www.omdbapi.com/?apikey=7e1bc4f7"
  const movieId = match.params.movieId;

  return (
    <div className="movie-details">
      <div className="movie-poster">
           <h1>Movie Details</h1>
      </div>
      <div className="movie-info">

      </div>
    </div>

    )

}

export default Details;
