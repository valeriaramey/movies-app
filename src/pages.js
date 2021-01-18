import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import MovieList from './components/MovieList';
import MoviesHeading from './components/Header';
import SearchBar from './components/SearchBar';

export function Home() {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7e1bc4f7`;

    const response = await fetch(url); // request to API
    const responseJson = await response.json(); // converts to JSON

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

    return (
        <div className='container-fluid movie-app'>
          <div className='header'>
            <MoviesHeading heading="OOVIES" />
          </div>
          <div className="search-container">
            <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          </div>
          <div className='row'>
            <MovieList movies={movies}/>
         </div>
        </div>
    );
}

export function Details(movie) {
  return(
      <div>
          <h1>Details</h1>
          <div>
            {movie.Poster}
          </div>
          <Link to="home">Back Home</Link>
      </div>
  )
}

export function Signin() {
  return(
      <div className="login-container">
          <form>
              <div className="container">
                  <label for="uname"><b>Username</b></label>
                  <input type="text" placeholder="Enter Username" name="uname" required/>
                  <label for="psw"><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required/>
                  <button type="submit">Login</button>
              </div>
          </form>
      </div>
  )
}