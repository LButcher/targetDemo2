import logo from './logo.svg';
import React, { Component }  from 'react';
import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import Categories from './components/Categories.jsx';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route exact path="/Categories">
            <Categories></Categories>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

