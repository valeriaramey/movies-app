import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MoviesHeading from './components/Header';
import SearchBar from './components/SearchBar';
import Favorites from "./components/Favorites";
import Details from "./components/Details";
import Login from './components/Login/Login';
import { BrowserRouter, Route, Switch } from "react-router-dom";


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

    // const[token, setToken] = useState();
    // // display Log In if the token is falsy
    // if(!token) {
    //   return <Login setToken={setToken} />
    // }
    return (
        <div className='container-fluid movie-app'>
        <BrowserRouter>
          <div className='header'>
            <MoviesHeading />
          </div>
          <div classname="search-container">
            <SearchBar searchValue = {searchValue} setSearchValue={setSearchValue}/>
           </div>
            <Switch>
              <Route path="/favorites" component={Favorites} />
               <div className='row'>
                 <MovieList movies={movies} />
               </div>
               <Route path="/details/:movieId" component={Details} />
            </Switch>
          </BrowserRouter>
        </div>

    );
};

export default App;
