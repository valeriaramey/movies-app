import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home, Details, Signin } from "./pages";


const App = () => {

  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details' element={<Details />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
    </div>
  );
};

export default App;
