import React, { Fragment }  from 'react';
import { Link } from "react-router-dom";


const MovieList = (props) => {
  return (
    // return movie list
      <Fragment>
        {props.movies.map((movie, index) => (
            <div className='image-container m-3'>
               <Link to="details"><img src={movie.Poster} alt ={movie.Title}></img></Link>
            </div>
          ))}
      </Fragment>

  );
};

export default MovieList;
