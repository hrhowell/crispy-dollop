import React from "react"
import Navbar from "../../Navbar";
import '../UtilPages/Profile/UserProfiles.css';
import {BobaIng}from '../RecApiCalls/BobaApi';
import { RecipeButton } from "../../buttons/RecipeButton";

function BobaTea (){
    return(
    <>
    <Navbar/>
    <img src="images/boba.jpg"/>
    <BobaIng/>
    <RecipeButton/>
    </>
    )
        

    
}export default BobaTea;
