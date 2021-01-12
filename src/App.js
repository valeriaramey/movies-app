import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MoviesHeading from './components/Header';
import SearchBar from './components/SearchBar';
import Favorites from "./components/Favorites";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    const [movies, setMovies] = useState([]);
    const[searchValue, setSearchValue] = useState('');

    const getMovies = async(searchValue) => {
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
        <Router>
          <div className='header'>
            <MoviesHeading />
            <SearchBar searchValue = {searchValue} setSearchValue={setSearchValue}/>
          </div>
          <div className='row'>
            <MovieList movies={movies} />
          </div>
          </Router>
        </div>

    );
};

export default App;
