import React from "react"
import Navbar from "../../Navbar";
import '../../UserProfiles.css';
import { HamburgerIng } from '../RecApiCalls/HamburgerApi';
import { RecipeButton } from "../../RecipeButton";

function Hamburger (){
    return(
    <>
    <Navbar/>
    <img src="images/hamburger.jpg"/>
    <HamburgerIng/>
    <RecipeButton/>
    </>
    )
        

    
}
export default Hamburger;
