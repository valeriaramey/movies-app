import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MoviesHeading from './components/heading';
import SearchBar from './components/SearchBar';

const App = () => {
    const [movies, setMovies] = useState([]);
    const[searchValue, setSearchValue] = useState('');

    const getMovies = async(earchValue) => {
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
          <div className='row d-flex align-items-center mt-4 mb-4'>
            <MoviesHeading heading="Movies"/>
            <SearchBar searchValue = {searchValue} setSearchValue={setSearchValue}/>
          </div>
          <div className='row'>
            <MovieList movies={movies} />
          </div>
        </div>

    );
};

export default App;
