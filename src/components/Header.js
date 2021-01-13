import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const MoviesHeading = (props) => {
  return (
    <nav className = "navbar relative mx-auto  py-4 px-4">
         <div class="container mx-auto">
              <h1 class="title text-3xl pb-4"> OOVIES</h1>
              <NavLink className="signIn-btn pb-4" to="/">Sign In</NavLink>
          </div>
    </nav>
    );
};

export default MoviesHeading;
