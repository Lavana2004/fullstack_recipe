import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AddRecipe from "./components/AddRecipe";
import Saved from './components/Saved'
import Home from './components/Home'
import Profile from './components/Profile'
import FetchRecipeById from "./components/FetchRecipeById";
import Detail from "./components/Detail";

const App = () => {
  const handleSearchRedirect = () => {
    window.location.href = " http://192.168.150.1:3001";
  };

  return (
    <>
      <Router>
        <Navbar />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button onClick={handleSearchRedirect} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Search for Recipe
          </button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

