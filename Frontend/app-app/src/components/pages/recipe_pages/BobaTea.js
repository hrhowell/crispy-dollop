import React from "react"
import Navbar from "../../Navbar";
import '../utilpages/UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function BobaTea (){
    return(
    <>
    <Navbar/>
    <img src="images/boba.jpg"/>
    <br/>
    <br/>
    <BobaIng/>
    <RecipeButton/>
    </>
    )
        

    
}export default BobaTea;
