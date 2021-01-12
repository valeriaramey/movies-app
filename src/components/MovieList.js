import React from 'react';

const MovieList = (props) => {
  return (
    // return movie list
      <>
        {props.movies.map((movie, index) => (
            <div className='image-container'>
              <img src={movie.Poster} alt = 'movie'></img>
            </div>
          ))}
      </>

    );
};

export default MovieList;
