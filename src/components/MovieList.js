import React, { Fragment }  from 'react';
import { Link } from "react-router-dom";


const MovieList = (props) => {
  return (
    // return movie list
      <Fragment>
        {props.movies.map((movie, index) => (
            <div className='image-container m-3' key={movie.imdbID}>
              <img src={movie.Poster} alt ={movie.Title}></img>
              <Link className="btn btn-primary" to={`/details/${movie.imdbID}`}>
                Movie Details
              </Link>
            </div>
          ))}
      </Fragment>

    );
};

export default MovieList;
