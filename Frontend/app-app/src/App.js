import logo from './logo.svg';
import './App.css';
import Test from './components/Test';
import axios from "axios";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, {useState, useEffect}from "react"
import { UserProfiles } from './components/pages/UserProfiles';
import {Navbar} from './components/Navbar';
import Home  from './components/pages/Home';
import Login from './components/pages/Login';
import UpdateProfile from './components/pages/UpdateProfile';
import Desserts from './components/pages/Desserts';
import Snacks from './components/pages/Snacks';
import Breakfast from './components/pages/Breakfast';
import Lunch from './components/pages/Lunch';
import Dinner from './components/pages/Dinner'
import Logout from './components/pages/Logout';
import Recipes from './components/pages/Recipes';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    
    <>
    <Router>
    
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="users" element ={<UserProfiles/>}/>
        {/* THESE NEED TO BE DEFINED WITH API CALLS AND LOGIC */}
        {/* <Route path ="/profile/{id]" element={<Profile/>}/> */}
        <Route path ="/login" element={<Login/>}/>
        <Route path ="/recipes" element={<Recipes/>}/>
        <Route path ="/update" element={<UpdateProfile/>}/>
        <Route path ="/dessert" element={<Desserts/>}/>
        <Route path ="/snacks" element={<Snacks/>}/>
        <Route path ="/breakfast" element={<Breakfast/>}/>
        <Route path ="/lunch" element={<Lunch/>}/>
        <Route path ="/dinner" element={<Dinner/>}/>
        <Route path ="/sign-up" element={<SignUp/>}/>

      </Routes>
    </Router>
    </>
   
  );
}

export default App;
