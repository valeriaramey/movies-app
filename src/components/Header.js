import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const MoviesHeading = (props) => {
  return (
    <nav className = "navbar relative mx-auto  py-4 px-4">
         <div className="container mx-auto">
              <h1 className="title text-3xl pb-4">{props.heading}</h1>
              <NavLink className="signIn-btn pb-4" to="/signin">Sign In</NavLink>
          </div>
    </nav>
  );
};

export default MoviesHeading;
