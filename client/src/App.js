import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import EditFavorite from "./components/EditFavorite";
import DisplayFavorite from "./components/DisplayFavorite";
import CreateFavorite from "./components/CreateFavorite";
import Home from "./components/Home";
import Search from "./components/Search";
import DisplaySearch from "./components/DisplaySearch";
import Login from "./components/Login";
import DisplayUsers from "./components/DisplayUsers";
import DisplayUser from "./components/DisplayUser";
import EditUser from "./components/EditUser";
import React, {useState} from "react";

function App() {

  return (
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="/"> URL Favorites </a>
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/"> Home </a>
              <a class="nav-item nav-link" href="/display"> Favorites </a>
              <a class="nav-item nav-link" href="/search"> Search </a>
              <a class="nav-item nav-link" href="/login">Login</a>
            </div>           
        </nav>
        
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CreateFavorite />} />
          <Route path="/edit/:id" element={<EditFavorite />} />
          <Route path="/display" element={<DisplayAll />} />
          <Route path="/favorites/:id" element={<DisplayFavorite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/displaysearch" element={<DisplaySearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/displayusers" element={<DisplayUsers />} />
          <Route path="/users/:id" element={<DisplayUser />} />
          <Route path="/edit/users/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;